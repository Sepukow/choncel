import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Strona główna
  route("books", "routes/books.tsx"), // Nowa trasa dla strony books
] satisfies RouteConfig;