import { notFound } from "next/navigation";
import { PageTemplate } from "@/app/_components/page-template";
import { allPageSlugs, pageContent } from "@/app/_data/site-content";

export const dynamicParams = false;

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
  const content = pageContent[slug.join("/")];

  if (!content) {
    return {};
  }

  return {
    title: `${content.title} | HKBP Jemaat`,
    description: content.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const content = pageContent[slug.join("/")];

  if (!content) {
    notFound();
  }

  return <PageTemplate content={content} />;
}
