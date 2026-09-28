import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] max-w-3xl flex-col justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">This page does not exist.</h1>
      <p className="mt-4 text-lg leading-8 text-muted">Everything on this site lives on the home page.</p>
      <div className="mt-8">
        <Link className="btn btn-primary" href="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
