const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const serviceData = [
  {
    title: 'Urutan Seluruh Badan',
    price: 'RM —',
    description: 'Sesi menyeluruh untuk badan yang terasa penat dan lenguh. Tekanan boleh disesuaikan mengikut tahap keselesaan pelanggan.',
    details: ['60 / 90 minit', 'Tekanan boleh disesuaikan', 'Temujanji diperlukan'],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=88',
    alt: 'Rawatan urutan seluruh badan'
  },
  {
    title: 'Bahu & Tengkuk',
    price: 'RM —',
    description: 'Rawatan fokus untuk bahagian bahu, tengkuk dan belakang atas yang terasa tegang selepas rutin harian.',
    details: ['30 minit', 'Fokus bahagian atas badan', 'Tekanan ikut keselesaan'],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=88',
    alt: 'Rawatan fokus bahu dan tengkuk'
  }
];

let activeService = 0;
const serviceImage = document.querySelector('[data-service-image]');
const serviceTitle = document.querySelector('[data-service-title]');
const servicePrice = document.querySelector('[data-service-price]');
const serviceDescription = document.querySelector('[data-service-description]');
const serviceDetails = document.querySelector('[data-service-details]');
const serviceNextButton = document.querySelector('[data-service-next]');
const serviceNextTitle = document.querySelector('[data-service-next-title]');
const serviceNextImage = document.querySelector('[data-service-next-image]');

const renderService = () => {
  const current = serviceData[activeService];
  const next = serviceData[(activeService + 1) % serviceData.length];

  if (serviceImage) {
    serviceImage.style.opacity = '0.35';
    window.setTimeout(() => {
      serviceImage.src = current.image;
      serviceImage.alt = current.alt;
      serviceImage.style.opacity = '1';
    }, 140);
  }

  if (serviceTitle) serviceTitle.textContent = current.title;
  if (servicePrice) servicePrice.textContent = current.price;
  if (serviceDescription) serviceDescription.textContent = current.description;
  if (serviceDetails) serviceDetails.innerHTML = current.details.map((detail) => `<li>${detail}</li>`).join('');
  if (serviceNextTitle) serviceNextTitle.textContent = next.title;
  if (serviceNextImage) {
    serviceNextImage.src = next.image;
    serviceNextImage.alt = next.alt;
  }
};

serviceNextButton?.addEventListener('click', () => {
  activeService = (activeService + 1) % serviceData.length;
  renderService();
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px' });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
