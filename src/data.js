// ====== EDIT DI SINI: semua data portofolio ======
// Teks bahasa Inggris memakai akhiran "En" (mis. desc → descEn). Jika tidak ada, teks Indonesia dipakai.
export const NAV = ["about", "pendidikan", "skill", "organisasi", "project", "hobi", "contact"];

export const UI = {
  id: {
    nav: { about: "Tentang Saya", pendidikan: "Pendidikan", skill: "Skill", organisasi: "Organisasi", project: "Project", hobi: "Hobi", contact: "Kontak" },
    title: { pendidikan: "Pendidikan", skill: "Skill", organisasi: "Pengalaman Organisasi", project: "Project", hobi: "Hobi", contact: "Kontak" },
    hello: "Halo, saya", contactMe: "Hubungi Saya", cv: "Unduh CV", menu: "Menu",
    form: { name: "Nama", email: "Email", msg: "Pesan Anda", send: "Kirim Pesan", sending: "Mengirim…", ok: "Pesan terkirim. Terima kasih!", fail: "Gagal terkirim. Coba lagi." },
    footBig: "Mari bangun sesuatu yang berarti.", footNav: "Navigasi", footSocial: "Sosial media", built: "Dibuat dengan React, Tailwind & Framer Motion.",
    open: "Buka Website", close: "Tutup", musicOn: "Matikan musik", musicOff: "Putar musik", musicMissing: "Musik tidak dapat dimuat",
    marquee: ["Web Developer", "Pembina Pramuka", "Pendaki Gunung", "Mahasiswa Informatika"],
    marquee2: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Canva"],
  },
  en: {
    nav: { about: "About Me", pendidikan: "Education", skill: "Skills", organisasi: "Organizations", project: "Projects", hobi: "Hobbies", contact: "Contact" },
    title: { pendidikan: "Education", skill: "Skills", organisasi: "Organization Experience", project: "Projects", hobi: "Hobbies", contact: "Contact" },
    hello: "Hello, I'm", contactMe: "Contact Me", cv: "Download CV", menu: "Menu",
    form: { name: "Name", email: "Email", msg: "Your message", send: "Send Message", sending: "Sending…", ok: "Message sent. Thank you!", fail: "Failed to send. Please try again." },
    footBig: "Let's build something that matters.", footNav: "Navigation", footSocial: "Social media", built: "Built with React, Tailwind & Framer Motion.",
    open: "Visit Website", close: "Close", musicOn: "Mute music", musicOff: "Play music", musicMissing: "Music unavailable",
    marquee: ["Web Developer", "Scout Trainer", "Mountain Hiker", "Informatics Student"],
    marquee2: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Canva"],
  },
};

export const PROFILE = {
  name: "Dimas Aditya Haerudin", brand: "Dimas Aditya", badge: "Informatics Student", badgeEn: "Informatics Student",
  roles: ["Web Developer", "Mahasiswa Teknik Informatika", "Pembina Pramuka"],
  rolesEn: ["Web Developer", "Informatics Engineering Student", "Scout Trainer"],
  photo: "/img/profile.jpg",
  email: "dimastasik7@gmail.com", github: "https://github.com/SkyTzy29",
  linkedin: "https://www.linkedin.com/search/results/people/?keywords=Dimas%20Aditya%20Haerudin", // ganti dengan URL profil LinkedIn asli
  whatsapp: "https://wa.me/6282319638980", instagram: "https://instagram.com/dm_aditya29",
  tiktok: "https://www.tiktok.com/@mass_4dit",
  about: [
    "Saya Dimas Aditya Haerudin, mahasiswa Teknik Informatika Universitas Perjuangan Tasikmalaya yang tertarik pada pengembangan web, mulai dari tampilan antarmuka sampai pengelolaan database.",
    "Sejak pesantren dan SMA saya aktif berorganisasi: memimpin ambalan, menjadi sekretaris MPK, hingga membina pramuka. Pengalaman itu melatih saya bekerja dalam tim, mengatur acara, dan menyelesaikan tugas tepat waktu.",
  ],
  aboutEn: [
    "I'm Dimas Aditya Haerudin, an Informatics Engineering student at Universitas Perjuangan Tasikmalaya interested in web development, from user interfaces to database management.",
    "Since Islamic boarding school and high school I've been active in organizations: leading a scout troop, serving as MPK secretary, and mentoring scouts. This taught me teamwork, event management, and delivering on time.",
  ],
  highlights: [["Fokus teknologi", "HTML, CSS, JavaScript, PHP & MySQL"], ["Pendekatan", "UI rapi + sistem terstruktur"], ["Bahasa", "Indonesia, Inggris"], ["Status", "Terbuka untuk magang & proyek"]],
  highlightsEn: [["Tech focus", "HTML, CSS, JavaScript, PHP & MySQL"], ["Approach", "Clean UI + structured systems"], ["Languages", "Indonesian, English"], ["Status", "Open for internships & projects"]],
};

export const EDUCATION = [
  { title: "Universitas Perjuangan Tasikmalaya", sub: "Teknik Informatika (S1)", subEn: "Informatics Engineering (Bachelor)", period: "2024 – Sekarang", periodEn: "2024 – Present" },
  { title: "SMAN 1 Jamanis", sub: "Jurusan IPA", subEn: "Science Major", period: "2022 – 2024" },
  { title: "SMAT Darussalam Tasikmalaya", sub: "Sekolah Menengah Atas", subEn: "Senior High School", period: "2021 – 2022" },
  { title: "SMPIT Darussalam Tasikmalaya", sub: "Sekolah Menengah Pertama", subEn: "Junior High School", period: "2018 – 2021" },
  { title: "SDN 5 Geresik", sub: "Sekolah Dasar", subEn: "Elementary School", period: "2012 – 2018" },
];

export const SKILLS = [["HTML", "H5"], ["CSS", "C3"], ["JavaScript", "JS"], ["PHP", "Ph"], ["MySQL", "My"], ["Microsoft Word", "Wd"], ["Canva", "Cv"], ["CapCut", "Cc"]];

export const ORGS = [
  { title: "Ketua Pelaksana LDKTI", titleEn: "Event Chair, LDKTI", sub: "Universitas Perjuangan Tasikmalaya", period: "2026" },
  { title: "Anggota Departemen Kaderisasi", titleEn: "Member, Cadre Development Dept.", sub: "Himpunan Mahasiswa Teknik Informatika", subEn: "Informatics Student Association", period: "2025 – 2026" },
  { title: "Ketua Pelaksana Gebyar Agustus", titleEn: "Event Chair, Gebyar Agustus", sub: "Kp. Langkob Girang", period: "2025" },
  { title: "Pembina Pramuka", titleEn: "Scout Trainer", sub: "SMPIT Al-Munawar", period: "2024 – 2025" },
  { title: "Sekretaris MPK", titleEn: "Secretary, MPK", sub: "SMAN 1 Jamanis", period: "2023" },
  { title: "Penggerak Lapangan Pramuka", titleEn: "Scout Field Coordinator", sub: "SMAN 1 Jamanis", period: "2023" },
  { title: "Ketua Pelaksana Pelatihan Penegak Bantara", titleEn: "Event Chair, Penegak Bantara Training", sub: "SMAN 1 Jamanis", period: "2023" },
  { title: "Ketua Ambalan Abu Bakar Ash-Shiddiq", titleEn: "Troop Leader, Abu Bakar Ash-Shiddiq", sub: "Pesantren Darussalam", period: "2022" },
  { title: "Sekretaris Acara 17 Agustus", titleEn: "Event Secretary, Independence Day", sub: "Pesantren Darussalam", period: "2022" },
];

export const PROJECTS = [
  { title: "Sierra Adventure — Open Trip", cat: "Web Booking", img: "/img/project-1.jpg", status: "Dalam proses", statusEn: "In progress", tags: ["PHP", "MySQL", "CSS"],
    desc: "Website pemesanan open trip pendakian. Pengguna memilih gunung dan tanggal, melihat DP minimal serta sisa kuota, lalu memesan trip.",
    descEn: "Hiking open-trip booking website. Users pick a mountain and date, see the minimum deposit and remaining quota, then book.",
    points: ["Daftar open trip lengkap dengan ketinggian, harga, dan kuota", "Halaman jadwal, persyaratan, profil, dan kontak", "Fitur Cek Booking untuk melacak pesanan"],
    pointsEn: ["Trip list with altitude, price, and quota", "Schedule, requirements, profile, and contact pages", "Booking check feature to track orders"] },
  { title: "Pathfinder AI", cat: "Visualisasi Algoritma", catEn: "Algorithm Visualization", img: "/img/project-2.jpg", tags: ["HTML", "CSS", "JavaScript"],
    desc: "Aplikasi simulasi algoritma pencarian pada graf. Setiap langkah ditampilkan lewat animasi node dan log proses.",
    descEn: "Graph search algorithm simulator. Each step is shown with node animation and a process log.",
    points: ["Blind search (BFS) dan heuristic search", "Kontrol Mulai, Pause, Lanjutkan, Reset, serta delay animasi", "Halaman perbandingan, riwayat, dan konfigurasi graf"],
    pointsEn: ["Blind search (BFS) and heuristic search", "Start, Pause, Resume, Reset controls and animation delay", "Comparison, history, and graph configuration pages"] },
  { title: "WiFi Diagnosis Expert System", cat: "Sistem Pakar", catEn: "Expert System", img: "/img/project-3.jpg", tags: ["HTML", "CSS", "JavaScript"],
    desc: "Sistem pakar untuk mendiagnosis masalah WiFi dengan penalaran forward dan backward chaining berdasarkan fakta yang dipilih pengguna.",
    descEn: "Expert system that diagnoses WiFi problems using forward and backward chaining from facts the user selects.",
    points: ["Forward chaining: mencari kesimpulan dari fakta awal", "Backward chaining: membuktikan hipotesis", "Iterasi aturan ditampilkan langkah demi langkah"],
    pointsEn: ["Forward chaining: derive conclusions from initial facts", "Backward chaining: prove a hypothesis", "Rule iterations shown step by step"] },
  { title: "Dashboard Jadwal Kereta", titleEn: "Train Schedule Dashboard", cat: "Aplikasi XML-RPC", catEn: "XML-RPC App", img: "/img/project-4.jpg", tags: ["XML-RPC", "Web Dashboard"],
    desc: "Dashboard informasi jadwal kereta api berbasis XML-RPC dengan login dan pencarian rute antarstasiun.",
    descEn: "XML-RPC based train schedule dashboard with login and station-to-station route search.",
    points: ["Login administrator", "Pencarian rute berdasarkan stasiun asal dan tujuan", "Tabel jadwal berisi jam, durasi, harga, dan sisa kursi"],
    pointsEn: ["Administrator login", "Route search by origin and destination station", "Schedule table with times, duration, price, and seats left"] },
  { title: "Dalas C'lup Fried Chicken", cat: "Website UMKM", catEn: "Small Business Website", img: "/img/project-5.jpg", tags: ["JavaScript", "Cloudflare Workers"], demo: "https://dalasclup.dimass.workers.dev",
    desc: "Website untuk usaha ayam goreng krispi di Tasikmalaya. Pelanggan memilih menu, mengatur jumlah, lalu mengirim pesanan lewat WhatsApp.",
    descEn: "Website for a crispy fried chicken business in Tasikmalaya. Customers pick items, set quantity, and send the order via WhatsApp.",
    points: ["Daftar menu dan harga favorit", "Pesanan terkirim langsung ke WhatsApp", "Di-deploy di Cloudflare Workers"],
    pointsEn: ["Menu list and favorite prices", "Orders sent straight to WhatsApp", "Deployed on Cloudflare Workers"] },
  { title: "Website SMPIT Al-Munawar", titleEn: "SMPIT Al-Munawar Website", cat: "Company Profile Sekolah", catEn: "School Company Profile", img: "/img/project-6.jpg", status: "Dalam proses", statusEn: "In progress", tags: ["Next.js", "React"],
    desc: "Website resmi sekolah yang memuat profil, akademik, guru, prestasi, berita, galeri, dan kontak.",
    descEn: "Official school website with profile, academics, teachers, achievements, news, gallery, and contact.",
    points: ["Navigasi lengkap dengan menu dropdown", "Tampilan hero bernuansa hijau", "Halaman berita dan galeri kegiatan"],
    pointsEn: ["Full navigation with dropdown menu", "Green-themed hero section", "News and activity gallery pages"] },
];

// pos = titik fokus foto di dalam bingkai (x% y%). Naikkan y% bila orang ada di bagian bawah foto, turunkan bila di atas.
const p = (n, pos, ...a) => a.map((x, i) => ({ img: `/img/${n}-${i + 1}.jpg`, pos: pos[i], ...x }));
export const HOBBY_GROUPS = [
  { title: "Pramuka", titleEn: "Scouting", note: "Kegiatan kepramukaan bersama adik-adik binaan dan rekan penegak.", noteEn: "Scouting activities with the scouts I mentor and fellow penegak.", items: p("pramuka", ["50% 50%", "50% 85%", "50% 50%", "50% 50%", "50% 62%", "50% 80%"],
    { title: "Pembuatan Pionering", titleEn: "Pioneering Build", cat: "Kegiatan Lapangan", catEn: "Field Activity", desc: "Bersama tim membangun konstruksi pionering dari bambu di halaman sekolah.", descEn: "Building a bamboo pioneering structure with the team in the school yard." },
    { title: "Regu Penegak", titleEn: "Penegak Squad", cat: "Kegiatan Lapangan", catEn: "Field Activity", desc: "Foto bersama regu penegak di depan hasil pionering.", descEn: "Squad photo in front of our pioneering work." },
    { title: "Juara Lomba", titleEn: "Competition Win", cat: "Perlombaan", catEn: "Competition", desc: "Momen bersama tim setelah meraih piala dan piagam dalam perlombaan.", descEn: "A moment with the team after winning a trophy and certificate." },
    { title: "Pembinaan Pramuka", titleEn: "Scout Mentoring", cat: "SMPIT Al-Munawar", desc: "Membina adik-adik pramuka di sekolah.", descEn: "Mentoring young scouts at school." },
    { title: "Perkemahan Pramuka", titleEn: "Scout Camp", cat: "Perkemahan", catEn: "Camping", desc: "Foto bersama adik-adik pramuka di area perkemahan dengan latar pegunungan.", descEn: "Photo with the young scouts at the campsite with a mountain backdrop." },
    { title: "Kebersamaan Penegak", titleEn: "Penegak Togetherness", cat: "Malam Hari", catEn: "Night Out", desc: "Berfoto bersama rekan-rekan penegak di jalan kota pada malam hari.", descEn: "Posing with fellow penegak scouts at night." }) },
  { title: "Pantai", titleEn: "Beach", note: "Perjalanan ke pantai untuk melepas penat.", noteEn: "Beach trips to unwind.", items: p("pantai", ["50% 78%", "50% 45%", "50% 30%", "50% 36%", "50% 50%", "50% 43%"],
    { title: "Kapal Terdampar", titleEn: "Stranded Ship", cat: "Wisata Pantai", catEn: "Beach Trip", desc: "Berfoto di depan bangkai kapal besar yang terdampar di tepi pantai.", descEn: "Posing in front of a huge shipwreck stranded on the shore." },
    { title: "Karang & Ombak", titleEn: "Reef & Waves", cat: "Wisata Pantai", catEn: "Beach Trip", desc: "Suasana pantai berkarang dengan langit biru cerah.", descEn: "A rocky reef beach under a bright blue sky." },
    { title: "Pemecah Ombak", titleEn: "Breakwater", cat: "Wisata Pantai", catEn: "Beach Trip", desc: "Menikmati senja di atas tetrapod pemecah ombak.", descEn: "Enjoying dusk on the tetrapod breakwater." },
    { title: "Air Jernih", titleEn: "Clear Water", cat: "Wisata Pantai", catEn: "Beach Trip", desc: "Bermain di perairan dangkal yang jernih.", descEn: "Playing in clear shallow water." },
    { title: "Pohon di Tepi Pantai", titleEn: "Beachside Tree", cat: "Wisata Pantai", catEn: "Beach Trip", desc: "Bersantai di bawah pohon rindang dengan latar laut biru di tepi pantai.", descEn: "Relaxing under a leafy tree by the shore." },
    { title: "Ombak Sore", titleEn: "Afternoon Waves", cat: "Wisata Pantai", catEn: "Beach Trip", desc: "Menikmati ombak dan langit senja sambil berdiri di atas tetrapod pemecah ombak.", descEn: "Enjoying the waves and dusk sky standing on the tetrapod breakwater." }) },
  { title: "Gunung", titleEn: "Mountains", note: "Pendakian untuk melatih fisik, kesabaran, dan kebersamaan.", noteEn: "Hikes that train fitness, patience, and togetherness.", items: p("gunung", ["50% 78%", "50% 63%", "50% 50%", "50% 100%", "50% 86%", "50% 78%"],
    { title: "Mt. Canar Talaga Bodas", cat: "2.083 mdpl", desc: "Berdiri di atas lautan awan dengan latar bendera Merah Putih.", descEn: "Standing above a sea of clouds beside the Red-and-White flag." },
    { title: "Puncak Rajawali", titleEn: "Rajawali Peak", cat: "Gunung Sumbing · 3.371 mdpl", catEn: "Mt. Sumbing · 3,371 masl", desc: "Merayakan tiba di puncak Rajawali, Gunung Sumbing.", descEn: "Celebrating arrival at Rajawali Peak, Mt. Sumbing." },
    { title: "Sunrise Gunung Slamet", titleEn: "Mt. Slamet Sunrise", cat: "Gunung Slamet", catEn: "Mt. Slamet", desc: "Menyaksikan matahari terbit di atas lautan awan dari Gunung Slamet.", descEn: "Watching the sunrise above the clouds from Mt. Slamet." },
    { title: "Savana Merbabu", titleEn: "Merbabu Savanna", cat: "Gunung Merbabu", catEn: "Mt. Merbabu", desc: "Berteduh di bawah pohon di tengah padang savana Merbabu.", descEn: "Sheltering under a tree in the Merbabu savanna." },
    { title: "Di Atas Awan Merbabu", titleEn: "Above the Clouds, Merbabu", cat: "Gunung Merbabu", catEn: "Mt. Merbabu", desc: "Berdiri di punggungan Merbabu dengan hamparan awan di bawah.", descEn: "Standing on the Merbabu ridge with clouds spread below." },
    { title: "Watu Tatah", cat: "Pos 4 via Kledung · 2.838 mdpl", catEn: "Post 4 via Kledung · 2,838 masl", desc: "Mengibarkan Merah Putih di batu Watu Tatah.", descEn: "Waving the Red-and-White flag on Watu Tatah rock." }) },
];
