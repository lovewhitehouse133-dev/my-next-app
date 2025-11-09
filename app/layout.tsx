// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "My Next.js 16 App",
  description: "Example with App Router",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>My Navbar</header>
        {children}
        <footer>© 2025</footer>
      </body>
    </html>
  );
}
