import { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, MessageCircle, ArrowUpRight, Download, Send, CheckCircle2, AlertCircle, Instagram, Music2, Volume2, VolumeX } from "lucide-react";
import { NAV, UI, PROFILE as P, EDUCATION, SKILLS, ORGS, PROJECTS, HOBBY_GROUPS } from "./data";

const Ctx = createContext();
const useApp = () => useContext(Ctx);
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const rise = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-60px" } };

/* ---------- Kursor ---------- */
function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 30 }), sy = useSpring(y, { stiffness: 400, damping: 30 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const mv = (e) => { x.set(e.clientX); y.set(e.clientY); setBig(!!e.target.closest("a,button,[data-hover]")); };
    window.addEventListener("mousemove", mv); return () => window.removeEventListener("mousemove", mv);
  }, []);
  return (<>
    <motion.div className="pointer-events-none fixed z-[100] hidden h-2 w-2 rounded-full bg-sky-300 [@media(hover:hover)]:block" style={{ x, y, translateX: "-50%", translateY: "-50%" }} />
    <motion.div className="pointer-events-none fixed z-[99] hidden rounded-full border border-sky-400/70 [@media(hover:hover)]:block" style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: big ? 64 : 32, height: big ? 64 : 32, backgroundColor: big ? "rgba(56,189,248,.18)" : "rgba(56,189,248,0)" }} />
  </>);
}

/* ---------- Preloader ---------- */
function Preloader({ done }) {
  useEffect(() => { const id = setTimeout(done, 2600); return () => clearTimeout(id); }, []);
  return (
    <motion.div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#05070C]" exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
      <div className="absolute h-72 w-72 rounded-full bg-sky-500/20 blur-[100px]" />
      <div className="relative flex overflow-hidden text-4xl font-extrabold tracking-widest sm:text-6xl">
        {P.brand.split("").map((c, i) => (
          <motion.span key={i} className="text-grad inline-block" initial={{ y: "110%", rotate: 8 }} animate={{ y: 0, rotate: 0 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{c === " " ? "\u00A0" : c}</motion.span>
        ))}
      </div>
      <div className="relative mt-8 h-px w-48 overflow-hidden bg-white/10"><motion.div className="h-px bg-sky-400" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2.2 }} /></div>
    </motion.div>
  );
}

const ScrollBar = () => { const { scrollYProgress } = useScroll(); const w = useSpring(scrollYProgress, { stiffness: 120, damping: 25 }); return <motion.div style={{ scaleX: w }} className="btn-grad fixed inset-x-0 top-0 z-[80] h-[3px] origin-left" />; };
const Orbs = () => (<>
  <div aria-hidden="true" className="orb pointer-events-none fixed -left-24 top-1/4 -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[70px]" style={{ animation: "drift1 16s ease-in-out infinite" }} />
  <div aria-hidden="true" className="orb pointer-events-none fixed -right-24 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-sky-500/15 blur-[70px]" style={{ animation: "drift2 18s ease-in-out infinite" }} />
</>);

/* ---------- Langit animasi: berlian jatuh, bintang berkelip (selalu bergerak di seluruh halaman) ---------- */
function Diamonds() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, g = c.getContext("2d"); let w, h, id, last = 0;
    const rs = () => { w = c.width = innerWidth; h = c.height = innerHeight; }; rs(); addEventListener("resize", rs);
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches, sm = innerWidth < 768, R = Math.random;
    const frame = 1000 / 30; // batasi fps agar ringan
    // sprite berlian digambar sekali, lalu dipakai ulang (tanpa shadowBlur / gradient per frame)
    const S = 64, sp = document.createElement("canvas"); sp.width = sp.height = S; const sg = sp.getContext("2d");
    const gr = sg.createLinearGradient(0, 4, 0, S - 4); gr.addColorStop(0, "#e0f2fe"); gr.addColorStop(0.5, "#38bdf8"); gr.addColorStop(1, "#2563eb");
    sg.fillStyle = gr; sg.beginPath(); sg.moveTo(S / 2, 4); sg.lineTo(S / 2 + 22, S / 2); sg.lineTo(S / 2, S - 4); sg.lineTo(S / 2 - 22, S / 2); sg.closePath(); sg.fill();
    sg.strokeStyle = "rgba(224,242,254,.6)"; sg.lineWidth = 1.5; sg.beginPath(); sg.moveTo(S / 2 - 22, S / 2); sg.lineTo(S / 2 + 22, S / 2); sg.moveTo(S / 2, 4); sg.lineTo(S / 2, S - 4); sg.stroke();
    const ds = Array.from({ length: sm ? 14 : 34 }, () => ({ x: R() * w, y: R() * h, s: 10 + R() * 26, v: 0.3 + R() * 0.8, r: R() * 6, rv: 0.01 + R() * 0.03, a: 0.25 + R() * 0.45, sw: R() * 6 }));
    const st = Array.from({ length: sm ? 22 : 50 }, () => ({ x: R() * w, y: R() * h, s: 1 + R() * 1.6, p: R() * 6, sp: 0.01 + R() * 0.04 }));
    const draw = (t) => {
      id = requestAnimationFrame(draw);
      if (document.hidden || t - last < frame) return; last = t;
      g.clearRect(0, 0, w, h); g.fillStyle = "#bae6fd";
      for (const q of st) { q.p += q.sp; g.globalAlpha = 0.25 + 0.55 * Math.abs(Math.sin(q.p)); g.fillRect(q.x, q.y, q.s, q.s); }
      for (const d of ds) {
        d.y += d.v; d.r += d.rv; d.sw += 0.012; d.x += Math.sin(d.sw) * 0.4; if (d.y > h + 40) { d.y = -40; d.x = R() * w; }
        g.globalAlpha = d.a; const sw = Math.max(Math.abs(Math.cos(d.r)), 0.08) * d.s;
        g.drawImage(sp, d.x - sw / 2, d.y - d.s / 2, sw, d.s);
      }
    };
    if (still) { g.fillStyle = "#bae6fd"; st.forEach((q) => { g.globalAlpha = 0.5; g.fillRect(q.x, q.y, q.s, q.s); }); ds.forEach((d) => { g.globalAlpha = d.a; g.drawImage(sp, d.x - d.s / 3, d.y - d.s / 2, d.s * 0.66, d.s); }); }
    else id = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(id); removeEventListener("resize", rs); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />;
}

/* Hiasan melayang di tiap section (bergerak terus) */
const Deco = ({ side = "right", i = 0 }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute top-24 -z-10 hidden md:block ${side === "right" ? "right-2" : "left-2"}`}>
    {[0, 1, 2].map((k) => (
      <svg key={k} viewBox="0 0 24 24" className="deco absolute text-sky-400/40" style={{ width: 22 + k * 12, left: k * 30 * (side === "right" ? -1 : 1), top: k * 90, animationDuration: `${7 + k * 2 + i}s`, animationDelay: `${k * -1.3}s` }}>
        <path d="M12 1 20 12 12 23 4 12Z" fill="currentColor" />
      </svg>
    ))}
  </div>
);

/* ---------- Typing ---------- */
function useTyping(words) {
  const [i, setI] = useState(0), [txt, setTxt] = useState(""), [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const id = setTimeout(() => {
      if (!del && txt === w) setDel(true);
      else if (del && txt === "") { setDel(false); setI((i + 1) % words.length); }
      else setTxt(w.slice(0, txt.length + (del ? -1 : 1)));
    }, !del && txt === w ? 1400 : del ? 35 : 75);
    return () => clearTimeout(id);
  }, [txt, del, i, words]);
  return txt;
}

/* ---------- Musik (file lokal: /audio/starboy.mp3) ---------- */
function MusicBtn() {
  const { ui } = useApp();
  const au = useRef(null), manual = useRef(false);
  const [on, setOn] = useState(false), [missing, setMissing] = useState(false);
  useEffect(() => {
    const a = au.current; if (!a) return; a.volume = 0.35;
    const first = () => { if (manual.current) return; a.play().catch(() => {}); }; // autoplay hanya boleh setelah interaksi pertama
    window.addEventListener("pointerdown", first, { once: true });
    return () => window.removeEventListener("pointerdown", first);
  }, []);
  const toggle = () => { manual.current = true; const a = au.current; a.paused ? a.play().catch(() => setMissing(true)) : a.pause(); };
  return (<>
    <audio ref={au} src="/audio/starboy.mp3" loop preload="metadata" onPlay={() => setOn(true)} onPause={() => setOn(false)} onError={() => setMissing(true)} />
    <button onClick={toggle} aria-label={missing ? ui.musicMissing : on ? ui.musicOn : ui.musicOff} title={missing ? ui.musicMissing : "Starboy — The Weeknd ft. Daft Punk"}
      className={`flex h-9 shrink-0 items-center gap-1 rounded-full border border-sky-400/30 bg-black/70 px-2.5 text-xs transition hover:border-sky-400 sm:gap-1.5 sm:px-3 ${missing ? "opacity-50" : ""} ${on ? "animate-[pulse-ring_2s_ease-out_infinite]" : ""}`}>
      {on ? <span className="flex h-3 items-end gap-0.5">{[0, 1, 2, 3].map((i) => <motion.i key={i} className="w-0.5 bg-sky-300" animate={{ height: ["30%", "100%", "50%"] }} transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.12, repeatType: "mirror" }} />)}</span> : <Music2 size={14} />}
      {on ? <Volume2 size={14} /> : <VolumeX size={14} />}
    </button>
  </>);
}

/* ---------- Header + menu radial ---------- */
function RadialMenu({ open, setOpen }) {
  const { ui } = useApp();
  const [R, setR] = useState(250);
  useEffect(() => { const f = () => setR(window.innerWidth < 640 ? 130 : 250); f(); window.addEventListener("resize", f); return () => window.removeEventListener("resize", f); }, []);
  const step = 26, start = -((NAV.length - 1) / 2) * step, pad = R + 90;
  return (
    <AnimatePresence>
      {open && <motion.div key="bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 z-[55] bg-black/75" />}
      {open && (
        <motion.nav key="menu" aria-label="Menu" className="fixed left-0 top-1/2 z-[60] h-0 w-0" initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -180, opacity: 0 }} transition={{ type: "spring", stiffness: 70, damping: 16 }}>
          <div className="absolute rounded-full border border-sky-400/25 bg-gradient-to-br from-[#0E1525] to-[#05070C] shadow-[0_0_90px_rgba(56,189,248,.25)]" style={{ width: pad * 2, height: pad * 2, left: -pad, top: -pad }} />
          <div className="absolute rounded-full border border-dashed border-sky-400/10" style={{ width: R * 2, height: R * 2, left: -R, top: -R }} />
          {NAV.map((id, i) => { const a = start + i * step; return (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} data-hover className="group absolute -ml-1.5 -mt-1.5 h-3 w-3" style={{ left: 0, top: 0, transform: `rotate(${a}deg) translateX(${R}px) rotate(${-a}deg)` }}>
              <span className="block h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_14px_#38bdf8] transition group-hover:scale-150" />
              <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap font-serif text-2xl italic text-slate-200 transition group-hover:translate-x-1 group-hover:text-sky-300 sm:text-4xl">{ui.nav[id]}</span>
            </a>); })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

function Header({ open, setOpen }) {
  const { lang, setLang } = useApp();
  return (
    <header className="fixed inset-x-0 top-0 z-[70] flex h-16 items-center justify-between gap-2 px-3 sm:px-5">
      <a href="#about" className="text-grad min-w-0 truncate text-sm font-extrabold tracking-wide sm:text-lg">{P.brand}</a>
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <div className="flex overflow-hidden rounded-full border border-sky-400/30 bg-black/70 text-xs">
          {["en", "id"].map((l) => <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`px-2.5 py-2 uppercase transition sm:px-3 ${lang === l ? "btn-grad text-white" : "text-slate-400 hover:text-white"}`}>{l}</button>)}
        </div>
        <MusicBtn />
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="btn-grad flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-[0_0_25px_rgba(56,189,248,.45)]">
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ type: "spring", stiffness: 120 }}>{open ? <X size={20} /> : <Menu size={20} />}</motion.span>
        </button>
      </div>
    </header>
  );
}

/* ---------- Util ---------- */
const Sec = ({ id, children }) => { const { ui } = useApp(); return (
  <section id={id} className="relative mx-auto max-w-6xl scroll-mt-10 px-5 py-24">
    <Deco side={NAV.indexOf(id) % 2 ? "left" : "right"} i={NAV.indexOf(id) % 3} />
    <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-5xl italic text-white sm:text-6xl">{ui.title[id]}</motion.h2>
    <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="btn-grad mb-10 mt-3 block h-0.5 w-24 origin-left" />
    {children}
  </section>); };
const Tag = ({ children }) => <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-300">{children}</span>;

/* ---------- About + Hero ---------- */
function About() {
  const { lang, ui, f } = useApp();
  const role = useTyping(f(P, "roles"));
  const socials = [[Github, P.github], [Linkedin, P.linkedin], [Mail, `mailto:${P.email}`], [MessageCircle, P.whatsapp], [Instagram, P.instagram]];
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const tilt = (e) => { const r = e.currentTarget.getBoundingClientRect(); ry.set(((e.clientX - r.left) / r.width - 0.5) * 16); rx.set(-((e.clientY - r.top) / r.height - 0.5) * 16); };
  const prx = useSpring(rx, { stiffness: 150, damping: 15 }), pry = useSpring(ry, { stiffness: 150, damping: 15 });
  return (<>
    <section id="about" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-10 pt-28 md:grid-cols-[1.3fr_1fr]">
      <div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>{ui.hello}</motion.p>
        <h1 className="mt-2 text-5xl font-extrabold text-white sm:text-7xl">
          {P.name.split(" ").map((w, i) => <span key={i} className="mr-4 inline-block overflow-hidden align-bottom"><motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 2.7 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span></span>)}
        </h1>
        <p className="mt-5 h-8 text-xl text-sky-300">{role}<span className="animate-pulse">|</span></p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.3 }}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-grad rounded-full px-7 py-3 font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,.4)]">{ui.contactMe}</a>
            <a href={lang === "en" ? "/cv-en.pdf" : "/cv-id.pdf"} download className="flex items-center gap-2 rounded-full border border-sky-400/30 px-7 py-3 transition hover:border-sky-400 hover:text-sky-300"><Download size={16} />{ui.cv}</a>
          </div>
          <div className="mt-6 flex gap-2">{socials.map(([I, h], i) => <motion.a key={i} whileHover={{ y: -4, scale: 1.1 }} href={h} target="_blank" rel="noreferrer" aria-label="Sosial media" className="rounded-full border border-sky-400/15 p-3 transition hover:border-sky-400 hover:text-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,.35)]"><I size={18} /></motion.a>)}</div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.8, duration: 0.9 }} className="relative mx-auto w-full max-w-sm [perspective:900px]" onMouseMove={tilt} onMouseLeave={() => { rx.set(0); ry.set(0); }}>
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-sky-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -inset-6 -z-10 animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-sky-400/25" />
        <div className="pointer-events-none absolute -inset-12 -z-10 animate-[spin_50s_linear_infinite_reverse] rounded-full border border-sky-400/10" />
        <motion.div style={{ rotateX: prx, rotateY: pry }} animate={{ y: [0, -10, 0] }} transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }} className="card relative aspect-[3/4] overflow-hidden rounded-[2rem] p-2">
          <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-blue-900/60 to-black">
            <img src={P.photo} alt={P.name} className="h-full w-full object-cover object-[50%_28%]" />
          </div>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-sky-400/40 bg-black/70 px-4 py-1.5 text-sm text-sky-300 backdrop-blur">{f(P, "badge")}</span>
        </motion.div>
      </motion.div>
    </section>
    <div className="mx-auto max-w-6xl px-5 pb-10">
      <motion.div variants={stagger} {...inView}>{f(P, "about").map((t) => <motion.p variants={rise} key={t} className="mb-4 max-w-3xl text-lg leading-relaxed text-slate-400">{t}</motion.p>)}</motion.div>
      <motion.div variants={stagger} {...inView} className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {f(P, "highlights").map(([l, v]) => <motion.div variants={rise} whileHover={{ y: -6 }} key={l} className="card rounded-2xl p-5"><div className="text-xs text-slate-500">{l}</div><div className="mt-2 font-semibold text-white">{v}</div></motion.div>)}
      </motion.div>
    </div>
  </>);
}

const Marquee = ({ dir = 1, alt }) => { const { ui } = useApp(); const w = alt ? ui.marquee2 : ui.marquee; const row = Array(8).fill(w).flat(); return (
  <div className="overflow-hidden border-y border-sky-400/10 py-6"><div className="mq flex w-max gap-12 whitespace-nowrap font-serif text-5xl italic text-transparent [-webkit-text-stroke:1px_rgba(56,189,248,.45)] sm:text-7xl" style={{ animationDirection: dir > 0 ? "normal" : "reverse" }}>
    {row.map((t, i) => <span key={i}>{t} <span className="text-sky-400/60">✦</span></span>)}
  </div></div>); };

/* ---------- Timeline ---------- */
function Timeline({ items }) {
  const { f } = useApp();
  return (
    <motion.div variants={stagger} {...inView} className="relative space-y-6 pl-8">
      <motion.span initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.4 }} className="absolute bottom-0 left-0 top-0 w-px origin-top bg-gradient-to-b from-sky-400 to-transparent" />
      {items.map((it) => (
        <motion.div variants={rise} key={it.title + it.period} className="card relative rounded-2xl p-6">
          <span className="absolute -left-[37px] top-8 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_14px_#38bdf8]"><span className="absolute inset-0 animate-ping rounded-full bg-sky-400/70" /></span>
          <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-semibold text-white">{f(it, "title")}</h3><span className="text-sm text-sky-300">{f(it, "period")}</span></div>
          <p className="mt-1 text-slate-400">{f(it, "sub")}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ---------- Skill (kartu aktif menyorot, lainnya redup) ---------- */
function Skills() {
  const [act, setAct] = useState(null);
  return (
    <motion.div variants={stagger} {...inView} onMouseLeave={() => setAct(null)} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {SKILLS.map(([n, ab], i) => (
        <motion.div variants={rise} key={n} data-hover onMouseEnter={() => setAct(i)} animate={{ opacity: act === null || act === i ? 1 : 0.35, scale: act === i ? 1.04 : 1 }} className="card group flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[#0E1525] to-[#0B101B] p-4">
          <span style={{ animationDelay: `${i * 0.35}s` }} className="flex h-10 w-10 animate-[floaty_3.5s_ease-in-out_infinite] items-center justify-center rounded-lg bg-sky-400/10 text-sm font-bold text-sky-300 transition group-hover:bg-sky-500 group-hover:text-white">{ab}</span>
          <span className="text-sm text-slate-200">{n}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ---------- Galeri + Modal ---------- */
function PhotoCard({ item, onOpen, masonry }) {
  const { f } = useApp();
  return (
    <motion.article variants={rise} data-hover whileHover={{ y: -6 }} onClick={() => onOpen(item)} tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onOpen(item)} className={`card group cursor-pointer overflow-hidden rounded-2xl `}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.img} alt={f(item, "title")} loading="lazy" style={{ objectPosition: item.pos || "50% 0%", animationDelay: `${(item.img.length % 5) * -3}s` }} className="kb h-full w-full object-cover transition duration-700 group-hover:brightness-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070C] via-transparent" />
        {item.status && <span className="absolute right-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-black">{f(item, "status")}</span>}
        {masonry && <p className="absolute inset-0 flex items-end bg-black/70 p-4 text-sm text-slate-200 opacity-0 transition group-hover:opacity-100">{f(item, "desc")}</p>}
      </div>
      <div className="p-5">
        <p className="text-xs text-sky-300">{f(item, "cat")}</p>
        <h3 className="mt-1 flex items-center justify-between text-lg font-semibold text-white">{f(item, "title")}<ArrowUpRight size={18} className="text-sky-300" /></h3>
        {item.tags && <div className="mt-3 flex flex-wrap gap-2">{item.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
      </div>
    </motion.article>
  );
}

function Modal({ item, onClose }) {
  const { ui, f } = useApp();
  useEffect(() => { const k = (e) => e.key === "Escape" && onClose(); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
  const pts = f(item, "points");
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm">
      <motion.div initial={{ y: 40, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, scale: 0.95 }} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" className="card relative max-h-[90vh] w-full max-w-xl overflow-auto rounded-3xl">
        <button aria-label={ui.close} onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 text-white"><X size={18} /></button>
        <img src={item.img} alt={f(item, "title")} className="max-h-[60vh] w-full bg-black object-contain" />
        <div className="p-6">
          <p className="text-xs text-sky-300">{f(item, "cat")}</p>
          <h3 className="mt-1 text-2xl font-semibold text-white">{f(item, "title")}</h3>
          {item.status && <span className="mt-2 inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-black">{f(item, "status")}</span>}
          <p className="mt-4 leading-relaxed text-slate-300">{f(item, "desc")}</p>
          {pts && <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-400">{pts.map((x) => <li key={x}>{x}</li>)}</ul>}
          {item.tags && <div className="mt-4 flex flex-wrap gap-2">{item.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
          {item.demo && <a href={item.demo} target="_blank" rel="noreferrer" className="btn-grad mt-6 inline-block rounded-full px-5 py-2 text-sm font-semibold text-white">{ui.open}</a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Gallery({ items, masonry }) {
  const [sel, setSel] = useState(null);
  return (<>
    <motion.div variants={stagger} {...inView} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => <PhotoCard key={it.img} item={it} onOpen={setSel} masonry={masonry} />)}
    </motion.div>
    <AnimatePresence>{sel && <Modal item={sel} onClose={() => setSel(null)} />}</AnimatePresence>
  </>);
}

/* ---------- Contact ---------- */
function Contact() {
  const { ui } = useApp();
  const [status, setStatus] = useState("idle");
  const links = [[Mail, "Email", `mailto:${P.email}`], [Github, "GitHub", P.github], [Linkedin, "LinkedIn", P.linkedin], [MessageCircle, "WhatsApp", P.whatsapp], [Instagram, "Instagram", P.instagram], [Music2, "TikTok", P.tiktok]];
  const submit = async (e) => {
    e.preventDefault(); setStatus("sending");
    try { /* GANTI dengan endpoint asli, mis. Formspree */ await new Promise((r) => setTimeout(r, 1200)); setStatus("success"); e.target.reset(); } catch { setStatus("error"); }
    setTimeout(() => setStatus("idle"), 4000);
  };
  const c = "w-full rounded-xl border border-sky-400/15 bg-[#0B101B] px-4 py-3 text-white outline-none transition focus:border-sky-400/70";
  return (<>
    <motion.div variants={stagger} {...inView} className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {links.map(([I, n, h]) => <motion.a variants={rise} whileHover={{ y: -6 }} key={n} href={h} target="_blank" rel="noreferrer" className="card group rounded-2xl p-6"><I className="mb-6 text-sky-300" /><span className="flex items-center justify-between text-white">{n}<ArrowUpRight size={16} className="opacity-0 transition group-hover:opacity-100" /></span></motion.a>)}
    </motion.div>
    <form onSubmit={submit} className="card mt-8 grid gap-4 rounded-3xl p-6 md:grid-cols-2">
      <input required name="nama" placeholder={ui.form.name} className={c} />
      <input required type="email" name="email" placeholder={ui.form.email} className={c} />
      <textarea required name="pesan" rows={4} placeholder={ui.form.msg} className={`${c} md:col-span-2`} />
      <div className="flex items-center gap-4 md:col-span-2">
        <button disabled={status === "sending"} className="btn-grad flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-white disabled:opacity-60"><Send size={16} />{status === "sending" ? ui.form.sending : ui.form.send}</button>
        <AnimatePresence>
          {status === "success" && <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} role="status" className="flex items-center gap-2 text-sm text-emerald-400"><CheckCircle2 size={16} />{ui.form.ok}</motion.p>}
          {status === "error" && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="alert" className="flex items-center gap-2 text-sm text-red-400"><AlertCircle size={16} />{ui.form.fail}</motion.p>}
        </AnimatePresence>
      </div>
    </form>
  </>);
}

function Footer() {
  const { ui } = useApp();
  return (
    <footer className="relative overflow-hidden border-t border-sky-400/10 bg-gradient-to-b from-transparent to-blue-950/40 px-5 pb-10 pt-20">
      <motion.div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[90px]" animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 6, repeat: Infinity }} />
      <div className="mx-auto max-w-6xl">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-grad text-5xl font-extrabold uppercase leading-none sm:text-7xl lg:text-8xl">{ui.footBig}</motion.h2>
        <div className="mt-16 grid gap-10 text-sm sm:grid-cols-2">
          <div><h4 className="mb-3 text-slate-500">{ui.footNav}</h4><div className="grid grid-cols-2 gap-x-6">{NAV.map((id) => <a key={id} href={`#${id}`} className="py-1 hover:text-sky-300">{ui.nav[id]}</a>)}</div></div>
          <div><h4 className="mb-3 text-slate-500">{ui.footSocial}</h4>{[["GitHub", P.github], ["LinkedIn", P.linkedin], ["WhatsApp", P.whatsapp], ["Instagram", P.instagram], ["TikTok", P.tiktok]].map(([n, h]) => <a key={n} href={h} className="block py-1 hover:text-sky-300">{n}</a>)}</div>
        </div>
        <p className="mt-16 text-xs text-slate-500">© {new Date().getFullYear()} {P.name}. {ui.built}</p>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
export default function App() {
  const [loading, setLoading] = useState(true), [open, setOpen] = useState(false), [lang, setLang] = useState("id");
  const f = (o, k) => (lang === "en" && o[k + "En"] !== undefined ? o[k + "En"] : o[k]);
  return (
    <Ctx.Provider value={{ lang, setLang, ui: UI[lang], f }}>
      <Cursor /><ScrollBar /><Orbs /><Diamonds />
      <AnimatePresence>{loading && <Preloader done={() => setLoading(false)} />}</AnimatePresence>
      <Header open={open} setOpen={setOpen} />
      <RadialMenu open={open} setOpen={setOpen} />
      <main className="overflow-x-clip">
        <About /><Marquee />
        <Sec id="pendidikan"><Timeline items={EDUCATION} /></Sec>
        <Marquee dir={-1} alt />
        <Sec id="skill"><Skills /></Sec>
        <Marquee />
        <Sec id="organisasi"><Timeline items={ORGS} /></Sec>
        <Marquee dir={-1} alt />
        <Sec id="project"><Gallery items={PROJECTS} /></Sec>
        <Marquee />
        <Sec id="hobi">
          {HOBBY_GROUPS.map((g) => (
            <div key={g.title} className="mb-14 last:mb-0">
              <h3 className="text-grad text-2xl font-semibold">{f(g, "title")}</h3>
              <p className="mb-5 mt-1 text-sm text-slate-500">{f(g, "note")}</p>
              <Gallery items={g.items} masonry />
            </div>
          ))}
        </Sec>
        <Marquee dir={-1} alt />
        <Sec id="contact"><Contact /></Sec>
      </main>
      <Footer />
    </Ctx.Provider>
  );
}
