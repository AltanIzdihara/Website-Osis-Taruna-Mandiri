/* ============================================================
   OSIS Sekolah Taruna Mandiri — Main Script (Revamped)
   Editorial Prestige, Interactive Profiles, & Dynamic Scroll Connectors
   ============================================================ */

'use strict';

// ── Konfigurasi URL Arsip Google Drive Dokumentasi OSIS ────
// Ganti URL di bawah ini dengan tautan folder Google Drive dokumentasi resmi OSIS Anda:
const GOOGLE_DRIVE_DOCS_URL = 'https://drive.google.com/drive/folders/1cmWBuaZ6cVkEgeO37uouLKrPVnNicq1J?usp=drive_link';

// ── Utility ────────────────────────────────────────────────
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── Data Model: Profil Seluruh Pengurus OSIS Taruna Mandiri ─
const OSIS_MEMBERS = {
  "ketua": {
    name: "Khairatunne Hisan",
    role: "Ketua OSIS",
    badge: "Ketua",
    division: "Badan Pengurus Harian Inti",
    image: "assets/LogoTM.jpeg",
    vision: "Mewujudkan OSIS Sekolah Taruna Mandiri yang inklusif, proaktif, dan berdaya saing tinggi sebagai lokomotif pengembangan karakter dan kepemimpinan siswa yang unggul.",
    missions: [
      "Mengoptimalkan peran OSIS sebagai wadah representatif penampung dan pengawal aspirasi seluruh warga sekolah.",
      "Meningkatkan sinergi dan kolaborasi antarsubdivisi guna melahirkan inisiatif program yang berbobot dan berkelanjutan.",
      "Menumbuhkan kultur kepemimpinan siswa yang berintegritas, berempati, dan siap bersaing di tingkat nasional."
    ],
    programs: [
      "Taruna Leadership Summit & Character Camp",
      "Pekan Sinergi & Apresiasi Prestasi Siswa",
      "Forum Dialog Aspirasi Terpadu"
    ],
    // Ketua
    socials: {
      instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
      tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},

  },
  "wakil": {
    name: "Azri Danish Elthian",
    role: "Wakil Ketua",
    badge: "Wakil Ketua",
    division: "Badan Pengurus Harian Inti",
    image: "assets/LogoTM.jpeg",
    vision: "Membangun soliditas internal kepengurusan dan kesinambungan eksekusi program kerja OSIS yang terukur, adaptif, dan berorientasi hasil nyata.",
    missions: [
      "Menjamin efektivitas koordinasi operasional lintas divisi dan kepanitiaan kegiatan sekolah.",
      "Mengembangkan sistem monitoring dan evaluasi berkala untuk seluruh inisiatif OSIS.",
      "Menjadi mitra strategis Ketua OSIS dalam membangun komunikasi harmonis dengan dewan guru dan perwakilan kelas."
    ],
    programs: [
      "Internal Team Building & Leadership Workshop",
      "Sistem Monitoring Program Kerja Terpadu",
      "Pekan Disiplin & Solidaritas Siswa"
    ],
    // Wakil
    socials: {
      instagram: { handle: "@danish.elthian", url: "https://instagram.com/danish.elthian" },
      tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  
  },
  "sekretaris-1": {
    name: "Rista Anggreani Nababan",
    role: "Sekretaris I",
    badge: "Sekretaris I",
    division: "Administrasi & Kesekretariatan",
    image: "assets/LogoTM.jpeg",
    vision: "Mewujudkan tata kelola administrasi dan pengarsipan OSIS yang tertib, transparan, akurat, dan terdigitalisasi.",
    missions: [
      "Menyusun sistem dokumentasi surat-menyurat dan proposal kegiatan yang rapi, cepat, dan akurat.",
      "Mengintegrasikan platform administrasi digital untuk mempermudah distribusi informasi kepengurusan.",
      "Mendokumentasikan seluruh notulensi rapat dan risalah keputusan secara detail dan tersentralisasi."
    ],
    programs: [
      "Digital Administrative Hub OSIS",
      "Penyusunan Risalah & Arsip Tahunan Organisasi",
      "Standardisasi Dokumen Surat & Proposal Kegiatan"
    ],
    // Sekre 1
    socials: {
      instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
      tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },
  "sekretaris-2": {
    name: "Danishwara C.Hazman",
    role: "Sekretaris II",
    badge: "Sekretaris II",
    division: "Administrasi & Kesekretariatan",
    image: "assets/LogoTM.jpeg",
    vision: "Mendukung kelancaran arus birokrasi dan tata laksana operasional kepengurusan yang efisien, cermat, dan responsif.",
    missions: [
      "Mengelola jadwal kegiatan, notulensi berkala, dan data inventaris kepengurusan OSIS.",
      "Menjaga kelancaran koordinasi persuratan antarseksi dan pembina OSIS.",
      "Memastikan keteraturan logistik administrasi dalam setiap pelaksanaan agenda sekolah."
    ],
    programs: [
      "Kalender Kegiatan & Agenda Terpadu Sekolah",
      "Database & Inventarisasi Anggota Digital",
      "Publikasi Notulensi & Buletin Kerja Bulanan"
    ],
    // Sekre 2
    socials: {
      instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
      tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },
  "bendahara-1": {
    name: "Aiko Azarine",
    role: "Bendahara I",
    badge: "Bendahara I",
    division: "Keuangan & Anggaran",
    image: "assets/LogoTM.jpeg",
    vision: "Mewujudkan pengelolaan keuangan OSIS yang akuntabel, transparan, hemat, dan berdaya guna maksimal bagi kegiatan siswa.",
    missions: [
      "Menyusun pembukuan arus kas (cash flow) yang sistematis dan terverifikasi secara berkala.",
      "Mengawasi realisasi anggaran belanja setiap divisi agar tepat sasaran dan efisien.",
      "Menyajikan laporan pertanggungjawaban keuangan yang terbuka dan dapat diakses pembina serta pengurus."
    ],
    programs: [
      "Laporan Transparansi Kas Bulanan OSIS",
      "Audit Efisiensi Anggaran Proker Terpadu",
      "Standardisasi Pembukuan Kas Digital"
    ],
    // Bendahara 1
    socials: {
      instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
      tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },
  "bendahara-2": {
    name: "Dania Tsabita Kusnandar",
    role: "Bendahara II",
    badge: "Bendahara II",
    division: "Keuangan & Anggaran",
    image: "assets/LogoTM.jpeg",
    vision: "Menciptakan stabilitas finansial kepengurusan serta efektivitas pengelolaan dana taktis dan usaha kreatif siswa.",
    missions: [
      "Membantu pencatatan pemasukan, iuran kas, dan dana sponsor kegiatan secara cermat.",
      "Mengembangkan unit kewirausahaan kreatif OSIS guna menambah kemandirian kas organisasi.",
      "Memastikan tertib bukti transaksi fisik maupun digital pada seluruh pembelanjaan operasional."
    ],
    programs: [
      "Kewirausahaan Mandiri Siswa (Taruna Merch)",
      "Digital Cash Receipt & Invoice Tracking",
      "Alokasi Dana Taktis & Tanggap Siswa"
    ],
    // Bendahara 2
    socials: {
      instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
      tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },
  // ── DIVISI 1: PUBLIKASI DAN DESAIN (PDD) ────
  "pdd-altan": {
    name: "M.Altan Izdihara Ramadhan",
    role: "Koordinasi PDD",
    badge: "Koor PDD",
    division: "Divisi Publikasi Dan Desain",
    image: "assets/LogoTM.jpeg",
    vision: "Menghadirkan citra visual OSIS yang berkelas, artistik, dan profesional sebagai etalase prestasi dan karya siswa Taruna Mandiri. #ITB Its Calling",
    missions: [
      "Memimpin perencanaan konsep multimedia, publikasi digital, dan tata dekorasi di setiap kegiatan akbar sekolah.",
      "Menyelaraskan alur kerja tim dokumentasi, editor visual, dan perancang panggung agar tepat waktu dan berstandar tinggi.",
      "Menjaga konsistensi identitas visual OSIS di seluruh media informasi fisik maupun daring."
    ],
    programs: [
      "Grand Aftermovie Acara Tahunan",
      "Master Visual Identity & Media Kit OSIS",
      "Manajemen Tata Panggung & Lighting Acara"
    ],
    // Koor PDD
socials: {
  instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
  tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },
  "pdd-khadziya": {
    name: "Khadziya Ramadhani Gultom",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    vision: "Menciptakan narasi visual yang menarik, informatif, dan estetik untuk menjangkau seluruh siswa secara kreatif.",
    missions: [
      "Merancang materi konten feeds dan story media sosial yang interaktif dan komunikatif.",
      "Menyusun tata letak poster informasi, banner promosi, dan jadwal agenda sekolah.",
      "Membantu kurasi foto dan video terbaik untuk publikasi berkala."
    ],
    programs: [
      "Kampanye Visual Media Sosial Mingguan",
      "Desain Poster Interaktif Kegiatan",
      "Instagram Story Highlights & Recap"
    ],
    // Anggota PDD
socials: {
  instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
  tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },
  "pdd-janpiter": {
    name: "Piter Tampubolon",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    vision: "Mengabadikan setiap momentum berharga sekolah dengan kualitas sinematik dan komposisi visual yang menginspirasi.",
    missions: [
      "Bertindak sebagai videografer utama pada liputan langsung kegiatan siswa dan upacara bendera.",
      "Melakukan proses editing, color grading, dan audio mixing video recap kegiatan.",
      "Mengelola penyimpanan arsip video mentah dan aset rekaman sekolah."
    ],
    programs: [
      "Video Dokumentasi & Teaser Kegiatan",
      "Short Reels Sinematik Acara Sekolah",
      "Arsip Cloud Footage Acara"
    ],
    // Anggota PDD
socials: {
  instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
  tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },
  "pdd-kembang": {
    name: "Kembang Cahsingpadang W",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    vision: "Mewujudkan tata ruang dekorasi dan instalasi panggung yang tematik, memukau, dan sarat nilai seni.",
    missions: [
      "Merancang sketsa dan konsep dekorasi panggung utama untuk peringatan hari nasional dan event siswa.",
      "Mengkoordinir pengadaan dan perakitan ornamen artistik ramah lingkungan.",
      "Memastikan keindahan tata ruang photobooth dan sudut estetik di arena kegiatan."
    ],
    programs: [
      "Dekorasi Tematik Acara Sekolah",
      "Instalasi Photobooth Interaktif",
      "Pojok Karya Seni & Galeri Mini"
    ],
    // Anggota PDD
socials: {
  instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
  tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },
  "pdd-atika": {
    name: "Atika Putri Najmiya",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    vision: "Menyampaikan informasi kegiatan OSIS melalui tipografi, ilustrasi, dan desain grafis yang mudah dipahami dan berkarakter.",
    missions: [
      "Mengembangkan aset ilustrasi dan grafis untuk media cetak maupun digital sekolah.",
      "Membuat kartu ucapan hari besar, sertifikat kegiatan, dan booklet panduan acara.",
      "Mendukung tim dekorasi dalam pemilihan palet warna dan estetika desain grafis."
    ],
    programs: [
      "Desain Sertifikat & Booklet Acara",
      "Ilustrasi Karakter Edukatif Taruna",
      "Infografis Rangkuman Kegiatan Siswa"
    ],
    // Anggota PDD
socials: {
  instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
  tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },
  "pdd-said": {
    name: "Said Jibril Tjikoe",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    vision: "Menjamin ketersediaan dokumentasi fotografi berkualitas tinggi dengan ketepatan bidikan pada setiap detik berharga.",
    missions: [
      "Mengabadikan ekspresi, perjuangan, dan kemenangan siswa dalam ajang kompetisi maupun kegiatan rutin.",
      "Mengoperasikan perangkat kamera, lensa, dan tata cahaya foto indoor maupun outdoor.",
      "Melakukan proses seleksi dan editing foto untuk katalog dokumentasi sekolah."
    ],
    programs: [
      "Fotografi Dokumentasi Eksklusif",
      "Kurasi Foto Momen Terbaik Mingguan",
      "Koleksi Foto Portofolio Angkatan"
    ],
    // Anggota PDD
socials: {
  instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
  tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },
  "pdd-malaeka": {
    name: "Malaeka Ayu Siti Almiah",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    vision: "Menyusun arsip digital dan katalog kenangan sekolah yang rapi, tertata, dan mudah diakses oleh seluruh siswa dan alumni.",
    missions: [
      "Mengelola struktur folder arsip Google Drive dan metadata foto/video dokumentasi.",
      "Membantu penyusunan buku kenangan digital (digital yearbook) dan majalah dinding visual.",
      "Mempersiapkan rilis dokumentasi cepat pasca-acara selesai."
    ],
    programs: [
      "Digital Yearbook & Buku Kenangan",
      "Sistem Manajemen Arsip Foto Cloud",
      "Rilis Kilat Dokumentasi Pasca-Event"
    ],
    // Anggota PDD
socials: {
  instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
  tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
},
  },

  // ── DIVISI 2: PENDIDIKAN & LINGKUNGAN HIDUP (PELITA) ───────
  "pelita-nayla": {
    name: "Nayla Alifa Anzalika",
    role: "Koordinasi Pelita",
    badge: "Koor Pelita",
    division: "Divisi Pendidikan & Lingkungan Hidup",
    image: "assets/LogoTM.jpeg",
    vision: "Membangun atmosfer sekolah yang haus ilmu, berdaya nalar kritis, dan peduli terhadap kelestarian lingkungan hidup.",
    missions: [
      "Memimpin perumusan agenda olimpiade akademik, gerakan literasi, dan aksi cinta lingkungan.",
      "Menjalin sinergi dengan guru mata pelajaran dalam mendukung delegasi kompetisi sains siswa.",
      "Mengevaluasi keberlanjutan program peduli lingkungan dan kebersihan sekolah."
    ],
    programs: [
      "Taruna Academic Festival & Olympiad",
      "Gerakan Taruna Green School & Zero Plastic",
      "Forum Diskusi Ilmiah Siswa"
    ]
  },
  "pelita-galih": {
    name: "Galih Andhika Praditya",
    role: "Anggota Pelita",
    badge: "Anggota Pelita",
    division: "Divisi Pendidikan & Lingkungan Hidup",
    image: "assets/LogoTM.jpeg",
    vision: "Menjadikan sains dan teknologi sebagai ruang eksplorasi yang menyenangkan dan memicu inovasi nyata siswa.",
    missions: [
      "Mengorganisasi kompetisi sains antarkelas dan pameran proyek eksperimen siswa.",
      "Mendampingi kelompok belajar persiapan olimpiade akademik (OSN).",
      "Menyajikan fakta sains dan edukasi teknologi mingguan di majalah dinding."
    ],
    programs: [
      "Science Fair & Pameran Inovasi Siswa",
      "Klub Belajar Persiapan Olimpiade",
      "Kuis Cerdas Cermat Sains Antarkelas"
    ]
  },
  "pelita-nadhira": {
    name: "Nadhira Izza Afkarina",
    role: "Anggota Pelita",
    badge: "Anggota Pelita",
    division: "Divisi Pendidikan & Lingkungan Hidup",
    image: "assets/LogoTM.jpeg",
    vision: "Menghidupkan budaya membaca dan menulis sebagai fondasi kemajuan cara berpikir generasi muda.",
    missions: [
      "Mengelola sudut baca kelas dan perpustakaan mini OSIS yang nyaman dan variatif.",
      "Menginisiasi lomba resensi buku, menulis cerpen, dan cipta puisi antarsiswa.",
      "Mengadakan sesi bedah buku inspiratif bersama guru tamu dan penulis muda."
    ],
    programs: [
      "Pojok Literasi & Taruna Book Club",
      "Pekan Cipta Puisi & Cerpen Taruna",
      "Sesi Bedah Buku Inspiratif Berkala"
    ]
  },
  "pelita-zahra": {
    name: "Zahra Kamilya Bilqis",
    role: "Anggota Pelita",
    badge: "Anggota Pelita",
    division: "Divisi Pendidikan & Lingkungan Hidup",
    image: "assets/LogoTM.jpeg",
    vision: "Mewujudkan lingkungan sekolah yang asri, hijau, bersih, dan menanamkan kesadaran ekologis sejak dini.",
    missions: [
      "Mengawal pelaksanaan program pemilahan sampah organik dan anorganik di setiap kelas.",
      "Mengorganisasi kegiatan penanaman pohon dan perawatan taman sekolah bersama perwakilan kelas.",
      "Mengedukasi siswa mengenai bahaya pemanasan global dan efisiensi energi."
    ],
    programs: [
      "Bank Sampah Mandiri Sekolah",
      "Aksi Tanam Pohon & Apotek Hidup",
      "Kampanye Hemat Energi & Air Bersih"
    ]
  },
  "pelita-shafa": {
    name: "Paquetta Shafa Aphrodite",
    role: "Anggota Pelita",
    badge: "Anggota Pelita",
    division: "Divisi Pendidikan & Lingkungan Hidup",
    image: "assets/LogoTM.jpeg",
    vision: "Mempererat solidaritas belajar siswa melalui sistem pendampingan sebaya yang inklusif dan solutif.",
    missions: [
      "Mengkoordinir jadwal bimbingan belajar sebaya (peer tutoring) menjelang asesmen dan ujian sekolah.",
      "Menyusun bank latihan soal dan rangkuman materi pelajaran yang dibagikan secara digital.",
      "Membantu siswa yang mengalami kendala belajar dengan metode diskusi santai."
    ],
    programs: [
      "Peer Tutoring: Belajar Bareng Taruna",
      "Distribusi Bank Soal Digital Asesmen",
      "Klinik Belajar Interaktif Sebaya"
    ]
  },

  // ── DIVISI 3: SENI & OLAHRAGA (SENIORA) ────────────────────
  "seniora-imam": {
    name: "Imam Sulistomo",
    role: "Koordinasi Seniora",
    badge: "Koor Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    vision: "Menyalurkan energi positif, sportivitas, dan kreativitas siswa Taruna Mandiri melalui panggung seni dan arena olahraga yang bergengsi.",
    missions: [
      "Memimpin perancangan dan pelaksanaan kompetisi olahraga akbar tahunan sekolah.",
      "Mengkoordinasi seluruh subseksi cabang olahraga dan pementasan seni budaya.",
      "Menjaga netralitas, keamanan, dan sportivitas tinggi dalam setiap turnamen."
    ],
    programs: [
      "Taruna Cup: Liga Olahraga Tahunan",
      "Pentas Seni & Kreasi Budaya Siswa",
      "Pembinaan Kontingen Olahraga Sekolah"
    ]
  },
  "seniora-nethanya": {
    name: "Nethanya Azatalya Nareswari",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    vision: "Memberikan ruang panggung bagi bakat musik, vokal, dan pertunjukan siswa agar berkembang penuh percaya diri.",
    missions: [
      "Mengelola pertunjukan live acoustic pada jam istirahat dan festival sekolah.",
      "Mengkurasi dan melatih band serta paduan suara perwakilan sekolah.",
      "Menyusun tata kelola perlengkapan musik dan sound system kegiatan."
    ],
    programs: [
      "Panggung Akustik Istirahat Kreatif",
      "Festival Band & Vokal Solo Siswa",
      "Kompilasi Musik Taruna Berkarya"
    ]
  },
  "seniora-alvin": {
    name: "Muhammad Alvin Januar",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    vision: "Membangun semangat juang, daya tahan fisik, dan ketangkasan siswa melalui kejuaraan futsal dan sepak bola.",
    missions: [
      "Mengatur bagan pertandingan, perwasitan, dan regulasi kompetisi futsal sekolah.",
      "Menyelenggarakan latihan bersama antarkelas untuk mempererat persaudaraan.",
      "Memastikan kesiapan lapangan dan medis pertolongan pertama saat tanding."
    ],
    programs: [
      "Turnamen Futsal Antarkelas Taruna",
      "Laga Persahabatan Antarsekolah",
      "Pelatihan Wasit & Fairplay Siswa"
    ]
  },
  "seniora-raditya": {
    name: "I Gde Bintang Raditya",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    vision: "Mengembangkan antusiasme olahraga bola basket dan voli sebagai arena pembuktian sportivitas dan kerjasama tim tangguh.",
    missions: [
      "Menyelenggarakan kompetisi basket 3on3 dan turnamen voli putra-putri.",
      "Mengkoordinasikan tim logistik perlengkapan bola, ring, dan net lapangan.",
      "Mendorong partisipasi aktif siswa dari seluruh jenjang kelas."
    ],
    programs: [
      "Taruna 3on3 Basketball Challenge",
      "Turnamen Voli Antarangkatan",
      "Klinik Kebugaran Jasmani Siswa"
    ]
  },
  "seniora-novzhafran": {
    name: "Muhammad Novzhafran",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    vision: "Mengembangkan apresiasi terhadap seni rupa, mural, fotografi artistik, dan kriya tangan siswa.",
    missions: [
      "Mengorganisir pameran galeri lukisan, sketsa, dan kerajinan tangan siswa.",
      "Memfasilitasi workshop menggambar dan pembuatan mural dinding sekolah.",
      "Menyediakan ruang ekspresi visual yang positif di sudut sekolah."
    ],
    programs: [
      "Mural Art Project: Dinding Inspirasi",
      "Pameran Seni Rupa & Desain Siswa",
      "Lomba Desain Poster Kreatif"
    ]
  },
  "seniora-asha": {
    name: "Asha Meidina Setyaningrum",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    vision: "Melestarikan kekayaan seni tari tradisional dan modern sebagai identitas keanggunan budaya generasi bangsa.",
    missions: [
      "Mempersiapkan koreografi tari persembahan untuk penyambutan tamu kehormatan.",
      "Menyelenggarakan workshop tari daerah dan modern dance untuk siswa.",
      "Mengkoordinir kostum dan tata rias pertunjukan panggung seni."
    ],
    programs: [
      "Tari Tradisional & Modern Showcase",
      "Workshop Tari Kreasi Nusantara",
      "Pentas Kolaborasi Tari dan Drama"
    ]
  },
  "seniora-talitha": {
    name: "Talitha Luthfia Azzarine",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    vision: "Menggalakkan gaya hidup aktif, sehat, dan bugar melalui olahraga rekreasi yang ceria bagi seluruh warga sekolah.",
    missions: [
      "Memimpin pelaksanaan senam kesegaran jasmani rutin bersama dewan guru dan siswa.",
      "Menyusun agenda turnamen bulutangkis dan tenis meja antarkelas.",
      "Mengkampanyekan pentingnya asupan gizi seimbang dan hidrasi bagi atlet siswa."
    ],
    programs: [
      "Jumat Sehat: Senam Bersama Taruna",
      "Kejuaraan Bulutangkis Antarkelas",
      "Kampanye Hidup Sehat & Bugar"
    ]
  },

  // ── DIVISI 4: KEROHANIAN & BUDI PEKERTI (AGAMA) ───────────
  "agama-rafa": {
    name: "Fathi Fawwaz Ar Rafaa",
    role: "Koordinasi Agama",
    badge: "Koor Agama",
    division: "Divisi Kerohanian & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    vision: "Menanamkan nilai-nilai religius, akhlak mulia, dan toleransi antarumat beragama yang harmonis di lingkungan sekolah.",
    missions: [
      "Memimpin pelaksanaan peringatan hari-hari besar keagamaan secara khidmat dan inklusif.",
      "Mengkoordinasikan kegiatan pembiasaan ibadah rutin harian siswa.",
      "Menjadi teladan dalam pembinaan budi pekerti, kejujuran, dan sopan santun."
    ],
    programs: [
      "Peringatan Hari Besar Keagamaan Nasional",
      "Taruna Peduli: Bakti Sosial Ramadhan & Hari Raya",
      "Forum Kajian Karakter & Etika Generasi Muda"
    ]
  },
  "agama-abigail": {
    name: "Abigail Anandhya Raharjani",
    role: "Anggota Agama",
    badge: "Anggota Agama",
    division: "Divisi Kerohanian & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    vision: "Mempererat persaudaraan, cinta kasih, dan kerukunan seluruh siswa dengan saling menghargai keyakinan.",
    missions: [
      "Mengorganisasi persekutuan doa dan ibadah bersama bagi siswa yang merayakan hari besar Kristiani.",
      "Mendorong aksi peduli kemanusiaan dan kunjungan ke panti asuhan.",
      "Membangun dialog antaragama yang menyejukkan di kalangan siswa."
    ],
    programs: [
      "Perayaan Natal Bersama Sekolah",
      "Aksi Kasih & Kunjungan Panti Asuhan",
      "Dialog Kerukunan Pelajar Taruna"
    ]
  },
  "agama-azizah": {
    name: "Azizah Octavia",
    role: "Anggota Agama",
    badge: "Anggota Agama",
    division: "Divisi Kerohanian & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    vision: "Menumbuhkan kecintaan membaca kitab suci dan memperdalam pemahaman ajaran agama dalam kehidupan sehari-hari.",
    missions: [
      "Mengelola kegiatan tadarus bersama dan kajian keputrian rutin setiap pekan.",
      "Menyiapkan materi tausiyah singkat edukatif di majalah dinding rohani.",
      "Membantu penataan dan kebersihan tempat ibadah sekolah."
    ],
    programs: [
      "Tadarus Pagi & Kajian Keputrian Rutin",
      "Pojok Mading Rohani Inspiratif",
      "Gerakan Sholat Berjamaah Tepat Waktu"
    ]
  },
  "agama-abdoel": {
    name: "Abdoel Agiez FD",
    role: "Anggota Agama",
    badge: "Anggota Agama",
    division: "Divisi Kerohanian & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    vision: "Membangun kepedulian sosial yang nyata melalui penggalangan infaq dan bantuan korban bencana alam.",
    missions: [
      "Mengkoordinasi pengelolaan kotak infaq Jumat berkah dan zakat fitrah sekolah.",
      "Menyalurkan bantuan tanggap bencana secara cepat, transparan, dan tepat sasaran.",
      "Menggerakkan partisipasi relawan siswa dalam kegiatan bakti sosial."
    ],
    programs: [
      "Infaq Jumat Berkah & Tanggap Bencana",
      "Penyaluran Zakat & Sedekah Taruna",
      "Relawan Sahabat Dhuafa Sekolah"
    ]
  },
  "agama-garneto": {
    name: "Garneto Dama Kawiswara",
    role: "Anggota Agama",
    badge: "Anggota Agama",
    division: "Divisi Kerohanian & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    vision: "Menegakkan budaya 5S (Senyum, Salam, Sapa, Sopan, Santun) demi terwujudnya sekolah yang damai dan beradab.",
    missions: [
      "Mengampanyekan sikap anti-perundungan (stop bullying) berlandaskan etika ketuhanan.",
      "Menjaga ketertiban dan kekhusyukan saat doa bersama pembukaan dan penutupan pelajaran.",
      "Membantu pelaksanaan pesantren kilat dan pembinaan rohani berkala."
    ],
    programs: [
      "Kampanye Budaya 5S & Anti-Bullying",
      "Pesantren Kilat & Retreat Pembinaan Budi Pekerti",
      "Pembiasaan Doa Bersama Berkarakter"
    ]
  },

  // ── DIVISI 5: HUBUNGAN MASYARAKAT (HUMAS) ─────────────────
  "humas-ifra": {
    name: "Ifra Shafana",
    role: "Koordinasi Humas",
    badge: "Koor Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    vision: "Membangun jembatan komunikasi yang transparan, terpercaya, dan proaktif antara OSIS, seluruh siswa, dewan guru, dan institusi eksternal.",
    missions: [
      "Memimpin strategi pengelolaan kotak aspirasi dan advokasi suara siswa ke pihak sekolah.",
      "Menjalin relasi diplomasi dan kolaborasi antarsekolah di tingkat kota/provinsi.",
      "Memastikan keterbukaan informasi seluruh program kerja OSIS secara tepat dan santun."
    ],
    programs: [
      "Forum Aspirasi Terbuka: Suara Taruna",
      "Studi Banding OSIS Antarsekolah",
      "Konferensi Pers & Rilis Program Kerja"
    ]
  },
  "humas-jasmine": {
    name: "Jasmine Novalia Tobing",
    role: "Anggota Humas",
    badge: "Anggota Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    vision: "Mendengar setiap masukan dan keluh kesah siswa dengan empati serta memberikan tanggapan yang konstruktif.",
    missions: [
      "Mengelola kotak saran fisik dan form aspirasi daring secara rahasia dan bertanggung jawab.",
      "Merekapitulasi isu-isu utama kebutuhan siswa untuk dibahas bersama perwakilan kelas (MPK).",
      "Menjembatani mediasi antarsiswa guna menjaga suasana belajar yang kondusif."
    ],
    programs: [
      "Kotak Saran Digital & Kotak Aspirasi Kelas",
      "Rapat Dengar Pendapat Perwakilan Kelas",
      "Survei Kepuasan Siswa Terhadap OSIS"
    ]
  },
  "humas-putra": {
    name: "Putra Claren Riwu",
    role: "Anggota Humas",
    badge: "Anggota Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    vision: "Membangun jaringan kemitraan eksternal dan sponsorship yang kokoh untuk mendukung kelancaran kegiatan siswa.",
    missions: [
      "Menyusun proposal sponsorship dan menjalin komunikasi dengan mitra pihak ketiga yang relevan.",
      "Menyambut dan mendampingi tamu luar sekolah serta narasumber seminar.",
      "Menjaga citra baik nama almamater Sekolah Taruna Mandiri di ruang publik."
    ],
    programs: [
      "Kemitraan Sponsorship & Kerjasama Acara",
      "Protokoler Penyambutan Tamu Sekolah",
      "Database Relasi Eksternal & Lembaga Mitra"
    ]
  },
  "humas-sasi": {
    name: "Sasi Fitri Ayu Erlangga",
    role: "Anggota Humas",
    badge: "Anggota Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    vision: "Menyebarkan informasi dan kabar prestasi sekolah secara cepat, akurat, dan menginspirasi.",
    missions: [
      "Menerbitkan buletin berkala dan siaran warta humas mengenai agenda sekolah.",
      "Berkoordinasi dengan perwakilan kelas untuk distribusi pengumuman resmi OSIS.",
      "Mempublikasikan apresiasi bagi siswa-siswi yang meraih prestasi membanggakan."
    ],
    programs: [
      "Buletin Warta Taruna Edisi Bulanan",
      "Jalur Komunikasi Cepat Ketua Kelas",
      "Apresiasi Bintang Prestasi Taruna"
    ]
  },
  "humas-kayla": {
    name: "Kayla Aisha Farhana Sabrie",
    role: "Anggota Humas",
    badge: "Anggota Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    vision: "Mempererat ikatan silaturahmi dengan para alumni guna membuka peluang mentoring dan bimbingan karir masa depan.",
    missions: [
      "Membangun database kontak alumni yang berprestasi di berbagai perguruan tinggi dan karir.",
      "Mengundang alumni sukses untuk berbagi pengalaman dalam sesi talkshow inspiratif.",
      "Memfasilitasi forum temu kangen dan kontribusi alumni bagi pengembangan sekolah."
    ],
    programs: [
      "Taruna Alumni Mentorship Talkshow",
      "Database Ikatan Alumni Taruna Mandiri",
      "Bakti Alumni untuk Almamater"
    ]
  },
  "humas-nadja": {
    name: "Nadja Zyarifa",
    role: "Anggota Humas",
    badge: "Anggota Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    vision: "Mengemas komunikasi publik OSIS yang ramah, sopan, dan representatif bagi dunia luar maupun media sosial.",
    missions: [
      "Bertindak sebagai Master of Ceremony (MC) dan pemandu acara dalam kegiatan resmi organisasi.",
      "Menangani korespondensi surat undangan antarorganisasi dan instansi dinas.",
      "Memastikan tata krama diplomasi sekolah tetap terjaga dengan integritas tinggi."
    ],
    programs: [
      "Pelatihan Public Speaking & MC Siswa",
      "Pengelolaan Surat Diplomasi Antarsekolah",
      "Duta Komunikasi & Hospitality Sekolah"
    ]
  }
};

// ── Nav: scroll state ──────────────────────────────────────
(function initNav() {
  const nav  = qs('#nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ── Nav: mobile hamburger ──────────────────────────────────
(function initHamburger() {
  const btn    = qs('#navHamburger');
  const mobile = qs('#navMobile');
  if (!btn || !mobile) return;

  const toggle = () => {
    const open = mobile.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    mobile.setAttribute('aria-hidden', String(!open));
  };

  btn.addEventListener('click', toggle);

  // Close on link click
  qsa('a', mobile).forEach(link => {
    link.addEventListener('click', () => {
      mobile.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      mobile.setAttribute('aria-hidden', 'true');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !mobile.contains(e.target)) {
      mobile.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      mobile.setAttribute('aria-hidden', 'true');
    }
  });
})();

// ── Scroll reveal (IntersectionObserver) ──────────────────
(function initReveal() {
  const items = qsa('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach(el => observer.observe(el));
})();

// ── Smooth active nav link highlight on scroll ─────────────
(function initActiveNav() {
  const sections = qsa('section[id]');
  const navLinks = qsa('.nav__links a, .nav__mobile a');
  if (!sections.length || !navLinks.length) return;

  const setActive = () => {
    const scrollY = window.scrollY + 100;
    let current   = '';

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();

// ── Division panel toggle ──────────────────────────────────
(function initDivisionToggle() {
  const btn   = qs('#divisionToggle');
  const panel = qs('#divisionPanel');
  if (!btn || !panel) return;

  btn.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(isOpen));
    panel.setAttribute('aria-hidden', String(!isOpen));

    // Update button label (Preserving original texts)
    const label = btn.querySelector('.btn__text');
    label.textContent = isOpen ? 'Sembunyikan' : 'Lihat Selengkapnya';

    // Smooth scroll supaya panel langsung kelihatan saat dibuka
    if (isOpen) {
      setTimeout(() => {
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 80);
    }
  });
})();

// ── Gallery filter ─────────────────────────────────────────
(function initGalleryFilter() {
  const filterBtns = qsa('.gallery__filter-btn');
  const items      = qsa('.gallery-item');
  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;

        if (match) {
          item.classList.remove('is-hidden');
          requestAnimationFrame(() => {
            item.style.opacity = '';
            item.style.transform = '';
          });
        } else {
          item.classList.add('is-hidden');
        }
      });
    });
  });
})();

// ── Gallery load more (Membuka Arsip Google Drive) ─────────
(function initGalleryLoadMore() {
  const btn = qs('#galleryLoadMore');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    // Jika elemen adalah tautan anchor <a>, pastikan href mengarah ke URL Google Drive
    if (btn.tagName.toLowerCase() === 'a') {
      btn.setAttribute('href', GOOGLE_DRIVE_DOCS_URL);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
      return;
    }
    // Jika elemen berupa tombol, buka link Google Drive di tab baru
    e.preventDefault();
    window.open(GOOGLE_DRIVE_DOCS_URL, '_blank', 'noopener,noreferrer');
  });
})();

// ── Hybrid Profile Modal & Bottom Sheet Controller ─────────
(function initProfileModal() {
  const modal      = qs('#profileModal');
  const backdrop   = qs('#modalBackdrop');
  const dialog     = qs('#modalDialog');
  const closeBtn   = qs('#modalClose');
  const avatarEl   = qs('#modalAvatar');
  const badgeEl    = qs('#modalBadge');
  const divisionEl = qs('#modalDivision');
  const nameEl     = qs('#modalName');
  const roleEl     = qs('#modalRole');
  const visionEl   = qs('#modalVision');
  const missionsEl = qs('#modalMissions');
  const prokersEl  = qs('#modalProkers');

  if (!modal || !dialog) return;

  let activeTrigger = null;

  const openModal = (memberId, triggerEl) => {
    const data = OSIS_MEMBERS[memberId];
    if (!data) return;

    activeTrigger = triggerEl;

    // Populate data
    nameEl.textContent     = data.name;
    roleEl.textContent     = data.role;
    badgeEl.textContent    = data.badge;
    divisionEl.textContent = data.division;
    visionEl.textContent   = data.vision;

    // Render Avatar
    avatarEl.innerHTML = `
      <img src="${data.image || 'assets/LogoTM.jpeg'}" alt="Foto ${data.name}" class="profile-modal__avatar-img" />
    `;

    // Render Missions
    missionsEl.innerHTML = data.missions.map((m, idx) => `
      <li class="profile-modal__list-item">
        <span class="profile-modal__num">${String(idx + 1).padStart(2, '0')}</span>
        <span>${m}</span>
      </li>
    `).join('');

    // Render Work Programs
    prokersEl.innerHTML = data.programs.map(p => `
      <div class="proker-badge">
        <span class="proker-badge__dot"></span>
        <span class="proker-badge__title">${p}</span>
      </div>
    `).join('');

    // Render Sosmed Personal
const socialsGrid = qs('#modalSocialsGrid');
const socialsBlock = qs('#modalSocialsBlock');
if (socialsGrid) {
  const s = data.socials || {};
  let html = '';

  if (s.instagram) {
    html += `
      <a href="${s.instagram.url}" target="_blank" rel="noopener noreferrer" class="modal-social-card modal-social-card--ig">
        <div class="modal-social-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
        <div class="modal-social-card__content">
          <span class="modal-social-card__platform">Instagram</span>
          <span class="modal-social-card__handle">${s.instagram.handle}</span>
        </div>
        <span class="modal-social-card__arrow" aria-hidden="true">↗</span>
      </a>`;
  }

  if (s.tiktok) {
    html += `
      <a href="${s.tiktok.url}" target="_blank" rel="noopener noreferrer" class="modal-social-card modal-social-card--tiktok">
        <div class="modal-social-card__icon">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.35 0 .69.06 1 .17V9.08a6.37 6.37 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.34a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.16 8.16 0 0 0 4.91 1.63V6.94a4.85 4.85 0 0 1-1-.25z"/>
          </svg>
        </div>
        <div class="modal-social-card__content">
          <span class="modal-social-card__platform">TikTok</span>
          <span class="modal-social-card__handle">${s.tiktok.handle}</span>
        </div>
        <span class="modal-social-card__arrow" aria-hidden="true">↗</span>
      </a>`;
  }

  socialsGrid.innerHTML = html;
  // Sembunyikan block sosmed kalau tidak ada data sama sekali
  if (socialsBlock) {
    socialsBlock.style.display = (!s.instagram && !s.tiktok) ? 'none' : '';
  }
}


    // Open states
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Accessibility focus
    closeBtn.focus();
  };

  const closeModal = () => {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    // Return focus to triggering card
    if (activeTrigger) {
      activeTrigger.focus();
      activeTrigger = null;
    }
  };

  // Attach triggers to all cards with data-member-id
  const attachTriggers = () => {
    const triggers = qsa('[data-member-id]');
    triggers.forEach(el => {
      const handler = (e) => {
        const memberId = el.getAttribute('data-member-id');
        if (memberId && OSIS_MEMBERS[memberId]) {
          e.stopPropagation();
          openModal(memberId, el);
        }
      };

      el.addEventListener('click', handler);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler(e);
        }
      });
    });
  };

  attachTriggers();

  // Close handlers
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Touch swipe-down for Mobile Bottom Sheet
  let touchStartY = 0;
  let touchCurrentY = 0;

  dialog.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  dialog.addEventListener('touchmove', (e) => {
    touchCurrentY = e.touches[0].clientY;
    const diff = touchCurrentY - touchStartY;
    if (diff > 0 && dialog.scrollTop <= 0) {
      dialog.style.transform = `translateY(${diff * 0.7}px)`;
    }
  }, { passive: true });

  dialog.addEventListener('touchend', () => {
    const diff = touchCurrentY - touchStartY;
    if (diff > 85 && dialog.scrollTop <= 0) {
      closeModal();
    }
    dialog.style.transform = '';
    touchStartY = 0;
    touchCurrentY = 0;
  });
})();

// ── Dynamic Scroll-Driven Organizational Hierarchy Lines ───
(function initScrollConnectors() {
  const structureSec = qs('#structure');
  if (!structureSec) return;

  const line1        = qs('#connectorLine1');
  const glow1        = qs('#connectorGlow1');
  const forkStem     = qs('#connectorForkStem');
  const forkBar      = qs('#connectorForkBar');
  const forkLegL     = qs('#connectorForkLegL');
  const forkLegR     = qs('#connectorForkLegR');
  const mobileMid    = qs('#connectorMobileMid');
  const mobileSub    = qs('#connectorMobileSub');
  const cards        = qsa('.profile-card--interactive');

  const updateConnectors = () => {
    const rect = structureSec.getBoundingClientRect();
    const winHeight = window.innerHeight;

    // Start progress when top of structure enters viewport
    const startY = winHeight * 0.8;
    const endY   = winHeight * 0.1;
    const totalDist = rect.height + startY - endY;
    const scrolled = startY - rect.top;

    let progress = Math.max(0, Math.min(1, scrolled / totalDist));

    // Dynamic line thickening: from 1.5px up to 4px
    const thickness = (1.5 + progress * 2.5).toFixed(2);
    structureSec.style.setProperty('--connector-thickness', `${thickness}px`);
    structureSec.style.setProperty('--scroll-progress', progress.toFixed(3));

    // ── Phase 1: Ketua → Wakil (0.05 - 0.32)
    const p1 = Math.max(0, Math.min(1, (progress - 0.05) / 0.27));
    if (line1) line1.style.height = `${p1 * 100}%`;
    if (glow1) {
      glow1.style.top = `${p1 * 100}%`;
      glow1.style.opacity = p1 > 0.02 && p1 < 0.98 ? '1' : (p1 >= 0.98 ? '0.5' : '0');
    }

    // ── Phase 2: Fork Stem (0.30 - 0.44)
    const pStem = Math.max(0, Math.min(1, (progress - 0.30) / 0.14));
    if (forkStem) forkStem.style.height = `${pStem * 100}%`;

    // ── Phase 3: Fork Horizontal Bar (0.44 - 0.58)
    const pBar = Math.max(0, Math.min(1, (progress - 0.44) / 0.14));
    if (forkBar) forkBar.style.width = `${pBar * 100}%`;

    // ── Phase 4: Fork Legs down into Sek & Bendahara (0.58 - 0.72)
    const pLegs = Math.max(0, Math.min(1, (progress - 0.58) / 0.14));
    if (forkLegL) forkLegL.style.height = `${pLegs * 100}%`;
    if (forkLegR) forkLegR.style.height = `${pLegs * 100}%`;

    // ── Mobile-only vertical line segments
    if (mobileMid) {
      const pMid = Math.max(0, Math.min(1, (progress - 0.32) / 0.25));
      mobileMid.style.height = `${pMid * 100}%`;
    }
    if (mobileSub) {
      const pSub = Math.max(0, Math.min(1, (progress - 0.52) / 0.25));
      mobileSub.style.height = `${pSub * 100}%`;
    }

    // ── Interactive node pulse activation
    cards.forEach(card => {
      const cRect = card.getBoundingClientRect();
      const reached = (cRect.top + cRect.height * 0.4) <= (winHeight * 0.72);
      card.classList.toggle('is-active-node', reached);
    });
  };

  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateConnectors);
  }, { passive: true });

  window.addEventListener('resize', () => {
    requestAnimationFrame(updateConnectors);
  }, { passive: true });

  // Initial calculation
  updateConnectors();
})();
