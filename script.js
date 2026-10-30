const C = window.CONFIG || {};
document.querySelectorAll('[data-c]').forEach(el => { const v = C[el.dataset.c]; if (v) el.textContent = v; });
document.querySelectorAll('[data-wa]').forEach(a => { a.href = 'https://wa.me/' + (C.whatsapp || ''); a.target = '_blank'; });
const cur = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.links a').forEach(a => { if (a.getAttribute('href') === cur) a.setAttribute('aria-current', 'page'); });
const f = document.getElementById('inquiry');
if (f) f.addEventListener('submit', e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(f));
  const msg = ['New Bulk Inquiry','Name: ' + d.name,'Phone: ' + d.phone,'Business type: ' + d.type,'Quantity: ' + d.qty,'Delivery location: ' + d.location,'Message: ' + (d.message || '-')].join('\n');
  window.open('https://wa.me/' + (C.whatsapp || '') + '?text=' + encodeURIComponent(msg), '_blank');
});