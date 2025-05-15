const DeleteShortUrlService = async(id: string)=>{
    const base_url = new URL(`HTTP://localhost:3333/api/url/shorten/${id}`);
}

export default DeleteShortUrlService;