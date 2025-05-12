import { Router } from "express";
import UrlController from "../controllers/UrlController";

const urlRoutes = Router();
const urlController = new UrlController();

urlRoutes.post("/shorten",urlController.create);
urlRoutes.get("/shorten/:id",urlController.show);
urlRoutes.delete("/shorten/:id",urlController.delete);
urlRoutes.get("/:shortUrl",urlController.redirect);

export default urlRoutes;