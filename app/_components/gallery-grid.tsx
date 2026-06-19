"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { GalleryImage } from "@/app/_data/site-content";

type GalleryGridProps = {
  images: GalleryImage[];
};

const PAGE_SIZE = 10;

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(images.length / PAGE_SIZE));
  const activePage = Math.min(currentPage, totalPages);
  const startIndex = (activePage - 1) * PAGE_SIZE;
  const visibleImages = images.slice(startIndex, startIndex + PAGE_SIZE);
  const paginationItems =
    totalPages <= 7
      ? Array.from({ length: totalPages }, (_, index) => index + 1)
      : [
          1,
          ...(activePage > 3 ? ["start-ellipsis"] : []),
          ...Array.from(
            { length: 3 },
            (_, index) =>
              Math.min(Math.max(activePage - 1, 2), totalPages - 3) + index,
          ),
          ...(activePage < totalPages - 2 ? ["end-ellipsis"] : []),
          totalPages,
        ];

  return (
    <section className="grid gap-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Album Galeri</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Foto kegiatan jemaat dan pelayanan gereja.
          </p>
        </div>
        <p className="text-sm font-medium text-slate-500">
          {images.length} foto terbaru
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {visibleImages.map((image) => (
          <button
            className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:border-hkbp-border hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-hkbp-primary focus-visible:ring-offset-2"
            key={image.src}
            onClick={() => setSelectedImage(image)}
            type="button"
            aria-label={`Buka foto ${image.alt}`}
          >
            <span className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                alt={image.alt}
                className="object-cover transition duration-300 group-hover:scale-105"
                fill
                sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw"
                src={image.src}
              />
            </span>
          </button>
        ))}
      </div>

      {totalPages > 1 ? (
        <nav
          className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between"
          aria-label="Navigasi halaman galeri"
        >
          <p className="text-sm font-medium text-slate-500">
            Halaman {activePage} dari {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              className="flex size-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition hover:border-hkbp-border hover:text-hkbp-link disabled:cursor-not-allowed disabled:opacity-45"
              disabled={activePage === 1}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              type="button"
              aria-label="Halaman sebelumnya"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            {paginationItems.map((item) => {
              if (typeof item === "string") {
                return (
                  <span
                    className="flex size-10 items-center justify-center text-sm font-bold text-slate-400"
                    key={item}
                    aria-hidden="true"
                  >
                    ...
                  </span>
                );
              }

              const page = item;
              const isActive = page === activePage;

              return (
                <button
                  className={`flex size-10 items-center justify-center rounded-md border text-sm font-bold transition ${
                    isActive
                      ? "border-hkbp-primary bg-hkbp-primary text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-hkbp-border hover:text-hkbp-link"
                  }`}
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  type="button"
                  aria-current={isActive ? "page" : undefined}
                  aria-label={`Halaman ${page}`}
                >
                  {page}
                </button>
              );
            })}
            <button
              className="flex size-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition hover:border-hkbp-border hover:text-hkbp-link disabled:cursor-not-allowed disabled:opacity-45"
              disabled={activePage === totalPages}
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              type="button"
              aria-label="Halaman berikutnya"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </nav>
      ) : null}

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau foto galeri"
        >
          <button
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedImage(null)}
            type="button"
            aria-label="Tutup galeri"
          />
          <div className="relative w-full max-w-5xl overflow-hidden rounded-md bg-white shadow-2xl">
            <button
              className="absolute top-3 right-3 z-10 flex size-10 items-center justify-center rounded-md bg-white/95 text-slate-900 shadow-sm transition hover:bg-hkbp-soft hover:text-hkbp-link"
              onClick={() => setSelectedImage(null)}
              type="button"
              aria-label="Tutup galeri"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <div className="relative h-[65vh] max-h-[46rem] min-h-[18rem] w-full bg-slate-100">
              <Image
                alt={selectedImage.alt}
                className="object-contain"
                fill
                priority
                sizes="100vw"
                src={selectedImage.src}
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
