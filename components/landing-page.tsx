"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

const wa = "https://wa.me/601160860986";

const services = [
  { name: "Urutan Buang Angin", price: "RM100", note: "Urutan tradisional" },
  { name: "Urutan Terapi Saraf", price: "RM130", note: "Fokus urutan tradisional" },
  { name: "Urutan Badan, Kepala & Muka", price: "RM150", note: "Sesi gabungan" },
  { name: "Bertungku", price: "RM150", note: "Rawatan tradisional" },
  { name: "Urutan Ikhtiar Hamil", price: "RM150", note: "Urut + bertungku" },
  { name: "Totok Wajah", price: "RM70–RM100", note: "30–45 minit" },
  { name: "Bekam Satu Badan", price: "RM100", note: "Cup tambahan RM10" },
  { name: "Sengkak Rahim & Rawatan Tombong", price: "RM150", note: "Urut satu badan + bertungku" },
  { name: "Mandi Aura Bunga / Limau", price: "RM100–RM150", note: "Mengikut pilihan rawatan" },
];

const packages = [
  {
    label: "Pakej Pantang A",
    title: "Rawatan ibu asas",
    items: ["Urutan bersalin", "Urut lancar susu", "Bertungku satu badan"],
    prices: ["3 hari · RM360", "5 hari · RM600"],
    message: "Assalamualaikum Kak Yanie, saya berminat dengan Pakej Pantang A.",
  },
  {
    label: "Pakej Pantang B",
    title: "Rawatan ibu + herba",
    items: ["Urut bersalin", "Urut lancar susu", "Bertungku satu badan", "Mandi herba", "Pemakaian parem & pilis"],
    prices: ["3 hari · RM420", "5 hari · RM700"],
    message: "Assalamualaikum Kak Yanie, saya berminat dengan Pakej Pantang B.",
    featured: true,
  },
  {
    label: "Pakej Urut Sihat Wanita",
    title: "Empat rawatan dalam satu sesi",
    items: ["Urut satu badan", "Bertungku satu badan", "Urut perkemas / sengkak rahim", "Urutan seri wajah"],
    prices: ["Pakej · RM180"],
    message: "Assalamualaikum Kak Yanie, saya berminat dengan Pakej Urut Sihat Wanita RM180.",
  },
];

const specialties = [
  ["Urutan tradisi", "Sentuhan tradisional untuk wanita"],
  ["Bertungku", "Rawatan tradisional sebagai tambahan sesi"],
  ["Pakej pantang", "Pilihan 3 hari atau 5 hari"],
  ["Rawatan wajah", "Totok wajah 30–45 minit"],
  ["Tempahan terus", "Terus berbincang dengan Kak Yanie"],
  ["Sitiawan · Manjung", "Cas pengangkutan pantang ikut jarak"],
];

const gallery = [
  ["https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=88", "Urutan badan"],
  ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=88", "Suasana rawatan"],
  ["https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=88", "Persediaan rawatan"],
  ["https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=88", "Sesi urutan"],
] as const;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function whatsapp(message: string) {
  return `${wa}?text=${encodeURIComponent(message)}`;
}

export default function LandingPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="outer-canvas">
      <div className="site-shell">
        <div className="edge-ornament edge-ornament-left" aria-hidden="true" />
        <div className="edge-ornament edge-ornament-right" aria-hidden="true" />

        <header className="site-header">
          <nav className="desktop-nav nav-left" aria-label="Navigasi utama">
            <a href="#tentang">Tentang</a>
            <a href="#servis">Servis</a>
            <a href="#pakej">Pakej</a>
          </nav>

          <a href="#top" className="wordmark" aria-label="Yanie Muslimah">
            <strong>YANIE</strong>
            <span>MUSLIMAH</span>
          </a>

          <div className="header-right">
            <a className="desktop-price-link" href="#harga">Harga</a>
            <a className="header-book" href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")} target="_blank" rel="noreferrer">
              Tempah <span>↗</span>
            </a>
            <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Buka menu">
              <i /><i />
            </button>
          </div>

          {open && (
            <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
              {[["Tentang", "#tentang"], ["Servis", "#servis"], ["Harga", "#harga"], ["Pakej", "#pakej"], ["Feedback", "#feedback"]].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
              ))}
            </motion.nav>
          )}
        </header>

        <main id="top">
          <section className="hero-grid">
            <motion.div className="hero-copy" {...reveal}>
              <p className="eyebrow">Tradisi bidan Melayu · khas wanita</p>
              <h1>Rasa lebih <em>ringan</em> selepas beri tubuh masa untuk rehat.</h1>
              <p className="hero-lead">Urutan tradisional, bertungku, rawatan wanita dan pakej pantang oleh Kak Yanie di Sitiawan, Manjung.</p>
              <div className="hero-actions">
                <a className="primary-cta" href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")} target="_blank" rel="noreferrer">WhatsApp Kak Yanie <span>↗</span></a>
                <a className="quiet-link" href="#harga">Lihat harga <span>↓</span></a>
              </div>
            </motion.div>

            <motion.div className="hero-image-block" {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
              <Image src={gallery[3][0]} alt={gallery[3][1]} fill priority sizes="(max-width: 760px) 100vw, 44vw" />
              <a href="#pakej" className="floating-seal">
                <small>PAKEJ PANTANG</small>
                <strong>dari RM360</strong>
                <span>lihat pakej ↘</span>
              </a>
            </motion.div>

            <motion.aside className="hero-side-note" {...reveal} transition={{ ...reveal.transition, delay: 0.16 }}>
              <span className="display-quote">“</span>
              <p>Rawatan wanita yang disusun dengan lebih personal — terus berhubung dengan Kak Yanie tanpa borang panjang.</p>
              <div className="side-rule" />
              <small>011-60860986<br />Sitiawan · Manjung</small>
            </motion.aside>

            <div className="hero-bottom-note"><span /> <p>Urut & Confinement · tempahan mengikut slot</p></div>
          </section>

          <section className="editorial-about section-pad" id="tentang">
            <motion.div className="about-center" {...reveal}>
              <p className="eyebrow">Tentang Yanie Muslimah</p>
              <h2>Tradisi yang terasa dekat.<br /><em>Dipersembahkan dengan lebih premium.</em></h2>
              <p>Website ini dibina sebagai halaman jenama sebenar — bukan grid kad generik. Gambar, harga dan pakej menjadi fokus utama.</p>
            </motion.div>

            <motion.div className="editorial-collage" {...reveal}>
              <figure className="collage-item c1"><Image src={gallery[1][0]} alt={gallery[1][1]} fill sizes="24vw" /></figure>
              <figure className="collage-item c2"><Image src={gallery[0][0]} alt={gallery[0][1]} fill sizes="28vw" /></figure>
              <figure className="collage-item c3"><Image src={gallery[2][0]} alt={gallery[2][1]} fill sizes="24vw" /></figure>
              <figure className="collage-item c4"><Image src={gallery[3][0]} alt={gallery[3][1]} fill sizes="24vw" /></figure>
              <div className="collage-brand-card">
                <span>YANIE MUSLIMAH</span>
                <strong>Urut & Confinement</strong>
                <p>Tradisi bidan Melayu untuk wanita.</p>
              </div>
            </motion.div>
          </section>

          <section className="services-section section-pad" id="servis">
            <motion.div className="section-heading centered" {...reveal}>
              <p className="eyebrow">Servis pilihan</p>
              <h2>Rawatan yang pelanggan boleh pilih terus.</h2>
              <p>Harga sebenar dipaparkan supaya pelanggan tak perlu mesej semata-mata untuk bertanya bajet.</p>
            </motion.div>

            <div className="feature-service-grid">
              {[
                ["Urutan Buang Angin", "RM100", gallery[0][0], "Urutan tradisional"],
                ["Urutan Terapi Saraf", "RM130", gallery[3][0], "Fokus urutan tradisional"],
                ["Badan, Kepala & Muka", "RM150", gallery[1][0], "Sesi gabungan"],
              ].map(([name, price, image, note], index) => (
                <motion.article className={`feature-card ${index === 0 ? "feature-card-accent" : ""}`} key={name} {...reveal} transition={{ ...reveal.transition, delay: index * 0.07 }}>
                  <figure><Image src={image} alt={name} fill sizes="(max-width: 760px) 100vw, 30vw" /></figure>
                  <div className="feature-card-body">
                    <span className="card-index">0{index + 1}</span>
                    <h3>{name}</h3>
                    <p>{note}</p>
                    <strong>{price}</strong>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="specialty-section section-pad">
            <motion.div className="section-heading centered compact" {...reveal}>
              <p className="eyebrow">Keistimewaan</p>
              <h2>Lebih daripada satu jenis urutan.</h2>
            </motion.div>

            <div className="specialty-layout">
              <div className="specialty-column">
                {specialties.slice(0, 3).map(([title, text], index) => (
                  <motion.div className="specialty-row" key={title} {...reveal}>
                    <span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div>
                  </motion.div>
                ))}
              </div>
              <motion.figure className="specialty-photo" {...reveal}>
                <Image src={gallery[2][0]} alt="Suasana rawatan Yanie Muslimah" fill sizes="(max-width: 760px) 100vw, 28vw" />
                <span className="photo-label">YANIE<br />MUSLIMAH</span>
              </motion.figure>
              <div className="specialty-column">
                {specialties.slice(3).map(([title, text], index) => (
                  <motion.div className="specialty-row" key={title} {...reveal}>
                    <span>0{index + 4}</span><div><h3>{title}</h3><p>{text}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="price-section section-pad" id="harga">
            <motion.div className="section-heading split-heading" {...reveal}>
              <div><p className="eyebrow">Harga rawatan</p><h2>Semua harga,<br />jelas dari awal.</h2></div>
              <p className="heading-note">Nama servis dikekalkan mengikut poster Yanie. Penerangan di website tidak membuat tuntutan perubatan.</p>
            </motion.div>
            <motion.div className="price-table" {...reveal}>
              {services.map((service, index) => (
                <div className="price-row" key={service.name}>
                  <span className="price-index">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{service.name}</h3><p>{service.note}</p></div>
                  <strong>{service.price}</strong>
                </div>
              ))}
            </motion.div>
            <p className="wellness-note">* Perkhidmatan berkaitan kehamilan, kesuburan, rahim, saraf atau keadaan kesihatan ialah rawatan tradisional/wellness dan bukan pengganti diagnosis atau rawatan profesional kesihatan.</p>
          </section>

          <section className="packages-section section-pad" id="pakej">
            <motion.div className="section-heading centered" {...reveal}>
              <p className="eyebrow">Pakej utama</p>
              <h2>Pilih pakej yang sesuai dengan keperluan.</h2>
              <p>Pakej pantang mempunyai caj pengangkutan mengikut jarak.</p>
            </motion.div>

            <div className="package-grid">
              {packages.map((pkg, index) => (
                <motion.article className={`package-card ${pkg.featured ? "package-featured" : ""}`} key={pkg.label} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }}>
                  <div className="package-topline"><span>{pkg.label}</span>{pkg.featured && <b>POPULAR</b>}</div>
                  <h3>{pkg.title}</h3>
                  <ul>{pkg.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="package-prices">{pkg.prices.map((price) => <strong key={price}>{price}</strong>)}</div>
                  <a href={whatsapp(pkg.message)} target="_blank" rel="noreferrer">Tanya pakej <span>↗</span></a>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="feedback-section section-pad" id="feedback">
            <motion.div className="feedback-heading" {...reveal}>
              <p className="eyebrow">Feedback pelanggan</p>
              <h2>Bahagian ini akan guna screenshot sebenar — bukan review rekaan.</h2>
            </motion.div>
            <div className="feedback-grid">
              {[1, 2].map((item) => (
                <motion.article className={`feedback-card ${item === 2 ? "feedback-offset" : ""}`} key={item} {...reveal}>
                  <div className="feedback-placeholder"><span>SCREENSHOT</span><strong>Feedback 0{item}</strong><small>WhatsApp / DM pelanggan sebenar</small><b>”</b></div>
                  <div className="feedback-caption"><strong>Pelanggan sebenar</strong><p>Screenshot akan diletakkan di sini selepas aset feedback diberi.</p></div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="booking-section section-pad" id="tempahan">
            <motion.div className="booking-panel" {...reveal}>
              <div><p className="eyebrow eyebrow-light">Tempahan</p><h2>Terus berbincang dengan Kak Yanie.</h2></div>
              <div className="booking-side">
                <p>Beritahu servis atau pakej yang diminati, tarikh pilihan dan lokasi jika melibatkan pakej pantang.</p>
                <a href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")} target="_blank" rel="noreferrer">WhatsApp 011-60860986 <span>↗</span></a>
                <div className="booking-meta"><span>Sitiawan · Manjung</span><span>Khas wanita</span><span>Temujanji dahulu</span></div>
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-brand"><strong>YANIE</strong><span>MUSLIMAH</span><p>Urutan Tradisi Bidan Melayu · Urut & Confinement</p></div>
          <div className="footer-col"><span>Explore</span><a href="#servis">Servis</a><a href="#harga">Harga</a><a href="#pakej">Pakej</a></div>
          <div className="footer-col"><span>Hubungi</span><a href="tel:+601160860986">011-60860986</a><a href={wa} target="_blank" rel="noreferrer">WhatsApp</a><p>Sitiawan, Manjung</p></div>
          <div className="footer-bottom"><small>© {new Date().getFullYear()} Yanie Muslimah</small><a href="#top">Kembali ke atas ↑</a></div>
        </footer>
      </div>

      <a className="mobile-sticky-cta" href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")} target="_blank" rel="noreferrer">WhatsApp Kak Yanie <span>↗</span></a>
    </div>
  );
}
