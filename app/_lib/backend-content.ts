import {
  archivedWarta,
  type WartaItem,
  type WartaPdfVersion,
  weeklyWarta,
} from "@/app/_data/warta-content";
import {
  publications as fallbackPublications,
  type PublicationCategory,
  type PublicationItem,
} from "@/app/_data/publication-content";
import {
  defaultPastorGreeting,
  pageContent,
  type GalleryImage,
  type OrganizationProfile,
  type PageContent,
  type PastorGreeting,
  type RetiredElderProfile,
  type WijkItem,
} from "@/app/_data/site-content";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

type BackendPage = {
  title: string;
  eyebrow: string | null;
  description: string;
  summary: string | null;
  callout: string | null;
  layoutVariant: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  highlights: { text: string }[];
  sections: { title: string; body: string }[];
};

type BackendPublication = {
  slug: string;
  title: string;
  category: "BERITA_KEGIATAN" | "ARTIKEL_RENUNGAN" | "PUBLIKASI_RESMI";
  excerpt: string;
  content: string[];
  author: string;
  publishedAt: string | null;
  thumbnailUrl: string | null;
  thumbnailTone: string | null;
  readTime: string | null;
};

type BackendWarta = {
  slug: string;
  title: string;
  date: string;
  liturgicalColor: string;
  theme: string;
  preacher: string;
  excerpt: string;
  pdfVersions: {
    language: "INDONESIA" | "BATAK";
    label: string;
    fileUrl: string;
    fileName: string;
  }[];
};

type BackendProfile = {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  photoUrl: string | null;
  servicePeriod: string | null;
  category: { slug: string; name: string; description: string | null } | null;
};

type BackendWijk = {
  name: string;
  description: string;
};

type BackendGalleryItem = {
  description: string;
  media: { url: string };
};

type BackendSiteSettings = {
  pastorGreeting?: Partial<PastorGreeting>;
};

const categoryLabels: Record<
  BackendPublication["category"],
  PublicationCategory
> = {
  BERITA_KEGIATAN: "Berita Kegiatan",
  ARTIKEL_RENUNGAN: "Artikel dan Renungan",
  PUBLIKASI_RESMI: "Publikasi Resmi",
};

const languageLabels: Record<
  BackendWarta["pdfVersions"][number]["language"],
  WartaPdfVersion["language"]
> = {
  INDONESIA: "indonesia",
  BATAK: "batak",
};

async function fetchPublic<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_URL}${path}`, { cache: "no-store" });
    const result = (await response.json()) as ApiResponse<T>;

    if (!response.ok || !result.success) {
      return null;
    }

    return result.data;
  } catch {
    return null;
  }
}

function formatDate(value: string | null) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date(value));
}

function toPublication(item: BackendPublication): PublicationItem {
  return {
    slug: item.slug,
    title: item.title,
    category: categoryLabels[item.category],
    excerpt: item.excerpt,
    date: formatDate(item.publishedAt),
    author: item.author,
    readTime: item.readTime ?? "3 menit baca",
    thumbnailUrl: item.thumbnailUrl ?? undefined,
    thumbnailTone:
      item.thumbnailTone ?? "from-hkbp-primary via-sky-600 to-cyan-400",
    content: item.content,
  };
}

function toWarta(item: BackendWarta): WartaItem {
  return {
    slug: item.slug,
    title: item.title,
    date: formatDate(item.date),
    liturgicalColor: item.liturgicalColor,
    theme: item.theme,
    preacher: item.preacher,
    excerpt: item.excerpt,
    pdfVersions: item.pdfVersions.map((pdf) => ({
      language: languageLabels[pdf.language],
      label: pdf.label,
      fileUrl: pdf.fileUrl,
      fileName: pdf.fileName,
    })),
  };
}

function toProfile(item: BackendProfile): OrganizationProfile {
  return {
    id: item.id,
    name: item.name,
    role: item.role,
    bio: item.bio ?? undefined,
    photo: item.photoUrl
      ? {
          src: item.photoUrl,
          alt: `Foto ${item.name}`,
        }
      : undefined,
  };
}

function toRetiredElder(item: BackendProfile): RetiredElderProfile {
  return {
    ...toProfile(item),
    servicePeriod: item.servicePeriod ?? "-",
    bio: item.bio ?? "",
  };
}

function createDefaultPageContent(item: BackendPage): PageContent {
  return {
    title: item.title,
    eyebrow: item.eyebrow ?? "Informasi",
    description: item.description,
    summary: item.summary ?? item.description,
    highlights: item.highlights.map((highlight) => highlight.text),
    sections: item.sections,
    callout: item.callout ?? undefined,
    layoutVariant:
      (item.layoutVariant as PageContent["layoutVariant"]) ?? "article",
  };
}

function toPageContent(fallback: PageContent, item: BackendPage): PageContent {
  return {
    ...fallback,
    title: item.title,
    eyebrow: item.eyebrow ?? fallback.eyebrow,
    description: item.description,
    summary: item.summary ?? fallback.summary,
    callout: item.callout ?? fallback.callout,
    layoutVariant:
      (item.layoutVariant as PageContent["layoutVariant"]) ??
      fallback.layoutVariant,
    highlights: item.highlights.map((highlight) => highlight.text),
    sections: item.sections,
  };
}

export async function getPublications(): Promise<PublicationItem[]> {
  const items = await fetchPublic<BackendPublication[]>(
    "/api/public/publications",
  );
  return items?.map(toPublication) ?? fallbackPublications;
}

export async function getPublicationBySlug(
  slug: string,
): Promise<PublicationItem | undefined> {
  const item = await fetchPublic<BackendPublication>(
    `/api/public/publications/${encodeURIComponent(slug)}`,
  );
  return item
    ? toPublication(item)
    : fallbackPublications.find((fallback) => fallback.slug === slug);
}

export async function getCurrentWarta(): Promise<WartaItem> {
  const item = await fetchPublic<BackendWarta>("/api/public/warta/current");
  return item ? toWarta(item) : weeklyWarta;
}

export async function getArchivedWarta(): Promise<WartaItem[]> {
  const items = await fetchPublic<BackendWarta[]>("/api/public/warta/archive");
  return items?.map(toWarta) ?? archivedWarta;
}

export async function getPastorGreeting(): Promise<PastorGreeting> {
  const settings = await fetchPublic<BackendSiteSettings>(
    "/api/public/site-settings",
  );
  return {
    ...defaultPastorGreeting,
    ...(settings?.pastorGreeting ?? {}),
  };
}

async function getGalleryImages(
  fallback: GalleryImage[],
): Promise<GalleryImage[]> {
  const items = await fetchPublic<BackendGalleryItem[]>("/api/public/gallery");
  if (!items?.length) {
    return fallback;
  }

  return items.map((item) => ({
    src: item.media.url,
    alt: item.description,
    description: item.description,
  }));
}

async function getProfilesByCategory(categorySlug: string) {
  const items = await fetchPublic<BackendProfile[]>(
    `/api/public/organization/profiles?categorySlug=${encodeURIComponent(categorySlug)}`,
  );
  return items?.map(toProfile) ?? [];
}

async function getRetiredElders() {
  const items = await fetchPublic<BackendProfile[]>(
    "/api/public/organization/profiles?categorySlug=sintua-purnabakti",
  );
  return items?.map(toRetiredElder) ?? [];
}

async function getWijkItems(fallback: WijkItem[]): Promise<WijkItem[]> {
  const items = await fetchPublic<BackendWijk[]>(
    "/api/public/organization/wijk",
  );
  return items?.length
    ? items.map((item) => ({ name: item.name, description: item.description }))
    : fallback;
}

export async function getPageContent(
  slug: string,
): Promise<PageContent | undefined> {
  const fallback = pageContent[slug];
  const backendPage = await fetchPublic<BackendPage>(
    `/api/public/pages/${slug}`,
  );

  if (!fallback && !backendPage) {
    return undefined;
  }

  if (!fallback && backendPage) {
    return createDefaultPageContent(backendPage);
  }

  const content =
    backendPage && fallback
      ? toPageContent(fallback, backendPage)
      : { ...(fallback as PageContent) };

  if (slug === "tentang-gereja/galeri") {
    content.galleryImages = await getGalleryImages(
      fallback.galleryImages ?? [],
    );
  }

  if (
    content.layoutVariant === "pastors" ||
    content.layoutVariant === "officers" ||
    content.layoutVariant === "council"
  ) {
    const categorySlug = slug.split("/").at(-1);
    const profiles = categorySlug
      ? await getProfilesByCategory(categorySlug)
      : [];
    content.organizationProfiles = profiles.length
      ? profiles
      : fallback.organizationProfiles;

    if (fallback.councilSections?.length) {
      content.councilSections = await Promise.all(
        fallback.councilSections.map(async (section) => {
          const sectionProfiles = await getProfilesByCategory(section.id);
          return {
            ...section,
            profiles: sectionProfiles.length
              ? sectionProfiles
              : section.profiles,
          };
        }),
      );
    }
  }

  if (content.layoutVariant === "wijk") {
    content.wijkItems = await getWijkItems(fallback.wijkItems ?? []);
  }

  if (slug === "organisasi/sintua-purnabakti") {
    const profiles = await getRetiredElders();
    content.retiredElderProfiles = profiles.length
      ? profiles
      : fallback.retiredElderProfiles;
  }

  return content;
}
