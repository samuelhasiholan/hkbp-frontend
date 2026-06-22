import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, UserRound } from "lucide-react";
import { ShareActions } from "@/app/_components/publikasi/share-actions";
import { publications } from "@/app/_data/publication-content";
import { getPublicationBySlug } from "@/app/_lib/backend-content";

export const dynamicParams = true;

export function generateStaticParams() {
  return publications.map((item) => ({
    slug: item.slug,
  }));
}

function PublicationBody({ content }: { content: string[] }) {
  return (
    <div className="grid gap-6 text-base leading-8 text-slate-700 [&_br]:block [&_figcaption]:mt-3 [&_figcaption]:text-center [&_figcaption]:text-sm [&_figcaption]:leading-6 [&_figcaption]:text-slate-500 [&_figure]:my-8 [&_img]:mx-auto [&_img]:h-auto [&_img]:w-full [&_img]:max-w-full [&_img]:rounded-md [&_img]:border [&_img]:border-slate-200 [&_img]:object-cover [&_p]:leading-8 [&_p[align='justify']]:text-justify">
      {content.map((block, index) => {
        const hasHtml = /<\/?[a-z][\s\S]*>/i.test(block);

        if (hasHtml) {
          return (
            <div
              // Konten ini berasal dari CMS admin resmi.
              dangerouslySetInnerHTML={{ __html: block }}
              key={`${index}-${block.slice(0, 24)}`}
            />
          );
        }

        return <p key={`${index}-${block.slice(0, 24)}`}>{block}</p>;
      })}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getPublicationBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title} | Publikasi`,
    description: item.excerpt,
  };
}

export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getPublicationBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="bg-white">
      <article>
        <section
          className={`relative overflow-hidden bg-cover bg-center text-white ${
            item.thumbnailUrl
              ? "bg-slate-900"
              : `bg-gradient-to-br ${item.thumbnailTone}`
          }`}
          style={
            item.thumbnailUrl
              ? { backgroundImage: `url("${item.thumbnailUrl}")` }
              : undefined
          }
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.16),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.48),rgba(15,23,42,0.86))]" />
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
            <Link
              className="inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              href="/publikasi"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Kembali
            </Link>
            <div className="mt-12 max-w-4xl">
              <p className="text-sm font-bold tracking-wide text-white/80 uppercase">
                {item.category}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-normal sm:text-5xl">
                {item.title}
              </h1>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-white/86">
                <span className="inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 backdrop-blur">
                  <CalendarDays size={16} aria-hidden="true" />
                  {item.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 backdrop-blur">
                  <UserRound size={16} aria-hidden="true" />
                  {item.author}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8">
          <div className="max-w-3xl">
            <PublicationBody content={item.content} />
          </div>

          <aside className="grid h-fit gap-4 lg:sticky lg:top-24">
            <ShareActions title={item.title} />
            <div className="border-hkbp-border bg-hkbp-soft rounded-md border p-5">
              <p className="text-hkbp-ink text-sm font-bold">
                Informasi publikasi
              </p>
              <p className="text-hkbp-link-strong mt-2 text-sm leading-6">
                Konten ini ditampilkan dari data publikasi resmi yang sudah
                diterbitkan.
              </p>
            </div>
          </aside>
        </section>
      </article>
    </main>
  );
}
