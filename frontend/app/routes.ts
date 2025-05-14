import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/home", "pages/Home/homePage.tsx")
] satisfies RouteConfig;