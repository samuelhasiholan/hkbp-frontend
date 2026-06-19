import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Mail,
  MapPin,
  UserRound,
  UsersRound,
} from "lucide-react";
import { GalleryGrid } from "@/app/_components/gallery-grid";
import { OrganizationPeopleGrid } from "@/app/_components/organization-people-grid";
import { RetiredElderSearch } from "@/app/_components/retired-elder-search";
import type { PageContent } from "@/app/_data/site-content";

type PageTemplateProps = {
  content: PageContent;
};

type ProfileGridProps = {
  profiles: NonNullable<PageContent["organizationProfiles"]>;
};

function ProfileGrid({ profiles }: ProfileGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {profiles.map((profile) => (
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
          </div>
        </article>
      ))}
    </div>
  );
}

function ContactPageTemplate({ content }: PageTemplateProps) {
  const sectionIcons = [MapPin, Mail, Clock3];

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
            <p className="text-sm leading-6 text-slate-600">
              {content.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="grid gap-4">
          {content.sections.map((section, index) => {
            const Icon = sectionIcons[index] ?? CheckCircle2;

            return (
              <article
                className="rounded-md border border-slate-200 bg-white p-6"
                key={section.title}
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-700">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-slate-950">
                      {section.title}
                    </h2>
                    <p className="mt-2 whitespace-pre-line leading-7 text-slate-600">
                      {section.body}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {content.mapEmbedUrl ? (
          <section className="overflow-hidden rounded-md border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-950">
                Lokasi Gereja
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                HKBP Srengseng Sawah Lutheran Church
              </p>
            </div>
            <iframe
              allowFullScreen
              className="h-[26rem] w-full border-0 bg-slate-100 lg:h-full lg:min-h-[34rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={content.mapEmbedUrl}
              title="Peta lokasi HKBP Srengseng Sawah"
            />
          </section>
        ) : null}
      </section>
    </main>
  );
}

function GalleryPageTemplate({ content }: PageTemplateProps) {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-wide text-red-700">
            {content.eyebrow}
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {content.description}
              </p>
            </div>
            <div className="self-end rounded-md border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm leading-6 text-slate-600">
                {content.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {content.galleryImages?.length ? (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <GalleryGrid images={content.galleryImages} />
        </section>
      ) : null}
    </main>
  );
}

function OrganizationPeoplePageTemplate({ content }: PageTemplateProps) {
  const profiles = content.organizationProfiles ?? [];
  const sectionIcons = [BookOpenText, HeartHandshake];
  const isPastorPage = content.layoutVariant === "pastors";
  const isOfficerPage = content.layoutVariant === "officers";
  const profileLabel = isPastorPage
    ? "Pendeta"
    : isOfficerPage
      ? "Fungsionaris"
      : content.title;
  const teamTitle = isPastorPage
    ? "Daftar Pendeta"
    : isOfficerPage
      ? "Struktur Fungsionaris"
      : `Pengurus ${content.title}`;
  const teamDescription = isPastorPage
    ? "Para pendeta melayani bersama dalam ibadah, pembinaan, pendampingan pastoral, dan pelayanan khusus jemaat."
    : isOfficerPage
      ? "Ketua, sekretaris, dan bendahara bekerja bersama menjaga administrasi, koordinasi, dan pengelolaan keuangan pelayanan."
      : `Pengurus ${content.title} mengoordinasikan pelayanan bersama seksi-seksi agar program berjalan terarah, tertib, dan menjawab kebutuhan jemaat.`;
  const primaryActionLabel = isPastorPage ? "Hubungi Gereja" : "Kontak Kantor";
  const secondaryActionLabel = isPastorPage
    ? "Jadwal Pelayanan"
    : "Lihat Organisasi";
  const secondaryActionHref = isPastorPage
    ? "/jadwal-pelayanan"
    : "/organisasi";

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
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
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-md bg-red-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-800"
                href="/kontak"
              >
                {primaryActionLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                href={secondaryActionHref}
              >
                <CalendarDays size={16} aria-hidden="true" />
                {secondaryActionLabel}
              </Link>
            </div>
          </div>

          <div className="self-end rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm leading-6 text-slate-600">
              {content.summary}
            </p>
            <div className="mt-5 grid gap-3">
              {content.highlights.map((highlight) => (
                <p
                  className="flex items-start gap-3 text-sm font-semibold text-slate-800"
                  key={highlight}
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-red-700"
                    aria-hidden="true"
                  />
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {content.sections.map((section, index) => {
              const Icon = sectionIcons[index] ?? UsersRound;

              return (
                <article
                  className="rounded-md border border-slate-200 bg-white p-6"
                  key={section.title}
                >
                  <span className="flex size-11 items-center justify-center rounded-md bg-red-50 text-red-700">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl font-bold text-slate-950">
                    {section.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {section.body}
                  </p>
                </article>
              );
            })}
          </div>

          {profiles.length ? (
            <OrganizationPeopleGrid
              description={teamDescription}
              label={profileLabel}
              profiles={profiles}
              title={teamTitle}
            />
          ) : null}
        </div>

        {content.councilSections?.length ? (
          <div className="grid gap-5">
            {content.councilSections.map((section) => (
              <section
                className="scroll-mt-28 rounded-md border border-slate-200 bg-white p-6"
                id={section.id}
                key={section.id}
              >
                <h2 className="text-xl font-bold text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {section.description}
                </p>
                <div className="mt-5">
                  <ProfileGrid profiles={section.profiles} />
                </div>
              </section>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}

export function PageTemplate({ content }: PageTemplateProps) {
  if (
    content.layoutVariant === "pastors" ||
    content.layoutVariant === "officers" ||
    content.layoutVariant === "council"
  ) {
    return <OrganizationPeoplePageTemplate content={content} />;
  }

  if (content.galleryImages?.length) {
    return <GalleryPageTemplate content={content} />;
  }

  if (content.mapEmbedUrl) {
    return <ContactPageTemplate content={content} />;
  }

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
            {content.organizationProfiles?.length ? (
              <section className="grid gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    Daftar {content.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Foto, nama, dan jabatan akan diperbarui melalui CMS.
                  </p>
                </div>

                <ProfileGrid profiles={content.organizationProfiles} />
              </section>
            ) : null}

            {content.councilSections?.map((section) => (
              <section
                className="scroll-mt-28 rounded-md border border-slate-200 bg-white p-6"
                id={section.id}
                key={section.id}
              >
                <h2 className="text-xl font-bold text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {section.description}
                </p>
                <div className="mt-5">
                  <ProfileGrid profiles={section.profiles} />
                </div>
              </section>
            ))}

            {content.retiredElderProfiles?.length ? (
              <RetiredElderSearch profiles={content.retiredElderProfiles} />
            ) : null}

            {content.sections.map((section) => (
              <article className="rounded-md border border-slate-200 bg-white p-6" key={section.title}>
                <h2 className="text-xl font-bold text-slate-950">{section.title}</h2>
                <p className="mt-3 whitespace-pre-line leading-7 text-slate-600">
                  {section.body}
                </p>
              </article>
            ))}

            {content.galleryImages?.length ? (
              <GalleryGrid images={content.galleryImages} />
            ) : null}

            {content.mapEmbedUrl ? (
              <article className="overflow-hidden rounded-md border border-slate-200 bg-white">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-950">
                    Lokasi Gereja
                  </h2>
                </div>
                <iframe
                  allowFullScreen
                  className="aspect-[4/3] w-full border-0 bg-slate-100 sm:aspect-[16/9]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={content.mapEmbedUrl}
                  title={`Peta lokasi ${content.title}`}
                />
              </article>
            ) : null}

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
