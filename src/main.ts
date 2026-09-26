import './style.css'

const menu = [
  {
    category: 'Entradas',
    items: [
      'Papa a la Huancaína',
      'Rabas con batata frita y ensalada criolla',
      'Leche de tigre'
    ]
  },
  {
    category: 'Sopas',
    items: [
      'Caldo de gallina',
      'Patasca'
    ]
  },
  {
    category: 'Pescados y mariscos',
    items: [
      'Chicharrón de pescado',
      'Ceviche de pescado',
      'Ceviche mixto',
      'Arroz con mariscos',
      'Mero frito',
      'Sudado de pescado',
      'Parihuela',
      'Jalea mixta',
      'Chicharrón de rabas',
      'Dúo marino',
      'Trío marino'
    ]
  },
  {
    category: 'Criollos',
    items: [
      'Seco de cordero',
      'Arroz con pollo y papa a la huancaína',
      'Ají de gallina',
      'Tallarín verde con bistec',
      'Pollo broaster',
      'Pollada',
      'Lomo saltado',
      'Tallarín saltado',
      'Anticuchos',
      'Salchipapa'
    ]
  },
  {
    category: 'Chifa',
    items: [
      'Arroz chaufa',
      'Chaufa de mariscos',
      'Aeropuerto',
      'Combinado chifa',
      'Tallarín chifa'
    ]
  }
]

const promotions = [
  'Pollo broaster entero + arroz chaufa + papas fritas + ensalada + gaseosa 1,75 L',
  'Pollo broaster entero + papas fritas + ensalada + gaseosa 1,75 L',
  '½ pollo broaster + papas fritas + ensalada + gaseosa 1 L',
  'Chicharrón de pollo + milanesa napolitana + papas fritas + gaseosa 1 L',
  'Alitas broaster + arroz chaufa + gaseosa 1 L',
  'Milanesa napolitana + arroz chaufa + gaseosa 1 L'
]

const promotionNames = [
  'Broaster & Chaufa',
  'Broaster Familiar',
  'Media Broaster',
  'Especial',
  'Alitas & Chaufa',
  'Milanesa & Chaufa'
]

const whatsapp = '5491125992087'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="page">

    <header class="hero">

      <div class="hero-overlay"></div>

      <nav class="navbar">

        <a class="logo" href="#">
          <span class="logo-mark">✦</span>

          <span>
            <strong>SABORES</strong>
            <small>DEL OCÉANO</small>
          </span>
        </a>

        <div class="nav-links">
          <a href="#menu">Menú</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

      </nav>

      <div class="hero-content">

        <span class="hero-kicker">
          COCINA PERUANA · CABA
        </span>

        <h1>
          Sabores auténticos
          <em>del Perú</em>
        </h1>

        <p class="hero-description">
          Pescados, mariscos, cocina criolla y chifa.
          Una experiencia de sabor inspirada en la gastronomía peruana.
        </p>

        <div class="hero-actions">

          <a class="button button-gold" href="#menu">
            Explorar menú
          </a>

          <a
            class="button button-outline"
            href="https://wa.me/${whatsapp}?text=Hola%20Sabores%20del%20Oc%C3%A9ano%2C%20quiero%20hacer%20un%20pedido."
            target="_blank"
          >
            Pedir por WhatsApp
          </a>

        </div>

      </div>

      <div class="hero-bottom">
        <span>Av. La Plata 2899 · CABA</span>
        <span>Delivery disponible</span>
      </div>

    </header>

    <main>

      <section id="nosotros" class="intro-section">

        <div class="intro-decoration">✦</div>

        <span class="eyebrow">
          BIENVENIDOS
        </span>

        <h2>
          Del océano a tu mesa
        </h2>

        <p>
          En Sabores del Océano celebramos la riqueza de la gastronomía
          peruana con pescados, mariscos, platos criollos y especialidades
          chifa preparadas para disfrutar todos los días.
        </p>

        <div class="intro-line"></div>

        <div class="features">

          <div>
            <span>01</span>
            <strong>Pescados & mariscos</strong>
            <p>
              Especialidades inspiradas en el océano.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Cocina criolla</strong>
            <p>
              Los clásicos sabores de la cocina peruana.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Tradición chifa</strong>
            <p>
              Una fusión de sabores única.
            </p>
          </div>

        </div>

      </section>

      <section id="menu" class="menu-section">

        <div class="section-heading">

          <span class="eyebrow">
            NUESTRA CARTA
          </span>

          <h2>
            El sabor de Perú
          </h2>

          <p>
            Elegí tu especialidad y disfrutá nuestros sabores.
          </p>

        </div>

        <div class="menu-categories">

          ${menu.map((section, index) => `
            <article class="menu-category">

              <div class="category-heading">

                <span class="category-number">
                  ${String(index + 1).padStart(2, '0')}
                </span>

                <div>

                  <span class="category-kicker">
                    SABORES DEL OCÉANO
                  </span>

                  <h3>
                    ${section.category}
                  </h3>

                </div>

              </div>

              <div class="menu-items">

                ${section.items.map((item) => `
                  <div class="menu-item">

                    <span>
                      ${item}
                    </span>

                    <i></i>

                  </div>
                `).join('')}

              </div>

            </article>
          `).join('')}

        </div>

      </section>

      <section class="promo-section">

        <div class="promo-heading">

          <span class="eyebrow">
            PARA COMPARTIR
          </span>

          <h2>
            Promociones
          </h2>

          <p>
            Opciones completas para disfrutar en familia o con amigos.
          </p>

        </div>

        <div class="promo-grid">

          ${promotions.map((promo, index) => `
            <article class="promo-card">

              <div class="promo-number">
                ${String(index + 1).padStart(2, '0')}
              </div>

              <span class="promo-label">
                PROMOCIÓN
              </span>

              <h3>
                ${promotionNames[index]}
              </h3>

              <p>
                ${promo}
              </p>

              <a
                href="https://wa.me/${whatsapp}?text=Hola%20Sabores%20del%20Oc%C3%A9ano%2C%20quiero%20consultar%20por%20la%20promoci%C3%B3n%20${index + 1}."
                target="_blank"
              >
                Consultar →
              </a>

            </article>
          `).join('')}

        </div>

        <div class="economic-menu">

          <span>
            DE LUNES A VIERNES
          </span>

          <strong>
            Menú económico
          </strong>

          <p>
            Consultá las opciones disponibles del día.
          </p>

          <a
            href="https://wa.me/${whatsapp}?text=Hola%20Sabores%20del%20Oc%C3%A9ano%2C%20quiero%20consultar%20por%20el%20men%C3%BA%20econ%C3%B3mico."
            target="_blank"
          >
            Consultar menú económico
          </a>

        </div>

      </section>

      <section class="hours-section">

        <div>

          <span class="eyebrow">
            TE ESPERAMOS
          </span>

          <h2>
            Horario de atención
          </h2>

        </div>

        <div class="hours">

          <div>
            <span>MEDIODÍA</span>
            <strong>12:00 — 16:00</strong>
          </div>

          <div>
            <span>NOCHE</span>
            <strong>19:00 — 23:00</strong>
          </div>

        </div>

      </section>

      <section id="contacto" class="contact-section">

        <div class="contact-content">

          <span class="eyebrow">
            ENCONTRANOS
          </span>

          <h2>
            Una mesa,
            <em>muchos sabores.</em>
          </h2>

          <div class="contact-details">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+La+Plata+2899+CABA"
              target="_blank"
            >

              <span>📍</span>

              <div>
                <small>DIRECCIÓN</small>
                <strong>Av. La Plata 2899, CABA</strong>
              </div>

            </a>

            <a
              href="https://wa.me/${whatsapp}"
              target="_blank"
            >

              <span>✆</span>

              <div>
                <small>WHATSAPP</small>
                <strong>11 2599-2087</strong>
              </div>

            </a>

            <div>

              <span>◷</span>

              <div>
                <small>HORARIOS</small>
                <strong>12:00–16:00 · 19:00–23:00</strong>
              </div>

            </div>

          </div>

          <a
            class="button button-gold contact-button"
            href="https://wa.me/${whatsapp}?text=Hola%20Sabores%20del%20Oc%C3%A9ano."
            target="_blank"
          >
            Contactar por WhatsApp
          </a>

        </div>

        <div class="ocean-art">

          <div class="circle circle-one"></div>
          <div class="circle circle-two"></div>

          <span>MAR</span>

        </div>

      </section>

    </main>

    <footer>

      <div class="footer-brand">

        <span class="logo-mark">✦</span>

        <strong>
          SABORES DEL OCÉANO
        </strong>

        <p>
          Sabores auténticos del Perú
        </p>

      </div>

      <div class="footer-info">

        <span>
          Av. La Plata 2899 · CABA
        </span>

        <span>
          Delivery disponible
        </span>

        <span>
          © 2026 Sabores del Océano
        </span>

      </div>

    </footer>

    <a
      class="floating-whatsapp"
      href="https://wa.me/${whatsapp}?text=Hola%20Sabores%20del%20Oc%C3%A9ano%2C%20quiero%20hacer%20un%20pedido."
      target="_blank"
      aria-label="WhatsApp"
    >
      <span>☏</span>
    </a>

  </div>
`
