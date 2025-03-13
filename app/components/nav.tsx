import { useLocation } from "react-router";

export default function Nav() {
  const location = useLocation();

  return (
    <div className="w-24 sm:w-64 bg-[#292627] p-2 sm:p-6">
      <nav className="pt-1 sm:pt-4 md:pt-6">
        <ul className="space-y-0 text-right">
          <li>
            <a
              href="/"
              className={
                "text-[#8977FF] hover:text-white text-sm sm:text-lg block py-0 underline " +
                (location.pathname === "/" ? "font-bold" : "")
              }
            >
              main page
            </a>
          </li>
          <li>
            <a
              href="/principles"
              className={
                "text-[#8977FF] hover:text-white text-sm sm:text-lg block py-0 underline " +
                (location.pathname === "/principles" ? "font-bold" : "")
              }
            >
              principles
            </a>
          </li>
          <li>
            <a
              href="/books"
              className={
                "text-[#8977FF] hover:text-white text-sm sm:text-lg block py-0 underline " +
                (location.pathname === "/books" ? "font-bold" : "")
              }
            >
              books
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className={
                "text-[#8977FF] hover:text-white text-sm sm:text-lg block py-0 underline " +
                (location.pathname === "/projects" ? "font-bold" : "")
              }
            >
              projects
            </a>
          </li>
          <li>
            <a
              href="/media"
              className={
                "text-[#8977FF] hover:text-white text-sm sm:text-lg block py-0 underline " +
                (location.pathname === "/media" ? "font-bold" : "")
              }
            >
              media
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}