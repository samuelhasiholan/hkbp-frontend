import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Church,
  Clock3,
  FileText,
  Palette,
  Newspaper,
  UsersRound,
} from "lucide-react";
import { publications } from "@/app/_data/publication-content";
import { pageContent } from "@/app/_data/site-content";
import { weeklyWarta } from "@/app/_data/warta-content";

const monthIndexes: Record<string, number> = {
  januari: 0,
  februari: 1,
  maret: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  agustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  desember: 11,
};

const getPublicationTime = (date: string) => {
  const [, day, month, year] =
    date.match(/(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/) ?? [];

  if (!day || !month || !year) {
    return 0;
  }

  return new Date(
    Number(year),
    monthIndexes[month.toLowerCase()] ?? 0,
    Number(day),
  ).getTime();
};

const latestPublications = [...publications]
  .sort(
    (first, second) =>
      getPublicationTime(second.date) - getPublicationTime(first.date),
  )
  .slice(0, 3);

const scheduleContent = pageContent["jadwal-pelayanan"];
const sundayServiceContent = pageContent["jadwal-pelayanan/ibadah-minggu"];
const prayerContent = pageContent["jadwal-pelayanan/partangiangan"];
const specialServiceContent = pageContent["jadwal-pelayanan/pelayanan-khusus"];
const galleryImages = pageContent["tentang-gereja/galeri"].galleryImages ?? [];

const featuredAgenda = [
  {
    label: "Rutin Mingguan",
    title: sundayServiceContent.title,
    body: sundayServiceContent.sections[0]?.body
      .split("\n")
      .slice(0, 3)
      .join("\n"),
    href: "/jadwal-pelayanan/ibadah-minggu",
  },
  {
    label: "Wijk & Kategorial",
    title: prayerContent.title,
    body: prayerContent.summary,
    href: "/jadwal-pelayanan/partangiangan",
  },
  {
    label: "Koordinasi Jemaat",
    title: specialServiceContent.title,
    body: specialServiceContent.summary,
    href: "/jadwal-pelayanan/pelayanan-khusus",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.24),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.94),rgba(69,10,10,0.9))]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4.25rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <p className="text-sm font-bold tracking-wide text-red-200 uppercase">
              Website Resmi
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-normal sm:text-6xl">
              HKBP Resort Srengseng Sawah
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Pusat informasi ibadah, pelayanan, organisasi, warta jemaat,
              berita, dan kontak gereja untuk mendukung kehidupan persekutuan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                href="/jadwal-pelayanan/ibadah-minggu"
              >
                Lihat Jadwal Ibadah
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                href="/warta-jemaat/warta-mingguan"
              >
                Baca Warta Jemaat
              </Link>
            </div>
          </div>

          <div className="rounded-md border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="grid gap-3">
              {[
                [
                  "Ibadah Minggu",
                  "Informasi jam ibadah dan petugas pelayanan.",
                  "/jadwal-pelayanan/ibadah-minggu",
                ],
                [
                  "Partangiangan",
                  "Jadwal persekutuan doa wijk dan kategorial.",
                  "/jadwal-pelayanan/partangiangan",
                ],
                [
                  "Pelayanan Khusus",
                  "Baptis, sidi, pernikahan, dan penghiburan.",
                  "/jadwal-pelayanan/pelayanan-khusus",
                ],
              ].map(([title, body, href]) => (
                <Link
                  className="rounded-md bg-white p-4 text-slate-950 transition hover:bg-white/90"
                  key={title}
                  href={href}
                >
                  <p className="font-bold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {body}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Tentang Gereja",
              body: "Kenali sejarah, visi misi, dan dokumentasi kegiatan jemaat.",
              href: "/tentang-gereja",
              icon: Church,
            },
            {
              title: "Organisasi",
              body: "Lihat struktur pelayanan pendeta, fungsionaris, dewan, dan wijk.",
              href: "/organisasi",
              icon: UsersRound,
            },
            {
              title: "Jadwal Pelayanan",
              body: "Ikuti jadwal ibadah Minggu, partangiangan, dan pelayanan khusus.",
              href: "/jadwal-pelayanan",
              icon: CalendarDays,
            },
            {
              title: "Warta Jemaat",
              body: "Baca pengumuman mingguan dan arsip warta gereja.",
              href: "/warta-jemaat",
              icon: Newspaper,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <Link
                className="rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                href={item.href}
                key={item.href}
              >
                <span className="flex size-10 items-center justify-center rounded-md bg-red-50 text-red-700">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.body}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold tracking-wide text-red-700 uppercase">
              Warta Minggu Ini
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-normal text-slate-950">
              {weeklyWarta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {weeklyWarta.excerpt}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                href="/warta-jemaat/warta-mingguan"
              >
                Baca Warta
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-red-200 hover:text-red-700"
                href={weeklyWarta.fileUrl}
              >
                Unduh PDF
                <FileText size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Tanggal",
                body: weeklyWarta.date,
                icon: CalendarDays,
              },
              {
                title: "Warna Liturgi",
                body: weeklyWarta.liturgicalColor,
                icon: Palette,
              },
              {
                title: "Pelayan Firman",
                body: weeklyWarta.preacher,
                icon: UsersRound,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="rounded-md border border-slate-200 bg-white p-4 shadow-sm"
                  key={item.title}
                >
                  <Icon className="size-5 text-red-700" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-slate-950">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold tracking-wide text-red-700 uppercase">
              Agenda Terdekat
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
              {scheduleContent.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              {scheduleContent.summary}
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-red-700"
            href="/jadwal-pelayanan"
          >
            Lihat semua jadwal
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {featuredAgenda.map((item) => (
            <Link
              className="group rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
              href={item.href}
              key={item.href}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-red-50 text-red-700">
                  <Clock3 size={20} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold tracking-wide text-slate-500 uppercase">
                  {item.label}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 min-h-24 text-sm leading-6 whitespace-pre-line text-slate-600">
                {item.body}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-700">
                Buka detail
                <ArrowRight
                  className="transition group-hover:translate-x-0.5"
                  size={16}
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold tracking-wide text-red-700 uppercase">
                Berita Terbaru
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
                Kabar dari Berita & Publikasi
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                Berita kegiatan, renungan, dan publikasi resmi terbaru untuk
                mendukung kehidupan persekutuan jemaat.
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-bold text-red-700"
              href="/berita-publikasi"
            >
              Lihat semua publikasi
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {latestPublications.map((item) => (
              <Link
                className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                href={`/berita-publikasi/${item.slug}`}
                key={item.slug}
              >
                <div
                  className={`relative flex aspect-[16/9] items-end overflow-hidden bg-gradient-to-br ${item.thumbnailTone} p-5 text-white`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.08),rgba(15,23,42,0.5))]" />
                  <div className="relative">
                    <span className="inline-flex rounded-md bg-white/18 px-2.5 py-1 text-xs font-bold tracking-wide uppercase backdrop-blur">
                      {item.category}
                    </span>
                    <h3 className="mt-3 max-w-[14rem] text-xl leading-tight font-bold">
                      {item.title}
                    </h3>
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
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-700">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold tracking-wide text-red-700 uppercase">
              Galeri Ringkas
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
              Dokumentasi Kegiatan Jemaat
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              Foto kegiatan ibadah, persekutuan, pelayanan sosial, dan momen
              kebersamaan jemaat dari halaman galeri.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-red-700"
            href="/tentang-gereja/galeri"
          >
            Buka galeri
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.slice(0, 4).map((image) => (
            <Link
              className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
              href="/tentang-gereja/galeri"
              key={image.src}
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  alt={image.alt}
                  className="object-cover transition duration-300 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  src={image.src}
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
