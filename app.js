/* ---------- Mock data ---------- */
const U = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;
const IMG = {
  room1: U('photo-1517248135467-4c7edcad34c4'), room2: U('photo-1555396273-367ea4eb4db5'), room3: U('photo-1559339352-11d035aa65de'),
  plate: U('photo-1414235077428-338989a2e8c0'), pizza: U('photo-1565299624946-b28f40a0ae38'), sushi: U('photo-1579871494447-9811cf80d66c'),
  salad: U('photo-1546069901-ba9599a7e63c'), pancake: U('photo-1567620905732-2d1ec7ab7445'), burger: U('photo-1551782450-a2132b4ba21d'),
  steak: U('photo-1544025162-d76694265947'), bowl: U('photo-1512621776951-a57141f2eefd'), toast: U('photo-1482049016688-2d3e1b311543'), food: U('photo-1504674900247-0877df9cc836')
};
const m = (name, desc, price, img, cat) => ({ name, desc, price, img: IMG[img], cat });

const RESTAURANTS = [
  { id: 'ember', name: 'Ember & Oak', cuisine: 'Steakhouse', price: 4, rating: 4.7, km: 1.2, hours: '12:00 – 22:30', cover: IMG.steak, color: '#b91c1c', tags: ['Date night', 'Wine list'],
    about: 'Wood-fired cuts, cast iron sides and a long wine list in a candle-lit room.',
    menu: [m('Ribeye 300g', 'Dry-aged, wood-fired, bone marrow butter', 285, 'steak', 'Mains'), m('Beef Burger', 'Aged cheddar, smoked onion jam, brioche', 165, 'burger', 'Mains'), m('Charred Greens', 'Broccolini, chilli, lemon, almonds', 75, 'salad', 'Sides'), m('Seared Scallops', 'Cauliflower purée, caper brown butter', 148, 'plate', 'Starters'), m('Harvest Bowl', 'Roast pumpkin, quinoa, tahini', 110, 'bowl', 'Mains'), m('Buttermilk Pancakes', 'Salted caramel, vanilla cream', 85, 'pancake', 'Desserts')],
    reviews: [['Thandi M.', 5, 'Best steak I have had in years. Our table by the window was perfect and booking took seconds.', '2 days ago'], ['Pieter V.', 4, 'Great atmosphere, service a little slow on a Friday but worth it.', '1 week ago'], ['Aisha K.', 5, 'Anniversary dinner here was flawless. Ask for the corner table.', '3 weeks ago']] },
  { id: 'sakura', name: 'Sakura Lane', cuisine: 'Japanese', price: 3, rating: 4.6, km: 2.4, hours: '11:30 – 21:30', cover: IMG.sushi, color: '#db2777', tags: ['Sushi', 'Group friendly'],
    about: 'A small sushi counter and a loud, happy dining room. Rolls cut to order.',
    menu: [m('Salmon Nigiri (6)', 'Hand-pressed, wasabi, pickled ginger', 120, 'sushi', 'Sushi'), m('Dragon Roll', 'Prawn tempura, avocado, eel glaze', 135, 'sushi', 'Sushi'), m('Wakame Salad', 'Sesame, cucumber, citrus ponzu', 62, 'salad', 'Starters'), m('Teriyaki Bowl', 'Glazed chicken, rice, pickles', 105, 'bowl', 'Mains'), m('Miso Pork Belly', 'Slow-braised, pickled radish', 128, 'plate', 'Mains'), m('Matcha Pancakes', 'Red bean, whipped cream', 78, 'pancake', 'Desserts')],
    reviews: [['Lerato D.', 5, 'Fresh fish and friendly staff. We booked for 6 and the table was ready on time.', '4 days ago'], ['Marcus T.', 4, 'Loved the dragon roll. Gets busy, so book ahead.', '2 weeks ago'], ['Zanele P.', 5, 'The floor plan view made choosing a quiet booth so easy.', '1 month ago']] },
  { id: 'nonna', name: "Nonna's Oven", cuisine: 'Italian', price: 2, rating: 4.5, km: 0.8, hours: '10:00 – 22:00', cover: IMG.pizza, color: '#16a34a', tags: ['Family', 'Pizza'],
    about: 'Stone-baked pizza and handmade pasta, served family style.',
    menu: [m('Margherita', 'San Marzano tomato, fior di latte, basil', 98, 'pizza', 'Pizza'), m('Diavola', 'Spicy salami, chilli honey', 118, 'pizza', 'Pizza'), m('Caprese Salad', 'Heirloom tomato, burrata, basil oil', 85, 'salad', 'Starters'), m('Tagliatelle Ragù', 'Eight-hour beef ragù, parmesan', 128, 'food', 'Pasta'), m('Truffle Mushroom Pizza', 'Cremini, taleggio, truffle oil', 138, 'pizza', 'Pizza'), m('Tiramisu', 'Mascarpone, espresso, cocoa', 72, 'pancake', 'Desserts')],
    reviews: [['Johan B.', 5, 'Kids loved it and the staff found us a big table straight away.', '1 day ago'], ['Naledi S.', 4, 'Crust is spot on. A bit noisy but that is the charm.', '5 days ago'], ['Ravi N.', 5, 'Best pizza in Pretoria, no argument.', '2 weeks ago']] },
  { id: 'saffron', name: 'Saffron Table', cuisine: 'Indian', price: 2, rating: 4.4, km: 3.1, hours: '12:00 – 22:00', cover: IMG.food, color: '#ea580c', tags: ['Vegetarian friendly', 'Halal'],
    about: 'Slow-cooked curries, tandoor breads and a thali for every mood.',
    menu: [m('Butter Chicken', 'Tandoori chicken, creamy tomato gravy', 125, 'food', 'Mains'), m('Paneer Tikka', 'Charred peppers, mint chutney', 98, 'plate', 'Starters'), m('Veg Thali', 'Dal, two curries, rice, naan', 115, 'bowl', 'Mains'), m('Lamb Rogan Josh', 'Kashmiri chilli, slow braised', 145, 'steak', 'Mains'), m('Garden Chaat', 'Crisp puris, yoghurt, tamarind', 58, 'salad', 'Starters'), m('Gulab Jamun', 'Warm syrup, pistachio', 55, 'pancake', 'Desserts')],
    reviews: [['Fatima A.', 5, 'Proper flavours and the prayer room nearby is a thoughtful touch.', '3 days ago'], ['Sipho L.', 4, 'Lamb was tender. Portions are generous.', '1 week ago'], ['Emma R.', 4, 'Lovely vegetarian options, easy booking.', '3 weeks ago']] },
  { id: 'verde', name: 'Verde Kitchen', cuisine: 'Healthy', price: 2, rating: 4.3, km: 1.9, hours: '07:00 – 17:00', cover: IMG.salad, color: '#65a30d', tags: ['Brunch', 'Vegan options'],
    about: 'Bright, plant-forward brunch and bowls with a proper flat white.',
    menu: [m('Avocado Toast', 'Sourdough, poached egg, dukkah', 88, 'toast', 'Brunch'), m('Buddha Bowl', 'Roast veg, hummus, seeds, tahini', 98, 'bowl', 'Bowls'), m('Superfood Salad', 'Kale, beetroot, feta, pomegranate', 92, 'salad', 'Bowls'), m('Banana Pancakes', 'Maple, berries, coconut yoghurt', 85, 'pancake', 'Brunch'), m('Green Burger', 'Chickpea patty, avo, sweet chilli', 105, 'burger', 'Mains'), m('Smoked Salmon Plate', 'Rye, cream cheese, capers', 118, 'plate', 'Brunch')],
    reviews: [['Chloe W.', 5, 'Sunday brunch heaven. We got the sunny corner table.', '2 days ago'], ['Kabelo M.', 4, 'Bowls are huge and fresh.', '6 days ago'], ['Annelie H.', 4, 'Great coffee, relaxed vibe.', '1 month ago']] },
  { id: 'smoke', name: 'Smokehouse 51', cuisine: 'Burgers & BBQ', price: 2, rating: 4.2, km: 4.0, hours: '11:00 – 23:00', cover: IMG.burger, color: '#78350f', tags: ['Casual', 'Sports on TV'],
    about: 'Low and slow brisket, loaded burgers and cold beer.',
    menu: [m('Brisket Burger', 'Smoked brisket, pickles, cheddar', 155, 'burger', 'Burgers'), m('Pulled Pork Plate', '12-hour pork shoulder, slaw, fries', 145, 'food', 'BBQ'), m('Smoked Ribs Half', 'Sticky glaze, charred corn', 195, 'steak', 'BBQ'), m('Slaw & Greens', 'Apple, cabbage, buttermilk', 52, 'salad', 'Sides'), m('Wings (8)', 'Hot honey, ranch', 98, 'plate', 'Starters'), m('Pecan Pie', 'Vanilla ice cream', 68, 'pancake', 'Desserts')],
    reviews: [['Ruan D.', 4, 'Ribs fall off the bone. Booked a big table for the rugby.', '1 day ago'], ['Ntombi Z.', 4, 'Loud, fun, great value.', '1 week ago'], ['Greg P.', 5, 'The brisket burger is unreal.', '2 weeks ago']] }
];
const CUISINES = ['All', ...new Set(RESTAURANTS.map(r => r.cuisine))];
const TIMES = ['12:00', '12:30', '13:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];

/* ---------- State ---------- */
const S = { cuisine: 'All', q: '', date: new Date().toISOString().slice(0, 10), time: '19:00', party: 2, tab: 'book', table: null, bookings: [], taken: {} };
const $ = s => document.querySelector(s);
const app = $('#app');
const money = n => 'R' + n;
const stars = r => `<span class="text-amber-500">★</span> <b>${r.toFixed(1)}</b>`;
const imgTag = (src, cls) => `<img src="${src}" alt="" loading="lazy" class="${cls}" onerror="this.remove()">`;
const logo = r => `<div class="w-14 h-14 rounded-xl border-2 border-white shadow flex items-center justify-center text-white font-extrabold text-lg" style="background:${r.color}" title="Logo placeholder">${r.name.split(/[ &']+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('')}</div>`;

/* ---------- Table generator (deterministic per restaurant/date/time) ---------- */
function rng(seed) { let h = 2166136261; for (const c of seed) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 1000) / 1000; }; }
function tablesFor(r) {
  const rand = rng(r.id + S.date + S.time);
  return Array.from({ length: 15 }, (_, i) => {
    const id = 'T-' + String(i + 1).padStart(2, '0'), x = rand(), seats = [2, 4, 4, 6][Math.floor(rand() * 4)];
    let state = x < .2 ? 'reserved' : x < .4 ? 'soon' : 'empty';
    if (S.taken[r.id + S.date + S.time + id]) state = 'reserved';
    return { id, seats, state, secs: 600 + Math.floor(rand() * 6000) };
  });
}

/* ---------- Views ---------- */
function home() {
  const list = RESTAURANTS.filter(r => (S.cuisine === 'All' || r.cuisine === S.cuisine) && (r.name + r.cuisine + r.tags.join(' ')).toLowerCase().includes(S.q.toLowerCase()));
  app.innerHTML = `
    <section class="rounded-3xl bg-brand-soft mt-6 p-6 sm:p-10 flex flex-col gap-5">
      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-xl">Pick your restaurant. Pick your table.</h1>
      <p class="text-neutral-600 max-w-lg">See the floor plan, choose the exact table and book it in a few taps. No delivery, just a seat waiting for you.</p>
      <div class="flex flex-col sm:flex-row gap-2 max-w-2xl">
        <input id="q" value="${S.q}" placeholder="Search restaurants, cuisines or tags" class="flex-1 rounded-full px-5 py-3 bg-white border border-neutral-200 outline-none focus:border-brand">
        <select id="date" class="rounded-full px-4 py-3 bg-white border border-neutral-200"><option>${S.date}</option></select>
      </div>
    </section>
    <div class="flex gap-2 overflow-x-auto no-scrollbar mt-6 pb-1">
      ${CUISINES.map(c => `<button data-c="${c}" class="shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${c === S.cuisine ? 'bg-ink text-white' : 'bg-neutral-100 hover:bg-neutral-200'}">${c}</button>`).join('')}
    </div>
    <h2 class="text-xl font-bold mt-8 mb-4">${list.length} restaurant${list.length === 1 ? '' : 's'} taking bookings</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      ${list.map(r => `
      <a href="#/r/${r.id}" class="group block">
        <div class="relative aspect-[16/10] rounded-2xl overflow-hidden img-fallback">
          ${imgTag(r.cover, 'w-full h-full object-cover group-hover:scale-105 transition duration-500')}
          <span class="absolute left-3 top-3 bg-white rounded-full text-xs font-bold px-3 py-1">${tablesFor(r).filter(t => t.state === 'empty').length} tables free</span>
          <div class="absolute left-3 -bottom-5">${logo(r)}</div>
        </div>
        <div class="pt-7 flex justify-between items-start gap-3">
          <div><h3 class="font-bold text-lg leading-tight">${r.name}</h3>
          <p class="text-sm text-neutral-500">${r.cuisine}, ${'R'.repeat(r.price)}, ${r.km} km</p></div>
          <span class="text-sm bg-neutral-100 rounded-full px-2.5 py-1 whitespace-nowrap">${stars(r.rating)}</span>
        </div>
      </a>`).join('') || '<p class="text-neutral-500">No restaurants match. Try another cuisine or clear your search.</p>'}
    </div>`;
  $('#q').oninput = e => { S.q = e.target.value; const p = e.target.selectionStart; home(); const q = $('#q'); q.focus(); q.setSelectionRange(p, p); };
  document.querySelectorAll('[data-c]').forEach(b => b.onclick = () => { S.cuisine = b.dataset.c; home(); });
}

function restaurant(r) {
  const tabs = [['book', 'Book a table'], ['menu', 'Menu'], ['reviews', 'Reviews']];
  app.innerHTML = `
    <a href="#/" class="inline-block mt-5 text-sm font-semibold text-neutral-500 hover:text-ink">Back to restaurants</a>
    <div class="relative h-52 sm:h-72 rounded-3xl overflow-hidden mt-3 img-fallback">${imgTag(r.cover, 'w-full h-full object-cover')}<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
    <div class="flex items-start gap-4 px-5 relative"><div class="-mt-10 shrink-0">${logo(r).replace('w-14 h-14', 'w-20 h-20')}</div>
      <div class="pt-3"><h1 class="text-2xl sm:text-3xl font-extrabold">${r.name}</h1><p class="text-sm text-neutral-600">${stars(r.rating)} (${r.reviews.length * 41} reviews), ${r.cuisine}, Open ${r.hours}</p></div></div>
    <p class="mt-4 text-neutral-600 max-w-2xl">${r.about}</p>
    <div class="flex gap-2 mt-3">${r.tags.map(t => `<span class="text-xs font-semibold bg-neutral-100 rounded-full px-3 py-1">${t}</span>`).join('')}</div>
    <nav class="flex gap-6 border-b border-neutral-200 mt-6">${tabs.map(([k, l]) => `<button data-t="${k}" class="py-3 font-semibold border-b-2 ${S.tab === k ? 'border-brand text-brand' : 'border-transparent text-neutral-500'}">${l}</button>`).join('')}</nav>
    <div id="tab" class="mt-6"></div>`;
  document.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { S.tab = b.dataset.t; restaurant(r); });
  ({ book: () => booking(r), menu: () => menu(r), reviews: () => reviews(r) })[S.tab]();
}

function menu(r) {
  const cats = [...new Set(r.menu.map(i => i.cat))];
  $('#tab').innerHTML = cats.map(c => `<h3 class="font-bold text-xl mb-3 mt-6 first:mt-0">${c}</h3><div class="grid gap-4 md:grid-cols-2">
    ${r.menu.filter(i => i.cat === c).map(i => `<div class="flex gap-4 border border-neutral-200 rounded-2xl p-3 justify-between">
      <div><h4 class="font-semibold">${i.name}</h4><p class="text-sm text-neutral-500 mt-1">${i.desc}</p><p class="font-bold mt-2">${money(i.price)}</p></div>
      <div class="w-28 h-28 shrink-0 rounded-xl overflow-hidden img-fallback">${imgTag(i.img, 'w-full h-full object-cover')}</div></div>`).join('')}</div>`).join('')
    + '<p class="text-xs text-neutral-400 mt-6">Menu is for browsing only. Order at your table.</p>';
}

function reviews(r) {
  $('#tab').innerHTML = `<div class="grid gap-4 md:grid-cols-3">${r.reviews.map(([n, s, t, d]) => `
    <div class="border border-neutral-200 rounded-2xl p-5"><div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-brand-soft text-brand font-bold flex items-center justify-center">${n[0]}</div>
      <div><p class="font-semibold text-sm">${n}</p><p class="text-xs text-neutral-400">${d}</p></div></div>
      <p class="text-amber-500 mt-3">${'★'.repeat(s)}${'☆'.repeat(5 - s)}</p><p class="text-sm text-neutral-700 mt-2">${t}</p></div>`).join('')}</div>`;
}

function booking(r) {
  const tables = tablesFor(r);
  if (S.table && !tables.find(t => t.id === S.table && t.state === 'empty' && t.seats >= S.party)) S.table = null;
  const sel = tables.find(t => t.id === S.table);
  const cnt = s => tables.filter(t => t.state === s && (s !== 'empty' || t.seats >= S.party)).length;
  const pill = n => `<i></i>`.repeat(n / 2);
  $('#tab').innerHTML = `
    <div class="flex flex-wrap gap-3 items-end mb-5">
      <label class="text-xs font-semibold text-neutral-500">Date<input id="bdate" type="date" value="${S.date}" min="${new Date().toISOString().slice(0, 10)}" class="block mt-1 border border-neutral-200 rounded-xl px-3 py-2 text-sm text-ink"></label>
      <label class="text-xs font-semibold text-neutral-500">Guests<select id="bparty" class="block mt-1 border border-neutral-200 rounded-xl px-3 py-2 text-sm text-ink">${[1, 2, 3, 4, 5, 6].map(n => `<option ${n === S.party ? 'selected' : ''} value="${n}">${n} guest${n > 1 ? 's' : ''}</option>`).join('')}</select></label>
      <div class="flex gap-2 overflow-x-auto no-scrollbar">${TIMES.map(t => `<button data-time="${t}" class="shrink-0 rounded-full px-3 py-2 text-sm font-semibold ${t === S.time ? 'bg-brand text-white' : 'bg-neutral-100 hover:bg-neutral-200'}">${t}</button>`).join('')}</div>
    </div>
    <div class="rounded-3xl border border-neutral-200 p-3 sm:p-5 bg-neutral-50/50">
      <div class="flex flex-wrap justify-between gap-3 text-sm px-1 pb-4">
        <span class="text-neutral-500">Available tables <b class="text-ink">${cnt('empty') + cnt('soon')}</b></span>
        <div class="flex flex-wrap gap-x-4 gap-y-1 text-neutral-500">
          <span><i class="dot border border-brand"></i>Selected</span><span><i class="dot bg-neutral-200"></i>Empty <b class="text-ink">${cnt('empty')}</b></span>
          <span><i class="dot bg-brand"></i>Reserved <b class="text-ink">${cnt('reserved')}</b></span><span><i class="dot bg-soon"></i>Available soon <b class="text-ink">${cnt('soon')}</b></span>
        </div>
      </div>
      <div class="plan">
        <div class="flex gap-3 mb-4"><div class="zone">Cashier</div><div class="flex-1"></div><div class="zone">Dessert bar</div></div>
        <div class="side-tag" style="top:35%">Restrooms</div>
        <div class="plan-grid">${tables.map(t => {
          const small = t.state === 'empty' && t.seats < S.party, cls = t.id === S.table ? 'selected' : small ? 'empty small' : t.state;
          return `<button class="tbl ${cls}" data-id="${t.id}" aria-label="Table ${t.id}, ${t.seats} seats, ${t.state}">
            <div class="seats">${pill(t.seats)}</div>
            <div class="body"><span>${t.id}</span>${t.state === 'soon' ? `<small data-end="${Date.now() + t.secs * 1000}">${fmt(t.secs)}</small>` : `<small>${t.seats} seats</small>`}</div>
            <div class="seats">${pill(t.seats)}</div></button>`; }).join('')}</div>
      </div>
      <div class="flex items-center justify-between gap-4 pt-4 px-1">
        <div><p class="text-xs text-neutral-500">${sel ? 'Table selected' : 'No table selected'}</p>
          <p class="font-bold">${sel ? `${sel.id} <span class="font-normal text-neutral-500 text-sm">(${sel.seats} seats)</span>` : 'Tap an empty table on the plan'}</p></div>
        <button id="bookBtn" ${sel ? '' : 'disabled'} class="rounded-full bg-brand text-white font-bold px-7 py-3 disabled:bg-neutral-300 disabled:cursor-not-allowed hover:brightness-110">Book table</button>
      </div>
    </div>`;
  $('#bdate').onchange = e => { S.date = e.target.value || S.date; booking(r); };
  $('#bparty').onchange = e => { S.party = +e.target.value; booking(r); };
  document.querySelectorAll('[data-time]').forEach(b => b.onclick = () => { S.time = b.dataset.time; booking(r); });
  document.querySelectorAll('.tbl').forEach(b => b.onclick = () => {
    const t = tables.find(x => x.id === b.dataset.id);
    if (t.state !== 'empty' || t.seats < S.party) return;
    S.table = S.table === t.id ? null : t.id; booking(r);
  });
  $('#bookBtn').onclick = () => confirmBooking(r, sel);
}

const fmt = s => [Math.floor(s / 3600), Math.floor(s % 3600 / 60), s % 60].map(n => String(n).padStart(2, '0')).join(':') + 's';
setInterval(() => document.querySelectorAll('[data-end]').forEach(el => { el.textContent = fmt(Math.max(0, Math.round((el.dataset.end - Date.now()) / 1000))); }), 1000);

/* ---------- Modal ---------- */
function showModal(html) { const md = $('#modal'); md.innerHTML = `<div class="bg-white rounded-3xl max-w-md w-full p-6 max-h-[85vh] overflow-y-auto">${html}</div>`; md.classList.remove('hidden'); md.onclick = e => { if (e.target === md) md.classList.add('hidden'); }; }
const closeModal = () => $('#modal').classList.add('hidden');

function confirmBooking(r, t) {
  showModal(`<h2 class="text-xl font-extrabold">Confirm your booking</h2>
    <p class="text-sm text-neutral-500 mt-1">${r.name}</p>
    <dl class="mt-4 text-sm divide-y divide-neutral-100">${[['Table', `${t.id} (${t.seats} seats)`], ['Date', S.date], ['Time', S.time], ['Guests', S.party]].map(([k, v]) => `<div class="flex justify-between py-2"><dt class="text-neutral-500">${k}</dt><dd class="font-semibold">${v}</dd></div>`).join('')}</dl>
    <input id="gname" placeholder="Name for the booking" class="mt-4 w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand">
    <div class="flex gap-2 mt-5"><button class="flex-1 rounded-full bg-neutral-100 font-semibold py-3" onclick="closeModal()">Cancel</button>
    <button id="okBtn" class="flex-1 rounded-full bg-brand text-white font-bold py-3">Book table</button></div>`);
  $('#okBtn').onclick = () => {
    const ref = 'RSV-' + Math.random().toString(36).slice(2, 7).toUpperCase(), name = $('#gname').value.trim() || 'Guest';
    S.bookings.push({ ref, name, rid: r.id, rname: r.name, table: t.id, date: S.date, time: S.time, party: S.party });
    S.taken[r.id + S.date + S.time + t.id] = true; S.table = null; $('#bkCount').textContent = S.bookings.length;
    showModal(`<div class="text-center"><div class="w-14 h-14 mx-auto rounded-full bg-brand text-white text-2xl flex items-center justify-center">✓</div>
      <h2 class="text-xl font-extrabold mt-4">Table booked</h2><p class="text-neutral-500 text-sm mt-1">${name}, ${t.id} at ${r.name}<br>${S.date} at ${S.time} for ${S.party}</p>
      <p class="mt-4 inline-block bg-brand-soft text-brand font-bold rounded-full px-4 py-2 text-sm">Reference ${ref}</p>
      <button class="mt-5 w-full rounded-full bg-ink text-white font-bold py-3" onclick="closeModal()">Done</button></div>`);
    route();
  };
}

$('#myBookingsBtn').onclick = () => showModal(`<h2 class="text-xl font-extrabold">My bookings</h2>${S.bookings.length ? S.bookings.map(b => `
  <div class="border border-neutral-200 rounded-2xl p-4 mt-3 text-sm"><p class="font-bold">${b.rname}</p><p class="text-neutral-500">${b.table}, ${b.date} at ${b.time}, ${b.party} guests</p><p class="text-brand font-semibold mt-1">${b.ref}</p></div>`).join('')
  : '<p class="text-neutral-500 text-sm mt-3">No bookings yet. Choose a restaurant and tap a table to get started.</p>'}
  <button class="mt-5 w-full rounded-full bg-neutral-100 font-semibold py-3" onclick="closeModal()">Close</button>`);

/* ---------- Router ---------- */
function route() {
  const [, , id] = location.hash.split('/'), r = RESTAURANTS.find(x => x.id === id);
  if (r) restaurant(r); else home();
}
window.addEventListener('hashchange', () => { S.table = null; S.tab = 'book'; route(); window.scrollTo(0, 0); });
route();
