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
  route("insights", "routes/insights.tsx"),
  route("contact", "routes/contact.tsx"),
  route("book-assessment", "routes/book-assessment.tsx"),
  route("terms", "routes/terms.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("cookies", "routes/cookies.tsx"),
] satisfies RouteConfig;
