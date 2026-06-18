import { CalendarDays, Palette, UserRound } from "lucide-react";
import { PdfViewer } from "@/app/_components/warta/pdf-viewer";
import { weeklyWarta } from "@/app/_data/warta-content";

export const metadata = {
  title: "Warta Mingguan | HKBP Resort Srengseng Sawah",
  description:
    "Warta mingguan terbaru HKBP Resort Srengseng Sawah dalam tampilan PDF yang dapat diunduh dan dibagikan.",
};

export default function WartaMingguanPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-700">
              Warta Jemaat
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              Warta Mingguan
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Warta minggu ini terbuka otomatis dalam PDF viewer, lengkap dengan
              tombol unduh dan share untuk memudahkan distribusi kepada jemaat.
            </p>
          </div>
          <div className="self-end rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-bold text-slate-950">
              {weeklyWarta.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {weeklyWarta.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-md border border-slate-200 bg-white p-4">
            <CalendarDays className="size-5 text-red-700" aria-hidden="true" />
            <p className="mt-3 text-sm font-bold text-slate-950">Tanggal</p>
            <p className="mt-1 text-sm text-slate-600">{weeklyWarta.date}</p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-4">
            <Palette className="size-5 text-red-700" aria-hidden="true" />
            <p className="mt-3 text-sm font-bold text-slate-950">
              Warna Liturgi
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {weeklyWarta.liturgicalColor}
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-4">
            <UserRound className="size-5 text-red-700" aria-hidden="true" />
            <p className="mt-3 text-sm font-bold text-slate-950">
              Pelayan Firman
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {weeklyWarta.preacher}
            </p>
          </div>
        </div>

        <PdfViewer
          date={weeklyWarta.date}
          description={weeklyWarta.theme}
          fileName={weeklyWarta.fileName}
          fileUrl={weeklyWarta.fileUrl}
          title={weeklyWarta.title}
        />
      </section>
    </main>
  );
}
