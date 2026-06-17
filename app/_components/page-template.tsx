import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { PageContent } from "@/app/_data/site-content";

type PageTemplateProps = {
  content: PageContent;
};

export function PageTemplate({ content }: PageTemplateProps) {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-700">
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
            <p className="text-sm leading-6 text-slate-600">{content.summary}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="h-fit rounded-md border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
              Fokus Halaman
            </h2>
            <div className="mt-4 grid gap-3">
              {content.highlights.map((highlight) => (
                <p className="flex items-start gap-3 text-sm font-medium text-slate-800" key={highlight}>
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-red-700" aria-hidden="true" />
                  {highlight}
                </p>
              ))}
            </div>
          </aside>

          <div className="grid gap-5">
            {content.sections.map((section) => (
              <article className="rounded-md border border-slate-200 bg-white p-6" key={section.title}>
                <h2 className="text-xl font-bold text-slate-950">{section.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
              </article>
            ))}

            {content.callout ? (
              <div className="rounded-md border border-red-200 bg-red-50 p-5 text-sm font-medium leading-6 text-red-900">
                {content.callout}
              </div>
            ) : null}

            <Link
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-red-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-800"
              href="/kontak"
            >
              Hubungi Gereja
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
