import { Request, Response } from "express";
import CreateUrlService from "../services/CreateUrlService";
import ShowUrlService from "../services/ShowUrlService";
import DeleteUrlService from "../services/DeleteUrlService";

export default class UrlController {
    public async create(req: Request, res: Response) {
        const { originalUrl } = req.body;
        const urlService = new CreateUrlService();
        const newUrl = await urlService.execute({ originalUrl });

        return res.status(201).json(newUrl) as any;
    }

    public async show(req: Request, res: Response) {
        const { id } = req.params;
        const urlService = new ShowUrlService();
        const url = await urlService.execute({ id });

        if (!url) {
            return res.status(404).json({ error: "URL not found" });
        }

        return res.status(200).json(url) as any;
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        const urlService = new DeleteUrlService();
        await urlService.execute({ id });
        
        return res.status(204).json([]) as any;
    }
}