import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  Megaphone,
  Newspaper,
} from "lucide-react";
import { publicationSections } from "@/app/_data/publication-content";
import { pageContent } from "@/app/_data/site-content";
import { getPublications } from "@/app/_lib/backend-content";

const content = pageContent["publikasi"];

const sectionIcons = {
  "Berita Kegiatan": Newspaper,
  "Artikel dan Renungan": FileText,
  "Publikasi Resmi": Megaphone,
};

export const metadata = {
  title: `${content.title} | HKBP Resort Srengseng Sawah`,
  description: content.description,
};

export default async function BeritaPublikasiPage() {
  const publications = await getPublications();

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-hkbp-link text-sm font-bold tracking-wide uppercase">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {content.description}
            </p>
          </div>
          <div className="self-end rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm leading-6 text-slate-600">
              {content.summary}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:px-8">
        {publicationSections.map((section) => {
          const Icon = sectionIcons[section.title];
          const items = publications.filter(
            (item) => item.category === section.title,
          );

          return (
            <section className="grid gap-5" key={section.title}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="bg-hkbp-soft text-hkbp-link inline-flex size-10 items-center justify-center rounded-md">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-slate-950">
                    {section.title}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {items.map((item) => (
                  <Link
                    className="group hover:border-hkbp-border overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    href={`/publikasi/${item.slug}`}
                    key={item.slug}
                  >
                    <div
                      className={`relative flex aspect-[16/10] items-end overflow-hidden bg-cover bg-center p-5 text-white ${
                        item.thumbnailUrl
                          ? "bg-slate-800"
                          : `bg-gradient-to-br ${item.thumbnailTone}`
                      }`}
                      style={
                        item.thumbnailUrl
                          ? { backgroundImage: `url("${item.thumbnailUrl}")` }
                          : undefined
                      }
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.24),rgba(15,23,42,0.72))]" />
                      <div className="relative">
                        <span className="inline-flex rounded-md bg-white/18 px-2.5 py-1 text-xs font-bold tracking-wide uppercase backdrop-blur">
                          {item.category}
                        </span>
                        <p className="mt-3 max-w-[14rem] text-xl leading-tight font-bold">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <CalendarDays size={14} aria-hidden="true" />
                        {item.date}
                      </div>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                        {item.excerpt}
                      </p>
                      <span className="text-hkbp-link mt-4 inline-flex items-center gap-2 text-sm font-bold">
                        Baca detail
                        <ArrowRight
                          className="transition group-hover:translate-x-0.5"
                          size={16}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
