import { Request, Response } from "express";
import CreateUrlService from "../services/CreateUrlService";
import ShowUrlService from "../services/ShowUrlService";
import DeleteUrlService from "../services/DeleteUrlService";
import RedirectUrlService from "../services/RedirectUrlService";
import UrlSchema from "../model/UrlSchema";

export default class UrlController {
    public async create(req: Request, res: Response) {
        const { originalUrl } = req.body;

        if (!originalUrl) {
            return res.status(400).json({ error: "Original URL is required" });
        }

        try {
            const urlService = new CreateUrlService();
            const newUrl = await urlService.execute({ originalUrl });

            return res.status(201).json(newUrl) as any;
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Something went wrong" });
        }
    }

    public async show(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const findUlr = await UrlSchema.findById(id);

            if (!findUlr) {
                return res.status(404).json({ error: "URL not found" });
            }

            const urlService = new ShowUrlService();
            const url = await urlService.execute({ id });

            if (!url) {
                return res.status(404).json({ error: "URL not found" });
            }

            return res.status(200).json(url) as any;
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Something went wrong" });
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        try{
            const urlService = new DeleteUrlService();
            const url = await UrlSchema.findById(id);

            if (!url) {
                return res.status(404).json({ error: "URL not found" });
            }
            
            await urlService.execute({ id });
            
            return res.status(204).json([]) as any;
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Something went wrong" });
        }
    }

    public async redirect(req: Request, res: Response){
        const { shortUrl } = req.params;

        try{
            const redirectUrlService = new RedirectUrlService();
            const url = await UrlSchema.findOne({ shortUrl });

            if (!url) {
                return res.status(404).json({ error: "URL not found" });
            }

            const originalUrl = await redirectUrlService.execute({ shortUrl }) as any;

            return res.redirect(originalUrl) as any;
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Something went wrong" });
        }
    }
}