// ============================================
// RENDERIZADO INICIAL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderPortada();
  renderIntro();
  renderHistoria();
  renderFinal();
  renderEpilogo();
  renderPolaroids();
  setupScrollReveal();
  setupLightbox();
  setupEasterEgg();
  document.getElementById('anio').textContent = new Date().getFullYear();
});

// ============================================
// PORTADA
// ============================================
function renderPortada() {
  document.querySelector('.portada-titulo').textContent = CONFIG.portada.titulo;
  document.querySelector('.portada-subtitulo').textContent = CONFIG.portada.subtitulo;
  const btn = document.getElementById('btnAbrir');
  btn.textContent = CONFIG.portada.boton;
  btn.addEventListener('click', () => {
    document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
  });
}

// ============================================
// INTRO (línea por línea con fade in secuencial)
// ============================================
function renderIntro() {
  const container = document.getElementById('introTexto');
  CONFIG.intro.forEach((linea, i) => {
    const p = document.createElement('p');
    p.textContent = linea;
    p.dataset.delay = i * 500;
    container.appendChild(p);
  });
}

function animarIntro() {
  const lineas = document.querySelectorAll('#introTexto p');
  lineas.forEach(linea => {
    const delay = parseInt(linea.dataset.delay || 0);
    setTimeout(() => linea.classList.add('visible'), delay);
  });
}

// ============================================
// HISTORIA
// ============================================
function renderHistoria() {
  const container = document.getElementById('historia');
  CONFIG.historia.forEach((item, i) => {
    const el = document.createElement('article');
    el.className = 'item';
    el.dataset.id = item.id;

    const numero = document.createElement('div');
    numero.className = 'item-numero';
    numero.textContent = `${String(i + 1).padStart(2, '0')} / ${CONFIG.historia.length}`;

    const media = document.createElement('div');
    media.className = 'item-media';

    if (item.type === 'foto') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = `Momento ${item.id}`;
      img.loading = 'lazy';
      img.onerror = () => marcarPendiente(media, item.src);
      media.appendChild(img);
    } else {
      const video = document.createElement('video');
      // Orden importante en iOS Safari: poster + preload=none ANTES del src
      video.poster = posterFor(item.src);
      video.preload = 'none';
      video.playsInline = true;
      video.controls = true;
      video.src = item.src;
      video.onerror = () => marcarPendiente(media, item.src);
      media.appendChild(video);
    }

    const caption = document.createElement('p');
    caption.className = 'item-caption';
    caption.textContent = item.caption;

    el.appendChild(numero);
    el.appendChild(media);
    el.appendChild(caption);
    container.appendChild(el);
  });
}

// ============================================
// MENSAJE FINAL
// ============================================
function renderFinal() {
  document.querySelector('.final-titulo').textContent = CONFIG.final.titulo;
  document.querySelector('.final-cuerpo').textContent = CONFIG.final.cuerpo.join('\n');
  document.querySelector('.final-cierre').textContent = CONFIG.final.cierre;
  document.querySelector('.final-firma').textContent = CONFIG.final.firma;
}

// ============================================
// EPÍLOGO (video 14)
// ============================================
function renderEpilogo() {
  if (!CONFIG.epilogo) return;
  const section = document.getElementById('epilogo');
  if (!section) return;

  section.querySelector('.epilogo-intro').textContent = CONFIG.epilogo.intro;
  section.querySelector('.epilogo-caption').textContent = CONFIG.epilogo.caption;

  const media = document.getElementById('epilogoMedia');
  const item = CONFIG.epilogo;

  if (item.type === 'foto') {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = 'Epílogo';
    img.loading = 'lazy';
    img.onerror = () => marcarPendiente(media, item.src);
    media.appendChild(img);
  } else {
    const video = document.createElement('video');
    video.poster = posterFor(item.src);
    video.preload = 'none';
    video.playsInline = true;
    video.controls = true;
    video.src = item.src;
    video.onerror = () => marcarPendiente(media, item.src);
    media.appendChild(video);
  }
}

// Devuelve la ruta al poster (first-frame) de un video
function posterFor(src) {
  // assets/13.mp4 -> assets/13-poster.jpg
  return src.replace(/\.[^.]+$/, '-poster.jpg');
}

function marcarPendiente(container, src) {
  container.innerHTML = '';
  container.classList.add('pendiente');
  const span = document.createElement('span');
  span.innerHTML = `Pendiente agregar<br/><strong>${src.split('/').pop()}</strong>`;
  container.appendChild(span);
}

// ============================================
// PARED DE POLAROIDS
// ============================================
function renderPolaroids() {
  const wall = document.getElementById('polaroidsWall');
  // Historia + epílogo (video 14 también aparece en la pared)
  const items = [...CONFIG.historia];
  if (CONFIG.epilogo) {
    items.push({
      id: 14,
      type: CONFIG.epilogo.type,
      src: CONFIG.epilogo.src,
      caption: CONFIG.epilogo.caption
    });
  }
  items.forEach(item => {
    const p = document.createElement('div');
    p.className = 'polaroid';
    p.dataset.id = item.id;

    const media = document.createElement('div');
    media.className = 'polaroid-media';
    if (item.type === 'video') media.classList.add('video');

    if (item.type === 'foto') {
      const img = document.createElement('img');
      img.src = item.src;
      img.loading = 'lazy';
      img.alt = '';
      media.appendChild(img);
    } else {
      // En la pared de polaroids, usar el poster (imagen) en lugar del video
      // Mucho más ligero y siempre muestra la miniatura
      const img = document.createElement('img');
      img.src = posterFor(item.src);
      img.loading = 'lazy';
      img.alt = '';
      media.appendChild(img);
    }

    p.appendChild(media);
    p.addEventListener('click', () => abrirLightbox(item));
    wall.appendChild(p);
  });
}

// ============================================
// LIGHTBOX
// ============================================
function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const btnClose = document.getElementById('lightboxClose');
  btnClose.addEventListener('click', cerrarLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) cerrarLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarLightbox();
  });
}

function abrirLightbox(item) {
  const lightbox = document.getElementById('lightbox');
  const contenido = document.getElementById('lightboxContenido');
  contenido.innerHTML = '';

  if (item.type === 'foto') {
    const img = document.createElement('img');
    img.src = item.src;
    contenido.appendChild(img);
  } else {
    const video = document.createElement('video');
    video.src = item.src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.poster = posterFor(item.src);
    contenido.appendChild(video);
  }

  const p = document.createElement('p');
  p.textContent = item.caption;
  contenido.appendChild(p);

  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function cerrarLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  // detener video si lo había
  const video = lightbox.querySelector('video');
  if (video) video.pause();
}

// ============================================
// SCROLL REVEAL
// ============================================
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.id === 'intro') animarIntro();
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .item').forEach(el => observer.observe(el));
}

// ============================================
// EASTER EGG: triple toque en título final = confetti
// ============================================
function setupEasterEgg() {
  const titulo = document.querySelector('.final-titulo');
  if (!titulo) return;
  let toques = 0;
  let timer = null;
  titulo.style.cursor = 'pointer';
  titulo.addEventListener('click', () => {
    toques++;
    clearTimeout(timer);
    timer = setTimeout(() => toques = 0, 1000);
    if (toques >= 3) {
      lanzarConfetti();
      toques = 0;
    }
  });
}

// Confetti con esferas del dragón
function lanzarConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particulas = [];
  for (let i = 0; i < 80; i++) {
    particulas.push({
      x: Math.random() * canvas.width,
      y: -20,
      r: 8 + Math.random() * 12,
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.1,
      estrellas: Math.floor(Math.random() * 7) + 1
    });
  }

  let frame = 0;
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulas.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
      p.rot += p.vrot;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      // esfera del dragón
      const grad = ctx.createRadialGradient(-p.r * 0.3, -p.r * 0.3, 0, 0, 0, p.r);
      grad.addColorStop(0, '#ffd57a');
      grad.addColorStop(0.5, '#ff8c1a');
      grad.addColorStop(1, '#c45500');
      ctx.beginPath();
      ctx.arc(0, 0, p.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      // estrella en el centro
      ctx.fillStyle = 'rgba(200, 50, 0, 0.7)';
      ctx.font = `bold ${p.r * 0.8}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('★', 0, 0);
      ctx.restore();
    });

    frame++;
    if (frame < 250) {
      requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  tick();
}
