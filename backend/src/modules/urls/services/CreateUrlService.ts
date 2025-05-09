import Url from "../Url";

interface IRequest {
    originalUrl: string;
}

export default class CreateUrlService {
    public async execute({originalUrl}:IRequest):Promise<Url>{
        return;
    }
}