import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth Page",
  description: "Authentication page for the app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>Auth Layout</p>
      {children}
    </div>
  );
}
