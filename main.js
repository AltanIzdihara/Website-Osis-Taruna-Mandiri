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
    bio: "Pemimpin yang berdedikasi membangun sinergi, integritas, dan semangat kebersamaan seluruh siswa Taruna Mandiri menuju organisasi yang berdaya saing.",
    hobbies: ["Public Speaking", "Debat Organisasi", "Membaca Buku", "Catur"],
    socials: {
      instagram: { handle: "@khairatunne_hisan", url: "https://instagram.com/khairatunne_hisan" },
      tiktok:    { handle: "@khairatunne", url: "https://tiktok.com/@khairatunne" }
    }
  },
  "wakil": {
    name: "Azri Danish Elthian",
    role: "Wakil Ketua",
    badge: "Wakil Ketua",
    division: "Badan Pengurus Harian Inti",
    image: "assets/LogoTM.jpeg",
    bio: "Fokus pada penguatan soliditas internal, koordinasi lintas divisi, serta kedisiplinan eksekusi program demi kemajuan sekolah bersama.",
    hobbies: ["Futsal", "Manajemen Tim", "Badminton", "Musik Akustik"],
    socials: {
      instagram: { handle: "@danish.elthian", url: "https://instagram.com/danish.elthian" },
      tiktok:    { handle: "@danishelthian", url: "https://tiktok.com/@danishelthian" }
    }
  },
  "sekretaris-1": {
    name: "Rista Anggreani Nababan",
    role: "Sekretaris I",
    badge: "Sekretaris I",
    division: "Administrasi & Kesekretariatan",
    image: "assets/LogoTM.jpeg",
    bio: "Teliti dan terorganisir dalam mengelola administrasi, pengarsipan resmi, dan korespondensi organisasi demi tata kelola yang profesional.",
    hobbies: ["Menulis Jurnal", "Tipografi", "Membaca Novel", "Bulu Tangkis"],
    socials: {
      instagram: { handle: "@rista.anggreani", url: "https://instagram.com/rista.anggreani" },
      tiktok:    { handle: "@rista_anggreani", url: "https://tiktok.com/@rista_anggreani" }
    }
  },
  "sekretaris-2": {
    name: "Danishwara C.Hazman",
    role: "Sekretaris II",
    badge: "Sekretaris II",
    division: "Administrasi & Kesekretariatan",
    image: "assets/LogoTM.jpeg",
    bio: "Mengedepankan ketepatan data dan efisiensi waktu dalam penyusunan jadwal, risalah rapat, serta inventarisasi dokumen OSIS.",
    hobbies: ["Coding & Web", "Desain Notulensi", "Membaca Ensiklopedia", "Game Strategi"],
    socials: {
      instagram: { handle: "@danishwara_ch", url: "https://instagram.com/danishwara_ch" },
      tiktok:    { handle: "@danishwarach", url: "https://tiktok.com/@danishwarach" }
    }
  },
  "bendahara-1": {
    name: "Aiko Azarine",
    role: "Bendahara I",
    badge: "Bendahara I",
    division: "Keuangan & Anggaran",
    image: "assets/LogoTM.jpeg",
    bio: "Akurat dan transparan dalam tata kelola anggaran kas organisasi guna mendukung suksesnya agenda kegiatan siswa secara akuntabel.",
    hobbies: ["Manajemen Keuangan", "Baking & Cooking", "Mendengarkan Musik", "Fotografi Estetik"],
    socials: {
      instagram: { handle: "@aiko_azarine", url: "https://instagram.com/aiko_azarine" },
      tiktok:    { handle: "@aikoazarine", url: "https://tiktok.com/@aikoazarine" }
    }
  },
  "bendahara-2": {
    name: "Dania Tsabita Kusnandar",
    role: "Bendahara II",
    badge: "Bendahara II",
    division: "Keuangan & Anggaran",
    image: "assets/LogoTM.jpeg",
    bio: "Cermat dalam verifikasi alokasi dana dan pencatatan transaksi agar setiap pembiayaan kegiatan berjalan tertib dan tepat guna.",
    hobbies: ["Matematika Terapan", "Melukis Cat Air", "Bulu Tangkis", "Menyusun Planner"],
    socials: {
      instagram: { handle: "@dania_tsabita", url: "https://instagram.com/dania_tsabita" },
      tiktok:    { handle: "@daniatsabita", url: "https://tiktok.com/@daniatsabita" }
    }
  },
  "pdd-altan": {
    name: "M.Altan Izdihara Ramadhan",
    role: "Koordinasi PDD",
    badge: "Koordinator PDD",
    division: "Divisi Publikasi Dan Desain",
    image: "assets/LogoTM.jpeg",
    bio: "Kreator visual yang berfokus menciptakan identitas desain modern, sinematografi acara, dan media publikasi digital OSIS yang berkelas.",
    hobbies: ["Graphic Design", "UI/UX Design", "Videografi", "Street Photography"],
    socials: {
      instagram: { handle: "@altan.izdihara", url: "https://instagram.com/altan.izdihara" },
      tiktok:    { handle: "@altanizdihara", url: "https://tiktok.com/@altanizdihara" }
    }
  },
  "pdd-khadziya": {
    name: "Khadziya Ramadhani Gultom",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    bio: "Antusias dalam merancang tata letak feeds sosial media, ilustrasi kreatif, dan konten informatif yang menarik perhatian siswa.",
    hobbies: ["Digital Illustration", "Motion Graphic", "Hand Lettering", "Koleksi Seni"],
    socials: {
      instagram: { handle: "@khadziya_rm", url: "https://instagram.com/khadziya_rm" },
      tiktok:    { handle: "@khadziyarm", url: "https://tiktok.com/@khadziyarm" }
    }
  },
  "pdd-janpiter": {
    name: "Piter Tampubolon",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    bio: "Pengambil momen visual di balik lensa dengan ketajaman estetika dokumentasi kegiatan dan produksi video profil sekolah.",
    hobbies: ["Dokumentasi Foto", "Color Grading", "Editing Video", "Gitar Akustik"],
    socials: {
      instagram: { handle: "@piter_tampubolon", url: "https://instagram.com/piter_tampubolon" },
      tiktok:    { handle: "@pitertampubolon", url: "https://tiktok.com/@pitertampubolon" }
    }
  },
  "pdd-kembang": {
    name: "Kembang Cahsingpadang W",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    bio: "Berdedikasi merancang dekorasi panggung artistik dan visual branding acara yang berkesan serta memanjakan mata.",
    hobbies: ["Dekorasi Artistik", "Crafting", "Sketsa Visual", "Fotografi Alam"],
    socials: {
      instagram: { handle: "@kembang_cahsing", url: "https://instagram.com/kembang_cahsing" },
      tiktok:    { handle: "@kembangcahsing", url: "https://tiktok.com/@kembangcahsing" }
    }
  },
  "pdd-atika": {
    name: "Atika Putri Najmiya",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    bio: "Aktif menyusun konten grafis publikasi dan copywriting interaktif untuk menyebarkan pesan positif serta info OSIS secara luas.",
    hobbies: ["Copywriting Kreatif", "Desain Poster", "Membaca Webtoon", "Podcast"],
    socials: {
      instagram: { handle: "@atika_najmiya", url: "https://instagram.com/atika_najmiya" },
      tiktok:    { handle: "@atikanajmiya", url: "https://tiktok.com/@atikanajmiya" }
    }
  },
  "pdd-said": {
    name: "Said Jibril Tjikoe",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    bio: "Fokus pada operasional multimedia, tata panggung teknis, dan live streaming kegiatan sekolah dengan performa andal.",
    hobbies: ["Audio Engineering", "Videografi Kamera", "Hardware Setup", "E-Sports"],
    socials: {
      instagram: { handle: "@said_tjikoe", url: "https://instagram.com/said_tjikoe" },
      tiktok:    { handle: "@saidtjikoe", url: "https://tiktok.com/@saidtjikoe" }
    }
  },
  "pdd-malaeka": {
    name: "Malaeka Ayu Siti Almiah",
    role: "Anggota PDD",
    badge: "Anggota PDD",
    division: "Divisi Publikasi, Dekorasi & Dokumentasi",
    image: "assets/LogoTM.jpeg",
    bio: "Mengemas feed media sosial dan arsip galeri sekolah dengan konsep visual yang rapi, modern, dan harmonis.",
    hobbies: ["Fotografi Potret", "Kreator Konten", "Fashion & Styling", "Journaling"],
    socials: {
      instagram: { handle: "@malaeka_ayu", url: "https://instagram.com/malaeka_ayu" },
      tiktok:    { handle: "@malaekaayu", url: "https://tiktok.com/@malaekaayu" }
    }
  },
  "pelita-nayla": {
    name: "Nayla Alifa Anzalika",
    role: "Koordinasi Pelita",
    badge: "Koordinator Pelita",
    division: "Divisi Pendidikan & Lingkungan Hidup",
    image: "assets/LogoTM.jpeg",
    bio: "Inspirator program literasi siswa dan aksi peduli lingkungan hijau untuk menciptakan ekosistem sekolah yang asri dan cerdas.",
    hobbies: ["Sains Lingkungan", "Urban Gardening", "Membaca Buku", "Volunteering"],
    socials: {
      instagram: { handle: "@nayla_anzalika", url: "https://instagram.com/nayla_anzalika" },
      tiktok:    { handle: "@naylaanzalika", url: "https://tiktok.com/@naylaanzalika" }
    }
  },
  "pelita-galih": {
    name: "Galih Andhika Praditya",
    role: "Anggota Pelita",
    badge: "Anggota Pelita",
    division: "Divisi Pendidikan & Lingkungan Hidup",
    image: "assets/LogoTM.jpeg",
    bio: "Penggerak inisiatif bank sampah, konservasi energi sekolah, dan edukasi ramah lingkungan bagi generasi muda Taruna Mandiri.",
    hobbies: ["Daur Ulang Kreatif", "Sepeda Santai", "Eksplorasi Alam", "Pencak Silat"],
    socials: {
      instagram: { handle: "@galih_andhika", url: "https://instagram.com/galih_andhika" },
      tiktok:    { handle: "@galihandhika", url: "https://tiktok.com/@galihandhika" }
    }
  },
  "pelita-nadhira": {
    name: "Nadhira Izza Afkarina",
    role: "Anggota Pelita",
    badge: "Anggota Pelita",
    division: "Divisi Pendidikan & Lingkungan Hidup",
    image: "assets/LogoTM.jpeg",
    bio: "Mendorong atmosfer belajar yang kolaboratif lewat kelompok studi siswa, seminar edukasi, dan bedah buku berkala.",
    hobbies: ["Debat Ilmiah", "Kepenulisan Esai", "Membaca Sains", "Renang"],
    socials: {
      instagram: { handle: "@nadhira_afkarina", url: "https://instagram.com/nadhira_afkarina" },
      tiktok:    { handle: "@nadhiraafkarina", url: "https://tiktok.com/@nadhiraafkarina" }
    }
  },
  "pelita-zahra": {
    name: "Zahra Kamilya Bilqis",
    role: "Anggota Pelita",
    badge: "Anggota Pelita",
    division: "Divisi Pendidikan & Lingkungan Hidup",
    image: "assets/LogoTM.jpeg",
    bio: "Peduli pada keberlanjutan alam dan pengasrian sudut sekolah melalui penghijauan serta edukasi gaya hidup minim sampah.",
    hobbies: ["Menanam Sukulen", "Merajut (Crochet)", "Menulis Puisi", "Cooking"],
    socials: {
      instagram: { handle: "@zahra_kamilya", url: "https://instagram.com/zahra_kamilya" },
      tiktok:    { handle: "@zahrakamilya", url: "https://tiktok.com/@zahrakamilya" }
    }
  },
  "pelita-shafa": {
    name: "Paquetta Shafa Aphrodite",
    role: "Anggota Pelita",
    badge: "Anggota Pelita",
    division: "Divisi Pendidikan & Lingkungan Hidup",
    image: "assets/LogoTM.jpeg",
    bio: "Semangat menyelenggarakan workshop edukasi interaktif dan program tutor sebaya untuk membantu prestasi akademis teman seangkatan.",
    hobbies: ["Bahasa Asing", "Public Speaking", "Mendengarkan Podcast", "Yoga"],
    socials: {
      instagram: { handle: "@shafa_aphrodite", url: "https://instagram.com/shafa_aphrodite" },
      tiktok:    { handle: "@shafaaphrodite", url: "https://tiktok.com/@shafaaphrodite" }
    }
  },
  "seniora-imam": {
    name: "Imam Sulistomo",
    role: "Koordinasi Seniora",
    badge: "Koordinator Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    bio: "Penyemangat talenta siswa di bidang olahraga dan pentas seni, menjunjung tinggi sportivitas dan kreativitas tanpa batas.",
    hobbies: ["Basket", "Lari Marathon", "Gitar Elektrik", "Fotografi Olahraga"],
    socials: {
      instagram: { handle: "@imam_sulistomo", url: "https://instagram.com/imam_sulistomo" },
      tiktok:    { handle: "@imamsulistomo", url: "https://tiktok.com/@imamsulistomo" }
    }
  },
  "seniora-nethanya": {
    name: "Nethanya Azatalya Nareswari",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    bio: "Mengekspresikan dinamika seni tari dan koreografi pertunjukan untuk memeriahkan setiap festival dan pentas panggung sekolah.",
    hobbies: ["Modern Dance", "Koreografi Tari", "Menyanyi Vokal", "Pilates"],
    socials: {
      instagram: { handle: "@nethanya_azatalya", url: "https://instagram.com/nethanya_azatalya" },
      tiktok:    { handle: "@nethanyaazatalya", url: "https://tiktok.com/@nethanyaazatalya" }
    }
  },
  "seniora-alvin": {
    name: "Muhammad Alvin Januar",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    bio: "Penggagas turnamen olahraga antarkelas yang kompetitif, sportif, dan memupuk solidaritas antarsiswa secara hangat.",
    hobbies: ["Futsal", "Sepak Bola", "Lari Sprint", "Game Sepakbola"],
    socials: {
      instagram: { handle: "@alvin_januar", url: "https://instagram.com/alvin_januar" },
      tiktok:    { handle: "@alvinjanuar", url: "https://tiktok.com/@alvinjanuar" }
    }
  },
  "seniora-raditya": {
    name: "I Gde Bintang Raditya",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    bio: "Pemusik yang mengorkestrasi pertunjukan band sekolah serta aransemen musik untuk festival seni tahunan Taruna Mandiri.",
    hobbies: ["Drumming", "Bermain Bass", "Sound Arranging", "Bulu Tangkis"],
    socials: {
      instagram: { handle: "@bintang_raditya", url: "https://instagram.com/bintang_raditya" },
      tiktok:    { handle: "@bintangraditya", url: "https://tiktok.com/@bintangraditya" }
    }
  },
  "seniora-novzhafran": {
    name: "Muhammad Novzhafran",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    bio: "Aktif membangun antusiasme kebugaran siswa lewat liga basket, senam ceria, dan kegiatan jasmani yang seru dan menyehatkan.",
    hobbies: ["Street Basketball", "Workout", "Sepeda BMX", "Musik Hip-Hop"],
    socials: {
      instagram: { handle: "@nov_zhafran", url: "https://instagram.com/nov_zhafran" },
      tiktok:    { handle: "@novzhafran", url: "https://tiktok.com/@novzhafran" }
    }
  },
  "seniora-asha": {
    name: "Asha Meidina Setyaningrum",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    bio: "Mewadahi kecintaan seni rupa dan pameran karya visual siswa agar bakat seni rupa sekolah mendapatkan panggung apresiasi.",
    hobbies: ["Seni Lukis Kanvas", "Ilustrasi Manual", "Kerajinan Tangan", "Fotografi"],
    socials: {
      instagram: { handle: "@asha_meidina", url: "https://instagram.com/asha_meidina" },
      tiktok:    { handle: "@ashameidina", url: "https://tiktok.com/@ashameidina" }
    }
  },
  "seniora-talitha": {
    name: "Talitha Luthfia Azzarine",
    role: "Anggota Seniora",
    badge: "Anggota Seniora",
    division: "Divisi Seni & Olahraga",
    image: "assets/LogoTM.jpeg",
    bio: "Menyemarakkan teater dan drama musikal sekolah, mengasah ekspresi seni peran siswa dengan penuh rasa percaya diri.",
    hobbies: ["Seni Peran / Teater", "Menyanyi", "Membaca Sastra", "Bulu Tangkis"],
    socials: {
      instagram: { handle: "@talitha_azzarine", url: "https://instagram.com/talitha_azzarine" },
      tiktok:    { handle: "@talithaazzarine", url: "https://tiktok.com/@talithaazzarine" }
    }
  },
  "agama-rafa": {
    name: "Fathi Fawwaz Ar Rafaa",
    role: "Koordinasi Agama",
    badge: "Koordinator Agama",
    division: "Divisi Kerohanian & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    bio: "Menuntun kegiatan kerohanian yang menyejukkan hati, mempererat toleransi, dan menanamkan akhlak mulia dalam keseharian siswa.",
    hobbies: ["Tilawah & Tahfidz", "Kajian Keislaman", "Kaligrafi Arab", "Memanah"],
    socials: {
      instagram: { handle: "@rafa_fawwaz", url: "https://instagram.com/rafa_fawwaz" },
      tiktok:    { handle: "@rafafawwaz", url: "https://tiktok.com/@rafafawwaz" }
    }
  },
  "agama-abigail": {
    name: "Abigail Anandhya Raharjani",
    role: "Anggota Agama",
    badge: "Anggota Agama",
    division: "Divisi Kerohanian & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    bio: "Menghidupkan suasana persekutuan doa dan ibadah yang khusyuk, memperkuat tali kasih persaudaraan antarumat beragama di sekolah.",
    hobbies: ["Pelayanan Rohani", "Bermain Piano", "Paduan Suara", "Membaca Renungan"],
    socials: {
      instagram: { handle: "@abigail_anandhya", url: "https://instagram.com/abigail_anandhya" },
      tiktok:    { handle: "@abigailanandhya", url: "https://tiktok.com/@abigailanandhya" }
    }
  },
  "agama-azizah": {
    name: "Azizah Octavia",
    role: "Anggota Agama",
    badge: "Anggota Agama",
    division: "Divisi Kerohanian & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    bio: "Menggerakkan bakti sosial, kepedulian yatim piatu, dan infak Jumat berkah guna memupuk empati kemanusiaan seluruh siswa.",
    hobbies: ["Bakti Sosial", "Menulis Refleksi Diri", "Khataman Al-Quran", "Memasak"],
    socials: {
      instagram: { handle: "@azizah_octavia", url: "https://instagram.com/azizah_octavia" },
      tiktok:    { handle: "@azizahoctavia", url: "https://tiktok.com/@azizahoctavia" }
    }
  },
  "agama-abdoel": {
    name: "Abdoel Agiez FD",
    role: "Anggota Agama",
    badge: "Anggota Agama",
    division: "Divisi Kerohanian & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    bio: "Menjaga keteraturan sarana ibadah sekolah dan mengoordinasikan peringatan hari besar keagamaan secara khidmat dan meriah.",
    hobbies: ["Rebana & Hadrah", "Manajemen Masjid", "Futsal Santai", "Membaca Sirah"],
    socials: {
      instagram: { handle: "@abdoel_agiez", url: "https://instagram.com/abdoel_agiez" },
      tiktok:    { handle: "@abdoelagiez", url: "https://tiktok.com/@abdoelagiez" }
    }
  },
  "agama-garneto": {
    name: "Garneto Dama Kawiswara",
    role: "Anggota Agama",
    badge: "Anggota Agama",
    division: "Divisi Kerohanian & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    bio: "Mendukung dialog kerukunan antarsiswa dan penanaman budi pekerti luhur demi terciptanya harmoni damai di lingkungan sekolah.",
    hobbies: ["Kajian Filosofi", "Diskusi Etika", "Bermain Catur", "Bulu Tangkis"],
    socials: {
      instagram: { handle: "@garneto_dama", url: "https://instagram.com/garneto_dama" },
      tiktok:    { handle: "@garnetodama", url: "https://tiktok.com/@garnetodama" }
    }
  },
  "humas-ifra": {
    name: "Ifra Shafana",
    role: "Koordinasi Humas",
    badge: "Koordinator Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    bio: "Jembatan komunikasi interaktif antara OSIS dengan siswa, guru, alumni, serta jejaring organisasi sekolah lain se-Jabodetabek.",
    hobbies: ["Public Relations", "Master of Ceremony", "Networking", "Travelling"],
    socials: {
      instagram: { handle: "@ifra_shafana", url: "https://instagram.com/ifra_shafana" },
      tiktok:    { handle: "@ifrashafana", url: "https://tiktok.com/@ifrashafana" }
    }
  },
  "humas-jasmine": {
    name: "Jasmine Novalia Tobing",
    role: "Anggota Humas",
    badge: "Anggota Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    bio: "Komunikator ramah yang mengelola penyampaian pengumuman resmi dan merangkul antusiasme siswa dalam setiap program sekolah.",
    hobbies: ["Broadcasting", "Vlog Komunikasi", "Mendengarkan Musik", "Tenis Meja"],
    socials: {
      instagram: { handle: "@jasmine_tobing", url: "https://instagram.com/jasmine_tobing" },
      tiktok:    { handle: "@jasminetobing", url: "https://tiktok.com/@jasminetobing" }
    }
  },
  "humas-putra": {
    name: "Putra Claren Riwu",
    role: "Anggota Humas",
    badge: "Anggota Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    bio: "Menjalin kemitraan sponsor dan kolaborasi eksternal yang mendukung keberhasilan acara-acara besar OSIS Taruna Mandiri.",
    hobbies: ["Negosiasi & Pitching", "Fotografi Event", "Basket", "Jelajah Kota"],
    socials: {
      instagram: { handle: "@putra_riwu", url: "https://instagram.com/putra_riwu" },
      tiktok:    { handle: "@putrariwu", url: "https://tiktok.com/@putrariwu" }
    }
  },
  "humas-sasi": {
    name: "Sasi Fitri Ayu Erlangga",
    role: "Anggota Humas",
    badge: "Anggota Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    bio: "Mengelola kanal informasi mading dan pusat respon pertanyaan siswa agar aspirasi warga sekolah tertampung secara transparan.",
    hobbies: ["Jurnalistik Sekolah", "Wawancara Siswa", "Menulis Berita", "Badminton"],
    socials: {
      instagram: { handle: "@sasi_erlangga", url: "https://instagram.com/sasi_erlangga" },
      tiktok:    { handle: "@sasierlangga", url: "https://tiktok.com/@sasierlangga" }
    }
  },
  "humas-kayla": {
    name: "Kayla Aisha Farhana Sabrie",
    role: "Anggota Humas",
    badge: "Anggota Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    bio: "Menyampaikan suara siswa lewat konten tanya-jawab interaktif dan menyebarkan pesan positif ke seluruh penjuru sekolah.",
    hobbies: ["Voice Over", "Content Creator", "Menari", "Membaca Buku Motivasi"],
    socials: {
      instagram: { handle: "@kayla_sabrie", url: "https://instagram.com/kayla_sabrie" },
      tiktok:    { handle: "@kaylasabrie", url: "https://tiktok.com/@kaylasabrie" }
    }
  },
  "humas-nadja": {
    name: "Nadja Zyarifa",
    role: "Anggota Humas",
    badge: "Anggota Humas",
    division: "Divisi Hubungan Masyarakat",
    image: "assets/LogoTM.jpeg",
    bio: "Menghubungkan kepengurusan OSIS dengan perwakilan kelas (MPK/ketua kelas) untuk memastikan arus koordinasi berjalan lancar.",
    hobbies: ["Komunikasi Publik", "Desain Infografis", "Fotografi Human Interest", "Renang"],
    socials: {
      instagram: { handle: "@nadja_zyarifa", url: "https://instagram.com/nadja_zyarifa" },
      tiktok:    { handle: "@nadjazyarifa", url: "https://tiktok.com/@nadjazyarifa" }
    }
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
  const bioEl      = qs('#modalBio') || qs('#modalVision');
  const hobbiesEl  = qs('#modalHobbies') || qs('#modalMissions');

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
    if (bioEl) {
      bioEl.textContent    = data.bio || data.vision || '';
    }

    // Render Avatar (3:4 portrait)
    avatarEl.innerHTML = `
      <img src="${data.image || 'assets/LogoTM.jpeg'}" alt="Foto ${data.name}" class="profile-modal__avatar-img" />
    `;

    // Render Hobbies as modern capsule pills
    if (hobbiesEl) {
      const hobbiesList = data.hobbies || data.missions || [];
      hobbiesEl.innerHTML = hobbiesList.map(h => `
        <span class="hobby-pill">
          <span class="hobby-pill__dot"></span>
          <span>${h}</span>
        </span>
      `).join('');
    }

    // Render Sosmed Personal (Instagram & TikTok)
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

      // Keyboard support: Enter / Space triggers modal
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler(e);
        }
      });
    });
  };

  attachTriggers();

  // Close triggers
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Esc key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Mobile touch drag-to-dismiss for bottom-sheet
  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  dialog.addEventListener('touchstart', (e) => {
    if (window.innerWidth > 768) return;
    // Only drag from top drag-bar or dialog top header
    const touch = e.touches[0];
    const rect = dialog.getBoundingClientRect();
    if (touch.clientY - rect.top < 60) {
      startY = touch.clientY;
      isDragging = true;
    }
  }, { passive: true });

  dialog.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    if (diff > 0) {
      dialog.style.transform = `translateY(${diff}px)`;
    }
  }, { passive: true });

  dialog.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    const diff = currentY - startY;
    if (diff > 120) {
      dialog.style.transform = '';
      closeModal();
    } else {
      dialog.style.transform = '';
    }
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
