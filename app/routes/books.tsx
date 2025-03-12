import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bartłomiej Choncel - books" },
    { name: "description", content: "Welcome to my website!" },
  ];
}

export default function Books() {
  return (
    <div>
      <h1>Books</h1>
    </div>
  );
}