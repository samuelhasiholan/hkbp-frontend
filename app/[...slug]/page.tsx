import { notFound } from "next/navigation";
import { PageTemplate } from "@/app/_components/page-template";
import { allPageSlugs, pageContent } from "@/app/_data/site-content";
import { getPageContent, getSiteSettings } from "@/app/_lib/backend-content";

export const dynamicParams = true;

export function generateStaticParams() {
  return allPageSlugs.map((slug) => ({
    slug: slug.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const content =
    (await getPageContent(slug.join("/"))) ?? pageContent[slug.join("/")];

  if (!content) {
    return {};
  }

  return {
    title: `${content.title} | HKBP Resort Srengseng Sawah`,
    description: content.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pageSlug = slug.join("/");
  const content = await getPageContent(pageSlug) ?? pageContent[pageSlug];

  if (!content) {
    notFound();
  }

  if (pageSlug === "kontak") {
    const { contactInfo } = await getSiteSettings();

    return (
      <PageTemplate
        content={{
          ...content,
          contactInfo,
          sections: [
            {
              title: "Alamat",
              body: contactInfo.address,
            },
            {
              title: "Kanal Komunikasi",
              body: [
                contactInfo.phone ? `Telepon: ${contactInfo.phone}` : "",
                contactInfo.whatsapp ? `WhatsApp: ${contactInfo.whatsapp}` : "",
                contactInfo.email ? `Email: ${contactInfo.email}` : "",
              ]
                .filter(Boolean)
                .join("\n"),
            },
            {
              title: "Jam Pelayanan",
              body:
                contactInfo.officeHours ||
                "Hubungi kantor gereja untuk informasi jam pelayanan.",
            },
          ],
        }}
      />
    );
  }

  return <PageTemplate content={content} />;
}
