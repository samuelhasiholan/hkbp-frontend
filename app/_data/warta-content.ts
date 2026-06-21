export type WartaPdfVersion = {
  language: "indonesia" | "batak";
  label: string;
  fileUrl: string;
  fileName: string;
};

export type WartaItem = {
  slug: string;
  title: string;
  date: string;
  pdfVersions: WartaPdfVersion[];
};

const createPdfVersions = (fileBaseName: string): WartaPdfVersion[] => [
  {
    language: "indonesia",
    label: "Bahasa Indonesia",
    fileUrl: `/warta/${fileBaseName}.pdf`,
    fileName: `${fileBaseName}.pdf`,
  },
  {
    language: "batak",
    label: "Bahasa Batak",
    fileUrl: `/warta/${fileBaseName}-batak.pdf`,
    fileName: `${fileBaseName}-batak.pdf`,
  },
];

export const weeklyWarta: WartaItem = {
  slug: "warta-mingguan-21-juni-2026",
  title: "Warta Mingguan 21 Juni 2026",
  date: "Minggu, 21 Juni 2026",
  pdfVersions: createPdfVersions("warta-mingguan-2026-06-21"),
};

export const archivedWarta: WartaItem[] = [
  {
    slug: "warta-mingguan-14-juni-2026",
    title: "Warta Mingguan 14 Juni 2026",
    date: "Minggu, 14 Juni 2026",
    pdfVersions: createPdfVersions("warta-mingguan-2026-06-14"),
  },
  {
    slug: "warta-mingguan-7-juni-2026",
    title: "Warta Mingguan 7 Juni 2026",
    date: "Minggu, 7 Juni 2026",
    pdfVersions: createPdfVersions("warta-mingguan-2026-06-07"),
  },
  {
    slug: "warta-mingguan-31-mei-2026",
    title: "Warta Mingguan 31 Mei 2026",
    date: "Minggu, 31 Mei 2026",
    pdfVersions: createPdfVersions("warta-mingguan-2026-05-31"),
  },
  {
    slug: "warta-mingguan-24-mei-2026",
    title: "Warta Mingguan 24 Mei 2026",
    date: "Minggu, 24 Mei 2026",
    pdfVersions: createPdfVersions("warta-mingguan-2026-05-24"),
  },
];
