import UrlSchema from "../model/UrlSchema";

interface IRequest{
    id:string;
}

export default class DeleteUrlService {
    public async execute({id}:IRequest){
        const url = await UrlSchema.findByIdAndDelete(id);
        if (!url) {
            throw new Error("URL not found");
        }
        return url;
    }
}