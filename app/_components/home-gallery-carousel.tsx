"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { GalleryImage } from "@/app/_data/site-content";

type HomeGalleryCarouselProps = {
  images: GalleryImage[];
};

const VISIBLE_IMAGES = 4;
const AUTOPLAY_DELAY = 5000;

export function HomeGalleryCarousel({ images }: HomeGalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = Math.max(0, images.length - VISIBLE_IMAGES);

  useEffect(() => {
    if (totalSlides === 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index >= totalSlides ? 0 : index + 1));
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [totalSlides]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 grid gap-4">
      <div className="-mx-2 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${activeIndex * (100 / images.length)}%)`,
            width: `${(images.length / VISIBLE_IMAGES) * 100}%`,
          }}
        >
          {images.map((image) => (
            <Link
              className="group block px-2"
              href="/tentang-gereja/galeri"
              key={image.src}
              style={{ width: `${100 / images.length}%` }}
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-md border border-slate-200 bg-slate-100 shadow-sm transition group-hover:border-hkbp-border group-hover:shadow-md">
                <Image
                  alt={image.alt}
                  className="object-cover transition duration-300 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  src={image.src}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {totalSlides > 0 ? (
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides + 1 }, (_, index) => (
              <button
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex
                    ? "w-8 bg-hkbp-primary"
                    : "w-2.5 bg-slate-300 hover:bg-hkbp-border"
                }`}
                key={index}
                onClick={() => setActiveIndex(index)}
                type="button"
                aria-current={index === activeIndex ? "true" : undefined}
                aria-label={`Tampilkan slide galeri ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              className="flex size-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition hover:border-hkbp-border hover:text-hkbp-link"
              onClick={() =>
                setActiveIndex((index) =>
                  index === 0 ? totalSlides : index - 1,
                )
              }
              type="button"
              aria-label="Slide galeri sebelumnya"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              className="flex size-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition hover:border-hkbp-border hover:text-hkbp-link"
              onClick={() =>
                setActiveIndex((index) =>
                  index >= totalSlides ? 0 : index + 1,
                )
              }
              type="button"
              aria-label="Slide galeri berikutnya"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
