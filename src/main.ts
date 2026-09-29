import './style.css'

const whatsappNumber = '541125992087'
const whatsappMessage = encodeURIComponent(
  'Hola Sabores del Océano, quisiera consultar por el menú y las promociones.'
)

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const menuSections = [
  {
    title: 'ENTRADAS',
    icon: '🐚',
    items: [
      'Papa a la huancaína',
      'Leche de tigre',
      'Rabas con batata frita y ensalada criolla',
    ],
  },
  {
    title: 'SOPAS',
    icon: '🍲',
    items: [
      'Caldo de gallina',
      'Patasca',
      'Sopa sustancia',
      'Sopa a la minuta',
    ],
  },
  {
    title: 'PLATOS CRIOLLOS',
    icon: '🇵🇪',
    items: [
      'Seco de cordero',
      'Arroz con pollo y huancaína',
      'Ají de gallina',
      'Pollada',
      'Pollo broaster',
      'Lomo saltado de carne',
      'Lomo saltado de pollo',
      'Lomo saltado mixto',
      'Lomo saltado a lo pobre',
      'Tallarín verde c/ bistec',
      'Tallarín saltado de carne',
      'Tallarín saltado de pollo',
      'Tallarín saltado mixto',
      'Fettuccini con huancaína',
      'Chicharrón de cerdo',
      'Bistec a lo pobre',
      'Bistec a caballo',
      'Anticuchos',
      'Chicharrón de pollo',
      'Salchipollo',
      'Salchipapa',
      'Mostrito',
      'Chuleta de cerdo c/ guarnición',
    ],
  },
  {
    title: 'PESCADOS Y MARISCOS',
    icon: '🦐',
    items: [
      'Ceviche de pescado',
      'Ceviche mixto',
      'Ceviche mixto c/ rabas',
      'Jalea mixta',
      'Jalea especial',
      'Jalea imperial',
      'Dúo marino',
      'Trío marino',
      'Chicharrón de rabas',
      'Chicharrón de pescado',
      'Arroz chaufa de mariscos',
      'Arroz con mariscos',
      'Arroz con mariscos y leche de tigre',
      'Picante de mariscos',
      'Mero a lo macho',
      'Mero frito',
      'Parihuela',
      'Sudado de pescado',
      'Sudado mixto',
      'Chupe de pescado',
      'Chupe de camarones',
      'Escabeche de pescado',
      'Filet de merluza c/ guarnición',
    ],
  },
  {
    title: 'PLATOS CHIFA',
    icon: '🥢',
    items: [
      'Arroz chaufa de carne',
      'Arroz chaufa de pollo',
      'Arroz chaufa de cerdo',
      'Arroz chaufa mixto',
      'Arroz chaufa especial',
      'Aeropuerto',
      'Combinado',
      'Tallarín chifa',
      'Chaufa de mariscos',
    ],
  },
  {
    title: 'PLATOS ARGENTINOS',
    icon: '🇦🇷',
    items: [
      'Milanesa napolitana c/ guarnición',
      'Suprema de pollo c/ guarnición',
      'Pollo a la plancha c/ guarnición',
      'Milanesa de ternera c/ guarnición',
      'Bife de costilla c/ guarnición',
      'Churrasco c/ guarnición',
    ],
    note: 'Guarnición: papas fritas, arroz o ensalada.',
  },
  {
    title: 'GUARNICIONES',
    icon: '🍟',
    items: [
      'Porción de arroz',
      'Porción de papas fritas',
      'Porción de batata frita',
    ],
  },
  {
    title: 'BEBIDAS',
    icon: '🥤',
    items: [
      'Gaseosa 500 ml',
      'Gaseosa 1,75 L',
      'Levité 1,5 L',
      'Agua 500 ml',
      'Chola de Oro 2,25 L',
      'Sipán 500 ml',
      'Sipán 2,25 L',
      'Inca Kola 2,25 L',
    ],
  },
  {
    title: 'POSTRES',
    icon: '🍰',
    items: [
      'Torta helada',
      'Suspiro limeño',
      'Torta de 3 leches',
    ],
    note: 'Y más opciones disponibles en el restaurante.',
  },
]

const dishImages = Array.from({ length: 22 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0')
  return `/images/plato-${number}.jpg`
})

const promoImages = Array.from({ length: 4 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0')
  return `/images/promos-${number}.jpg`
})

const socialIcons = {
  facebook: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z"/>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1"/>
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 3h3.2c.28 1.56 1.16 2.77 2.8 3.35v3.22c-1.27-.03-2.45-.4-3.5-1.04V15c0 3.73-2.63 6-6.13 6A5.37 5.37 0 0 1 6 15.67C6 12.3 8.5 10 12 10c.37 0 .73.03 1.08.1v3.34a3.7 3.7 0 0 0-1.08-.17c-1.22 0-2.18.92-2.18 2.22 0 1.25.94 2.25 2.18 2.25 1.3 0 2.2-.8 2.2-2.53V3Z"/>
    </svg>
  `,
  whatsapp: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.86 11.86 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43Zm-8.44 18.3h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.86 9.86 0 0 1-1.51-5.26C2.22 6.45 6.65 2 12.08 2a9.84 9.84 0 0 1 7.02 2.92 9.88 9.88 0 0 1 2.9 7.03c0 5.43-4.43 9.83-9.92 9.83Zm5.4-7.37c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.23-.66.08-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.36.46-.54.15-.18.2-.3.3-.51.1-.2.05-.38-.03-.54-.08-.15-.69-1.65-.95-2.26-.25-.59-.51-.51-.69-.52h-.59c-.2 0-.54.08-.82.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.97 1.25 3.18c.15.2 2.16 3.3 5.24 4.63.73.32 1.3.51 1.74.65.73.23 1.4.2 1.92.12.59-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.08-.13-.28-.2-.59-.36Z"/>
    </svg>
  `,
}

const menuHtml = menuSections
  .map(
    (section) => `
      <article class="menu-card">
        <div class="menu-card-heading">
          <span class="menu-icon">${section.icon}</span>
          <h3>${section.title}</h3>
        </div>

        <ul>
          ${section.items.map((item) => `<li>${item}</li>`).join('')}
        </ul>

        ${
          section.note
            ? `<p class="menu-note">${section.note}</p>`
            : ''
        }
      </article>
    `,
  )
  .join('')

const dishesHtml = dishImages
  .map(
    (src, index) => `
      <button class="photo-card" type="button" data-image="${src}" aria-label="Ver fotografía del plato ${index + 1}">
        <img src="${src}" alt="Plato de Sabores del Océano ${index + 1}" loading="lazy">
        <span class="photo-card-glow"></span>
      </button>
    `,
  )
  .join('')

const videoFiles = ["video1.mp4", "video2.mp4", "video3.mp4"]
const videosHtml = videoFiles.map((src, index) => `<article class="video-card"><video src="/images/${src}" controls playsinline preload="metadata" aria-label="Video de Sabores del Océano ${index + 1}"></video></article>`).join("")
const promosHtml = promoImages
  .map(
    (src, index) => `
      <button class="promo-card" type="button" data-image="${src}" aria-label="Ver promoción ${index + 1}">
        <img src="${src}" alt="Promoción de Sabores del Océano ${index + 1}" loading="lazy">
      </button>
    `,
  )
  .join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="site-shell">

    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Sabores del Océano">
        <span class="brand-main">SABORES</span>
        <span class="brand-sub">DEL OCÉANO</span>
      </a>

      <nav class="main-nav" aria-label="Navegación principal">
        <a href="#menu">Carta</a>
        <a href="#platos">Platos</a>
        <a href="#promociones">Promociones</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a class="header-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener">
        ${socialIcons.whatsapp}
        <span>WhatsApp</span>
      </a>
    </header>

    <main>

      <section class="hero" id="inicio">
        <img class="hero-image" src="/images/portada.jpg" alt="Sabores del Océano">

        <div class="hero-overlay"></div>

        <div class="hero-content">
          <div class="hero-kicker">RESTAURANTE · COCINA PERUANA</div>

          <h1>
            SABORES
            <span>DEL OCÉANO</span>
          </h1>

          <div class="hero-line"></div>

          <p>
            Una experiencia gastronómica inspirada
            en los sabores del Perú.
          </p>

          <div class="hero-actions">
            <a class="btn btn-gold" href="#menu">VER CARTA</a>
            <a class="btn btn-outline" href="${whatsappUrl}" target="_blank" rel="noopener">
              CONSULTAR POR WHATSAPP
            </a>
          </div>
        </div>

        <a class="hero-scroll" href="#presentacion" aria-label="Bajar">
          <span></span>
        </a>
      </section>

      <section class="presentation section" id="presentacion">
        <div class="section-heading centered">
          <span class="eyebrow">SABORES DEL OCÉANO</span>
          <h2>Tradición peruana junto al sabor del mar</h2>
          <div class="gold-divider"></div>
          <p>
            Pescados, mariscos, cocina criolla y especialidades chifa
            reunidos en una carta pensada para disfrutar.
          </p>
        </div>

        <div class="feature-grid">
          <article class="feature-card">
            <span class="feature-number">01</span>
            <span class="feature-icon">🌊</span>
            <h3>Del mar a tu mesa</h3>
            <p>
              Sabores de pescados y mariscos preparados con identidad peruana.
            </p>
          </article>

          <article class="feature-card">
            <span class="feature-number">02</span>
            <span class="feature-icon">🇵🇪</span>
            <h3>Tradición peruana</h3>
            <p>
              Platos criollos que conservan el espíritu de la gastronomía peruana.
            </p>
          </article>

          <article class="feature-card">
            <span class="feature-number">03</span>
            <span class="feature-icon">🥢</span>
            <h3>Fusión chifa</h3>
            <p>
              Clásicos chifa y combinaciones para todos los gustos.
            </p>
          </article>
        </div>
      </section>

      <section class="dishes section" id="platos">
        <div class="section-heading">
          <span class="eyebrow">GALERÍA</span>
          <h2>Algunos de nuestros platos</h2>
          <div class="gold-divider"></div>
          <p>
            Una pequeña muestra de nuestra cocina.
            Tocá cualquier fotografía para verla completa.
          </p>
        </div>

        <div class="dish-grid">
          ${dishesHtml}
        </div>
      </section>
      <section class="videos-section section" id="videos">
        <div class="section-heading centered">
          <span class="eyebrow">EXPERIENCIA</span>
          <h2>Viví Sabores del Océano</h2>
          <div class="gold-divider"></div>
          <p>Descubrí nuestra cocina y algunos de nuestros momentos en video.</p>
        </div>

        <div class="video-grid">
          ${videosHtml}
        </div>
      </section>


      <section class="menu-section section" id="menu">
        <div class="section-heading centered">
          <span class="eyebrow">NUESTRA CARTA</span>
          <h2>Sabores que hablan por sí solos</h2>
          <div class="gold-divider"></div>
          <p>
            Descubrí nuestras especialidades. Consultá disponibilidad
            y opciones directamente con el restaurante.
          </p>
        </div>

        <div class="menu-grid">
          ${menuHtml}
        </div>

        <div class="menu-cta">
          <p>¿Querés consultar por un plato o una promoción?</p>
          <a class="btn btn-gold" href="${whatsappUrl}" target="_blank" rel="noopener">
            CONSULTAR POR WHATSAPP
          </a>
        </div>
      </section>

      <section class="promotions section" id="promociones">
        <div class="section-heading centered">
          <span class="eyebrow">PROMOCIONES</span>
          <h2>Opciones para compartir</h2>
          <div class="gold-divider"></div>
          <p>
            Conocé nuestras promociones actuales.
            Tocá una imagen para verla completa.
          </p>
        </div>

        <div class="promo-grid">
          ${promosHtml}
        </div>
      </section>

      <section class="contact-section section" id="contacto">
        <div class="contact-inner">

          <div class="contact-copy">
            <span class="eyebrow">VISITANOS</span>
            <h2>Una mesa, muchos sabores.</h2>
            <div class="gold-divider"></div>
            <p>
              Estamos para recibirte y compartir una experiencia
              gastronómica con auténticos sabores peruanos.
            </p>
          </div>

          <div class="contact-details">

            <a class="contact-item" href="https://www.google.com/maps/search/?api=1&query=Av.+La+Plata+2899,+CABA" target="_blank" rel="noopener">
              <span class="contact-symbol">⌖</span>
              <div>
                <small>DIRECCIÓN</small>
                <strong>Av. La Plata 2899, CABA</strong>
              </div>
            </a>

            <div class="contact-item">
              <span class="contact-symbol">◷</span>
              <div>
                <small>HORARIOS</small>
                <strong>Lunes: 12:00 – 16:30</strong>
                <strong>Martes a domingo: 12:00 – 23:00</strong>
                <small>DELIVERY</small>
                <strong>12:00 – 16:00</strong>
                <strong>19:30 – 23:00</strong>
                <strong>Disponible</strong>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section class="social-section">
        <div class="social-content">
          <span class="eyebrow">COMUNIDAD</span>
          <h2>SEGUINOS EN NUESTRAS REDES</h2>
          <div class="gold-divider"></div>
          <p>Descubrí nuestras novedades, platos y promociones.</p>

          <div class="social-buttons">

            <a
              class="social-button facebook"
              href="https://www.facebook.com/sabores.del.oceano.2025"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              ${socialIcons.facebook}
              <span>Facebook</span>
            </a>

            <a
              class="social-button instagram"
              href="https://www.instagram.com/saboresdeloceanooficial"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              ${socialIcons.instagram}
              <span>Instagram</span>
            </a>

            <a
              class="social-button tiktok"
              href="https://www.tiktok.com/@sabores.del.ocano5"
              target="_blank"
              rel="noopener"
              aria-label="TikTok"
            >
              ${socialIcons.tiktok}
              <span>TikTok</span>
            </a>

          </div>
        </div>
      </section>

    </main>

    <footer class="site-footer">
      <div class="footer-logo">
        <span>SABORES</span>
        <strong>DEL OCÉANO</strong>
      </div>

      <p>PESCADOS · MARISCOS · CRIOLLOS · CHIFA</p>

      <span class="footer-copy">
        © ${new Date().getFullYear()} Sabores del Océano
      </span>
    </footer>

    <a
      class="floating-whatsapp"
      href="${whatsappUrl}"
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
    >
      ${socialIcons.whatsapp}
    </a>

    <div class="image-modal" id="imageModal" aria-hidden="true">
      <button class="modal-close" type="button" aria-label="Cerrar">×</button>

      <button class="modal-arrow modal-prev" type="button" aria-label="Imagen anterior">‹</button>

      <div class="modal-content">
        <img id="modalImage" src="" alt="Fotografía ampliada">
      </div>

      <button class="modal-arrow modal-next" type="button" aria-label="Imagen siguiente">›</button>
    </div>

  </div>
`

const modal = document.querySelector<HTMLDivElement>('#imageModal')!
const modalImage = document.querySelector<HTMLImageElement>('#modalImage')!
const modalClose = document.querySelector<HTMLButtonElement>('.modal-close')!
const modalPrev = document.querySelector<HTMLButtonElement>('.modal-prev')!
const modalNext = document.querySelector<HTMLButtonElement>('.modal-next')

const allModalImages = [...dishImages, ...promoImages]
let currentImageIndex = 0

function openModal(src: string) {
  currentImageIndex = allModalImages.indexOf(src)

  if (currentImageIndex < 0) {
    currentImageIndex = 0
  }

  modalImage.src = src
  modal.classList.add('open')
  modal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')
}

function closeModal() {
  modal.classList.remove('open')
  modal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')
}

function changeModalImage(direction: number) {
  currentImageIndex =
    (currentImageIndex + direction + allModalImages.length) %
    allModalImages.length

  modalImage.src = allModalImages[currentImageIndex]
}

document.querySelectorAll<HTMLButtonElement>('[data-image]').forEach((button) => {
  button.addEventListener('click', () => {
    const src = button.dataset.image

    if (src) {
      openModal(src)
    }
  })
})

modalClose.addEventListener('click', closeModal)

modalPrev.addEventListener('click', () => {
  changeModalImage(-1)
})

modalNext?.addEventListener('click', () => {
  changeModalImage(1)
})

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal()
  }
})

document.addEventListener('keydown', (event) => {
  if (!modal.classList.contains('open')) return

  if (event.key === 'Escape') {
    closeModal()
  }

  if (event.key === 'ArrowLeft') {
    changeModalImage(-1)
  }

  if (event.key === 'ArrowRight') {
    changeModalImage(1)
  }
})
