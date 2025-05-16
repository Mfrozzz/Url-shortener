import axios from "axios";

const CreateShortUrlService = async (originalUrl: string) => {
    const base_url = `http://localhost:3333/api/url/shorten`;
    try {
        const response = await axios.post(base_url, { originalUrl });
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.error || "Error during short URL");
        }
        throw new Error("Server connection error");
    }
};

export default CreateShortUrlService;