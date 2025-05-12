import UrlSchema from "../model/UrlSchema";

interface IRequest{
    shortUrl: string;
}

export default class RedirectUrlService{
    public async execute({shortUrl}:IRequest){
        const url = await UrlSchema.findOne({
            shortUrl: shortUrl
        });

        if(!url){
            throw new Error("URL not found");
        }

        return url.originalUrl;
    }
}