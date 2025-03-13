import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import Nav from './components/nav';
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const pathToTitle = {
    "/principles": ".Principles",
    "/books": ".Books",
    "/projects": ".Projects",
    "/media": ".Media",
  };

  const locationTitle = pathToTitle[location.pathname] || "";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-row min-h-screen px-4 sm:px-4 md:px-16 lg:px-32">
          <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
              {location.pathname === "/" && "Hey, I'm "}
              Bartek<span style={{ color: '#8977FF' }}>{locationTitle}</span>
            </h1>

            <Outlet />

          </div>
          <Nav />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}