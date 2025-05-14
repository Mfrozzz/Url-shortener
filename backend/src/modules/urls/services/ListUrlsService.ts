import UrlSchema from "../model/UrlSchema";

export default class ListUrlsService {
    public async execute(){
        const urls = await UrlSchema.find();
        return urls;
    }
}