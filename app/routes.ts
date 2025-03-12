import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("books", "routes/books.tsx"),
  route("media", "routes/media.tsx"),
  route("principles", "routes/principles.tsx"),
  route("projects", "routes/projects.tsx"),
] satisfies RouteConfig;