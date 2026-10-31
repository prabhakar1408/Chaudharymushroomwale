const C = window.CONFIG || {};
const fmt = n => n.slice(0, 5) + ' ' + n.slice(5);
document.querySelectorAll('[data-tel]').forEach(a => {
  const n = C[a.dataset.tel]; if (!n) return;
  a.href = 'tel:+91' + n;
  if (a.hasAttribute('data-show')) a.textContent = (a.dataset.label || '') + fmt(n);
});
document.querySelectorAll('[data-wa]').forEach(a => { a.href = 'https://wa.me/' + C.whatsapp; a.target = '_blank'; a.rel = 'noopener'; });
document.querySelectorAll('[data-fb]').forEach(a => { a.href = C.facebook; a.target = '_blank'; a.rel = 'noopener'; });
document.querySelectorAll('[data-ig]').forEach(a => { a.href = C.instagram; a.target = '_blank'; a.rel = 'noopener'; });
document.querySelectorAll('[data-c]').forEach(el => { if (C[el.dataset.c]) el.textContent = C[el.dataset.c]; });
document.querySelectorAll('[data-opt]').forEach(el => { if (!C[el.dataset.opt]) el.style.display = 'none'; });
const cur = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.links a').forEach(a => { if (a.getAttribute('href') === cur) a.setAttribute('aria-current', 'page'); });
const f = document.getElementById('inquiry');
if (f) f.addEventListener('submit', e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(f));
  const msg = ['Namaste, mujhe mushroom chahiye.','Naam: ' + d.name,'Phone: ' + d.phone,'Kaam: ' + d.type,'Kitna chahiye: ' + d.qty,'Kahan pahunchana hai: ' + d.location,'Baat: ' + (d.message || '-')].join('\n');
  window.open('https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(msg), '_blank');
});
const lb = document.createElement('div'); lb.className = 'lb'; lb.innerHTML = '<img alt="">'; document.body.appendChild(lb);
lb.addEventListener('click', () => lb.classList.remove('on'));
document.querySelectorAll('.mas img').forEach(i => i.addEventListener('click', () => { lb.firstChild.src = i.src; lb.classList.add('on'); }));