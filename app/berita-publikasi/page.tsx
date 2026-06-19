import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  Megaphone,
  Newspaper,
} from "lucide-react";
import {
  getPublicationsByCategory,
  publicationSections,
} from "@/app/_data/publication-content";

const sectionIcons = {
  "Berita Kegiatan": Newspaper,
  "Artikel dan Renungan": FileText,
  "Publikasi Resmi": Megaphone,
};

export const metadata = {
  title: "Berita & Publikasi | HKBP Resort Srengseng Sawah",
  description:
    "Berita kegiatan, artikel renungan, dan publikasi resmi HKBP Resort Srengseng Sawah.",
};

export default function BeritaPublikasiPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-hkbp-link">
              Kabar Jemaat
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              Berita & Publikasi
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Kumpulan berita kegiatan, artikel renungan, dan publikasi resmi
              untuk mendukung kehidupan persekutuan jemaat.
            </p>
          </div>
          <div className="self-end rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm leading-6 text-slate-600">
              Setiap section berisi tiga sample thumbnail yang dapat dibuka ke
              halaman detail, lengkap dengan fitur berbagi ke media sosial dan
              salin tautan.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:px-8">
        {publicationSections.map((section) => {
          const Icon = sectionIcons[section.title];
          const items = getPublicationsByCategory(section.title);

          return (
            <section className="grid gap-5" key={section.title}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-hkbp-soft text-hkbp-link">
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
                    className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-hkbp-border hover:shadow-md"
                    href={`/berita-publikasi/${item.slug}`}
                    key={item.slug}
                  >
                    <div
                      className={`relative flex aspect-[16/10] items-end overflow-hidden bg-gradient-to-br ${item.thumbnailTone} p-5 text-white`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.12),rgba(15,23,42,0.45))]" />
                      <div className="relative">
                        <span className="inline-flex rounded-md bg-white/18 px-2.5 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur">
                          {item.category}
                        </span>
                        <p className="mt-3 max-w-[14rem] text-xl font-bold leading-tight">
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
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-hkbp-link">
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
