import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import Nav from './components/nav'
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex min-h-screen">
          <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Hey, I'm Bartek
            </h1>

            {children}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8">
              Bartek
            </h2>
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

