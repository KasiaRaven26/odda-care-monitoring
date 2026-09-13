import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("faq", "routes/faq.tsx"),
  route("technology", "routes/technology.tsx"),
] satisfies RouteConfig;