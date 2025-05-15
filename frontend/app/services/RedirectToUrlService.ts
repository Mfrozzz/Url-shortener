const RedirectToUrlService = async(shortUrl: string)=>{
    const base_url = new URL(`HTTP://localhost:3333/api/url/u/${shortUrl}`);
}

export default RedirectToUrlService;