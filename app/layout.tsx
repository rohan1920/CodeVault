import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeVault - Secure GitHub Repository Backups",
  description: "Enterprise-grade encryption and automatic syncing to protect your code beyond GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
