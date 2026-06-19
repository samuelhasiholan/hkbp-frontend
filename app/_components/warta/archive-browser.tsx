"use client";

import { CalendarDays, FileText } from "lucide-react";
import { useState } from "react";
import { PdfViewer } from "@/app/_components/warta/pdf-viewer";
import type { WartaItem } from "@/app/_data/warta-content";

type ArchiveBrowserProps = {
  items: WartaItem[];
};

export function ArchiveBrowser({ items }: ArchiveBrowserProps) {
  const [selectedSlug, setSelectedSlug] = useState(items[0]?.slug);
  const selectedWarta =
    items.find((item) => item.slug === selectedSlug) ?? items[0];

  if (!selectedWarta) {
    return null;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
      <aside className="h-fit rounded-md border border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-5">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Pilih Warta
          </p>
          <h2 className="mt-2 text-xl font-bold text-slate-950">
            Arsip Terbaru
          </h2>
        </div>
        <div className="grid gap-2 p-3">
          {items.map((item) => {
            const isSelected = item.slug === selectedWarta.slug;

            return (
              <button
                className={`rounded-md border p-4 text-left transition ${
                  isSelected
                    ? "border-hkbp-border bg-hkbp-soft"
                    : "border-slate-200 bg-white hover:border-hkbp-border hover:bg-slate-50"
                }`}
                key={item.slug}
                onClick={() => setSelectedSlug(item.slug)}
                type="button"
              >
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-hkbp-link">
                  <CalendarDays size={14} aria-hidden="true" />
                  {item.date}
                </span>
                <span className="mt-2 block text-base font-bold text-slate-950">
                  {item.title}
                </span>
                <span className="mt-2 line-clamp-2 block text-sm leading-6 text-slate-600">
                  {item.excerpt}
                </span>
                <span className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <FileText size={14} aria-hidden="true" />
                  {item.pdfVersions.length} versi PDF
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      <PdfViewer
        date={selectedWarta.date}
        description={selectedWarta.excerpt}
        pdfVersions={selectedWarta.pdfVersions}
        title={selectedWarta.title}
      />
    </div>
  );
}
