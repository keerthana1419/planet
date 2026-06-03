const planets = [
  {
    id: 1, name: 'Mercury', type: 'inner', cssClass: 'p-mercury',
    diameter: '4,879 km', distance: '57.9M km', day: '59 Earth days', year: '88 Earth days', moons: '0', temp: '-180°C to 430°C',
    desc: 'Mercury is the smallest planet in our solar system and the closest to the Sun. Despite being closest to the Sun, it is not the hottest planet — that title belongs to Venus.',
    facts: [
      'A year on Mercury is just 88 Earth days.',
      'Mercury has no atmosphere to retain heat.',
      'Its surface is covered in craters like our Moon.',
      'Mercury shrinks slightly as its core cools.'
    ]
  },
  {
    id: 2, name: 'Venus', type: 'inner', cssClass: 'p-venus',
    diameter: '12,104 km', distance: '108.2M km', day: '243 Earth days', year: '225 Earth days', moons: '0', temp: '465°C (avg)',
    desc: 'Venus is the hottest planet in our solar system, with a thick toxic atmosphere of carbon dioxide and clouds of sulfuric acid. It rotates backwards compared to most planets.',
    facts: [
      'Venus is the hottest planet at 465°C average.',
      'A day on Venus is longer than its year.',
      'Venus rotates in the opposite direction to Earth.',
      'Its atmospheric pressure is 90x that of Earth.'
    ]
  },
  {
    id: 3, name: 'Earth', type: 'inner', cssClass: 'p-earth',
    diameter: '12,742 km', distance: '149.6M km', day: '24 hours', year: '365.25 days', moons: '1', temp: '-88°C to 58°C',
    desc: 'Earth is the only known planet to support life. It has liquid water on its surface, a protective magnetic field, and an atmosphere rich in nitrogen and oxygen.',
    facts: [
      'Earth is the densest planet in the solar system.',
      '71% of Earth\'s surface is covered in water.',
      'Earth\'s magnetic field protects us from solar wind.',
      'Earth is the only planet not named after a god.'
    ]
  },
  {
    id: 4, name: 'Mars', type: 'inner', cssClass: 'p-mars',
    diameter: '6,779 km', distance: '227.9M km', day: '24h 37m', year: '687 Earth days', moons: '2', temp: '-125°C to 20°C',
    desc: 'Mars is known as the Red Planet due to iron oxide on its surface. It hosts the tallest volcano in the solar system — Olympus Mons — and a massive canyon system.',
    facts: [
      'Olympus Mons is 3x taller than Mount Everest.',
      'Mars has the largest dust storms in the solar system.',
      'Mars has two small moons: Phobos and Deimos.',
      'A Martian day is called a "sol" — 24h 37m long.'
    ]
  },
  {
    id: 5, name: 'Jupiter', type: 'outer', cssClass: 'p-jupiter',
    diameter: '139,820 km', distance: '778.5M km', day: '9h 56m', year: '11.9 Earth years', moons: '95', temp: '-110°C (cloud top)',
    desc: 'Jupiter is the largest planet in our solar system — so large that all other planets could fit inside it. Its Great Red Spot is a storm that has raged for over 350 years.',
    facts: [
      'Jupiter has 95 known moons.',
      'The Great Red Spot is a storm larger than Earth.',
      'Jupiter has the shortest day of all planets.',
      'Jupiter acts as a cosmic vacuum, protecting inner planets.'
    ]
  },
  {
    id: 6, name: 'Saturn', type: 'outer', cssClass: 'p-saturn',
    diameter: '116,460 km', distance: '1.43B km', day: '10h 42m', year: '29.5 Earth years', moons: '146', temp: '-140°C (cloud top)',
    desc: 'Saturn is famous for its stunning ring system made of ice and rock. It is the least dense planet — it would float on water. Saturn has the most moons of any planet.',
    facts: [
      'Saturn has 146 known moons — the most of any planet.',
      'Saturn\'s rings are made of ice and rock particles.',
      'Saturn is less dense than water — it would float!',
      'Titan, Saturn\'s largest moon, has a thick atmosphere.'
    ]
  },
  {
    id: 7, name: 'Uranus', type: 'outer', cssClass: 'p-uranus',
    diameter: '50,724 km', distance: '2.87B km', day: '17h 14m', year: '84 Earth years', moons: '28', temp: '-195°C (avg)',
    desc: 'Uranus is an ice giant that rotates on its side, with an axial tilt of 98 degrees. It has a faint ring system and its blue-green colour comes from methane in its atmosphere.',
    facts: [
      'Uranus rotates on its side at 98° axial tilt.',
      'Uranus is the coldest planetary atmosphere at -224°C.',
      'It has 13 known rings.',
      'Uranus was the first planet discovered with a telescope.'
    ]
  },
  {
    id: 8, name: 'Neptune', type: 'outer', cssClass: 'p-neptune',
    diameter: '49,244 km', distance: '4.5B km', day: '16h 6m', year: '165 Earth years', moons: '16', temp: '-200°C (avg)',
    desc: 'Neptune is the windiest planet, with storms reaching 2,100 km/h. It was the first planet predicted mathematically before being observed. Its largest moon Triton orbits backwards.',
    facts: [
      'Neptune has the strongest winds in the solar system.',
      'Neptune was predicted mathematically before discovery.',
      'Triton orbits Neptune backwards.',
      'One year on Neptune = 165 Earth years.'
    ]
  },
  {
    id: 9, name: 'Pluto', type: 'dwarf', cssClass: 'p-pluto',
    diameter: '2,377 km', distance: '5.9B km', day: '6.4 Earth days', year: '248 Earth years', moons: '5', temp: '-230°C (avg)',
    desc: 'Pluto was reclassified as a dwarf planet in 2006. It has a heart-shaped nitrogen ice plain called Tombaugh Regio and a surprisingly complex atmosphere.',
    facts: [
      'Pluto was reclassified as a dwarf planet in 2006.',
      'Pluto has a heart-shaped ice plain visible from space.',
      'Pluto\'s moon Charon is half the size of Pluto itself.',
      'Pluto has a thin atmosphere of nitrogen and methane.'
    ]
  },
];

let favourites = JSON.parse(localStorage.getItem('pvFavourites') || '[]');
let currentId = null;
let activeFilter = 'all';

// ── INIT ──────────────────────────────────────────────
window.onload = () => {
  generateStars();
  renderPlanets(planets);
};

// ── STARS ─────────────────────────────────────────────
function generateStars() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 160; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      top:${Math.random()*100}%;
      left:${Math.random()*100}%;
      --dur:${(Math.random()*3+2).toFixed(1)}s;
      animation-delay:${(Math.random()*4).toFixed(1)}s;
    `;
    container.appendChild(s);
  }
}

// ── RENDER PLANETS ────────────────────────────────────
function renderPlanets(list) {
  const grid = document.getElementById('planetsGrid');
  grid.innerHTML = list.map(p => {
    const faved = favourites.includes(p.id);
    const badgeClass = `badge-${p.type}`;
    const typeLabel = p.type === 'inner' ? 'Inner Planet' : p.type === 'outer' ? 'Outer Planet' : 'Dwarf Planet';
    const ring = p.name === 'Saturn' ? '<div class="saturn-ring"></div>' : '';
    return `
    <div class="planet-card" onclick="openPlanet(${p.id})">
      <div class="card-planet-wrap">
        <div class="card-planet-bg" style="background:radial-gradient(circle, rgba(167,139,250,0.15), transparent)"></div>
        <div style="position:relative">
          ${ring}
          <div class="css-planet ${p.cssClass}"></div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="type-badge ${badgeClass}">${typeLabel}</span>
          <button class="fav-icon ${faved ? 'faved' : ''}" onclick="event.stopPropagation(); quickFav(${p.id}, this)" title="Favourite">
            <i class="fas fa-star"></i>
          </button>
        </div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>
      <div class="card-footer">
        <span><i class="fas fa-ruler-combined"></i> ${p.diameter}</span>
        <span><i class="fas fa-moon"></i> ${p.moons} moon${p.moons !== '1' ? 's' : ''}</span>
      </div>
    </div>`;
  }).join('');
}

// ── FILTER ────────────────────────────────────────────
function filterPlanets(type, el) {
  activeFilter = type;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  renderPlanets(type === 'all' ? planets : planets.filter(p => p.type === type));
}

// ── OPEN PLANET DETAIL ────────────────────────────────
function openPlanet(id) {
  const p = planets.find(x => x.id === id);
  if (!p) return;
  currentId = id;

  // Big planet in modal
  const detailPlanet = document.getElementById('detailPlanet');
  detailPlanet.className = `planet-3d ${p.cssClass}`;
  if (p.name === 'Jupiter')  { detailPlanet.style.width = '180px'; detailPlanet.style.height = '180px'; }
  else if (p.name === 'Saturn') { detailPlanet.style.width = '160px'; detailPlanet.style.height = '160px'; }
  else if (p.name === 'Pluto') { detailPlanet.style.width = '100px'; detailPlanet.style.height = '100px'; }
  else { detailPlanet.style.width = '160px'; detailPlanet.style.height = '160px'; }

  const typeLabel = p.type === 'inner' ? 'Inner Planet' : p.type === 'outer' ? 'Outer Planet' : 'Dwarf Planet';
  const badgeClass = `badge-${p.type}`;
  document.getElementById('dType').textContent = typeLabel;
  document.getElementById('dType').className = `type-badge ${badgeClass}`;
  document.getElementById('dName').textContent = p.name;
  document.getElementById('dDesc').textContent = p.desc;
  document.getElementById('dDiameter').textContent = p.diameter;
  document.getElementById('dDistance').textContent = p.distance;
  document.getElementById('dDay').textContent = p.day;
  document.getElementById('dYear').textContent = p.year;
  document.getElementById('dMoons').textContent = p.moons;
  document.getElementById('dTemp').textContent = p.temp;
  document.getElementById('dFacts').innerHTML = p.facts.map(f => `<li>${f}</li>`).join('');

  updateFavBtn(id);
  openModal('planetModal');
}

function updateFavBtn(id) {
  const faved = favourites.includes(id);
  const btn = document.getElementById('favBtn');
  document.getElementById('favBtnText').textContent = faved ? 'Remove Favourite' : 'Add to Favourites';
  btn.classList.toggle('faved', faved);
}

// ── FAVOURITES ────────────────────────────────────────
function toggleFav() {
  if (!currentId) return;
  const idx = favourites.indexOf(currentId);
  if (idx >= 0) { favourites.splice(idx, 1); showToast('Removed from favourites'); }
  else          { favourites.push(currentId); showToast('⭐ Added to favourites!'); }
  saveFavs();
  updateFavBtn(currentId);
  renderPlanets(activeFilter === 'all' ? planets : planets.filter(p => p.type === activeFilter));
}

function quickFav(id, btn) {
  const idx = favourites.indexOf(id);
  if (idx >= 0) { favourites.splice(idx, 1); btn.classList.remove('faved'); showToast('Removed from favourites'); }
  else          { favourites.push(id);        btn.classList.add('faved');    showToast('⭐ Added to favourites!'); }
  saveFavs();
}

function saveFavs() { localStorage.setItem('pvFavourites', JSON.stringify(favourites)); }

function renderFavourites() {
  const list = document.getElementById('favList');
  const saved = planets.filter(p => favourites.includes(p.id));
  if (!saved.length) {
    list.innerHTML = '<div class="empty-fav"><i class="fas fa-star"></i><p>No favourites yet.<br>Star a planet to save it here.</p></div>';
    return;
  }
  list.innerHTML = saved.map(p => `
    <div class="fav-item" onclick="closeModal('favModal'); openPlanet(${p.id})">
      <div class="fav-planet-mini css-planet ${p.cssClass}" style="width:48px;height:48px;animation:none"></div>
      <div class="fav-info">
        <h4>${p.name}</h4>
        <span>${p.diameter} · ${p.moons} moon${p.moons !== '1' ? 's' : ''}</span>
      </div>
      <button class="fav-remove" onclick="event.stopPropagation(); removeFav(${p.id})" title="Remove">
        <i class="fas fa-times"></i>
      </button>
    </div>`).join('');
}

function removeFav(id) {
  favourites = favourites.filter(x => x !== id);
  saveFavs();
  renderFavourites();
  renderPlanets(activeFilter === 'all' ? planets : planets.filter(p => p.type === activeFilter));
  showToast('Removed from favourites');
}

// ── MODALS ────────────────────────────────────────────
function openModal(id) {
  if (id === 'favModal') renderFavourites();
  document.getElementById(id).classList.add('open');
}
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) closeModal(e.target.id);
});

// ── TOAST ─────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
