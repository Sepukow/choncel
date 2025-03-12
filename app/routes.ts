import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/mainPage.tsx"),
  route("books", "routes/books.tsx"),
] satisfies RouteConfig;