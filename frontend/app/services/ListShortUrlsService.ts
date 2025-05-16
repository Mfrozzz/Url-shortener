import axios from "axios";

const ListShortUrlsService = async()=>{
    const base_url = `http://localhost:3333/api/url/shorten/urls/index`;

    try {
        const response = await axios.get(base_url);
        if (Array.isArray(response.data)) {
            return response.data;
        }
        if (Array.isArray(response.data.urls)) {
            return response.data.urls;
        }
        return [];
    } catch (error: any) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.error || "Error during listing URLs");
        }
        throw new Error("Server connection error");
    }
}

export default ListShortUrlsService;