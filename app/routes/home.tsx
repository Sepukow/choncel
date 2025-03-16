export function meta({ }: any) {
  return [
    { title: "Bartłomiej Choncel" },
    { name: "description", content: "Welcome to my website!" },
  ];
}

export default function Home() {
  return (
    <div className="text-sm sm:text-sm md:text-sm mr-5">
      <p>
        I’ve been exploring the internet since 2008 — reading, listening, thinking, building, and creating all sorts of things.
      </p>
      <p className="mt-4">
        Right now, I’m working on my résumé and a personal project I call Exegi monumentum, where I’m trying to leave my digital mark on the world.
        You’re actually looking at a part of it right now!
      </p>
      <p className="mt-0">
        Here’s a little sneak peek: 
        I’m also dreaming up a future project - a construct rooted in machine learning, a testament to my evolving ideas and aspirations.
      </p>
      <p className="mt-4">
        During the day, I work as an IT Solution Expert, and I’m always learning new things to grow into IT Project Manager someday.
      </p>
      <p className="mt-4">
        I’m really passionate about a few big topics: automotive with elements of motorsport(F1), the mysteries of space, and how geopolitics shapes the world. These things keep me curious and excited about what’s coming next.
      </p>
      <p className="mt-4">
        Over the years, I’ve helped companies connect the dots between business and tech, working with great teams at places like Futunext, ABB, and Philip Morris International.
      </p>
      <p className="mt-4">
        Here are some{" "}
        <a href="/principles" className="text-[#8977FF] hover:text-white underline">principles</a> I believe in and some{" "}
        <a href="/books" className="text-[#8977FF] hover:text-white underline">books</a> I read.
      </p>
    </div>
  );
}