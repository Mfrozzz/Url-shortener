import axios from "axios";

const DeleteShortUrlService = async(id: string)=>{
    const base_url = `http://localhost:3333/api/url/shorten/${id}`;
    try {
        await axios.delete(base_url);
    } catch (error: any) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.error || "Error during deleting URLs");
        }
        throw new Error("Server connection error");
    }
}

export default DeleteShortUrlService;