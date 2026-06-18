"use client";

import { useMemo, useState } from "react";
import { Search, UserRound } from "lucide-react";
import type { RetiredElderProfile } from "@/app/_data/site-content";

type RetiredElderSearchProps = {
  profiles: RetiredElderProfile[];
};

export function RetiredElderSearch({ profiles }: RetiredElderSearchProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredProfiles = useMemo(
    () =>
      normalizedQuery
        ? profiles.filter((profile) =>
            profile.name.toLowerCase().includes(normalizedQuery),
          )
        : profiles,
    [normalizedQuery, profiles],
  );

  return (
    <section className="grid gap-4">
      <div>
        <h2 className="text-xl font-bold text-slate-950">
          Daftar Sintua Purnabakti
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Foto, nama, jabatan, dan masa tugas akan diperbarui melalui CMS.
        </p>
      </div>

      <label className="relative block">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <span className="sr-only">Cari berdasarkan nama</span>
        <input
          className="h-11 w-full rounded-md border border-slate-200 bg-white pl-10 pr-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:ring-4 focus:ring-red-100"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari berdasarkan nama"
          type="search"
          value={query}
        />
      </label>

      {filteredProfiles.length ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProfiles.map((profile) => (
            <article
              className="overflow-hidden rounded-md border border-slate-200 bg-white"
              key={profile.name}
            >
              <div className="flex aspect-square items-center justify-center bg-slate-100 text-slate-400">
                <UserRound size={52} strokeWidth={1.5} aria-hidden="true" />
                <span className="sr-only">Placeholder foto</span>
              </div>
              <div className="border-t border-slate-200 p-4">
                <h3 className="text-base font-bold text-slate-950">
                  {profile.name}
                </h3>
                <p className="mt-1 text-sm font-medium leading-6 text-slate-500">
                  {profile.role}
                </p>
                <p className="mt-3 rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                  {profile.servicePeriod}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-slate-200 bg-slate-50 p-5 text-sm font-medium text-slate-600">
          Tidak ada nama yang cocok dengan pencarian.
        </div>
      )}
    </section>
  );
}
