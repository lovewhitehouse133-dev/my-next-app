// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/about">Go to About</Link>
      <br />
      <Link href="/blog/nextjs-16">Go to Next.js 16 blog post</Link>
    </main>
  );
}