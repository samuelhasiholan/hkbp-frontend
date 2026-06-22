export type ProfilePhoto = {
  src: string;
  alt: string;
};

export type OrganizationProfile = {
  id: string;
  name: string;
  role: string;
  photo?: ProfilePhoto;
  bio?: string;
};

type CouncilSection = {
  id: string;
  title: string;
  description: string;
  profiles: OrganizationProfile[];
};

export type RetiredElderProfile = {
  id: string;
  name: string;
  role: string;
  servicePeriod: string;
  photo?: ProfilePhoto;
  bio: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  description: string;
};

export type WijkItem = {
  name: string;
  description: string;
};

export type PastorGreeting = {
  eyebrow: string;
  title: string;
  body: string;
  pastorProfileId?: string;
  pastorName: string;
  pastorRole: string;
  photoUrl?: string;
};

export type ChurchHistoryTimelineItem = {
  year: string;
  title: string;
};

export type SiteIdentity = {
  siteName: string;
  denomination: string;
  logoUrl?: string;
};

export type ContactInfo = {
  address: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  officeHours?: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type SeoDefaults = {
  title: string;
  description: string;
  ogImageUrl?: string;
};

export type FooterSettings = {
  description: string;
  copyrightText?: string;
};

export type HomeHero = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export type GlobalSiteSettings = {
  siteIdentity: SiteIdentity;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  seoDefaults: SeoDefaults;
  footerSettings: FooterSettings;
  homeHero: HomeHero;
};

export type PageContent = {
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  highlights: string[];
  childPages?: {
    title: string;
    description: string;
    href: string;
  }[];
  sections: {
    title: string;
    body: string;
  }[];
  organizationProfiles?: OrganizationProfile[];
  councilSections?: CouncilSection[];
  retiredElderProfiles?: RetiredElderProfile[];
  galleryImages?: GalleryImage[];
  wijkItems?: WijkItem[];
  callout?: string;
  contactInfo?: ContactInfo;
  mapEmbedUrl?: string;
  layoutVariant?: "article" | "wijk" | "pastors" | "officers" | "council";
};

export const SITE_NAME = "HKBP Resort Srengseng Sawah";

export const defaultGlobalSiteSettings: GlobalSiteSettings = {
  siteIdentity: {
    siteName: SITE_NAME,
    denomination: "Huria Kristen Batak Protestan",
    logoUrl: "",
  },
  contactInfo: {
    address:
      "Gg. Amalia Jl. Srengseng Sawah No.4, RT.3/RW.3, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12630",
    phone: "08xx-xxxx-xxxx",
    whatsapp: "",
    email: "admin@hkbp.or.id",
    officeHours: "Senin - Sabtu, 09.00 - 16.00 WIB",
  },
  socialLinks: [],
  seoDefaults: {
    title: SITE_NAME,
    description:
      "Website HKBP Resort Srengseng Sawah untuk informasi ibadah, pelayanan, warta, berita, dan kontak gereja.",
    ogImageUrl: "",
  },
  footerSettings: {
    description:
      "Website jemaat untuk informasi ibadah, warta, berita, dan pelayanan gereja.",
    copyrightText: "",
  },
  homeHero: {
    eyebrow: "Website Resmi",
    title: SITE_NAME,
    description:
      "Pusat informasi ibadah, pelayanan, warta jemaat, berita, dan kontak gereja untuk mendukung kehidupan persekutuan.",
    primaryLabel: "Lihat Jadwal Ibadah",
    primaryHref: "/pelayanan/jadwal-pelayanan#ibadah-minggu",
    secondaryLabel: "Baca Warta Jemaat",
    secondaryHref: "/warta-jemaat/warta-mingguan",
  },
};

export const defaultPastorGreeting: PastorGreeting = {
  eyebrow: "Sambutan Pendeta",
  title: "Horas, selamat datang di HKBP Resort Srengseng Sawah",
  body: "Dengan penuh sukacita kami menyambut setiap jemaat dan pengunjung yang hadir melalui ruang digital ini. Kiranya informasi pelayanan, ibadah, dan persekutuan yang tersedia menolong kita semakin bertumbuh dalam iman, kasih, dan pengharapan di dalam Kristus.",
  pastorName: "Pdt. HKBP Resort Srengseng Sawah",
  pastorRole: "Pendeta Resort",
};

export const defaultChurchHistoryTimeline: ChurchHistoryTimelineItem[] = [
  { year: "1966", title: "HKBP Srengseng Sawah didirikan" },
  { year: "2016", title: "Jubileum 50 tahun" },
  { year: "2017", title: "Peresmian gedung gereja baru" },
  { year: "2026", title: "Pembangunan gereja tahap 1" },
];

const createSectionProfiles = (sectionName: string): OrganizationProfile[] =>
  Array.from({ length: 5 }, (_, index) => ({
    id: `${sectionName.toLowerCase().replaceAll(" ", "-")}-${index + 1}`,
    name: `Nama ${sectionName} ${index + 1}`,
    role: `Jabatan ${sectionName} ${index + 1}`,
  }));

const retiredElderProfiles: RetiredElderProfile[] = Array.from(
  { length: 50 },
  (_, index) => ({
    id: `sintua-purnabakti-${index + 1}`,
    name: `Nama Sintua Purnabakti ${index + 1}`,
    role: `Jabatan Sintua Purnabakti ${index + 1}`,
    servicePeriod: `Masa Tugas ${index + 1}`,
    bio: `Sintua Purnabakti ${index + 1} dikenal sebagai pelayan yang setia mendampingi kehidupan jemaat melalui ibadah, perkunjungan, partangiangan, dan pelayanan keluarga. Selama masa tugasnya, beliau turut menjaga persekutuan wijk serta memberi teladan dalam kerendahan hati, ketekunan, dan kepedulian kepada warga jemaat.`,
  }),
);

export const pageContent: Record<string, PageContent> = {
  "tentang-gereja": {
    title: "Tentang Gereja",
    eyebrow: "Profil Jemaat",
    description:
      "Ruang pengenalan jemaat, arah pelayanan, dan dokumentasi kehidupan bergereja.",
    summary:
      "HKBP Resort Srengseng Sawah hadir sebagai rumah rohani yang menumbuhkan iman, persekutuan, kesaksian, dan pelayanan kasih bagi warga jemaat serta masyarakat sekitar.",
    highlights: ["Sejarah pelayanan", "Visi dan misi", "Dokumentasi kegiatan"],
    childPages: [
      {
        title: "Sejarah",
        description:
          "Telusuri perjalanan jemaat dari awal persekutuan hingga pelayanan yang berlangsung saat ini.",
        href: "/tentang-gereja/sejarah",
      },
      {
        title: "Visi & Misi",
        description:
          "Lihat arah pelayanan bersama yang menuntun pertumbuhan iman, persekutuan, dan kesaksian jemaat.",
        href: "/tentang-gereja/visi-misi",
      },
      {
        title: "Galeri",
        description:
          "Buka dokumentasi kegiatan ibadah, pelayanan kategorial, dan momen kebersamaan jemaat.",
        href: "/tentang-gereja/galeri",
      },
    ],
    sections: [
      {
        title: "Identitas Jemaat",
        body: "Halaman ini merangkum gambaran umum gereja, nilai pelayanan, dan informasi dasar yang membantu warga jemaat maupun pengunjung mengenal kehidupan HKBP di tingkat jemaat.",
      },
      {
        title: "Arah Pelayanan",
        body: "Pelayanan diarahkan untuk membangun ibadah yang tertib, pembinaan iman lintas usia, penguatan keluarga, dan kepedulian sosial yang nyata di tengah lingkungan.",
      },
    ],
  },
  "tentang-gereja/sejarah": {
    title: "Sejarah",
    eyebrow: "Tentang Gereja",
    layoutVariant: "article",
    description:
      "Catatan perjalanan jemaat dari awal persekutuan hingga pelayanan yang berlangsung saat ini.",
    summary:
      "Sejarah jemaat adalah kisah pertumbuhan iman bersama yang dapat terus dilengkapi melalui CMS sesuai arsip resmi gereja.",
    highlights: [
      "Diresmikan 2 Januari 1966",
      "Bertumbuh sebagai Resort Srengseng Sawah",
      "Arsip dapat diperbarui dari CMS",
    ],
    sections: [
      {
        title: "Perjalanan Jemaat",
        body: "HKBP Srengseng Sawah (Resort Srengseng Sawah) diresmikan dan berdiri sejak 2 Januari 1966 sebagai tempat persekutuan warga HKBP yang tinggal di wilayah Srengseng Sawah dan sekitarnya. Kehadiran gereja ini lahir dari kerinduan jemaat untuk beribadah, saling menguatkan, dan melayani bersama dalam kehidupan bergereja yang tertib serta berakar pada firman Tuhan.\n\nSeiring berjalannya waktu, persekutuan yang semula sederhana terus bertumbuh melalui ibadah Minggu, partangiangan, pelayanan keluarga, dan pembinaan kategorial. Warga jemaat mengambil bagian dalam pelayanan sesuai talenta masing-masing, mulai dari pelayanan ibadah, musik gerejawi, sekolah Minggu, naposo, kaum bapak, kaum ibu, hingga perhatian sosial bagi sesama.",
      },
      {
        title: "Perkembangan Pelayanan",
        body: "Dalam proses pertumbuhan jemaat, HKBP Srengseng Sawah semakin menata pelayanan melalui pembentukan wijk, penguatan parhalado, penyusunan program pelayanan, dan pengembangan sarana gereja. Setiap tahap perjalanan menjadi bagian dari kesaksian iman bahwa gereja bertumbuh karena penyertaan Tuhan serta kesetiaan warga jemaat yang melayani dari generasi ke generasi.\n\nSebagai resort, HKBP Srengseng Sawah terus menghidupi panggilan pelayanan di tengah perubahan lingkungan dan kebutuhan jemaat. Pelayanan diarahkan untuk membangun persekutuan yang hangat, pembinaan iman yang berkesinambungan, serta kesaksian kasih yang nyata bagi keluarga jemaat dan masyarakat sekitar.",
      },
      {
        title: "Catatan CMS",
        body: "Teks sejarah ini disiapkan sebagai contoh awal dan dapat diperbarui melalui CMS ketika arsip resmi, nama tokoh pelayanan, tanggal penting, foto dokumentasi, atau keterangan tambahan sudah tersedia. Admin dapat mengganti isi paragraf tanpa mengubah layout halaman.",
      },
    ],
  },
  "tentang-gereja/visi-misi": {
    title: "Visi & Misi",
    eyebrow: "Tentang Gereja",
    layoutVariant: "article",
    description:
      "Arah bersama untuk menjadi jemaat yang bertumbuh, melayani, dan menjadi berkat.",
    summary:
      "Visi dan misi menjadi kompas pelayanan agar seluruh program gereja berjalan selaras dengan panggilan Kristus dan kebutuhan jemaat.",
    highlights: [
      "Iman yang bertumbuh",
      "Persekutuan yang hangat",
      "Pelayanan yang berdampak",
    ],
    sections: [
      {
        title: "Arah Pelayanan Bersama",
        body: "Visi dan misi menolong seluruh pelayanan jemaat bergerak dalam arah yang sama. Setiap ibadah, pembinaan, persekutuan, kesaksian, dan pelayanan kasih diarahkan untuk membangun jemaat yang setia kepada firman Tuhan serta peka terhadap kebutuhan keluarga dan masyarakat sekitar.",
      },
      {
        title: "Visi",
        body: "Menjadi jemaat HKBP yang berakar dalam firman Tuhan, hidup dalam persekutuan yang saling mengasihi, bertumbuh dalam iman, dan hadir sebagai berkat bagi masyarakat.",
      },
      {
        title: "Misi",
        body: "Membangun ibadah yang hidup dan tertib, memperkuat pembinaan iman keluarga, menggerakkan pelayanan kategorial, meningkatkan kepedulian sosial, serta mengelola pelayanan gereja secara transparan dan bertanggung jawab.",
      },
      {
        title: "Catatan CMS",
        body: "Rumusan visi dan misi di halaman ini disiapkan sebagai data awal. Admin nantinya dapat memperbarui judul, isi visi, isi misi, dan keterangan pendukung melalui CMS sesuai keputusan resmi majelis jemaat.",
      },
    ],
    callout:
      "Rumusan ini dapat disesuaikan lagi dengan keputusan resmi majelis jemaat jika sudah tersedia.",
  },
  "tentang-gereja/galeri": {
    title: "Galeri",
    eyebrow: "Tentang Gereja",
    description:
      "Dokumentasi kegiatan ibadah, persekutuan, pelayanan sosial, dan momen khusus jemaat.",
    summary:
      "Galeri membantu jemaat menyimpan ingatan bersama dan memperlihatkan wajah pelayanan gereja kepada warga serta tamu yang baru mengenal jemaat.",
    highlights: [
      "Ibadah dan perayaan",
      "Kegiatan kategorial",
      "Pelayanan kasih",
    ],
    sections: [],
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
        alt: "Suasana ibadah di dalam gereja",
        description: "Suasana ibadah Minggu bersama warga jemaat.",
      },
      {
        src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80",
        alt: "Kegiatan persekutuan jemaat di ruang terbuka",
        description:
          "Kebersamaan warga jemaat dalam persekutuan dan kegiatan keluarga.",
      },
      {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
        alt: "Kelompok pelayanan berkumpul bersama",
        description:
          "Kegiatan kategorial, pembinaan iman, dan pelayanan kunjungan.",
      },
      {
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
        alt: "Kebersamaan dalam kegiatan komunitas",
        description: "Kebersamaan jemaat dalam kegiatan gereja dan sosial.",
      },
      {
        src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
        alt: "Anak-anak mengikuti kegiatan bersama",
        description: "Pelayanan anak dan pembinaan iman sejak dini.",
      },
      {
        src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
        alt: "Relawan melakukan pelayanan sosial",
        description: "Pelayanan kasih dan kepedulian sosial jemaat.",
      },
      {
        src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80&sig=7",
        alt: "Suasana ibadah dan pujian jemaat",
        description: "Dokumentasi ibadah dan pujian bersama jemaat.",
      },
      {
        src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80&sig=8",
        alt: "Persekutuan keluarga jemaat",
        description: "Momen kebersamaan keluarga jemaat dalam persekutuan.",
      },
      {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80&sig=9",
        alt: "Kelompok pelayanan kategorial",
        description: "Kegiatan pelayanan kategorial dan pembinaan iman.",
      },
      {
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80&sig=10",
        alt: "Kegiatan bersama warga jemaat",
        description: "Kebersamaan warga jemaat dalam kegiatan gereja.",
      },
      {
        src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80&sig=11",
        alt: "Kegiatan anak sekolah minggu",
        description: "Pelayanan anak dan sekolah Minggu.",
      },
      {
        src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80&sig=12",
        alt: "Pelayanan kasih jemaat",
        description: "Pelayanan sosial dan kepedulian jemaat.",
      },
      {
        src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80&sig=13",
        alt: "Ibadah Minggu bersama jemaat",
        description: "Suasana ibadah Minggu di gereja.",
      },
      {
        src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80&sig=14",
        alt: "Persekutuan jemaat di ruang terbuka",
        description: "Kegiatan persekutuan dan kebersamaan jemaat.",
      },
      {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80&sig=15",
        alt: "Kegiatan pembinaan kategorial",
        description: "Pembinaan iman dan pelayanan kategorial.",
      },
      {
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80&sig=16",
        alt: "Komunitas jemaat berkumpul",
        description: "Kegiatan komunitas dan persekutuan jemaat.",
      },
      {
        src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80&sig=17",
        alt: "Pelayanan anak dalam gereja",
        description: "Kegiatan anak-anak dalam pelayanan gereja.",
      },
      {
        src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80&sig=18",
        alt: "Aksi pelayanan sosial jemaat",
        description: "Aksi kepedulian sosial dan pelayanan kasih.",
      },
      {
        src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80&sig=19",
        alt: "Ruang ibadah gereja",
        description: "Dokumentasi suasana ruang ibadah gereja.",
      },
      {
        src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80&sig=20",
        alt: "Kebersamaan warga dalam kegiatan gereja",
        description: "Kebersamaan warga dalam agenda gereja.",
      },
      {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80&sig=21",
        alt: "Pelayanan kelompok jemaat",
        description: "Pelayanan kelompok dan pembinaan warga jemaat.",
      },
      {
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80&sig=22",
        alt: "Kegiatan komunitas gereja",
        description: "Kegiatan komunitas dan persekutuan gereja.",
      },
      {
        src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80&sig=23",
        alt: "Anak-anak mengikuti kegiatan gereja",
        description: "Kegiatan anak dan pembinaan iman sejak dini.",
      },
      {
        src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80&sig=24",
        alt: "Relawan jemaat dalam pelayanan",
        description: "Relawan jemaat mengambil bagian dalam pelayanan.",
      },
      {
        src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80&sig=25",
        alt: "Ibadah dan perayaan gerejawi",
        description: "Dokumentasi ibadah dan perayaan gerejawi.",
      },
      {
        src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80&sig=26",
        alt: "Persekutuan warga jemaat",
        description: "Persekutuan warga jemaat dalam kegiatan bersama.",
      },
      {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80&sig=27",
        alt: "Kegiatan pelayanan dan kunjungan",
        description: "Kegiatan pelayanan, pembinaan, dan kunjungan.",
      },
      {
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80&sig=28",
        alt: "Momen kebersamaan jemaat",
        description: "Momen kebersamaan jemaat dalam kegiatan gereja.",
      },
      {
        src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80&sig=29",
        alt: "Pelayanan anak dan keluarga",
        description: "Pelayanan anak dan keluarga jemaat.",
      },
      {
        src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80&sig=30",
        alt: "Pelayanan kasih di lingkungan jemaat",
        description: "Pelayanan kasih di lingkungan jemaat.",
      },
    ],
  },
  pelayanan: {
    title: "Pelayanan",
    eyebrow: "Tata Pelayanan",
    description:
      "Struktur pelayan gereja yang mendukung ibadah, pembinaan, kesaksian, dan pelayanan kasih.",
    summary:
      "Pelayanan jemaat menolong pelayanan berjalan tertib: pendeta, parhalado, fungsionaris, dewan, dan wijk bekerja bersama sesuai tugas masing-masing.",
    highlights: [
      "Pendeta dan parhalado",
      "Dewan pelayanan",
      "Wilayah atau wijk",
    ],
    childPages: [
      {
        title: "Pendeta",
        description:
          "Kenali para pelayan tertahbis yang memimpin penggembalaan, firman, dan sakramen.",
        href: "/pelayanan/pendeta",
      },
      {
        title: "Fungsionaris",
        description:
          "Lihat pelayan yang mengelola administrasi, keuangan, dan koordinasi kegiatan jemaat.",
        href: "/pelayanan/fungsionaris",
      },
      {
        title: "Dewan Koinonia",
        description:
          "Masuk ke bidang persekutuan, pembinaan iman, dan pelayanan kategorial jemaat.",
        href: "/pelayanan/dewan-koinonia",
      },
      {
        title: "Dewan Marturia",
        description:
          "Telusuri bidang kesaksian, publikasi, musik, dan pewartaan kabar baik.",
        href: "/pelayanan/dewan-marturia",
      },
      {
        title: "Dewan Diakonia",
        description:
          "Buka bidang pelayanan kasih, kepedulian sosial, dan pendampingan warga jemaat.",
        href: "/pelayanan/dewan-diakonia",
      },
      {
        title: "Wilayah (Wijk)",
        description:
          "Lihat pembagian wilayah pelayanan yang mempererat perhatian antar keluarga jemaat.",
        href: "/pelayanan/wilayah-wijk",
      },
      {
        title: "Sintua Purnabakti",
        description:
          "Temukan arsip penghormatan bagi para sintua yang pernah melayani jemaat.",
        href: "/pelayanan/sintua-purnabakti",
      },
      {
        title: "Jadwal Pelayanan",
        description:
          "Lihat jadwal ibadah Minggu, partangiangan, dan pelayanan khusus dalam satu halaman.",
        href: "/pelayanan/jadwal-pelayanan",
      },
    ],
    sections: [
      {
        title: "Koordinasi Pelayanan",
        body: "Setiap bidang pelayanan saling terhubung melalui rapat, pembagian tugas, dan evaluasi berkala supaya kebutuhan jemaat dapat dilayani dengan baik.",
      },
      {
        title: "Partisipasi Jemaat",
        body: "Warga jemaat didorong ambil bagian sesuai talenta, baik dalam ibadah, administrasi, musik, kunjungan, pendidikan iman, maupun pelayanan sosial.",
      },
    ],
  },
  "pelayanan/pendeta": {
    title: "Pendeta",
    eyebrow: "Pelayanan",
    layoutVariant: "pastors",
    description:
      "Pelayan tertahbis yang memimpin penggembalaan, pemberitaan firman, dan pelayanan sakramen.",
    summary:
      "Pendeta menjadi gembala jemaat yang mengarahkan pelayanan rohani, mendampingi warga jemaat, serta menjaga kehidupan gereja tetap setia pada firman Tuhan.",
    highlights: ["Pelayanan firman", "Penggembalaan", "Koordinasi majelis"],
    sections: [
      {
        title: "Tugas Utama",
        body: "Memimpin ibadah, memberitakan firman Tuhan, melayani sakramen, melakukan penggembalaan, dan membina pelayan serta warga jemaat.",
      },
      {
        title: "Pelayanan Pastoral",
        body: "Pendeta mendampingi jemaat dalam pergumulan keluarga, sakit, dukacita, persiapan pernikahan, pembinaan iman, dan kebutuhan rohani lainnya.",
      },
    ],
    organizationProfiles: [
      {
        id: "pendeta-resort",
        name: "Pdt. Nama Pendeta 1",
        role: "Pendeta Resort",
        bio: "Melayani jemaat melalui pemberitaan firman, pelayanan sakramen, perkunjungan pastoral, dan pendampingan keluarga. Dalam keseharian pelayanan, pendeta membantu menjaga arah pelayanan gereja tetap berakar pada firman Tuhan dan kebutuhan jemaat.",
      },
      {
        id: "pendeta-fungsional",
        name: "Pdt. Nama Pendeta 2",
        role: "Pendeta Fungsional",
        bio: "Berfokus pada pembinaan iman lintas usia, pendampingan kategorial, serta penguatan kehidupan keluarga jemaat melalui pengajaran, kunjungan, dan percakapan pastoral.",
      },
      {
        id: "pendeta-pelayanan",
        name: "Pdt. Nama Pendeta 3",
        role: "Pendeta Pelayanan",
        bio: "Mendukung pelayanan ibadah, liturgi, dan pelayanan khusus seperti baptis, sidi, pernikahan, penghiburan, serta pendampingan jemaat dalam momen penting kehidupan.",
      },
    ],
  },
  "pelayanan/fungsionaris": {
    title: "Fungsionaris",
    eyebrow: "Pelayanan",
    layoutVariant: "officers",
    description:
      "Pelayan yang membantu pengelolaan administrasi, keuangan, dan koordinasi kegiatan jemaat.",
    summary:
      "Fungsionaris menjaga roda pelayanan berjalan rapi agar pelayanan gereja dapat dilaksanakan dengan transparan, terencana, dan bertanggung jawab.",
    highlights: ["Administrasi jemaat", "Keuangan", "Koordinasi program"],
    sections: [
      {
        title: "Peran Administratif",
        body: "Mengelola surat-menyurat, data jemaat, jadwal rapat, notulen, pengarsipan dokumen, dan kebutuhan administrasi pelayanan.",
      },
      {
        title: "Peran Operasional",
        body: "Membantu penyusunan program, pelaporan, koordinasi antarbidang, serta memastikan keputusan pelayanan dapat ditindaklanjuti.",
      },
    ],
    organizationProfiles: [
      {
        id: "fungsionaris-ketua",
        name: "Nama Ketua",
        role: "Ketua",
        bio: "Ketua membantu mengarahkan koordinasi fungsionaris, memastikan keputusan rapat ditindaklanjuti, dan menjaga komunikasi pelayanan berjalan tertib bersama pendeta, parhalado, dan bidang-bidang pelayanan.",
      },
      {
        id: "fungsionaris-sekretaris",
        name: "Nama Sekretaris",
        role: "Sekretaris",
        bio: "Sekretaris mendukung kerapian administrasi jemaat melalui pencatatan agenda, notulen, arsip surat, dan dokumentasi keputusan agar pelayanan dapat berjalan transparan dan mudah ditelusuri.",
      },
      {
        id: "fungsionaris-bendahara",
        name: "Nama Bendahara",
        role: "Bendahara",
        bio: "Bendahara membantu mengelola pemasukan, pengeluaran, dan pelaporan keuangan jemaat dengan teliti, bertanggung jawab, serta mendukung kebutuhan operasional pelayanan gereja.",
      },
    ],
  },
  "pelayanan/dewan-koinonia": {
    title: "Dewan Koinonia",
    eyebrow: "Pelayanan",
    layoutVariant: "council",
    description:
      "Bidang yang memperkuat persekutuan, pembinaan iman, dan kehidupan kategorial jemaat.",
    summary:
      "Dewan Koinonia menolong jemaat bertumbuh dalam persekutuan yang hangat, pembinaan yang terarah, dan relasi yang saling membangun.",
    highlights: ["Persekutuan", "Pembinaan iman", "Kategorial"],
    sections: [
      {
        title: "Fokus Pelayanan",
        body: "Mengembangkan kegiatan ibadah kategorial, sekolah Minggu, remaja, naposo, ama, parompuan, lansia, dan pembinaan keluarga.",
      },
      {
        title: "Tujuan",
        body: "Membentuk warga jemaat yang tekun bersekutu, mengenal firman, dan saling menopang dalam kehidupan sehari-hari.",
      },
    ],
    organizationProfiles: [
      {
        id: "dewan-koinonia-ketua",
        name: "Nama Dewan Koinonia 1",
        role: "Ketua Dewan Koinonia",
        bio: "Mengoordinasikan pelayanan koinonia agar pembinaan iman, persekutuan kategorial, dan kehidupan keluarga jemaat berjalan terarah serta saling mendukung.",
      },
      {
        id: "dewan-koinonia-sekretaris",
        name: "Nama Dewan Koinonia 2",
        role: "Sekretaris Dewan Koinonia",
        bio: "Mendukung perencanaan, pencatatan, dan tindak lanjut program koinonia bersama seksi-seksi agar pelayanan pembinaan jemaat berjalan tertib.",
      },
      {
        id: "dewan-koinonia-bendahara",
        name: "Nama Dewan Koinonia 3",
        role: "Bendahara Dewan Koinonia",
        bio: "Membantu pengelolaan kebutuhan pelayanan koinonia secara bertanggung jawab untuk mendukung kegiatan kategorial dan pembinaan jemaat.",
      },
    ],
    councilSections: [
      {
        id: "seksi-sekolah-minggu",
        title: "Seksi Sekolah Minggu",
        description:
          "Seksi Sekolah Minggu mendampingi pelayanan anak melalui pembinaan iman, ibadah anak, dan kegiatan yang menolong anak mengenal firman Tuhan sejak dini.",
        profiles: createSectionProfiles("Seksi Sekolah Minggu"),
      },
      {
        id: "seksi-remaja",
        title: "Seksi Remaja",
        description:
          "Seksi Remaja mengembangkan pembinaan iman dan persekutuan remaja agar bertumbuh dalam karakter, relasi yang sehat, dan keterlibatan pelayanan gereja.",
        profiles: createSectionProfiles("Seksi Remaja"),
      },
      {
        id: "seksi-naposobulung",
        title: "Seksi Naposobulung",
        description:
          "Seksi Naposobulung menjadi ruang pelayanan pemuda untuk bertumbuh dalam iman, kepemimpinan, kreativitas, dan kesaksian di tengah jemaat.",
        profiles: createSectionProfiles("Seksi Naposobulung"),
      },
      {
        id: "seksi-parompuan",
        title: "Seksi Parompuan",
        description:
          "Seksi Parompuan memperkuat pelayanan perempuan melalui persekutuan, pembinaan keluarga, pelayanan kasih, dan dukungan aktif dalam kehidupan jemaat.",
        profiles: createSectionProfiles("Seksi Parompuan"),
      },
      {
        id: "seksi-ama",
        title: "Seksi Ama",
        description:
          "Seksi Ama menggerakkan pelayanan kaum bapak dalam pembinaan iman, teladan keluarga, persekutuan, dan keterlibatan dalam program gereja.",
        profiles: createSectionProfiles("Seksi Ama"),
      },
      {
        id: "seksi-lansia",
        title: "Seksi Lansia",
        description:
          "Seksi Lansia memperhatikan warga lanjut usia melalui persekutuan, kunjungan, pendampingan rohani, dan kegiatan yang membangun sukacita bersama.",
        profiles: createSectionProfiles("Seksi Lansia"),
      },
    ],
  },
  "pelayanan/dewan-marturia": {
    title: "Dewan Marturia",
    eyebrow: "Pelayanan",
    layoutVariant: "council",
    description:
      "Bidang kesaksian gereja melalui pekabaran Injil, komunikasi, dan keterlibatan publik.",
    summary:
      "Dewan Marturia mengajak jemaat menyatakan kabar baik melalui kesaksian hidup, pelayanan komunikasi, dan kegiatan yang menjangkau masyarakat.",
    highlights: ["Kesaksian iman", "Publikasi", "Pekabaran Injil"],
    sections: [
      {
        title: "Ruang Pelayanan",
        body: "Meliputi publikasi kegiatan gereja, pelayanan media, pewartaan kabar baik, dan dukungan terhadap kegiatan yang memperkenalkan kasih Kristus.",
      },
      {
        title: "Dampak",
        body: "Kesaksian jemaat diharapkan nyata melalui perkataan, tindakan, keterbukaan, dan kerja sama yang baik dengan lingkungan.",
      },
    ],
    organizationProfiles: [
      {
        id: "dewan-marturia-ketua",
        name: "Nama Dewan Marturia 1",
        role: "Ketua Dewan Marturia",
        bio: "Mengoordinasikan pelayanan kesaksian gereja melalui pewartaan, komunikasi, publikasi, dan penguatan semangat misi jemaat.",
      },
      {
        id: "dewan-marturia-sekretaris",
        name: "Nama Dewan Marturia 2",
        role: "Sekretaris Dewan Marturia",
        bio: "Mendukung administrasi program marturia, pencatatan kegiatan, dan koordinasi antar seksi agar pelayanan kesaksian berjalan rapi.",
      },
      {
        id: "dewan-marturia-bendahara",
        name: "Nama Dewan Marturia 3",
        role: "Bendahara Dewan Marturia",
        bio: "Membantu pengelolaan kebutuhan pelayanan marturia secara tertib untuk mendukung program zending, musik, dan publikasi gereja.",
      },
    ],
    councilSections: [
      {
        id: "seksi-zending",
        title: "Seksi Zending",
        description:
          "Seksi Zending menggerakkan semangat pekabaran Injil, kepedulian misi, dan dukungan jemaat untuk pelayanan kesaksian di dalam maupun di luar lingkungan gereja.",
        profiles: createSectionProfiles("Seksi Zending"),
      },
      {
        id: "seksi-musik",
        title: "Seksi Musik",
        description:
          "Seksi Musik mendukung pelayanan pujian melalui pembinaan pemusik, song leader, koor, dan tata pelayanan musik yang menolong jemaat beribadah.",
        profiles: createSectionProfiles("Seksi Musik"),
      },
    ],
  },
  "pelayanan/dewan-diakonia": {
    title: "Dewan Diakonia",
    eyebrow: "Pelayanan",
    layoutVariant: "council",
    description:
      "Bidang pelayanan kasih untuk warga jemaat dan masyarakat yang membutuhkan perhatian.",
    summary:
      "Dewan Diakonia mengelola pelayanan kasih agar gereja hadir secara nyata bagi yang sakit, berduka, berkekurangan, atau membutuhkan pendampingan.",
    highlights: ["Kunjungan", "Bantuan kasih", "Pendampingan"],
    sections: [
      {
        title: "Bentuk Pelayanan",
        body: "Kunjungan pastoral, dukungan bagi keluarga berduka, bantuan sosial, perhatian kepada lansia, dan kerja sama pelayanan kemanusiaan.",
      },
      {
        title: "Semangat Pelayanan",
        body: "Diakonia dilakukan dengan kasih, kerendahan hati, dan tanggung jawab supaya setiap bantuan benar-benar menjawab kebutuhan.",
      },
    ],
    organizationProfiles: [
      {
        id: "dewan-diakonia-ketua",
        name: "Nama Dewan Diakonia 1",
        role: "Ketua Dewan Diakonia",
        bio: "Mengoordinasikan pelayanan kasih jemaat agar kunjungan, kepedulian sosial, dan pendampingan warga dapat berjalan tepat sasaran.",
      },
      {
        id: "dewan-diakonia-sekretaris",
        name: "Nama Dewan Diakonia 2",
        role: "Sekretaris Dewan Diakonia",
        bio: "Mendukung pencatatan program, koordinasi pelayanan, dan dokumentasi kebutuhan diakonia supaya pelayanan kasih dapat ditindaklanjuti dengan baik.",
      },
      {
        id: "dewan-diakonia-bendahara",
        name: "Nama Dewan Diakonia 3",
        role: "Bendahara Dewan Diakonia",
        bio: "Membantu mengelola dukungan dan kebutuhan pelayanan diakonia secara bertanggung jawab bagi warga jemaat dan masyarakat yang membutuhkan.",
      },
    ],
    councilSections: [
      {
        id: "seksi-diakoni-sosial",
        title: "Seksi Diakoni Sosial",
        description:
          "Seksi Diakoni Sosial mengoordinasikan pelayanan kasih bagi warga jemaat dan masyarakat yang membutuhkan perhatian, dukungan, dan pendampingan.",
        profiles: createSectionProfiles("Seksi Diakoni Sosial"),
      },
      {
        id: "seksi-pendidikan",
        title: "Seksi Pendidikan",
        description:
          "Seksi Pendidikan memperhatikan dukungan pendidikan, pembinaan belajar, dan program yang menolong warga jemaat bertumbuh dalam pengetahuan dan karakter.",
        profiles: createSectionProfiles("Seksi Pendidikan"),
      },
      {
        id: "seksi-kesehatan",
        title: "Seksi Kesehatan",
        description:
          "Seksi Kesehatan mendukung pelayanan kesehatan jemaat melalui edukasi, perhatian kepada yang sakit, dan kegiatan promotif yang membangun kepedulian.",
        profiles: createSectionProfiles("Seksi Kesehatan"),
      },
      {
        id: "seksi-kemasyarakatan",
        title: "Seksi Kemasyarakatan",
        description:
          "Seksi Kemasyarakatan menjembatani kepedulian gereja dengan lingkungan sekitar melalui kerja sama sosial, komunikasi, dan pelayanan masyarakat.",
        profiles: createSectionProfiles("Seksi Kemasyarakatan"),
      },
    ],
  },
  "pelayanan/wilayah-wijk": {
    title: "Wilayah (Wijk)",
    eyebrow: "Pelayanan",
    layoutVariant: "wijk",
    description:
      "Ruang pelayanan terdekat bagi keluarga jemaat untuk bertumbuh dalam persekutuan, perhatian, dan komunikasi yang hangat.",
    summary:
      "Setiap wijk menjadi lingkar pelayanan yang menolong gereja hadir lebih dekat di tengah kehidupan keluarga jemaat.",
    highlights: [
      "Partangiangan dan persekutuan keluarga",
      "Kunjungan serta perhatian pastoral",
      "Koordinasi informasi pelayanan jemaat",
    ],
    sections: [
      {
        title: "Hidup Bersekutu di Wijk",
        body: "Wijk adalah tempat warga jemaat saling mengenal, saling mendoakan, dan saling menopang dalam kehidupan sehari-hari. Melalui wijk, pelayanan gereja tidak hanya hadir dalam ibadah Minggu, tetapi juga dekat dengan rumah, keluarga, sukacita, pergumulan, dan kebutuhan warga jemaat.",
      },
      {
        title: "Pelayanan yang Dekat",
        body: "Kegiatan wijk dapat meliputi partangiangan, kunjungan keluarga, pendataan jemaat, penyampaian informasi gereja, gotong royong, serta dukungan saat ada peristiwa sukacita maupun dukacita. Konten ini disiapkan agar nantinya dapat diperbarui dari CMS sesuai data dan kebutuhan pelayanan terbaru.",
      },
    ],
    wijkItems: [
      {
        name: "Zaitun",
        description: "Jalan abc, jalan def, ... dan sekitarnya",
      },
      {
        name: "Galilea",
        description: "Jalan abc, jalan def, ... dan sekitarnya",
      },
      {
        name: "Yerusalem",
        description: "Jalan abc, jalan def, ... dan sekitarnya",
      },
      {
        name: "Nazareth",
        description: "Jalan abc, jalan def, ... dan sekitarnya",
      },
      {
        name: "Judea",
        description: "Jalan abc, jalan def, ... dan sekitarnya",
      },
      {
        name: "Getsemane",
        description: "Jalan abc, jalan def, ... dan sekitarnya",
      },
      {
        name: "Diaspora",
        description: "Jalan abc, jalan def, ... dan sekitarnya",
      },
      {
        name: "Betlehem",
        description: "Jalan abc, jalan def, ... dan sekitarnya",
      },
      {
        name: "Kana",
        description: "Jalan abc, jalan def, ... dan sekitarnya",
      },
    ],
  },
  "pelayanan/sintua-purnabakti": {
    title: "Sintua Purnabakti",
    eyebrow: "Pelayanan",
    description:
      "Ruang penghormatan bagi para sintua purnabakti yang telah melayani jemaat dalam masa tugasnya.",
    summary:
      "Sintua purnabakti adalah bagian penting dari perjalanan pelayanan gereja. Halaman ini memuat dokumentasi foto, nama, jabatan, masa tugas, dan kisah pelayanan singkat.",
    highlights: ["Dokumentasi pelayanan", "Masa tugas", "Pencarian nama"],
    sections: [
      {
        title: "Penghargaan Pelayanan",
        body: "Halaman ini menolong jemaat mengenal dan mengingat para sintua purnabakti yang pernah ambil bagian dalam pelayanan, penggembalaan, dan kehidupan persekutuan gereja.",
      },
      {
        title: "Arsip Pelayanan",
        body: "Daftar sintua purnabakti menjadi arsip penghormatan yang dapat terus dilengkapi dengan foto, masa tugas, dan cerita pelayanan singkat.",
      },
    ],
    retiredElderProfiles,
  },
  "pelayanan/jadwal-pelayanan": {
    title: "Jadwal Pelayanan",
    eyebrow: "Agenda Gereja",
    layoutVariant: "article",
    description:
      "Informasi jadwal ibadah, partangiangan, dan pelayanan khusus jemaat.",
    summary:
      "Jadwal pelayanan membantu jemaat menyiapkan diri untuk beribadah, melayani, dan hadir dalam kegiatan persekutuan dengan tertib.",
    highlights: [
      "Ibadah Minggu",
      "Partangiangan",
      "Pelayanan khusus",
    ],
    sections: [
      {
        title: "Ibadah Minggu",
        body: "Ibadah Minggu dilaksanakan sebagai ruang utama persekutuan jemaat untuk memuji Tuhan, mendengar firman, berdoa, dan menerima penguatan iman bersama keluarga besar HKBP Resort Srengseng Sawah.\n\nIbadah Pagi: 06.30 - selesai\nIbadah Siang: 09.30 - selesai\nIbadah Sore: 18.00 - selesai\nIbadah Remaja: 09.00 - selesai\nSekolah Minggu: 07.00 - selesai\n\nBagian ini juga dapat memuat nama pengkhotbah, liturgis, pembaca epistel, song leader, pemusik, kolektan, penerima tamu, petugas multimedia, dan pelayan lain yang bertugas dalam ibadah Minggu.",
      },
      {
        title: "Partangiangan",
        body: "Partangiangan wijk menjadi ruang persekutuan keluarga jemaat untuk berdoa, bernyanyi, membaca firman Tuhan, dan saling menguatkan dalam kehidupan sehari-hari. Melalui partangiangan, warga jemaat dapat semakin dekat satu sama lain dan semakin terhubung dengan pelayanan gereja.\n\nJadwal dapat menampilkan nama wijk, tanggal, waktu, alamat atau tuan rumah, pelayan firman, serta catatan khusus bagi warga yang hadir. Persekutuan doa kategorial juga dapat diumumkan di bagian ini sesuai program pembinaan jemaat.",
      },
      {
        title: "Pelayanan Khusus",
        body: "Pelayanan khusus meliputi baptisan kudus, naik sidi, pemberkatan pernikahan, perkunjungan orang sakit, penghiburan dukacita, dan pelayanan pastoral lainnya. Setiap pelayanan dilaksanakan dengan pendampingan firman, doa, serta tata pelayanan gereja yang tertib.\n\nWarga jemaat dapat menghubungi kantor gereja, pendeta, atau parhalado wijk untuk mengetahui persyaratan, jadwal, dokumen yang perlu disiapkan, serta bentuk pendampingan yang diperlukan.",
      },
    ],
    callout:
      "Konten jadwal pelayanan dapat diperbarui melalui CMS sesuai agenda pelayanan terbaru.",
  },
  "warta-jemaat": {
    title: "Warta Jemaat",
    eyebrow: "Informasi Mingguan",
    description:
      "Pengumuman ibadah, agenda, persembahan, dan berita pelayanan jemaat.",
    summary:
      "Warta jemaat menjadi kanal informasi resmi agar warga mengetahui agenda pelayanan, pokok doa, kegiatan, dan keputusan penting gereja.",
    highlights: ["Warta mingguan", "Pengumuman", "Arsip"],
    childPages: [
      {
        title: "Warta Mingguan",
        description:
          "Buka warta terbaru untuk ibadah dan kegiatan minggu berjalan.",
        href: "/warta-jemaat/warta-mingguan",
      },
      {
        title: "Arsip Warta",
        description:
          "Cari kumpulan warta terdahulu sebagai dokumentasi dan rujukan pelayanan.",
        href: "/warta-jemaat/arsip-warta",
      },
    ],
    sections: [
      {
        title: "Isi Warta",
        body: "Biasanya mencakup tata ibadah, pengumuman keluarga, jadwal pelayanan, laporan persembahan, agenda kategorial, dan informasi pastoral.",
      },
      {
        title: "Keteraturan Informasi",
        body: "Dengan warta yang rapi, jemaat dapat mengikuti kegiatan gereja tanpa kehilangan informasi penting dari minggu ke minggu.",
      },
    ],
  },
  "warta-jemaat/warta-mingguan": {
    title: "Warta Mingguan",
    eyebrow: "Warta Jemaat",
    description:
      "Warta minggu ini terbuka otomatis dalam PDF viewer, lengkap dengan tombol unduh dan share untuk memudahkan distribusi kepada jemaat.",
    summary:
      "Halaman ini disiapkan untuk menampilkan warta terbaru, baik sebagai ringkasan web maupun tautan unduhan PDF resmi gereja dalam Bahasa Indonesia dan Bahasa Batak.",
    highlights: ["Tanggal warta", "Warna liturgi", "Dua versi bahasa"],
    sections: [
      {
        title: "Warta Terbaru",
        body: "Bagian ini dapat memuat tanggal Minggu, tema ibadah, daftar petugas, pengumuman keluarga, agenda pekan ini, dan informasi keuangan.",
      },
      {
        title: "Distribusi Digital",
        body: "Warta mingguan dapat dibagikan melalui tautan website agar mudah diakses oleh warga jemaat sebelum dan sesudah ibadah. Setiap warta dapat memiliki dua versi PDF, yaitu Bahasa Indonesia dan Bahasa Batak.",
      },
    ],
  },
  "warta-jemaat/arsip-warta": {
    title: "Arsip Warta",
    eyebrow: "Warta Jemaat",
    description:
      "Beberapa sample warta minggu yang sudah berlalu. Pilih salah satu arsip untuk langsung menampilkan PDF viewer di halaman ini.",
    summary:
      "Arsip warta membantu gereja menyimpan jejak pelayanan, pengumuman, dan kegiatan dari waktu ke waktu secara mudah dicari.",
    highlights: [
      "Data CMS atau PDF resmi",
      "Versi Indonesia dan Batak",
      "Riwayat pengumuman",
    ],
    sections: [
      {
        title: "Data Arsip",
        body: "Arsip sample ini siap diganti dengan data CMS atau file PDF resmi gereja ketika tersedia. Setiap arsip warta disiapkan untuk menyimpan dua versi PDF: Bahasa Indonesia dan Bahasa Batak.",
      },
      {
        title: "Cara Membuka",
        body: "Klik kartu arsip untuk membuka warta, lalu gunakan toolbar PDF untuk unduh, share, salin tautan, atau buka tab baru.",
      },
    ],
  },
  "berita-publikasi": {
    title: "Berita & Publikasi",
    eyebrow: "Kabar Jemaat",
    description:
      "Kumpulan berita kegiatan, artikel renungan, dan publikasi resmi untuk mendukung kehidupan persekutuan jemaat.",
    summary:
      "Setiap section berisi sample thumbnail yang dapat dibuka ke halaman detail, lengkap dengan fitur berbagi ke media sosial dan salin tautan.",
    highlights: [
      "Berita kegiatan",
      "Artikel dan renungan",
      "Publikasi resmi",
    ],
    sections: [
      {
        title: "Konten CMS",
        body: "Judul halaman, deskripsi, ringkasan, kategori publikasi, artikel, thumbnail, tanggal, penulis, dan isi detail dapat dipetakan dari CMS.",
      },
      {
        title: "Distribusi Digital",
        body: "Setiap publikasi dapat dibagikan melalui tautan website agar informasi pelayanan, renungan, dan pengumuman resmi mudah dijangkau jemaat.",
      },
    ],
  },
  persembahan: {
    title: "Persembahan",
    eyebrow: "Dukungan Pelayanan",
    description:
      "Informasi persembahan jemaat untuk mendukung pelayanan, persekutuan, kesaksian, dan pekerjaan kasih gereja.",
    summary:
      "Jemaat dapat memberikan persembahan melalui rekening gereja atau kanal pembayaran resmi yang diinformasikan oleh gereja.",
    highlights: [
      "Informasi persembahan",
      "Rekening gereja",
      "QRIS resmi",
    ],
    sections: [
      {
        title: "Informasi Persembahan",
        body: "Persembahan adalah bagian dari ungkapan syukur jemaat kepada Tuhan dan dukungan bagi pelayanan gereja. Setiap persembahan yang diterima akan digunakan untuk mendukung ibadah, pelayanan kategorial, kegiatan jemaat, pemeliharaan sarana gereja, serta pelayanan kasih sesuai tata kelola gereja.\n\nMohon pastikan setiap persembahan diberikan melalui kanal resmi gereja. Informasi rekening dan QRIS dapat diperbarui oleh admin melalui CMS agar selalu sesuai dengan data terbaru.",
      },
      {
        title: "Rekening Gereja",
        body: "Bank: -\nNomor Rekening: -\nAtas Nama: -\n\nSilakan lengkapi informasi rekening resmi gereja melalui CMS sebelum halaman ini dipublikasikan untuk jemaat.",
      },
      {
        title: "QRIS",
        body: "QRIS resmi gereja dapat ditampilkan pada bagian ini. Pastikan gambar QRIS yang digunakan berasal dari sumber resmi dan sudah diverifikasi oleh pengurus gereja.\n\nJika QRIS belum tersedia, admin dapat mengisi keterangan sementara atau menambahkan tautan/gambar QRIS melalui konten CMS.",
      },
    ],
  },
  kontak: {
    title: "Kontak",
    eyebrow: "Hubungi Kami",
    description:
      "Informasi alamat, kanal komunikasi, dan waktu pelayanan kantor gereja.",
    summary:
      "Warga jemaat dan pengunjung dapat menghubungi gereja untuk kebutuhan informasi ibadah, pelayanan pastoral, administrasi, dan kegiatan jemaat.",
    highlights: ["Alamat gereja", "Kontak kantor", "Jam pelayanan"],
    sections: [
      {
        title: "Alamat",
        body: "Gg. Amalia Jl. Srengseng Sawah No.4, RT.3/RW.3, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12630",
      },
      {
        title: "Kanal Komunikasi",
        body: "Telepon/WhatsApp: 08xx-xxxx-xxxx. Email: admin@hkbp.or.id. Informasi ini dapat disesuaikan dengan kontak resmi gereja.",
      },
      {
        title: "Jam Pelayanan",
        body: "Kantor gereja melayani administrasi jemaat pada hari kerja sesuai jadwal sekretariat. Untuk pelayanan darurat, hubungi pendeta atau parhalado wijk.",
      },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3854148016317!2d106.82937057509652!3d-6.3441070936456985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec3230939161%3A0xb778022ec0c0afde!2sHKBP%20Srengseng%20Sawah%20Lutheran%20Church!5e0!3m2!1sen!2sid!4v1781768122519!5m2!1sen!2sid",
  },
};

export const allPageSlugs = Object.keys(pageContent).filter(
  (slug) =>
    ![
      "warta-jemaat/warta-mingguan",
      "warta-jemaat/arsip-warta",
      "berita-publikasi",
    ].includes(slug),
);
