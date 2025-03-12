export function meta({ }: any) {
    return [
      { title: "Bartłomiej Choncel" },
      { name: "description", content: "Welcome to my website!" },
    ];
  }

  export default function Home() {
    return (
      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8">
        I’ve been reading, listening, thinking, building, and creating on the internet since 2008. Currently working on my résumé and trying to digitize myself into the internet (project: Exegi monumentum).
        On a daily basis, I work as an IT Solution Expert and continuously enhance my skills, aiming to become an IT Architect/IT Project Manager in the future.
        My areas of interest include automation, automotive, space and geopolitics. From time to time I like to take some photos and videos.
        At the moment, I am constantly working on completing my window to the world, which is the website you are currently on.
        Through the years, I have helped some companies understand the connection between business and tech at companies like: Futunext, ABB and Philip Morris International.
        Here are some principles I believe in and some books I read.
      </p>
  );
}