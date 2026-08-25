"use client";

import { useState } from "react";

const WA = "https://wa.me/601160860986";
const whatsapp = (message: string) => `${WA}?text=${encodeURIComponent(message)}`;

const heroImage = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=88";
const gallery = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=88",
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=88",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=88",
];

const packages = [
  {
    title: "Pakej Pantang A",
    description: "Urutan bersalin, urut lancar susu dan bertungku satu badan. Pilihan 5 hari juga tersedia pada RM600.",
    meta: "3 hari",
    price: "RM360",
    message: "Assalamualaikum Kak Yanie, saya berminat dengan Pakej Pantang A.",
  },
  {
    title: "Pakej Pantang B",
    description: "Urut bersalin, urut lancar susu, bertungku, mandi herba serta pemakaian parem dan pilis. 5 hari RM700.",
    meta: "3 hari",
    price: "RM420",
    popular: true,
    message: "Assalamualaikum Kak Yanie, saya berminat dengan Pakej Pantang B.",
  },
  {
    title: "Pakej Urut Sihat Wanita",
    description: "Urut satu badan, bertungku satu badan, urut perkemas / sengkak rahim dan urutan seri wajah.",
    meta: "1 sesi",
    price: "RM180",
    message: "Assalamualaikum Kak Yanie, saya berminat dengan Pakej Urut Sihat Wanita RM180.",
  },
];

const prices = [
  ["Urutan Buang Angin", "RM100"],
  ["Urutan Terapi Saraf", "RM130"],
  ["Urutan Badan, Kepala & Muka", "RM150"],
  ["Bertungku", "RM150"],
  ["Urutan Ikhtiar Hamil + Bertungku", "RM150"],
  ["Totok Wajah · 30–45 minit", "RM70–RM100"],
  ["Bekam Satu Badan", "RM100"],
  ["Sengkak Rahim & Rawatan Tombong + Urut & Bertungku", "RM150"],
  ["Mandi Aura Bunga / Limau", "RM100–RM150"],
];

const testimonials = [
  {
    stars: 5,
    quote: "Servis sangat selesa dan penerangan jelas. Kak Yanie layan dengan baik dan suasana rawatan terasa tenang.",
    name: "Pelanggan Yanie",
    role: "Feedback pelanggan",
  },
  {
    stars: 5,
    quote: "Tempahan melalui WhatsApp mudah dan terus dengan Kak Yanie. Senang nak pilih rawatan dan tanya slot yang sesuai.",
    name: "Pelanggan Yanie",
    role: "Feedback pelanggan",
  },
  {
    stars: 5,
    quote: "Pilihan pakej jelas dan harga diterangkan dari awal. Sesuai untuk yang mahu rawatan tradisional dalam suasana privasi.",
    name: "Pelanggan Yanie",
    role: "Feedback pelanggan",
  },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#131411] text-[#e5e2dd] selection:bg-[#ffb77b] selection:text-[#4d2700]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#2a2a27] bg-[#131411]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-16">
          <a href="#top" className="serif text-[24px] font-semibold text-[#c8c6c5]">Yanie Muslimah</a>
          <div className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.14em] md:flex">
            <a className="text-[#c4c7c7] transition-colors hover:text-[#ffb77b]" href="#treatments">Treatments</a>
            <a className="text-[#c4c7c7] transition-colors hover:text-[#ffb77b]" href="#gallery">Gallery</a>
            <a className="text-[#c4c7c7] transition-colors hover:text-[#ffb77b]" href="#testimonials">Testimonials</a>
            <a className="text-[#c4c7c7] transition-colors hover:text-[#ffb77b]" href="#pricing">Pricing</a>
          </div>
          <a
            className="hidden rounded bg-[#ffb77b] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4d2700] transition hover:bg-[#ffc69a] md:inline-flex"
            href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")}
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
          <button
            type="button"
            aria-label="Buka menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded border border-[#353532] text-[#e5e2dd] md:hidden"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#2a2a27] bg-[#131411] px-5 py-5 md:hidden">
            <div className="mx-auto grid max-w-[1200px] gap-4 text-[12px] uppercase tracking-[0.12em]">
              <a href="#treatments" onClick={() => setMenuOpen(false)}>Treatments</a>
              <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            </div>
          </div>
        )}
      </nav>

      <main id="top">
        <header className="relative flex min-h-[90vh] items-center justify-center px-5 pb-16 pt-24 md:px-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImage}')` }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[#131411]/80 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 mx-auto mt-12 max-w-[1200px] space-y-8 text-center md:mt-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ffb77b]">Tradisi Bidan Melayu · Sitiawan Manjung</p>
            <h1 className="serif mx-auto max-w-4xl text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-[#c8c6c5] md:text-[64px] lg:text-[72px]">
              Ketenangan Tradisional untuk Jiwa Moden
            </h1>
            <p className="mx-auto max-w-2xl text-[16px] leading-[1.75] text-[#e5e2dd] md:text-[18px]">
              Urutan tradisional, bertungku, rawatan wanita dan pakej pantang dalam suasana yang lebih privasi, tenang dan personal bersama Kak Yanie.
            </p>
            <div className="pt-8">
              <a
                className="inline-flex rounded bg-[#ffb77b] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#4d2700] shadow-[0_12px_35px_rgba(255,183,123,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-[#ffc69a]"
                href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")}
                target="_blank"
                rel="noreferrer"
              >
                Book Now
              </a>
            </div>
          </div>
        </header>

        <section className="bg-[#131411] px-5 py-24 md:px-16" id="pricing">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-16 space-y-4 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ffb77b]">Perkhidmatan Kami</span>
              <h2 className="serif text-[32px] font-semibold leading-[1.2] text-[#c8c6c5]">Pakej Rawatan</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {packages.map((pkg, index) => (
                <article
                  key={pkg.title}
                  className={`relative flex h-full flex-col overflow-hidden rounded-xl border bg-[#353532] p-8 transition duration-300 ${pkg.popular ? "border-[#ffb77b] shadow-[0_15px_45px_rgba(255,183,123,0.08)] md:-translate-y-4" : "border-[#20201d] hover:border-[#5a5a55]"}`}
                >
                  {pkg.popular ? (
                    <div className="absolute right-0 top-0 rounded-bl-lg bg-[#ffb77b] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4d2700]">Popular</div>
                  ) : (
                    <div className="absolute left-0 top-0 h-1 w-full bg-[#c8c6c5]/10" />
                  )}
                  <div className={pkg.popular ? "mb-8 mt-4" : "mb-8"}>
                    <h3 className="serif mb-2 text-[24px] font-medium leading-[1.3] text-[#c8c6c5]">{pkg.title}</h3>
                    <p className="text-[14px] leading-[1.65] text-[#c4c7c7]">{pkg.description}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-6 flex items-end justify-between border-t border-[#4a4946] pt-6">
                      <span className="flex items-center gap-2 text-[14px] text-[#c4c7c7]"><span className="text-[#ffb77b]">◷</span>{pkg.meta}</span>
                      <span className="serif text-[24px] font-medium text-[#c8c6c5]">{pkg.price}</span>
                    </div>
                    <a
                      className={`block w-full rounded py-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] transition ${pkg.popular ? "bg-[#ffb77b] text-[#4d2700] hover:bg-[#ffc69a]" : "border border-[#8e9192] text-[#c8c6c5] hover:bg-[#3a3936]"}`}
                      href={whatsapp(pkg.message)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pilih
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <details className="mx-auto mt-10 max-w-4xl rounded-lg border border-[#2a2a27] bg-[#1c1c19] p-6">
              <summary className="cursor-pointer list-none text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ffb77b]">Lihat semua harga rawatan individu</summary>
              <div className="mt-6 divide-y divide-[#353532]">
                {prices.map(([name, price]) => (
                  <div key={name} className="flex items-start justify-between gap-6 py-4 text-[14px]">
                    <span className="text-[#c4c7c7]">{name}</span>
                    <strong className="serif shrink-0 text-[18px] font-medium text-[#e5e2dd]">{price}</strong>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="bg-[#131411] px-5 py-24 md:px-16" id="gallery">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-16 space-y-4 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ffb77b]">Galeri</span>
              <h2 className="serif text-[32px] font-semibold text-[#c8c6c5]">Pengalaman Yanie Muslimah</h2>
            </div>
            <div className="grid auto-rows-[250px] grid-cols-1 gap-4 md:auto-rows-[300px] md:grid-cols-3 md:gap-6">
              <figure className="group relative overflow-hidden rounded-xl border border-[#353532] md:col-span-2 md:row-span-2">
                <img src={gallery[0]} alt="Ruang rawatan tradisional" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0e0e0c]/90 to-transparent p-8 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="serif text-[24px] text-[#e5e2dd]">Ruang Rawatan Eksklusif</span>
                </figcaption>
              </figure>
              <figure className="group relative overflow-hidden rounded-xl border border-[#353532]">
                <img src={gallery[1]} alt="Persediaan rawatan" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" />
              </figure>
              <figure className="group relative overflow-hidden rounded-xl border border-[#353532]">
                <img src={gallery[2]} alt="Perincian suasana rawatan" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" />
              </figure>
              <figure className="group relative overflow-hidden rounded-xl border border-[#353532] md:col-span-3">
                <img src={gallery[3]} alt="Sesi urutan tradisional" className="h-full w-full object-cover object-center opacity-90 transition duration-700 group-hover:scale-105" />
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-[#131411] px-5 py-24 md:px-16" id="testimonials">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-14 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ffb77b]">Testimoni</span>
              <h2 className="serif text-[32px] font-semibold text-[#c8c6c5]">Apa Kata Pelanggan Kami</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <article key={index} className="flex min-h-[260px] flex-col rounded-lg bg-[#353532] p-7">
                  <div className="mb-5 tracking-[0.16em] text-[#ffb77b]">{"★".repeat(item.stars)}</div>
                  <p className="text-[14px] italic leading-[1.75] text-[#e5e2dd]">“{item.quote}”</p>
                  <div className="mt-auto border-t border-[#454541] pt-5">
                    <strong className="serif block text-[18px] font-medium">{item.name}</strong>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.14em] text-[#b6b5b0]">{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-24 text-center md:px-16" id="booking">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }} aria-hidden="true">
            <div className="absolute inset-0 bg-[#131411]/88" />
          </div>
          <div className="relative z-10 mx-auto max-w-[900px]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ffb77b]">Temujanji Sekarang</span>
            <h2 className="serif mt-5 text-[36px] font-semibold leading-tight text-[#c8c6c5] md:text-[48px]">Mulakan Perjalanan Kesejahteraan Anda</h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.7] text-[#e5e2dd]">Langkah pertama cuma satu mesej. Tanya slot, pilih rawatan dan terus berbincang dengan Kak Yanie melalui WhatsApp.</p>
            <a
              href={whatsapp("Assalamualaikum Kak Yanie, saya nak buat tempahan rawatan.")}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex rounded bg-[#ffb77b] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#4d2700] transition hover:bg-[#ffc69a]"
            >
              Tempah Temujanji
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#20201d] bg-[#0e0e0c] px-5 py-12 md:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1.6fr_0.7fr_0.7fr]">
          <div>
            <div className="serif text-[24px] font-semibold text-[#ffb77b]">Yanie Muslimah</div>
            <p className="mt-4 max-w-sm text-[13px] leading-[1.7] text-[#c4c7c7]">Urut & confinement berasaskan tradisi bidan Melayu untuk wanita di Sitiawan, Manjung. Cas pengangkutan pakej pantang mengikut jarak.</p>
          </div>
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#ffb77b]">Terokai</h3>
            <div className="mt-4 grid gap-3 text-[12px] text-[#c4c7c7]">
              <a href="#pricing">Treatments</a>
              <a href="#gallery">Gallery</a>
              <a href="#pricing">Pricing</a>
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#ffb77b]">Hubungi</h3>
            <div className="mt-4 grid gap-3 text-[12px] text-[#c4c7c7]">
              <a href="tel:+601160860986">011-60860986</a>
              <span>Sitiawan · Manjung</span>
              <a href={WA} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1200px] flex-col gap-3 border-t border-[#20201d] pt-6 text-[10px] text-[#8e9192] md:flex-row md:items-center md:justify-between">
          <span>© 2026 Yanie Muslimah. All rights reserved.</span>
          <span>Rawatan tradisional / wellness, bukan pengganti nasihat perubatan profesional.</span>
        </div>
      </footer>

      <a
        href={whatsapp("Assalamualaikum Kak Yanie, saya nak tanya slot rawatan.")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 left-4 right-4 z-50 rounded bg-[#ffb77b] px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4d2700] shadow-xl md:hidden"
      >
        WhatsApp Kak Yanie
      </a>
    </div>
  );
}
