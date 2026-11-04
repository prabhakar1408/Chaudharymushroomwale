const C = window.CONFIG || {};
const fmt = n => n.slice(0, 5) + ' ' + n.slice(5);
document.querySelectorAll('[data-tel]').forEach(a => {
  const n = C[a.dataset.tel]; if (!n) return;
  a.href = 'tel:+91' + n;
  if (a.hasAttribute('data-show')) (a.querySelector('span') || a).textContent = (a.dataset.label || '') + fmt(n);
});
document.querySelectorAll('[data-wa]').forEach(a => { a.href = 'https://wa.me/' + C.whatsapp; a.target = '_blank'; a.rel = 'noopener'; });
document.querySelectorAll('[data-fb]').forEach(a => { a.href = C.facebook; a.target = '_blank'; a.rel = 'noopener'; });
document.querySelectorAll('[data-ig]').forEach(a => { a.href = C.instagram; a.target = '_blank'; a.rel = 'noopener'; });
document.querySelectorAll('[data-c]').forEach(el => { if (C[el.dataset.c]) el.textContent = C[el.dataset.c]; });
document.querySelectorAll('[data-opt]').forEach(el => { if (!C[el.dataset.opt]) el.style.display = 'none'; });
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const cur = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.links a').forEach(a => { if (a.getAttribute('href') === cur) a.setAttribute('aria-current', 'page'); });
const nav = document.querySelector('.nav'), bg = document.querySelector('.burger');
const onSc = () => nav.classList.toggle('sc', window.scrollY > 10); onSc(); window.addEventListener('scroll', onSc, { passive: true });
if (bg) {
  bg.addEventListener('click', () => { const o = nav.classList.toggle('open'); bg.setAttribute('aria-expanded', o); });
  document.querySelectorAll('.links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
const rv = document.querySelectorAll('.rv');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.1 });
  rv.forEach(el => io.observe(el));
} else rv.forEach(el => el.classList.add('in'));
const f = document.getElementById('inquiry');
if (f) f.addEventListener('submit', e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(f));
  const msg = ['Namaste, mujhe mushrooms chahiye.','Name: ' + d.name,'Phone: ' + d.phone,'Business: ' + d.type,'Quantity: ' + d.qty,'Delivery location: ' + d.location,'Message: ' + (d.message || '-')].join('\n');
  window.open('https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(msg), '_blank');
});
const lb = document.createElement('div'); lb.className = 'lb'; lb.innerHTML = '<img alt="">'; document.body.appendChild(lb);
lb.addEventListener('click', () => lb.classList.remove('on'));
document.querySelectorAll('.gg img').forEach(i => i.addEventListener('click', () => { lb.firstChild.src = i.src; lb.classList.add('on'); }));