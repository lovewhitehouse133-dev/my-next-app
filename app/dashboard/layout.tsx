// app/dashboard/layout.tsx
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <h2>Dashboard</h2>
      <nav>Dashboard menu here</nav>
      <div>{children}</div>
    </section>
  );
}
