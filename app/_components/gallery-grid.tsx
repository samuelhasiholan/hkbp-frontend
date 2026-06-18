"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

import type { GalleryImage } from "@/app/_data/site-content";

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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

      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            className={`group overflow-hidden rounded-md border border-slate-200 bg-white text-left shadow-sm transition hover:border-red-200 hover:shadow-md ${
              index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
            key={image.src}
            onClick={() => setSelectedImage(image)}
            type="button"
          >
            <span
              className={`relative block overflow-hidden bg-slate-100 ${
                index === 0 ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3]"
              }`}
            >
              <Image
                alt={image.alt}
                className="object-cover transition duration-300 group-hover:scale-105"
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                src={image.src}
              />
              <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-md bg-white/90 text-slate-800 shadow-sm">
                <Maximize2 size={17} aria-hidden="true" />
              </span>
            </span>
            <span className={index === 0 ? "block p-5" : "block p-4"}>
              <span className="text-xs font-bold uppercase tracking-wide text-red-700">
                {image.category}
              </span>
              <span
                className={`mt-1 block font-bold text-slate-950 ${
                  index === 0 ? "text-xl" : "text-base"
                }`}
              >
                {image.title}
              </span>
              <span className="mt-1 block text-sm leading-6 text-slate-600">
                {image.description}
              </span>
            </span>
          </button>
        ))}
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <button
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedImage(null)}
            type="button"
            aria-label="Tutup galeri"
          />
          <div className="relative w-full max-w-5xl overflow-hidden rounded-md bg-white shadow-2xl">
            <button
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-md bg-white/95 text-slate-900 shadow-sm transition hover:bg-red-50 hover:text-red-700"
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
            <div className="border-t border-slate-200 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-red-700">
                {selectedImage.category}
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-950">
                {selectedImage.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
