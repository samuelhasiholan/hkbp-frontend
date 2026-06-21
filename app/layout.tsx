import type { Metadata } from "next";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { getSiteSettings } from "./_lib/backend-content";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const image = settings.seoDefaults.ogImageUrl;

  return {
    title: settings.seoDefaults.title,
    description: settings.seoDefaults.description,
    openGraph: {
      title: settings.seoDefaults.title,
      description: settings.seoDefaults.description,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

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
