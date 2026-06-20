export type PublicationCategory =
  | "Berita Kegiatan"
  | "Artikel dan Renungan"
  | "Publikasi Resmi";

export type PublicationItem = {
  slug: string;
  title: string;
  category: PublicationCategory;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  thumbnailUrl?: string;
  thumbnailTone: string;
  content: string[];
};

export const publicationSections: {
  title: PublicationCategory;
  description: string;
}[] = [
  {
    title: "Berita Kegiatan",
    description:
      "Laporan kegiatan ibadah, pelayanan kategorial, kunjungan, dan aksi sosial jemaat.",
  },
  {
    title: "Artikel dan Renungan",
    description:
      "Tulisan pembinaan iman, refleksi firman, dan catatan pastoral untuk menguatkan jemaat.",
  },
  {
    title: "Publikasi Resmi",
    description:
      "Pengumuman, undangan, poster kegiatan, dan informasi terbuka dari gereja.",
  },
];

export const publications: PublicationItem[] = [
  {
    slug: "pelayanan-kasih-di-lingkungan-jemaat",
    title: "Pelayanan Kasih di Lingkungan Jemaat",
    category: "Berita Kegiatan",
    excerpt:
      "Tim diakonia bersama parhalado melaksanakan kunjungan dan pembagian paket kasih bagi keluarga yang membutuhkan.",
    date: "Minggu, 7 Juni 2026",
    author: "Tim Publikasi",
    readTime: "3 menit baca",
    thumbnailTone: "from-hkbp-primary via-sky-600 to-cyan-400",
    content: [
      "Pelayanan kasih menjadi salah satu wujud nyata panggilan gereja untuk hadir di tengah kebutuhan jemaat. Kegiatan ini melibatkan parhalado, kategorial, dan relawan yang bersama-sama menyiapkan paket dukungan serta kunjungan pastoral.",
      "Selain menyalurkan bantuan, tim juga mendengarkan pergumulan keluarga dan mendoakan setiap rumah yang dikunjungi. Kehadiran sederhana seperti ini diharapkan menumbuhkan rasa saling menopang di antara warga jemaat.",
      "Ke depan, gereja akan terus memperbarui pendataan kebutuhan agar pelayanan diakonia dapat dilakukan lebih terarah, berkelanjutan, dan melibatkan lebih banyak warga jemaat.",
    ],
  },
  {
    slug: "remaja-dan-naposo-mengadakan-pembinaan-bersama",
    title: "Remaja dan Naposo Mengadakan Pembinaan Bersama",
    category: "Berita Kegiatan",
    excerpt:
      "Kegiatan pembinaan lintas kategorial membahas pelayanan, pertemanan sehat, dan komitmen bertumbuh dalam firman.",
    date: "Sabtu, 30 Mei 2026",
    author: "Seksi Remaja dan Naposo",
    readTime: "4 menit baca",
    thumbnailTone: "from-slate-800 via-sky-700 to-teal-500",
    content: [
      "Remaja dan Naposo mengadakan pembinaan bersama sebagai ruang belajar, berdiskusi, dan saling mengenal. Sesi utama menolong peserta melihat pelayanan bukan hanya sebagai kegiatan gereja, tetapi sebagai cara hidup yang dibentuk oleh kasih Kristus.",
      "Peserta dibagi dalam kelompok kecil untuk membahas tantangan pergaulan, penggunaan media sosial, dan pentingnya komunitas yang sehat. Diskusi berlangsung terbuka dengan pendampingan pelayan kategorial.",
      "Melalui kegiatan ini, gereja berharap generasi muda semakin percaya diri mengambil bagian dalam ibadah, musik, multimedia, kunjungan, dan pelayanan sosial.",
    ],
  },
  {
    slug: "gotong-royong-persiapan-ibadah-minggu",
    title: "Gotong Royong Persiapan Ibadah Minggu",
    category: "Berita Kegiatan",
    excerpt:
      "Warga jemaat bersama pelayan membersihkan area gereja dan menata ruang ibadah untuk menyambut ibadah Minggu.",
    date: "Sabtu, 23 Mei 2026",
    author: "Parhalado Wijk",
    readTime: "2 menit baca",
    thumbnailTone: "from-emerald-700 via-lime-600 to-yellow-400",
    content: [
      "Gotong royong persiapan ibadah Minggu dilakukan oleh warga jemaat dari beberapa wijk. Area halaman, ruang ibadah, perlengkapan liturgi, dan fasilitas pendukung ditata bersama.",
      "Kegiatan ini menjadi pengingat bahwa pelayanan rumah Tuhan tidak hanya berlangsung di mimbar, tetapi juga melalui pekerjaan sederhana yang dikerjakan dengan sukacita.",
      "Majelis jemaat mengucapkan terima kasih kepada seluruh warga yang telah mengambil bagian dan mengundang jemaat lain untuk ikut dalam jadwal gotong royong berikutnya.",
    ],
  },
  {
    slug: "bertumbuh-dalam-ketekunan-doa",
    title: "Bertumbuh dalam Ketekunan Doa",
    category: "Artikel dan Renungan",
    excerpt:
      "Renungan singkat tentang doa sebagai nafas iman yang menolong jemaat tetap berharap dan setia melayani.",
    date: "Rabu, 17 Juni 2026",
    author: "Pdt. Ressort",
    readTime: "5 menit baca",
    thumbnailTone: "from-indigo-800 via-violet-700 to-fuchsia-500",
    content: [
      "Doa sering kali dipahami sebagai permohonan, tetapi dalam kehidupan beriman doa juga adalah ruang perjumpaan. Di dalam doa, kita belajar jujur di hadapan Tuhan, menyerahkan kekhawatiran, dan menerima kekuatan untuk melangkah.",
      "Ketekunan doa tidak berarti semua persoalan langsung selesai. Ketekunan doa membentuk hati yang lebih peka, sabar, dan teguh. Jemaat yang berdoa bersama juga belajar memikul beban satu sama lain.",
      "Karena itu, mari menjadikan doa sebagai kebiasaan keluarga, wijk, dan kategorial. Dari ruang doa yang sederhana, Tuhan menumbuhkan iman yang kuat dan pelayanan yang setia.",
    ],
  },
  {
    slug: "melayani-dengan-talenta-yang-dititipkan",
    title: "Melayani dengan Talenta yang Dititipkan",
    category: "Artikel dan Renungan",
    excerpt:
      "Setiap warga jemaat memiliki bagian dalam pelayanan, baik melalui musik, kunjungan, administrasi, maupun perhatian sehari-hari.",
    date: "Selasa, 9 Juni 2026",
    author: "Tim Pembinaan",
    readTime: "4 menit baca",
    thumbnailTone: "from-cyan-800 via-blue-600 to-orange-400",
    content: [
      "Talenta bukan hanya kemampuan yang terlihat besar di depan banyak orang. Talenta juga hadir dalam kesetiaan mengatur jadwal, menolong anak-anak, menyambut tamu, merapikan ruang, dan menguatkan sesama.",
      "Pelayanan yang sehat bertumbuh ketika setiap orang menemukan tempatnya. Gereja menjadi tubuh yang bergerak bersama, bukan panggung bagi beberapa orang saja.",
      "Jika kita mulai dari apa yang ada di tangan, Tuhan dapat memakainya menjadi berkat. Satu langkah kecil dalam pelayanan bisa membuka jalan bagi pertumbuhan iman yang lebih dalam.",
    ],
  },
  {
    slug: "keluarga-sebagai-ruang-pertumbuhan-iman",
    title: "Keluarga sebagai Ruang Pertumbuhan Iman",
    category: "Artikel dan Renungan",
    excerpt:
      "Refleksi tentang ibadah keluarga, percakapan iman, dan kebiasaan saling mendoakan di rumah.",
    date: "Kamis, 4 Juni 2026",
    author: "Dewan Koinonia",
    readTime: "5 menit baca",
    thumbnailTone: "from-stone-800 via-hkbp-brand to-sky-400",
    content: [
      "Keluarga adalah tempat pertama banyak orang belajar mengenal kasih, pengampunan, dan kesetiaan. Karena itu, rumah juga dapat menjadi ruang pertumbuhan iman yang hangat dan terbuka.",
      "Ibadah keluarga tidak harus panjang. Membaca firman, menyanyikan satu lagu, berbagi cerita, dan berdoa bersama sudah dapat membentuk kebiasaan rohani yang berarti.",
      "Di tengah kesibukan, gereja mengajak setiap keluarga menyediakan waktu untuk saling mendengarkan dan mendoakan. Iman bertumbuh melalui ritme kecil yang dijalani dengan setia.",
    ],
  },
  {
    slug: "undangan-rapat-majelis-jemaat",
    title: "Undangan Rapat Majelis Jemaat",
    category: "Publikasi Resmi",
    excerpt:
      "Informasi rapat koordinasi pelayanan untuk evaluasi program dan persiapan agenda gereja bulan berikutnya.",
    date: "Jumat, 12 Juni 2026",
    author: "Sekretariat Gereja",
    readTime: "2 menit baca",
    thumbnailTone: "from-zinc-900 via-hkbp-brand to-yellow-500",
    content: [
      "Majelis jemaat mengundang seluruh pelayan terkait untuk menghadiri rapat koordinasi pelayanan. Agenda utama mencakup evaluasi kegiatan berjalan, penetapan jadwal pelayanan, dan persiapan program bulan berikutnya.",
      "Peserta rapat dimohon membawa catatan bidang pelayanan masing-masing agar pembahasan dapat berjalan tertib dan keputusan dapat segera ditindaklanjuti.",
      "Informasi teknis mengenai waktu, tempat, dan bahan rapat dapat dikonfirmasi melalui sekretariat gereja atau koordinator bidang masing-masing.",
    ],
  },
  {
    slug: "pengumuman-pendaftaran-katekisasi",
    title: "Pengumuman Pendaftaran Katekisasi",
    category: "Publikasi Resmi",
    excerpt:
      "Pendaftaran kelas katekisasi dibuka untuk warga jemaat yang akan mengikuti pembinaan iman menuju pengakuan percaya.",
    date: "Senin, 8 Juni 2026",
    author: "Sekretariat Gereja",
    readTime: "3 menit baca",
    thumbnailTone: "from-blue-900 via-slate-700 to-hkbp-brand",
    content: [
      "Gereja membuka pendaftaran katekisasi bagi warga jemaat yang memenuhi syarat dan akan mengikuti pembinaan iman menuju pengakuan percaya. Orang tua atau wali dapat menghubungi sekretariat untuk memperoleh formulir dan daftar kelengkapan.",
      "Kelas katekisasi akan membahas pokok iman Kristen, pengenalan liturgi, tanggung jawab warga jemaat, dan kehidupan bersekutu dalam gereja.",
      "Jadwal pertemuan, nama pembimbing, dan batas akhir pendaftaran akan diumumkan dalam warta jemaat serta kanal komunikasi resmi gereja.",
    ],
  },
  {
    slug: "poster-jadwal-ibadah-hari-besar-gerejawi",
    title: "Poster Jadwal Ibadah Hari Besar Gerejawi",
    category: "Publikasi Resmi",
    excerpt:
      "Publikasi jadwal ibadah khusus untuk membantu jemaat menyiapkan kehadiran bersama keluarga.",
    date: "Minggu, 31 Mei 2026",
    author: "Tim Media",
    readTime: "2 menit baca",
    thumbnailTone: "from-hkbp-ink via-hkbp-brand to-emerald-500",
    content: [
      "Tim media menerbitkan poster jadwal ibadah hari besar gerejawi sebagai bahan informasi bagi jemaat. Poster ini dapat dibagikan melalui grup wijk, media sosial, dan kanal komunikasi gereja.",
      "Jemaat diharapkan memperhatikan jam ibadah, lokasi, dan informasi petugas pelayanan yang tercantum. Bila ada penyesuaian jadwal, pembaruan akan disampaikan melalui pengumuman resmi.",
      "Gereja mengajak keluarga jemaat hadir bersama dan mempersiapkan hati untuk mengikuti ibadah dengan tertib, sukacita, dan penuh syukur.",
    ],
  },
];

export const getPublicationsByCategory = (category: PublicationCategory) =>
  publications.filter((item) => item.category === category);

export const getPublicationBySlug = (slug: string) =>
  publications.find((item) => item.slug === slug);
