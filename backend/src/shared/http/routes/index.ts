import { Router } from "express";
import urlRoutes from "../../../modules/urls/routes/url.routes";

const routes = Router();

routes.use("/api/url", urlRoutes);

export default routes;