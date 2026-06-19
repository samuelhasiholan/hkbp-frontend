import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, UserRound } from "lucide-react";
import { ShareActions } from "@/app/_components/berita-publikasi/share-actions";
import {
  getPublicationBySlug,
  publications,
} from "@/app/_data/publication-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return publications.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPublicationBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title} | Berita & Publikasi`,
    description: item.excerpt,
  };
}

export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPublicationBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="bg-white">
      <article>
        <section
          className={`relative overflow-hidden bg-gradient-to-br ${item.thumbnailTone} text-white`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.26),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.32),rgba(15,23,42,0.72))]" />
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
            <Link
              className="inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              href="/berita-publikasi"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Kembali
            </Link>
            <div className="mt-12 max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-wide text-white/80">
                {item.category}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-normal sm:text-5xl">
                {item.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/86">
                {item.excerpt}
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-white/86">
                <span className="inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 backdrop-blur">
                  <CalendarDays size={16} aria-hidden="true" />
                  {item.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 backdrop-blur">
                  <UserRound size={16} aria-hidden="true" />
                  {item.author}
                </span>
                <span className="inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 backdrop-blur">
                  <Clock size={16} aria-hidden="true" />
                  {item.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8">
          <div className="max-w-3xl">
            <div className="grid gap-5 text-base leading-8 text-slate-700">
              {item.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="grid h-fit gap-4 lg:sticky lg:top-24">
            <ShareActions title={item.title} />
            <div className="rounded-md border border-hkbp-border bg-hkbp-soft p-5">
              <p className="text-sm font-bold text-hkbp-ink">
                Informasi sample
              </p>
              <p className="mt-2 text-sm leading-6 text-hkbp-link-strong">
                Konten ini dapat diganti dengan data CMS atau API saat sumber
                publikasi resmi sudah tersedia.
              </p>
            </div>
          </aside>
        </section>
      </article>
    </main>
  );
}
