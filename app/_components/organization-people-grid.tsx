"use client";

import { useState } from "react";
import { UserRound, X } from "lucide-react";

import type { OrganizationProfile } from "@/app/_data/site-content";

type OrganizationPeopleGridProps = {
  label: string;
  profiles: OrganizationProfile[];
  title: string;
  description: string;
};

export function OrganizationPeopleGrid({
  label,
  profiles,
  title,
  description,
}: OrganizationPeopleGridProps) {
  const [selectedProfile, setSelectedProfile] =
    useState<OrganizationProfile | null>(null);

  return (
    <section className="grid gap-4">
      <div>
        <h2 className="text-xl font-bold text-slate-950">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile) => (
          <button
            className="group flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white text-left transition hover:border-hkbp-border hover:shadow-md"
            key={profile.name}
            onClick={() => setSelectedProfile(profile)}
            type="button"
          >
            <div className="flex aspect-square items-center justify-center bg-slate-100 text-slate-400 transition group-hover:bg-hkbp-soft group-hover:text-hkbp-link">
              <UserRound size={56} strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only">Placeholder foto</span>
            </div>
            <div className="flex grow flex-col border-t border-slate-200 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-hkbp-link">
                {label}
              </p>
              <h3 className="mt-2 text-base font-bold text-slate-950">
                {profile.name}
              </h3>
              <p className="mt-1 text-sm font-semibold leading-6 text-slate-500">
                {profile.role}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedProfile ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Profil ${selectedProfile.name}`}
        >
          <button
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedProfile(null)}
            type="button"
            aria-label="Tutup profil"
          />
          <div className="relative grid w-full max-w-3xl overflow-hidden rounded-md bg-white shadow-2xl sm:grid-cols-[0.75fr_1.25fr]">
            <button
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-md bg-white/95 text-slate-900 shadow-sm transition hover:bg-hkbp-soft hover:text-hkbp-link"
              onClick={() => setSelectedProfile(null)}
              type="button"
              aria-label="Tutup profil"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <div className="flex min-h-64 items-center justify-center bg-slate-100 text-slate-400">
              <UserRound size={88} strokeWidth={1.4} aria-hidden="true" />
              <span className="sr-only">Placeholder foto</span>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wide text-hkbp-link">
                {label}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                {selectedProfile.name}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {selectedProfile.role}
              </p>
              {selectedProfile.bio ? (
                <div className="mt-5 border-t border-slate-200 pt-5">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Biografi Singkat
                  </h4>
                  <p className="mt-3 leading-7 text-slate-600">
                    {selectedProfile.bio}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
