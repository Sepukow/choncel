export function meta({ }: any) {
    return [
      { title: "Bartłomiej Choncel - media" },
      { name: "description", content: "Welcome to my website!" },
    ];
  }
  
  export default function Books() {
    return (
      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8">
        Media
      </p>
    );
  }
  