// ----- Datos (JSON) - modifica aquí para agregar/quitar items -----
const data = {
    heroSlides: [
        { id: 1, img: './static/slide_1.png', title: 'Colección Primavera', text: 'Joyas hechas a mano — plata 925 y baño en oro' },
        { id: 2, img: './static/slide_2.png', title: 'Anillos de compromiso', text: 'Diseños exclusivos — personalización disponible' },
        { id: 3, img: './static/slide_3.png', title: 'Novedades 2025', text: 'Pulseras y dijes con acabado premium' },
    ],

    basics: [
        { id: 'b1', name: 'Pulsera Plateada', img: './static/basicos/pulsera_plateada.png', price: 'S/ 35' },
        { id: 'b2', name: 'Pulsera Dorada', img: './static/basicos/pulsera_dorada.png', price: 'S/ 35' },
        { id: 'b3', name: 'Pulsera Negra', img: './static/basicos/pulsera_negra.png', price: 'S/ 35' },
        { id: 'b4', name: 'Pulsera de Corazones', img: './static/basicos/pulsera_corazones.png', price: 'S/ 35' },
    ],

    combos: [
        // { id: 'c1', name: 'Combo Pet', img: './static/combos/combo_pet.jpeg', items: ['Golden Retriever', 'Corazón'], price: 'S/ 39' },
        { id: 'c2', name: 'Combo Gema', img: './static/combos/combo_gema.jpeg', items: ['Gema Fortuna', 'Gatito Floreado', 'Cozarón'], price: 'S/ 77' },
        // { id: 'c3', name: 'Combo Primavera', img: './static/combos/combo_primavera.jpeg', items: ['Patita', 'Flor Primaveral'], price: 'S/ 61' },
        { id: 'c4', name: 'Combo Cat', img: './static/combos/combo_cat.jpeg', items: ['Gatitos Tú y Yo', 'Gema Fortuna'], price: 'S/ 63' },
        { id: 'c5', name: 'Combo Pet lover', img: './static/combos/combo_pet_lover.jpeg', items: ['Amigos Fieles', 'Patita'], price: 'S/ 52' },
        // { id: 'c6', name: 'Combo Flower', img: './static/combos/combo_flower.jpeg', items: ['Gatito Floreado'], price: 'S/ 45' },
    ],

    charms: [
        { id: 'ch1', name: 'Spiderman', img: './static/charms/sipderman.png', desc: '', price: 'S/ 9' },
        { id: 'ch1', name: 'Yin y Yang', img: './static/charms/yin_yang.png', desc: '', price: 'S/ 9' },
        
        { id: 'ch1', name: 'Gatito Floreado', img: './static/charms/gatito_floreado.png', desc: '', price: 'S/ 12' },
        { id: 'ch2', name: 'Pareja de Gatitos', img: './static/charms/gatitos_tu_y_yo.png', desc: '', price: 'S/ 12' },
        { id: 'ch5', name: 'Corazón Rojo', img: './static/charms/cozaron_dorado.png', desc: '', price: 'S/ 12' },
        { id: 'ch6', name: 'Mariposa Rosa', img: './static/charms/mariposa.png', desc: '', price: 'S/ 12' },
        { id: 'ch7', name: 'Gema Verde', img: './static/charms/gema_verde.png', desc: '', price: 'S/ 12' },
        { id: 'ch7', name: 'Patita de Perro', img: './static/charms/patita.png', desc: '', price: 'S/ 12' },
        { id: 'ch7', name: 'Flor', img: './static/charms/flor_1.png', desc: '', price: 'S/ 12' },
        { id: 'ch7', name: 'Tulipan', img: './static/charms/tulipan.png', desc: '', price: 'S/ 12' },
        { id: 'ch7', name: 'Fresita', img: './static/charms/fresita.png', desc: '', price: 'S/ 12' },
        { id: 'ch7', name: 'Trio Viajero', img: './static/charms/trio_viajero.png', desc: '', price: 'S/ 12' },
        { id: 'ch7', name: 'Camarita', img: './static/charms/camara.png', desc: '', price: 'S/ 12' },
        
        { id: 'ch1', name: 'Colgante Corazón', img: './static/charms/corazon_negro.png', desc: '', price: 'S/ 20' },
        { id: 'ch2', name: 'Colgante Casita', img: './static/charms/casita_asitatica.png', desc: '', price: 'S/ 20' },
        { id: 'ch8', name: 'Colgante Hello Kitty', img: './static/charms/hello_kitty.png', desc: '', price: 'S/ 20' },
        { id: 'ch9', name: 'Colgante Melody', img: './static/charms/melody.png', desc: '', price: 'S/ 20' },
        { id: 'ch9', name: 'Corazón Doble', img: './static/charms/corazon_2.png', desc: '', price: 'S/ 20' },
    ]
};

// ----- Renderizado dinámico -----
const slidesEl = document.getElementById('slides');
const dotsEl = document.getElementById('dots');
data.heroSlides.forEach((s, idx) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = `url(${s.img})`;
    slide.innerHTML = `<div class="caption"><h2>${s.title}</h2><p>${s.text}</p></div>`;
    slidesEl.appendChild(slide);
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.dataset.index = idx;
    dot.addEventListener('click', () => goTo(idx));
    dotsEl.appendChild(dot);
});

function createCard(item, badge) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div>
        <h4 style='margin:0'>${item.name}</h4>
        <p style='margin:6px 0 8px;font-size:13px;color:var(--muted)'>${item.desc || item.items?.join(' • ') || ''}</p>
        <div class='meta'>
        <span class='price'>${item.price}
        </span><span class='badge'>${badge}</span>
        </div></div>`;
    return card;
}

const basicsGrid = document.getElementById('basics-grid');
data.basics.forEach(b => basicsGrid.appendChild(createCard(b, 'Clásico')));

const combosGrid = document.getElementById('combos-grid');
data.combos.forEach(c => combosGrid.appendChild(createCard(c, 'Combo')));

const charmsGrid = document.getElementById('charms-grid');
data.charms.forEach(ch => charmsGrid.appendChild(createCard(ch, 'Charm')));


let index = 0; const total = data.heroSlides.length;
function refresh() {
    const w = document.getElementById('slider').clientWidth;
    slidesEl.style.transform = `translateX(-${index * w}px)`;
    Array.from(dotsEl.children).forEach((d, i) => d.classList.toggle('active', i === index));
}

function goTo(i) { index = (i + total) % total; refresh(); }

document.getElementById('next').onclick = () => goTo(index + 1);
document.getElementById('prev').onclick = () => goTo(index - 1);

let autoplay = setInterval(() => goTo(index + 1), 5000);
document.getElementById('slider').addEventListener('mouseenter', () => clearInterval(autoplay));

window.addEventListener('resize', refresh);
window.addEventListener('load', () => { refresh(); document.getElementById('year').textContent = new Date().getFullYear(); });
