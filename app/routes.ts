import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("faq", "routes/faq.tsx"),

  route("technology", "routes/technology.tsx"),

  route("pricing", "routes/pricing.tsx"),
  route("about", "routes/about.tsx"),
  route("how-it-works", "routes/how-it-works.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;