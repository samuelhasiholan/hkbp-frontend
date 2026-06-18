import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Church,
  Newspaper,
  UsersRound,
} from "lucide-react";

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
    </main>
  );
}
