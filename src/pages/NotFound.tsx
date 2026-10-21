import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center p-6">
      <div className="liquid-bg-stage" aria-hidden="true">
        <img
          src="/backgrounds/light.svg"
          alt=""
          decoding="async"
          className="liquid-bg-svg liquid-bg-svg-light"
        />
        <img
          src="/backgrounds/dark.svg"
          alt=""
          decoding="async"
          className="liquid-bg-svg liquid-bg-svg-dark"
        />
        <div className="liquid-bg-veil" />
      </div>
      <div className="relative z-10 brutal-card text-center max-w-md w-full">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a
          href="/"
          className="text-[var(--text-accent)] underline underline-offset-4 hover:opacity-85 transition-opacity"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
