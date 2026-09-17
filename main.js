/* ============================================================
   OSIS Sekolah Taruna Mandiri — Main Script (Revamped)
   Editorial Prestige, Interactive Profiles, & Dynamic Scroll Connectors
   ============================================================ */

'use strict';

// ── Utility ────────────────────────────────────────────────
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── Data Model: Profil BPH & Divisi OSIS Taruna Mandiri ────
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  "divisi-pdd": {
    name: "Divisi PDD",
    role: "Publikasi, Dekorasi & Dokumentasi",
    badge: "Divisi PDD",
    division: "Divisi Kreatif & Multimedia",
    image: "assets/LogoTM.jpeg",
    vision: "Menjadi corong visual dan narasi utama sekolah melalui publikasi kreatif, artistik, dan berstandar multimedia modern.",
    missions: [
      "Mendokumentasikan setiap momen prestisius kegiatan sekolah dalam kualitas visual terbaik.",
      "Mendesain identitas visual, dekorasi panggung, dan media informasi yang estetis dan berkarakter.",
      "Mengelola kanal media sosial OSIS secara profesional, edukatif, dan interaktif bagi seluruh siswa."
    ],
    programs: [
      "Aftermovie & Liputan Eksklusif Acara Sekolah",
      "Katalog Digital Dokumentasi Tahunan Taruna",
      "Dekorasi Artistik & Tata Panggung Event Akbar",
      "Desain Visual Promosi & Branding Digital"
    ]
  },
  "divisi-pelita": {
    name: "Divisi Pelita",
    role: "Pendidikan & Literasi",
    badge: "Divisi Pelita",
    division: "Divisi Akademik & Keilmuan",
    image: "assets/LogoTM.jpeg",
    vision: "Membangkitkan ekosistem akademik yang dinamis, berdaya nalar kritis, dan unggul dalam budaya literasi sekolah.",
    missions: [
      "Menyelenggarakan kegiatan kompetisi akademik dan pengayaan wawasan ilmiah bagi seluruh siswa.",
      "Mendorong gerakan gemar membaca, berdiskusi ilmiah, dan menulis karya kreatif siswa.",
      "Memfasilitasi kelompok belajar sebaya untuk persiapan olimpiade sains dan ujian sekolah."
    ],
    programs: [
      "Taruna Academic Festival & Science Olympiad",
      "Sudut Literasi & Bedah Buku Bulanan",
      "Program Peer Tutoring (Bimbingan Belajar Sebaya)",
      "Workshop Karya Tulis Ilmiah & Jurnalistik Siswa"
    ]
  },
  "divisi-seniora": {
    name: "Divisi Seniora",
    role: "Seni & Olahraga",
    badge: "Divisi Seniora",
    division: "Divisi Bakat & Minat",
    image: "assets/LogoTM.jpeg",
    vision: "Mengembangkan potensi bakat non-akademik siswa yang sportif, ekspresif, dan berprestasi di kancah seni dan olahraga.",
    missions: [
      "Menyelenggarakan turnamen olahraga antarkelas yang kompetitif dan menjunjung tinggi nilai sportivitas.",
      "Memfasilitasi panggung apresiasi seni, musik, teater, dan tari bagi seluruh siswa bertalenta.",
      "Menumbuhkan jiwa kebersamaan dan kesehatan jasmani warga sekolah melalui aktivitas fisik rutin."
    ],
    programs: [
      "Taruna Cup: Turnamen Olahraga Antarkelas",
      "Pentas Seni & Kreasi Budaya Akhir Tahun",
      "Panggung Apresiasi Musik Akustik Istirahat",
      "Senam Sehat & Olahraga Ceria Bersama"
    ]
  },
  "divisi-agama": {
    name: "Divisi Agama",
    role: "Kerohanian & Budi Pekerti",
    badge: "Divisi Agama",
    division: "Divisi Karakter & Budi Pekerti",
    image: "assets/LogoTM.jpeg",
    vision: "Membangun karakter siswa yang religius, berakhlak mulia, toleran, dan memiliki kepekaan sosial kemanusiaan tinggi.",
    missions: [
      "Mengkoordinasikan kegiatan peringatan hari besar keagamaan dengan penuh kekhidmatan.",
      "Menumbuhkan semangat toleransi, persaudaraan antarsesama, dan kepedulian sosial.",
      "Memperkuat pembinaan etika moral dan pergaulan positif di lingkungan sekolah."
    ],
    programs: [
      "Peringatan Hari Besar Keagamaan Sekolah",
      "Bakti Sosial & Gerakan Taruna Peduli Dhuafa",
      "Kajian Rutin Pembinaan Etika & Moral Siswa",
      "Gerakan Budaya Santun & 5S (Senyum, Sapa, Salam, Sopan, Santun)"
    ]
  },
  "divisi-humas": {
    name: "Divisi Humas",
    role: "Hubungan Masyarakat & Aspirasi",
    badge: "Divisi Humas",
    division: "Divisi Relasi & Komunikasi Publik",
    image: "assets/LogoTM.jpeg",
    vision: "Menjadi jembatan komunikasi yang kredibel, inklusif, dan responsif antarsiswa, guru, alumni, dan masyarakat luar.",
    missions: [
      "Mengelola kanal aspirasi siswa dan menjamin setiap suara mendapatkan tindak lanjut nyata.",
      "Membangun relasi kemitraan strategis dengan organisasi sekolah lain dan institusi luar.",
      "Menyosialisasikan kebijakan serta agenda OSIS secara terbuka, hangat, dan persuasif."
    ],
    programs: [
      "Kotak Suara & Forum Dialog Aspirasi Siswa Terbuka",
      "Studi Banding & Kunjungan Kolaborasi Antarsekolah",
      "Buletin Warta Humas & Informasi Terkini",
      "Kemitraan Sponsorship Acara Sekolah"
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

// ── Gallery load more ──────────────────────────────────────
(function initGalleryLoadMore() {
  const btn = qs('#galleryLoadMore');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const text = btn.querySelector('.btn__text');
    const icon = btn.querySelector('.btn__icon');

    btn.disabled = true;
    text.textContent = 'Memuat…';
    icon.textContent = '↻';
    icon.style.animation = 'spin 0.8s linear infinite';

    setTimeout(() => {
      btn.disabled = false;
      text.textContent = 'Semua Dokumentasi Ditampilkan';
      icon.textContent = '✓';
      icon.style.animation = '';
      btn.style.borderColor = 'rgba(201,168,76,0.5)';
      btn.style.color = 'rgba(201,168,76,0.9)';
    }, 1200);
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
