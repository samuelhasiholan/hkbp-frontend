type OrganizationProfile = {
  name: string;
  role: string;
};

type CouncilSection = {
  id: string;
  title: string;
  description: string;
  profiles: OrganizationProfile[];
};

export type RetiredElderProfile = {
  name: string;
  role: string;
  servicePeriod: string;
};

export type PageContent = {
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  highlights: string[];
  sections: {
    title: string;
    body: string;
  }[];
  organizationProfiles?: OrganizationProfile[];
  councilSections?: CouncilSection[];
  retiredElderProfiles?: RetiredElderProfile[];
  callout?: string;
};

export const SITE_NAME = "HKBP Resort Srengseng Sawah";

const createSectionProfiles = (sectionName: string): OrganizationProfile[] =>
  Array.from({ length: 5 }, (_, index) => ({
    name: `Nama ${sectionName} ${index + 1}`,
    role: `Jabatan ${sectionName} ${index + 1}`,
  }));

const retiredElderProfiles: RetiredElderProfile[] = Array.from(
  { length: 20 },
  (_, index) => ({
    name: `Nama Sintua Purnabakti ${index + 1}`,
    role: `Jabatan Sintua Purnabakti ${index + 1}`,
    servicePeriod: `Masa Tugas ${index + 1}`,
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
    description:
      "Catatan perjalanan jemaat dari awal persekutuan hingga pelayanan yang berlangsung saat ini.",
    summary:
      "Sejarah jemaat adalah kisah pertumbuhan iman bersama: dimulai dari kerinduan warga untuk bersekutu, lalu berkembang melalui ibadah, partangiangan, pelayanan kategorial, dan pembangunan sarana pelayanan.",
    highlights: [
      "Awal persekutuan",
      "Pertumbuhan jemaat",
      "Pelayanan masa kini",
    ],
    sections: [
      {
        title: "Awal Persekutuan",
        body: "Persekutuan jemaat lahir dari kebutuhan warga HKBP di daerah ini untuk memiliki tempat beribadah, saling menguatkan, dan melayani bersama dalam tradisi gereja Batak.",
      },
      {
        title: "Perkembangan Pelayanan",
        body: "Seiring bertambahnya keluarga jemaat, pelayanan berkembang melalui pembentukan wijk, kegiatan kategorial, pembinaan anak dan remaja, serta penataan jadwal ibadah yang lebih teratur.",
      },
      {
        title: "Warisan Iman",
        body: "Setiap generasi dipanggil menjaga warisan iman itu dengan kesetiaan beribadah, keterlibatan dalam pelayanan, dan keterbukaan untuk menjawab kebutuhan zaman.",
      },
    ],
  },
  "tentang-gereja/visi-misi": {
    title: "Visi & Misi",
    eyebrow: "Tentang Gereja",
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
        title: "Visi",
        body: "Menjadi jemaat HKBP yang berakar dalam firman Tuhan, hidup dalam persekutuan yang saling mengasihi, dan hadir sebagai berkat bagi masyarakat.",
      },
      {
        title: "Misi",
        body: "Membangun ibadah yang hidup, memperkuat pembinaan iman keluarga, menggerakkan pelayanan kategorial, meningkatkan kepedulian sosial, dan mengelola pelayanan gereja secara tertib serta transparan.",
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
    sections: [
      {
        title: "Dokumentasi Ibadah",
        body: "Berisi foto kegiatan ibadah Minggu, hari besar gerejawi, pelayanan musik, dan momen sakramen yang memperlihatkan kehidupan liturgi jemaat.",
      },
      {
        title: "Dokumentasi Kegiatan",
        body: "Memuat kegiatan sekolah Minggu, naposo, parompuan, ama, lansia, kunjungan, gotong royong, dan pelayanan sosial di lingkungan sekitar.",
      },
    ],
    callout:
      "Area galeri siap dihubungkan ke sistem unggah foto atau album digital saat datanya tersedia.",
  },
  organisasi: {
    title: "Organisasi",
    eyebrow: "Tata Pelayanan",
    description:
      "Struktur pelayan gereja yang mendukung ibadah, pembinaan, kesaksian, dan pelayanan kasih.",
    summary:
      "Organisasi jemaat menolong pelayanan berjalan tertib: pendeta, parhalado, fungsionaris, dewan, dan wijk bekerja bersama sesuai tugas masing-masing.",
    highlights: [
      "Pendeta dan parhalado",
      "Dewan pelayanan",
      "Wilayah atau wijk",
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
  "organisasi/pendeta": {
    title: "Pendeta",
    eyebrow: "Organisasi",
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
        name: "Nama Pendeta 1",
        role: "Jabatan Pendeta 1",
      },
      {
        name: "Nama Pendeta 2",
        role: "Jabatan Pendeta 2",
      },
      {
        name: "Nama Pendeta 3",
        role: "Jabatan Pendeta 3",
      },
    ],
  },
  "organisasi/fungsionaris": {
    title: "Fungsionaris",
    eyebrow: "Organisasi",
    description:
      "Pelayan yang membantu pengelolaan administrasi, keuangan, dan koordinasi kegiatan jemaat.",
    summary:
      "Fungsionaris menjaga roda organisasi berjalan rapi agar pelayanan gereja dapat dilaksanakan dengan transparan, terencana, dan bertanggung jawab.",
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
        name: "Nama Fungsionaris 1",
        role: "Jabatan Fungsionaris 1",
      },
      {
        name: "Nama Fungsionaris 2",
        role: "Jabatan Fungsionaris 2",
      },
      {
        name: "Nama Fungsionaris 3",
        role: "Jabatan Fungsionaris 3",
      },
    ],
  },
  "organisasi/dewan-koinonia": {
    title: "Dewan Koinonia",
    eyebrow: "Organisasi",
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
        name: "Nama Dewan Koinonia 1",
        role: "Jabatan Dewan Koinonia 1",
      },
      {
        name: "Nama Dewan Koinonia 2",
        role: "Jabatan Dewan Koinonia 2",
      },
      {
        name: "Nama Dewan Koinonia 3",
        role: "Jabatan Dewan Koinonia 3",
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
  "organisasi/dewan-marturia": {
    title: "Dewan Marturia",
    eyebrow: "Organisasi",
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
        name: "Nama Dewan Marturia 1",
        role: "Jabatan Dewan Marturia 1",
      },
      {
        name: "Nama Dewan Marturia 2",
        role: "Jabatan Dewan Marturia 2",
      },
      {
        name: "Nama Dewan Marturia 3",
        role: "Jabatan Dewan Marturia 3",
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
  "organisasi/dewan-diakonia": {
    title: "Dewan Diakonia",
    eyebrow: "Organisasi",
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
        name: "Nama Dewan Diakonia 1",
        role: "Jabatan Dewan Diakonia 1",
      },
      {
        name: "Nama Dewan Diakonia 2",
        role: "Jabatan Dewan Diakonia 2",
      },
      {
        name: "Nama Dewan Diakonia 3",
        role: "Jabatan Dewan Diakonia 3",
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
  "organisasi/wilayah-wijk": {
    title: "Wilayah (Wijk)",
    eyebrow: "Organisasi",
    description:
      "Pembagian wilayah pelayanan untuk mempererat perhatian dan koordinasi antar keluarga jemaat.",
    summary:
      "Wijk membantu gereja hadir lebih dekat dengan keluarga jemaat melalui partangiangan, kunjungan, pendataan, dan komunikasi pelayanan.",
    highlights: ["Pendataan keluarga", "Partangiangan wijk", "Kunjungan"],
    sections: [
      {
        title: "Fungsi Wijk",
        body: "Menjadi ruang pelayanan terdekat bagi keluarga jemaat, termasuk pengumuman, koordinasi kegiatan, dan perhatian terhadap kondisi warga.",
      },
      {
        title: "Kegiatan Wijk",
        body: "Biasanya meliputi partangiangan, pelayanan keluarga, gotong royong, dan dukungan saat ada peristiwa sukacita maupun dukacita.",
      },
    ],
  },
  "organisasi/sintua-purnabakti": {
    title: "Sintua Purnabakti",
    eyebrow: "Organisasi",
    description:
      "Ruang penghargaan bagi para sintua purnabakti yang telah melayani jemaat dalam masa tugasnya.",
    summary:
      "Sintua purnabakti adalah bagian penting dari perjalanan pelayanan gereja. Halaman ini disiapkan untuk memuat dokumentasi foto, nama, jabatan, dan masa tugas yang nantinya dapat diperbarui melalui CMS.",
    highlights: ["Dokumentasi pelayanan", "Masa tugas", "Pencarian nama"],
    sections: [
      {
        title: "Penghargaan Pelayanan",
        body: "Halaman ini menolong jemaat mengenal dan mengingat para sintua purnabakti yang pernah ambil bagian dalam pelayanan, penggembalaan, dan kehidupan persekutuan gereja.",
      },
      {
        title: "Data CMS",
        body: "Daftar sintua purnabakti disiapkan sebagai placeholder dan dapat disambungkan ke CMS untuk memperbarui foto, nama, jabatan, serta masa tugas.",
      },
    ],
    retiredElderProfiles,
  },
  "jadwal-pelayanan": {
    title: "Jadwal Pelayanan",
    eyebrow: "Agenda Gereja",
    description:
      "Informasi jadwal ibadah, partangiangan, dan pelayanan khusus jemaat.",
    summary:
      "Jadwal pelayanan membantu jemaat menyiapkan diri untuk beribadah, melayani, dan hadir dalam kegiatan persekutuan dengan tertib.",
    highlights: ["Ibadah Minggu", "Partangiangan", "Pelayanan khusus"],
    sections: [
      {
        title: "Informasi Terpadu",
        body: "Halaman ini menjadi pusat informasi untuk jadwal rutin maupun kegiatan khusus yang diumumkan oleh gereja.",
      },
      {
        title: "Keterlibatan Pelayan",
        body: "Petugas liturgi, song leader, pemusik, kolektan, penerima tamu, dan pelayan lain dapat menyesuaikan diri berdasarkan jadwal yang diterbitkan.",
      },
    ],
  },
  "jadwal-pelayanan/ibadah-minggu": {
    title: "Ibadah Minggu",
    eyebrow: "Jadwal Pelayanan",
    description: "Jadwal ibadah Minggu dan susunan pelayanan utama jemaat.",
    summary:
      "Ibadah Minggu menjadi pusat persekutuan jemaat untuk mendengar firman Tuhan, memuji, berdoa, dan mempersembahkan hidup bagi kemuliaan Allah.",
    highlights: ["Ibadah pagi", "Ibadah siang", "Pelayan liturgi"],
    sections: [
      {
        title: "Jadwal Umum",
        body: "Ibadah Minggu dapat dibagi dalam beberapa jam pelayanan sesuai kebutuhan jemaat, misalnya ibadah pagi, ibadah umum, dan ibadah kategorial.",
      },
      {
        title: "Informasi Petugas",
        body: "Bagian ini dapat memuat nama pengkhotbah, liturgis, pembaca epistel, song leader, pemusik, kolektan, dan petugas multimedia.",
      },
    ],
    callout: "Silakan sesuaikan jam ibadah dengan jadwal resmi jemaat.",
  },
  "jadwal-pelayanan/partangiangan": {
    title: "Partangiangan",
    eyebrow: "Jadwal Pelayanan",
    description:
      "Jadwal persekutuan doa di rumah keluarga, wijk, dan kelompok kategorial.",
    summary:
      "Partangiangan mempererat persekutuan keluarga jemaat melalui doa, nyanyian, pembacaan firman, dan saling menguatkan.",
    highlights: ["Partangiangan wijk", "Tuan rumah", "Pelayan firman"],
    sections: [
      {
        title: "Partangiangan Wijk",
        body: "Jadwal dapat menampilkan wijk, tanggal, alamat atau tuan rumah, pelayan firman, dan catatan khusus untuk warga yang hadir.",
      },
      {
        title: "Persekutuan Kategorial",
        body: "Selain wijk, partangiangan juga dapat dilakukan oleh kelompok kategorial sesuai program pembinaan jemaat.",
      },
    ],
  },
  "jadwal-pelayanan/pelayanan-khusus": {
    title: "Pelayanan Khusus",
    eyebrow: "Jadwal Pelayanan",
    description:
      "Informasi pelayanan baptis, sidi, pernikahan, penghiburan, dan kegiatan gerejawi khusus.",
    summary:
      "Pelayanan khusus membantu jemaat melewati momen penting kehidupan dengan pendampingan firman, doa, dan tata pelayanan gereja.",
    highlights: ["Baptis dan sidi", "Pernikahan", "Penghiburan"],
    sections: [
      {
        title: "Jenis Pelayanan",
        body: "Meliputi baptisan kudus, naik sidi, pemberkatan pernikahan, perkunjungan orang sakit, penghiburan dukacita, dan pelayanan pastoral lainnya.",
      },
      {
        title: "Koordinasi",
        body: "Warga jemaat dapat menghubungi kantor gereja atau parhalado wijk untuk mengetahui persyaratan, jadwal, dan pendampingan yang diperlukan.",
      },
    ],
  },
  "warta-jemaat": {
    title: "Warta Jemaat",
    eyebrow: "Informasi Mingguan",
    description:
      "Pengumuman ibadah, agenda, persembahan, dan berita pelayanan jemaat.",
    summary:
      "Warta jemaat menjadi kanal informasi resmi agar warga mengetahui agenda pelayanan, pokok doa, kegiatan, dan keputusan penting gereja.",
    highlights: ["Warta mingguan", "Pengumuman", "Arsip"],
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
      "Warta terbaru yang dibagikan untuk ibadah dan kegiatan minggu berjalan.",
    summary:
      "Halaman ini disiapkan untuk menampilkan warta terbaru, baik sebagai ringkasan web maupun tautan unduhan PDF.",
    highlights: ["Tata ibadah", "Pengumuman", "Unduh PDF"],
    sections: [
      {
        title: "Warta Terbaru",
        body: "Bagian ini dapat memuat tanggal Minggu, tema ibadah, daftar petugas, pengumuman keluarga, agenda pekan ini, dan informasi keuangan.",
      },
      {
        title: "Distribusi Digital",
        body: "Warta mingguan dapat dibagikan melalui tautan website agar mudah diakses oleh warga jemaat sebelum dan sesudah ibadah.",
      },
    ],
  },
  "warta-jemaat/arsip-warta": {
    title: "Arsip Warta",
    eyebrow: "Warta Jemaat",
    description:
      "Kumpulan warta jemaat terdahulu untuk dokumentasi dan rujukan.",
    summary:
      "Arsip warta membantu gereja menyimpan jejak pelayanan, pengumuman, dan kegiatan dari waktu ke waktu secara mudah dicari.",
    highlights: ["Arsip bulanan", "Dokumen PDF", "Riwayat pengumuman"],
    sections: [
      {
        title: "Penyimpanan",
        body: "Warta dapat dikelompokkan berdasarkan tahun dan bulan sehingga admin maupun warga jemaat mudah menemukan dokumen lama.",
      },
      {
        title: "Manfaat",
        body: "Arsip berguna untuk laporan pelayanan, dokumentasi program, dan rujukan saat mengevaluasi kegiatan gereja.",
      },
    ],
  },
  "berita-publikasi": {
    title: "Berita & Publikasi",
    eyebrow: "Kabar Jemaat",
    description:
      "Berita kegiatan, artikel renungan, pengumuman publik, dan publikasi pelayanan gereja.",
    summary:
      "Halaman ini menjadi ruang berbagi kabar baik tentang kegiatan jemaat, pelayanan kategorial, aksi sosial, dan tulisan yang membangun iman.",
    highlights: ["Berita kegiatan", "Artikel", "Publikasi resmi"],
    sections: [
      {
        title: "Berita Kegiatan",
        body: "Memuat laporan kegiatan ibadah khusus, pelayanan sosial, pembinaan, kunjungan, rapat jemaat, dan aktivitas kategorial.",
      },
      {
        title: "Artikel dan Renungan",
        body: "Dapat diisi dengan tulisan singkat dari pendeta, pelayan, atau tim publikasi untuk menguatkan iman jemaat.",
      },
      {
        title: "Publikasi Resmi",
        body: "Mencakup pengumuman terbuka, undangan kegiatan, poster, atau informasi penting yang perlu diketahui jemaat dan masyarakat.",
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
  },
};

export const allPageSlugs = Object.keys(pageContent);
