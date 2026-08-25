"use client";

import Image from "next/image";

const WA = "https://wa.me/601160860986";
const whatsapp = (message: string) => `${WA}?text=${encodeURIComponent(message)}`;

const packages = [
  {
    title: "Pakej Pantang A",
    description: "Urutan bersalin, urut lancar susu dan bertungku satu badan.",
    meta: "3 hari",
    price: "RM360",
    extra: "5 hari · RM600",
    message: "Assalamualaikum Kak Yanie, saya berminat dengan Pakej Pantang A.",
  },
  {
    title: "Pakej Pantang B",
    description: "Urut bersalin, urut lancar susu, bertungku, mandi herba, parem dan pilis.",
    meta: "3 hari",
    price: "RM420",
    extra: "5 hari · RM700",
    popular: true,
    message: "Assalamualaikum Kak Yanie, saya berminat dengan Pakej Pantang B.",
  },
  {
    title: "Urut Sihat Wanita",
    description: "Urut satu badan, bertungku, urut perkemas / sengkak rahim dan urutan seri wajah.",
    meta: "1 pakej",
    price: "RM180",
    extra: "4 rawatan dalam satu pakej",
    message: "Assalamualaikum Kak Yanie, saya berminat dengan Pakej Urut Sihat Wanita RM180.",
  },
];

const services = [
  ["Urutan Buang Angin", "RM100"],
  ["Urutan Terapi Saraf", "RM130"],
  ["Urutan Badan, Kepala & Muka", "RM150"],
  ["Bertungku", "RM150"],
  ["Urutan Ikhtiar Hamil + Bertungku", "RM150"],
  ["Totok Wajah (30–45 minit)", "RM70–RM100"],
  ["Bekam Satu Badan", "RM100"],
  ["Satu Cup Bekam", "RM10"],
  ["Sengkak Rahim & Rawatan Tombong + Urut & Bertungku", "RM150"],
  ["Mandi Aura Bunga / Limau", "RM100–RM150"],
] as const;

const gallery = {
  hero: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=90",
  big: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1400&q=88",
  small1: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=88",
  small2: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=88",
  wide: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=88",
  cta: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=88",
};

export default function LandingPage() {
  return (
    <main className="sanctuary-page" id="top">
      <nav className="topbar">
        <a className="brand" href="#top">YanieMuslimah</a>
        <div className="navlinks" aria-label="Navigasi utama">
          <a href="#treatments">Rawatan</a>
          <a href="#gallery">Galeri</a>
          <a href="#testimonials">Feedback</a>
          <a href="#pricing">Harga</a>
        </div>
        <a className="nav-book" href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")} target="_blank" rel="noreferrer">Tempah Sekarang</a>
      </nav>

      <section className="hero">
        <Image src={gallery.hero} alt="Suasana rawatan urutan tradisional" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Ketenangan Tradisional untuk<br />Wanita Moden</h1>
          <p>Urutan tradisi bidan Melayu, bertungku dan penjagaan wanita dalam suasana yang lebih tenang dan peribadi.</p>
          <a href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")} target="_blank" rel="noreferrer">Tempah Sekarang</a>
        </div>
      </section>

      <section className="section treatments" id="treatments">
        <div className="section-title centered">
          <span>PERKHIDMATAN KAMI</span>
          <h2>Pakej Rawatan</h2>
        </div>

        <div className="treatment-grid">
          {packages.map((pkg) => (
            <article className={`treatment-card ${pkg.popular ? "popular" : ""}`} key={pkg.title}>
              {pkg.popular && <span className="popular-tag">POPULAR</span>}
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <div className="card-price-row">
                <span className="meta-dot">◉ {pkg.meta}</span>
                <strong>{pkg.price}</strong>
              </div>
              <small>{pkg.extra}</small>
              <a href={whatsapp(pkg.message)} target="_blank" rel="noreferrer">PILIH</a>
            </article>
          ))}
        </div>

        <details className="all-prices" id="pricing">
          <summary>Lihat semua harga rawatan individu</summary>
          <div className="all-prices-grid">
            {services.map(([name, price]) => (
              <div className="service-line" key={name}>
                <span>{name}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
          <p className="price-note">* Pakej pantang mempunyai cas pengangkutan mengikut jarak. Servis berkaitan kesihatan ialah rawatan tradisional/wellness dan bukan pengganti diagnosis atau rawatan profesional kesihatan.</p>
        </details>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="section-title centered">
          <span>GALERI</span>
          <h2>Pengalaman Yanie Muslimah</h2>
        </div>

        <div className="gallery-grid">
          <figure className="g-big"><Image src={gallery.big} alt="Urutan tradisional" fill sizes="(max-width: 760px) 100vw, 66vw" /></figure>
          <figure className="g-small"><Image src={gallery.small1} alt="Persediaan spa dan herba" fill sizes="(max-width: 760px) 50vw, 33vw" /></figure>
          <figure className="g-small"><Image src={gallery.small2} alt="Ruang rawatan" fill sizes="(max-width: 760px) 50vw, 33vw" /></figure>
          <figure className="g-wide"><Image src={gallery.wide} alt="Sesi urutan" fill sizes="100vw" /></figure>
        </div>
      </section>

      <section className="section testimonial-section" id="testimonials">
        <div className="section-title left-title">
          <span>FEEDBACK</span>
          <h2>Apa Kata Pelanggan Kami</h2>
        </div>

        <div className="testimonial-grid">
          {[1, 2, 3].map((item) => (
            <article className="testimonial-card" key={item}>
              <div className="feedback-label">FEEDBACK SEBENAR</div>
              <p>Screenshot feedback WhatsApp pelanggan akan diletakkan di ruang ini supaya testimoni yang dipaparkan benar-benar datang daripada pelanggan Yanie.</p>
              <div className="testimonial-footer">
                <strong>Feedback {String(item).padStart(2, "0")}</strong>
                <small>AKAN DIKEMAS KINI</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-cta" id="booking">
        <Image src={gallery.cta} alt="Suasana rawatan yang tenang" fill sizes="100vw" />
        <div className="booking-overlay" />
        <div className="booking-content">
          <span>TEMPAH SEKARANG</span>
          <h2>Mulakan Masa Rehat untuk Diri Sendiri</h2>
          <p>Pilih rawatan atau pakej yang sesuai, kemudian terus WhatsApp Kak Yanie untuk semak slot di Sitiawan dan Manjung.</p>
          <a href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")} target="_blank" rel="noreferrer">TEMPAH TEMUJANJI</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top">YanieMuslimah</a>
            <p>Urutan tradisi bidan Melayu, rawatan wanita dan pakej pantang di Sitiawan, Manjung.</p>
          </div>
          <div className="footer-links">
            <span>TEROKAI</span>
            <a href="#treatments">Rawatan</a>
            <a href="#gallery">Galeri</a>
            <a href="#pricing">Harga</a>
          </div>
          <div className="footer-links">
            <span>HUBUNGI</span>
            <a href="tel:+601160860986">011-60860986</a>
            <a href={WA} target="_blank" rel="noreferrer">WhatsApp</a>
            <p>Sitiawan · Manjung</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Yanie Muslimah. All rights reserved.</p>
          <p>Urut & Confinement · Tradisi Bidan Melayu.</p>
        </div>
      </footer>

      <a className="mobile-wa" href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")} target="_blank" rel="noreferrer">WhatsApp Kak Yanie</a>
    </main>
  );
}
