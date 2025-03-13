export function meta({ }: any) {
    return [
      { title: "Bartłomiej Choncel - media" },
      { name: "description", content: "Welcome to my website!" },
    ];
  }
  
  export default function Media() {
    return (
      <p className="text-base sm:text-basic md:text-baisc leading-relaxed mb-8">
        Media
      </p>
    );
  }
  