import { Archive, Search } from "lucide-react";
import { ArchiveBrowser } from "@/app/_components/warta/archive-browser";
import { pageContent } from "@/app/_data/site-content";
import { archivedWarta } from "@/app/_data/warta-content";

const content = pageContent["warta-jemaat/arsip-warta"];

export const metadata = {
  title: `${content.title} | HKBP Resort Srengseng Sawah`,
  description: content.description,
};

export default function ArsipWartaPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-hkbp-link">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {content.description}
            </p>
          </div>
          <div className="grid gap-3 self-end rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-hkbp-soft text-hkbp-link">
                <Archive size={18} aria-hidden="true" />
              </span>
              <p className="text-sm leading-6 text-slate-600">
                {content.sections[0]?.body}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                <Search size={18} aria-hidden="true" />
              </span>
              <p className="text-sm leading-6 text-slate-600">
                {content.sections[1]?.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ArchiveBrowser items={archivedWarta} />
      </section>
    </main>
  );
}
