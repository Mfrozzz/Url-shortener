import { Router } from "express";
import UrlController from "../controllers/UrlController";

const urlRoutes = Router();
const urlController = new UrlController();

urlRoutes.post("/shoten",urlController.create);
urlRoutes.get("/shorten/:id",urlController.show);
urlRoutes.delete("/shorten/:id",urlController.delete);

export default urlRoutes;