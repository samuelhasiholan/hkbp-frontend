"use client";

import { useMemo, useState } from "react";
import { Search, UserRound, X } from "lucide-react";
import type { RetiredElderProfile } from "@/app/_data/site-content";

type RetiredElderSearchProps = {
  profiles: RetiredElderProfile[];
};

export function RetiredElderSearch({ profiles }: RetiredElderSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedProfile, setSelectedProfile] =
    useState<RetiredElderProfile | null>(null);
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
          Telusuri nama, jabatan, dan masa tugas sintua purnabakti.
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
            <button
              className="group overflow-hidden rounded-md border border-slate-200 bg-white text-left transition hover:border-red-200 hover:shadow-md"
              key={profile.name}
              onClick={() => setSelectedProfile(profile)}
              type="button"
            >
              <div className="flex aspect-square items-center justify-center bg-slate-100 text-slate-400 transition group-hover:bg-red-50 group-hover:text-red-700">
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
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-slate-200 bg-slate-50 p-5 text-sm font-medium text-slate-600">
          Tidak ada nama yang cocok dengan pencarian.
        </div>
      )}

      {selectedProfile ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Biografi ${selectedProfile.name}`}
        >
          <button
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedProfile(null)}
            type="button"
            aria-label="Tutup biografi"
          />
          <div className="relative grid w-full max-w-3xl overflow-hidden rounded-md bg-white shadow-2xl sm:grid-cols-[0.75fr_1.25fr]">
            <button
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-md bg-white/95 text-slate-900 shadow-sm transition hover:bg-red-50 hover:text-red-700"
              onClick={() => setSelectedProfile(null)}
              type="button"
              aria-label="Tutup biografi"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <div className="flex min-h-64 items-center justify-center bg-slate-100 text-slate-400">
              <UserRound size={88} strokeWidth={1.4} aria-hidden="true" />
              <span className="sr-only">Placeholder foto</span>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wide text-red-700">
                Sintua Purnabakti
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                {selectedProfile.name}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {selectedProfile.role}
              </p>
              <p className="mt-4 rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                {selectedProfile.servicePeriod}
              </p>
              <div className="mt-5 border-t border-slate-200 pt-5">
                <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Biografi Singkat
                </h4>
                <p className="mt-3 leading-7 text-slate-600">
                  {selectedProfile.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
