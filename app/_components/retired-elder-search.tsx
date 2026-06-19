"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search, UserRound, X } from "lucide-react";
import type { RetiredElderProfile } from "@/app/_data/site-content";

const PROFILES_PER_PAGE = 10;

type RetiredElderSearchProps = {
  profiles: RetiredElderProfile[];
};

function RetiredElderPhoto({
  profile,
  size = "card",
}: {
  profile: RetiredElderProfile;
  size?: "card" | "modal";
}) {
  const photoLabel = profile.photo?.alt ?? `Foto ${profile.name}`;

  if (profile.photo?.src) {
    return (
      <div
        className={
          size === "modal"
            ? "min-h-64 bg-cover bg-center bg-slate-100"
            : "aspect-square bg-cover bg-center bg-slate-100"
        }
        role="img"
        aria-label={photoLabel}
        style={{ backgroundImage: `url("${profile.photo.src}")` }}
      />
    );
  }

  return (
    <div
      className={
        size === "modal"
          ? "flex min-h-64 items-center justify-center bg-slate-100 text-slate-400"
          : "flex aspect-square items-center justify-center bg-slate-100 text-slate-400 transition group-hover:bg-hkbp-soft group-hover:text-hkbp-link"
      }
    >
      <UserRound
        size={size === "modal" ? 88 : 52}
        strokeWidth={size === "modal" ? 1.4 : 1.5}
        aria-hidden="true"
      />
      <span className="sr-only">Placeholder foto</span>
    </div>
  );
}

export function RetiredElderSearch({ profiles }: RetiredElderSearchProps) {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProfiles.length / PROFILES_PER_PAGE),
  );
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const pageStartIndex = (safeCurrentPage - 1) * PROFILES_PER_PAGE;
  const visibleProfiles = filteredProfiles.slice(
    pageStartIndex,
    pageStartIndex + PROFILES_PER_PAGE,
  );
  const firstVisibleProfile = filteredProfiles.length ? pageStartIndex + 1 : 0;
  const lastVisibleProfile = pageStartIndex + visibleProfiles.length;
  const canGoPrevious = safeCurrentPage > 1;
  const canGoNext = safeCurrentPage < totalPages;

  function handleQueryChange(value: string) {
    setQuery(value);
    setCurrentPage(1);
  }

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
          className="h-11 w-full rounded-md border border-slate-200 bg-white pl-10 pr-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-hkbp-primary focus:ring-4 focus:ring-hkbp-primary/10"
          onChange={(event) => handleQueryChange(event.target.value)}
          placeholder="Cari berdasarkan nama"
          type="search"
          value={query}
        />
      </label>

      {filteredProfiles.length ? (
        <div className="flex flex-col gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Menampilkan {firstVisibleProfile}-{lastVisibleProfile} dari{" "}
            {filteredProfiles.length} sintua purnabakti
          </p>
          <p>
            Halaman {safeCurrentPage} dari {totalPages}
          </p>
        </div>
      ) : null}

      {filteredProfiles.length ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {visibleProfiles.map((profile) => (
            <button
              className="group overflow-hidden rounded-md border border-slate-200 bg-white text-left transition hover:border-hkbp-border hover:shadow-md"
              key={profile.id}
              onClick={() => setSelectedProfile(profile)}
              type="button"
            >
              <RetiredElderPhoto profile={profile} />
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

      {filteredProfiles.length > 0 && totalPages > 1 ? (
        <nav
          className="flex flex-col gap-3 rounded-md border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
          aria-label="Navigasi halaman sintua purnabakti"
        >
          <button
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-hkbp-border hover:bg-hkbp-soft hover:text-hkbp-link disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-700"
            disabled={!canGoPrevious}
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            type="button"
          >
            <ChevronLeft size={16} aria-hidden="true" />
            Sebelumnya
          </button>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <button
                  className={
                    page === safeCurrentPage
                      ? "flex size-9 items-center justify-center rounded-md bg-hkbp-primary text-sm font-bold text-white"
                      : "flex size-9 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-bold text-slate-700 transition hover:border-hkbp-border hover:bg-hkbp-soft hover:text-hkbp-link"
                  }
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  type="button"
                  aria-current={page === safeCurrentPage ? "page" : undefined}
                >
                  {page}
                </button>
              );
            })}
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-hkbp-border hover:bg-hkbp-soft hover:text-hkbp-link disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-700"
            disabled={!canGoNext}
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            type="button"
          >
            Selanjutnya
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </nav>
      ) : null}

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
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-md bg-white/95 text-slate-900 shadow-sm transition hover:bg-hkbp-soft hover:text-hkbp-link"
              onClick={() => setSelectedProfile(null)}
              type="button"
              aria-label="Tutup biografi"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <RetiredElderPhoto profile={selectedProfile} size="modal" />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wide text-hkbp-link">
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
