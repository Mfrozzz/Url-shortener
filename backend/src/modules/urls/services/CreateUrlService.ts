import { nanoid } from "nanoid";
import UrlSchema from "../model/UrlSchema"
interface IRequest {
    originalUrl: string;
}

export default class CreateUrlService {
    public async execute({originalUrl}:IRequest){
        const shortUrl = nanoid(7);
        const newUrl = await UrlSchema.create({
            originalUrl,
            shortUrl
        });
        return newUrl;
    }
}