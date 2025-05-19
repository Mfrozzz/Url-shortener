import { useEffect, useState } from "react";
import DeleteShortUrlService from "~/services/DeleteShortUrlService";
import ListShortUrlsService from "~/services/ListShortUrlsService";
import styles from "./urlList.module.css";

type Url = {
    _id: string;
    originalUrl: string;
    shortUrl: string;
};

export default function UrlList() {
    const [urls, setUrls] = useState<Url[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUrls = async () => {
            try {
                const data = await ListShortUrlsService();
                setUrls(data);
            } catch (err: any) {
                setError("Error during listing URLs");
            } finally {
                setLoading(false);
            }
        };
        fetchUrls();
    }, []);

    const handleShow = (url: Url) => {
        window.open(url.originalUrl, "_blank");
    };

    const handleDelete = async (id: string) => {
        confirm(`Deletar URL com id: ${id}`);
        await DeleteShortUrlService(id);
        setUrls(urls.filter(u => u._id !== id));
    };

    if (loading)
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                    <p>Shorting your URL...</p>
            </div>
        );
    if (error)
        return <div className="text-center text-red-600 py-8">{error}</div>;

    if (!urls.length)
        return (
            <div className="text-center text-gray-500 py-12">
                No URLs.<br />
                <span className="text-3xl mt-2 inline-block">🔗</span>
            </div>
        );

    return (
        <div className="overflow-x-auto rounded-md h-screen">
            <table className="min-w-full bg-white rounded-md shadow-lg border border-gray-200 h-40">
                <thead>
                    <tr className="bg-blue-100">
                        <th className="px-4 py-3 text-left font-semibold text-blue-900">Original URL</th>
                        <th className="px-4 py-3 text-left font-semibold text-blue-900">Short URL</th>
                        <th className="px-4 py-3 text-center font-semibold text-blue-900">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {urls.map((url, idx) => (
                        <tr
                            key={url._id}
                            className={`border-t ${idx % 2 === 0 ? "bg-white" : "bg-blue-50"} transition hover:bg-blue-50`}
                        >
                            <td className="px-4 py-3 break-all max-w-xs">{url.originalUrl}</td>
                            <td className="px-4 py-3">
                                <a
                                    href={`http://localhost:3333/api/url/u/${url.shortUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline break-all"
                                >
                                    http://localhost:3333/api/url/u/{url.shortUrl}
                                </a>
                            </td>
                            <td className="px-4 py-3 text-center space-x-2">
                                <button
                                    onClick={() => handleShow(url)}
                                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition"
                                    title="Abrir original"
                                >
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
                                    </svg>
                                    Show
                                </button>
                                <button
                                    onClick={() => handleDelete(url._id)}
                                    className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                                    title="Delete"
                                >
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}