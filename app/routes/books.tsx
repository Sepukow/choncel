export function meta({ }: any) {
  return [
    { title: "Bartłomiej Choncel - books" },
    { name: "description", content: "Welcome to my website!" },
  ];
}

export default function Books() {
  return (
    <div className="text-base sm:text-lg md:text-sm leading-relaxed mb-8">
      Reading is one of the most important skills. Naturally, you can spend a lifetime reading and you won’t remember everything. What will change in the process is the way you think. Your way of thinking will affect everyone you meet in life.
    </div>
  );
}
