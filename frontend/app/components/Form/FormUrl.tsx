import { useState } from "react";
import styles from "./formUrl.module.css";
import CreateShortUrlService from "~/services/CreateShortUrlService";
import { useForm } from "react-hook-form";

type FormData = {
    url: string;
};

export default function FormUrl() {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setError("");
        setShortUrl("");
        setLoading(true);

        try {
            const result = await CreateShortUrlService(data.url);
            setShortUrl(`http://localhost:3333/api/url/u/${result.shortUrl}`);
            reset();
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white/80 rounded-xl shadow-lg p-8 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Make your URL shortener.</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="originalUrl" className="block text-sm font-semibold text-gray-700 mb-2">
                        Put your long link here
                    </label>
                    <input
                        id="url"
                        type="url"
                        {...register("url", {
                            required: "This field is required.",
                            minLength: {
                                value: 10,
                                message: "URL is too short."
                            },
                            maxLength: {
                                value: 2048,
                                message: "URL is too long."
                            }
                        })}
                        placeholder="https://example.com/your-link"
                        className="block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    />
                    {errors.url && (
                        <span className="text-red-600 text-sm">{errors.url.message}</span>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="cursor-pointer w-full rounded-md bg-blue-600 px-4 py-2.5 text-center text-base font-semibold text-white shadow hover:bg-blue-700 transition disabled:opacity-60"
                >
                    {loading ? (
                        <div className={styles.loadingContainer}>
                            <div className={styles.spinner}></div>
                            <p>Shorting your URL...</p>
                        </div>
                    ) : ("Short your URL")}
                </button>
                {error && <p className="text-red-600 text-center">{error}</p>}
                {shortUrl && (
                    <div className="mt-4 text-center">
                        <span className="text-gray-700">Your short URL:</span>
                        <a
                            href={shortUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-blue-600 font-semibold mt-1 hover:underline break-all"
                        >
                            {shortUrl}
                        </a>
                    </div>
                )}
            </form>
        </div>
    );
}