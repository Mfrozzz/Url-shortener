import { Router } from "express";
import UrlController from "../controllers/UrlController";
import ValidateRequest from "../../../shared/http/middlewares/validateRequest";
import { createUrlSchema, deleteUrlSchema, redirectUrlSchema, showUrlSchema } from "../validations/urlValidation";

const urlRoutes = Router();
const urlController = new UrlController();
const validateRequest = new ValidateRequest();

urlRoutes.get("/shorten/urls/index", urlController.list);
urlRoutes.post("/shorten", validateRequest.validate(createUrlSchema), urlController.create);
urlRoutes.get("/shorten/:id", validateRequest.validate(showUrlSchema), urlController.show);
urlRoutes.delete("/shorten/:id", validateRequest.validate(deleteUrlSchema), urlController.delete);

urlRoutes.get("/u/:shortUrl", validateRequest.validate(redirectUrlSchema), urlController.redirect);

export default urlRoutes;