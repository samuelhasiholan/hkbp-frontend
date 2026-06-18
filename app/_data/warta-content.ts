export type WartaItem = {
  slug: string;
  title: string;
  date: string;
  liturgicalColor: string;
  theme: string;
  preacher: string;
  fileUrl: string;
  fileName: string;
  excerpt: string;
};

export const weeklyWarta: WartaItem = {
  slug: "warta-mingguan-21-juni-2026",
  title: "Warta Mingguan 21 Juni 2026",
  date: "Minggu, 21 Juni 2026",
  liturgicalColor: "Hijau",
  theme: "Bertumbuh dalam Kasih dan Kesetiaan",
  preacher: "Pdt. Resort",
  fileUrl: "/warta/warta-mingguan-2026-06-21.pdf",
  fileName: "warta-mingguan-2026-06-21.pdf",
  excerpt:
    "Sample warta minggu berjalan berisi tata ibadah, pengumuman pelayanan, jadwal kategorial, dan pokok doa jemaat.",
};

export const archivedWarta: WartaItem[] = [
  {
    slug: "warta-mingguan-14-juni-2026",
    title: "Warta Mingguan 14 Juni 2026",
    date: "Minggu, 14 Juni 2026",
    liturgicalColor: "Hijau",
    theme: "Setia Melayani di Tengah Keluarga",
    preacher: "Pdt. Ressort",
    fileUrl: "/warta/warta-mingguan-2026-06-14.pdf",
    fileName: "warta-mingguan-2026-06-14.pdf",
    excerpt:
      "Arsip sample warta berisi jadwal ibadah, agenda wijk, dan pengumuman kategorial minggu sebelumnya.",
  },
  {
    slug: "warta-mingguan-7-juni-2026",
    title: "Warta Mingguan 7 Juni 2026",
    date: "Minggu, 7 Juni 2026",
    liturgicalColor: "Putih",
    theme: "Roh Kudus Menguatkan Persekutuan",
    preacher: "Pdt. Jemaat",
    fileUrl: "/warta/warta-mingguan-2026-06-07.pdf",
    fileName: "warta-mingguan-2026-06-07.pdf",
    excerpt:
      "Arsip sample warta hari Pentakosta dengan pengumuman pelayanan musik, sekolah Minggu, dan diakonia.",
  },
  {
    slug: "warta-mingguan-31-mei-2026",
    title: "Warta Mingguan 31 Mei 2026",
    date: "Minggu, 31 Mei 2026",
    liturgicalColor: "Putih",
    theme: "Menghidupi Sukacita Kenaikan Kristus",
    preacher: "Pdt. Resort",
    fileUrl: "/warta/warta-mingguan-2026-05-31.pdf",
    fileName: "warta-mingguan-2026-05-31.pdf",
    excerpt:
      "Arsip sample warta akhir Mei dengan catatan ibadah keluarga, rapat majelis, dan pelayanan kunjungan.",
  },
  {
    slug: "warta-mingguan-24-mei-2026",
    title: "Warta Mingguan 24 Mei 2026",
    date: "Minggu, 24 Mei 2026",
    liturgicalColor: "Putih",
    theme: "Bersaksi dalam Damai Sejahtera",
    preacher: "Pdt. Jemaat",
    fileUrl: "/warta/warta-mingguan-2026-05-24.pdf",
    fileName: "warta-mingguan-2026-05-24.pdf",
    excerpt:
      "Arsip sample warta dengan jadwal partangiangan, pelayanan kategorial, dan laporan persembahan.",
  },
];
