import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Church,
  Newspaper,
  Quote,
  UsersRound,
} from "lucide-react";
import { ChurchHistoryTimeline } from "@/app/_components/church-history-timeline";
import { HomeGalleryCarousel } from "@/app/_components/home-gallery-carousel";
import {
  ScrollReveal,
  StaggerReveal,
  StaggerRevealItem,
} from "@/app/_components/scroll-reveal";
import {
  getHomeSettings,
  getPageContent,
  getPublications,
} from "@/app/_lib/backend-content";
import { pageContent } from "@/app/_data/site-content";

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

export default async function Home() {
  const [publications, homeSettings] = await Promise.all([
    getPublications(),
    getHomeSettings(),
  ]);
  const {
    siteSettings: { homeHero },
    pastorGreeting,
    churchHistoryTimeline,
  } = homeSettings;
  const latestPublications = [...publications]
    .sort(
      (first, second) =>
        getPublicationTime(second.date) - getPublicationTime(first.date),
    )
    .slice(0, 3);
  const galleryContent =
    (await getPageContent("tentang-gereja/galeri")) ??
    pageContent["tentang-gereja/galeri"];
  const galleryImages = galleryContent.galleryImages ?? [];

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="bg-hkbp-hero absolute inset-0" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4.25rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <p className="text-hkbp-soft text-sm font-bold tracking-wide uppercase">
              {homeHero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-normal sm:text-6xl">
              {homeHero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              {homeHero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="bg-hkbp-primary hover:bg-hkbp-primary-hover inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold text-white transition"
                href={homeHero.primaryHref}
              >
                {homeHero.primaryLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                href={homeHero.secondaryHref}
              >
                {homeHero.secondaryLabel}
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

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-8">
          <ScrollReveal
            className="overflow-hidden rounded-md bg-slate-100"
            direction="left"
          >
            {pastorGreeting.photoUrl ? (
              <img
                src={pastorGreeting.photoUrl}
                alt={pastorGreeting.pastorName}
                className="aspect-[4/5] h-full w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[4/5] items-center justify-center bg-[linear-gradient(135deg,#0f766e,#0f172a)] px-8 text-center text-white">
                <div>
                  <p className="text-sm font-bold tracking-wide uppercase text-cyan-100">
                    HKBP
                  </p>
                  <p className="mt-3 text-3xl font-bold leading-tight">
                    Resort Srengseng Sawah
                  </p>
                </div>
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal direction="right">
            <p className="text-hkbp-link text-sm font-bold tracking-wide uppercase">
              {pastorGreeting.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              {pastorGreeting.title}
            </h2>
            <div className="mt-6 flex gap-4">
              <span className="bg-hkbp-soft text-hkbp-link flex size-11 shrink-0 items-center justify-center rounded-md">
                <Quote size={22} aria-hidden="true" />
              </span>
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {pastorGreeting.body}
              </p>
            </div>
            <div className="mt-7 border-l-4 border-hkbp-primary pl-4">
              <p className="font-bold text-slate-950">
                {pastorGreeting.pastorName}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                {pastorGreeting.pastorRole}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ChurchHistoryTimeline items={churchHistoryTimeline} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <StaggerReveal className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
              <StaggerRevealItem key={item.href}>
                <Link
                  className="hover:border-hkbp-border block rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  href={item.href}
                >
                  <span className="bg-hkbp-soft text-hkbp-link flex size-10 items-center justify-center rounded-md">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-lg font-bold text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.body}
                  </p>
                </Link>
              </StaggerRevealItem>
            );
          })}
        </StaggerReveal>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-hkbp-link text-sm font-bold tracking-wide uppercase">
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
              className="text-hkbp-link inline-flex items-center gap-2 text-sm font-bold"
              href="/berita-publikasi"
            >
              Lihat semua publikasi
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </ScrollReveal>

          <StaggerReveal className="mt-6 grid gap-5 md:grid-cols-3">
            {latestPublications.map((item) => (
              <StaggerRevealItem key={item.slug}>
                <Link
                  className="group hover:border-hkbp-border block overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  href={`/berita-publikasi/${item.slug}`}
                >
                  <div
                    className={`relative flex aspect-[16/9] items-end overflow-hidden bg-cover bg-center p-5 text-white ${
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
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.2),rgba(15,23,42,0.68))]" />
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
              </StaggerRevealItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-hkbp-link text-sm font-bold tracking-wide uppercase">
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
            className="text-hkbp-link inline-flex items-center gap-2 text-sm font-bold"
            href="/tentang-gereja/galeri"
          >
            Buka galeri
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <HomeGalleryCarousel images={galleryImages.slice(0, 8)} />
        </ScrollReveal>
      </section>
    </main>
  );
}
