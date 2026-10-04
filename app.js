const business = { name: 'NAMI Café', featured: ['Nami Signature', 'Ube Egg Brûlée Coffee', 'Chicken Poppers'] };
const products = [
  { name: 'Nami Signature', category: 'Coffee', description: 'Our house favorite — smooth, balanced, and unmistakably NAMI.', featured: true, image: 'assets/asset19.png' },
  { name: 'Ube Egg Brûlée Coffee', category: 'Coffee', description: 'A little sweet, a little toasted, and entirely worth the sip.', featured: true, image: 'assets/asset20.png' },
  { name: 'Chicken Poppers', category: 'Food', description: 'Crispy, golden bites made for sharing — or not.', featured: true, image: 'assets/asset2.jpg' },
  { name: 'Caramel Macchiato', category: 'Coffee', description: 'Espresso, velvety milk, and a caramel finish.', image: 'assets/asset5.jpg' },
  { name: 'Nami no Hana', category: 'Coffee', description: 'A floral, fragrant NAMI favorite.' },
  { name: 'Yuan Yang', category: 'Coffee', description: 'Where coffee meets tea in the best way.' },
  { name: 'Honey Oat Latte', category: 'Coffee', description: 'Soft, mellow, and naturally sweet.' },
  { name: 'Brown Sugar Latte', category: 'Coffee', description: 'Deep caramel notes over a creamy latte.' },
  { name: 'Biscoff Latte', category: 'Coffee', description: 'A cozy, spiced treat in a cup.' },
  { name: 'Dirty Matcha', category: 'Non-Coffee', description: 'Earthy matcha with a lively espresso kick.', image: 'assets/asset19.png' },
  { name: 'Purple Coffee', category: 'Non-Coffee', description: 'A playful NAMI specialty.' },
  { name: 'Hot Chicken Pasta', category: 'Food', description: 'Comforting, saucy, and full of flavor.', image: 'assets/asset14.jpg' },
  { name: 'Nachos', category: 'Food', description: 'A table-ready classic for sharing.', image: 'assets/asset12.jpg' },
  { name: 'Fries', category: 'Food', description: 'Crispy, golden, and always welcome.', image: 'assets/asset16.png' },
  { name: 'Espresso Walnut', category: 'Pastries', description: 'A rich pastry with a nutty finish.', image: 'assets/asset1.jpg' },
  { name: 'Duo Choco', category: 'Pastries', description: 'Double chocolate, double the good mood.', image: 'assets/asset1.jpg' },
  { name: 'Blueberry', category: 'Pastries', description: 'Soft, bright, and berry-forward.', image: 'assets/asset6.jpg' },
  { name: 'Red Velvet', category: 'Pastries', description: 'A familiar favorite with a NAMI touch.', image: 'assets/asset6.jpg' }
];
const productCard = (p, compact = false) => `<article class="product-card ${compact ? 'compact' : ''} ${p.image ? '' : 'text-only'}">${p.image ? `<div class="product-visual"><img src="${p.image}" alt="${p.name}" loading="lazy" /><span>${p.category}</span></div>` : ''}<div class="product-info"><p class="product-category">${p.category}</p><h3>${p.name}</h3><p>${p.description}</p></div></article>`;
document.querySelector('#featured-grid').innerHTML = products.filter(p => p.featured).map(p => productCard(p)).join('');
const categories = ['All', 'Coffee', 'Non-Coffee', 'Food', 'Pastries'];
const tabs = document.querySelector('#category-tabs'); const grid = document.querySelector('#menu-grid');
function renderMenu(category = 'All') { grid.innerHTML = products.filter(p => p.image && (category === 'All' || p.category === category)).map(p => productCard(p, true)).join(''); }
tabs.innerHTML = categories.map((c, i) => `<button class="tab ${i === 0 ? 'active' : ''}" role="tab" aria-selected="${i === 0}" data-category="${c}">${c}</button>`).join('');
tabs.addEventListener('click', e => { const button = e.target.closest('.tab'); if (!button) return; document.querySelectorAll('.tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); }); button.classList.add('active'); button.setAttribute('aria-selected', 'true'); renderMenu(button.dataset.category); }); renderMenu();
const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.site-nav'); toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open', !open); }); nav.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); });
const exactNamiMapUrl = 'https://www.google.com/maps/place/Nami+Caf%C3%A9/@14.9456684,120.0862315,16z/data=!4m10!1m2!2m1!1sI.+Mendoza+St.+Barangay+Rizal,+San+Antonio,+Zambales,+San+Antonio,+Philippines,+2206,+nami+coffee!3m6!1s0x3395d700208b69e5:0xc386e7accf27e4db!8m2!3d14.9491244!4d120.0905828!15sCmFJLiBNZW5kb3phIFN0LiBCYXJhbmdheSBSaXphbCwgU2FuIEFudG9uaW8sIFphbWJhbGVzLCBTYW4gQW50b25pbywgUGhpbGlwcGluZXMsIDIyMDYsIG5hbWkgY29mZmVl!16s%2Fg%2F11ltflbwpw';
const mapFrame = document.querySelector('.map-art iframe');
const directionsLink = document.querySelector('.visit-card .button-light');
if (mapFrame) mapFrame.src = 'https://www.google.com/maps?q=14.9491244,120.0905828&z=17&output=embed';
if (directionsLink) directionsLink.href = exactNamiMapUrl;
