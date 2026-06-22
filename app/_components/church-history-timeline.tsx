"use client";

import Link from "next/link";
import { ArrowRight, Church, Landmark } from "lucide-react";
import { motion } from "motion/react";
import type { ChurchHistoryTimelineItem } from "@/app/_data/site-content";

type ChurchHistoryTimelineProps = {
  items: ChurchHistoryTimelineItem[];
};

export function ChurchHistoryTimeline({ items }: ChurchHistoryTimelineProps) {
  return (
    <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            className="text-hkbp-link text-sm font-bold tracking-wide uppercase"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Sejarah Gereja
          </motion.p>
          <motion.h2
            className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Perjalanan HKBP Srengseng Sawah
          </motion.h2>
          <motion.p
            className="mt-4 text-sm leading-6 text-slate-600 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Jejak pelayanan yang membentuk persekutuan, kesaksian, dan rumah
            ibadah bagi jemaat dari generasi ke generasi.
          </motion.p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-hkbp-border to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="grid gap-8">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  className="relative grid gap-4 pl-14 md:grid-cols-[1fr_80px_1fr] md:items-center md:gap-0 md:pl-0"
                  key={`${item.year}-${index}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <div className={`${isLeft ? "md:col-start-1 md:pr-8 md:text-right" : "md:col-start-3 md:pl-8"} md:row-start-1`}>
                    <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 transition hover:-translate-y-0.5 hover:border-hkbp-border hover:shadow-md">
                      <div className={`flex items-center gap-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="bg-hkbp-soft text-hkbp-link flex size-10 shrink-0 items-center justify-center rounded-md">
                          <Landmark size={20} aria-hidden="true" />
                        </span>
                        <p className="text-hkbp-link text-3xl font-bold tracking-normal">
                          {item.year}
                        </p>
                      </div>
                      <p className="mt-4 text-base font-semibold leading-7 text-slate-800">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 top-5 flex size-10 items-center justify-center rounded-full border border-hkbp-border bg-white shadow-sm md:static md:col-start-2 md:row-start-1 md:mx-auto">
                    <span className="bg-hkbp-primary flex size-5 items-center justify-center rounded-full text-white">
                      <Church size={12} aria-hidden="true" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Link
            className="text-hkbp-link inline-flex items-center gap-2 text-sm font-bold"
            href="/tentang/sejarah"
          >
            Baca sejarah lengkap
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
