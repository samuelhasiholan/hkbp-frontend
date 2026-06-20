import { PdfViewer } from "@/app/_components/warta/pdf-viewer";
import { pageContent } from "@/app/_data/site-content";
import { getCurrentWarta } from "@/app/_lib/backend-content";

const content = pageContent["warta-jemaat/warta-mingguan"];

export const metadata = {
  title: `${content.title} | HKBP Resort Srengseng Sawah`,
  description: content.description,
};

export default async function WartaMingguanPage() {
  const weeklyWarta = await getCurrentWarta();

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
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
        <PdfViewer
          date={weeklyWarta.date}
          description={weeklyWarta.theme}
          pdfVersions={weeklyWarta.pdfVersions}
          title={weeklyWarta.title}
        />
      </section>
    </main>
  );
}
