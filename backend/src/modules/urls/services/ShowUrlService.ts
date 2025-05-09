import UrlSchema from "../model/UrlSchema";

interface IRequest{
    id:string;
}

export default class ShowUrlService {
    public async execute({id}:IRequest){
        const url = await UrlSchema.findById(id);
        if (!url) {
            throw new Error("URL not found");
        }
        return url;
    }
}