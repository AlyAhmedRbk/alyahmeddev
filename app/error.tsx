"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex min-h-[70vh] max-w-3xl flex-col justify-center py-20">
      <p className="eyebrow">Error</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Something went wrong.</h1>
      <p className="mt-4 text-lg leading-8 text-muted">Try loading the page again.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button className="btn btn-primary" type="button" onClick={reset}>
          Try again
        </button>
        <Link className="btn btn-secondary" href="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
