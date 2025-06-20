import Link from "next/link";
import Header from "@/app/components/header";

export default function Home() {
  return (
      <main>
        <Header/>
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
