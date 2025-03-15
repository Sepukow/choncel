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
    "/principles": "/Principles",
    "/books": "/Books",
    "/projects": "/Projects",
    "/media": "/Media",
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
        <div className="flex flex-row min-h-screen justify-center" style={{ marginLeft: '30vw', marginRight: '30vw' }}>
          <div className="flex-1 p-4 max-w-[640px] pt-12">
            <h1 className="text-2xl mb-4">
              {location.pathname === "/" && (
                <>
                  <span style={{ color: '#8977FF' }}>Hey</span>, I'm{" "}
                </>
              )}
              Bartek<span style={{ color: '#8977FF' }}>{locationTitle}</span>
            </h1>
            <br></br>
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
