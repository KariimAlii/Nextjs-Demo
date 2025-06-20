import Link from "next/link";

export default function Home() {
  return (
      <main>
        <img src="/logo.png" alt="A server surrounded by magic sparkles." />
        <h1>Welcome to this NextJS Course!</h1>
        <p>🔥 Let&apos;s get started! 🔥</p>
        <p>
            <Link href="/about">About Us</Link>
        </p>
      </main>
  );
}

// Routing

// page.js => page content
// layout.js => wrapper around pages
// not-found.js => not found page
// error.js => error content
