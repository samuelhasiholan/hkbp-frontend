import type { Metadata } from "next";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "HKBP Resort Srengseng Sawah",
  description:
    "Website HKBP Resort Srengseng Sawah untuk informasi ibadah, organisasi, warta, berita, dan kontak gereja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full bg-white text-slate-950">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
