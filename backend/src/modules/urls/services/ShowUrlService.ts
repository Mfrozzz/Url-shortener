import Url from "../Url";

interface IRequest{
    id:string;
}

export default class ShowUrlService {
    public async execute({id}:IRequest):Promise<Url>{
        return;
    }
}