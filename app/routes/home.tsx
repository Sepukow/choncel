import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bartłomiej Choncel" },
    { name: "description", content: "Welcome to my website!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Hey, I'm Bartek</h1>
    </div>
  );
}