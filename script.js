// --- 1. KONFIGURATION & SETUP ---
const SUPABASE_URL = 'https://cxqzpqrxkwcxhwzyxofy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4cXpwcXJ4a3djeGh3enl4b2Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTUzNzcsImV4cCI6MjA3NTg3MTM3N30.DAunoWtMZ3ewR_FRPBdeCc6PuMdjv8ZsN_oZcFtn_qU';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const ICONS = [
    { kat: 'Sport', emoji: '⚽', keys: ['fußball', 'sport', 'ball'] }, { kat: 'Sport', emoji: '🏀', keys: ['basketball'] }, { kat: 'Sport', emoji: '🏐', keys: ['volleyball'] }, { kat: 'Sport', emoji: '🏓', keys: ['tischtennis', 'ping pong'] }, { kat: 'Sport', emoji: '🏸', keys: ['badminton'] }, { kat: 'Sport', emoji: '🤸', keys: ['turnen', 'gymnastik'] }, { kat: 'Sport', emoji: '🧘', keys: ['yoga', 'entspannung'] }, { kat: 'Sport', emoji: '🥋', keys: ['judo', 'karate', 'kampf'] }, { kat: 'Sport', emoji: '🎯', keys: ['ziel', 'pfeil', 'bogen'] }, { kat: 'Sport', emoji: '🏆', keys: ['pokal', 'sieg'] }, { kat: 'Sport', emoji: '🏃', keys: ['laufen', 'rennen'] }, { kat: 'Sport', emoji: '🚲', keys: ['fahrrad', 'rad'] }, { kat: 'Sport', emoji: '🏊', keys: ['schwimmen'] }, { kat: 'Sport', emoji: '🥊', keys: ['boxen'] }, { kat: 'Sport', emoji: '🏹', keys: ['schießen'] }, { kat: 'Sport', emoji: '🤺', keys: ['fechten'] }, { kat: 'Sport', emoji: '🏋️', keys: ['gewichtheben', 'kraft'] }, { kat: 'Sport', emoji: '🛹', keys: ['skateboard'] }, { kat: 'Sport', emoji: '🛼', keys: ['rollschuh'] }, { kat: 'Sport', emoji: '🧗', keys: ['klettern'] }, { kat: 'Sport', emoji: '🥇', keys: ['medaille'] },
    { kat: 'Kunst', emoji: '🎨', keys: ['kunst', 'malen', 'palette'] }, { kat: 'Kunst', emoji: '✂️', keys: ['schere', 'basteln'] }, { kat: 'Kunst', emoji: '🧶', keys: ['wolle', 'stricken'] }, { kat: 'Kunst', emoji: '💎', keys: ['edelstein', 'schmuck'] }, { kat: 'Kunst', emoji: '🧵', keys: ['faden', 'nähen'] }, { kat: 'Kunst', emoji: '📷', keys: ['foto', 'kamera'] }, { kat: 'Kunst', emoji: '✏️', keys: ['stift', 'zeichnen'] }, { kat: 'Kunst', emoji: '🖌️', keys: ['pinsel'] }, { kat: 'Kunst', emoji: '🏺', keys: ['töpfern', 'keramik'] }, { kat: 'Kunst', emoji: '✒️', keys: ['feder', 'schreiben'] }, { kat: 'Kunst', emoji: '🗿', keys: ['stein', 'bildhauer'] }, { kat: 'Kunst', emoji: '🪡', keys: ['nadel'] },
    { kat: 'Musik', emoji: '🎵', keys: ['musik', 'note'] }, { kat: 'Musik', emoji: '🎹', keys: ['klavier', 'keyboard'] }, { kat: 'Musik', emoji: '🎸', keys: ['gitarre'] }, { kat: 'Musik', emoji: '🎻', keys: ['geige', 'violine'] }, { kat: 'Musik', emoji: '🎺', keys: ['trompete'] }, { kat: 'Musik', emoji: '🥁', keys: ['trommel', 'schlagzeug'] }, { kat: 'Musik', emoji: '🎶', keys: ['noten'] }, { kat: 'Musik', emoji: '💃', keys: ['tanzen'] }, { kat: 'Musik', emoji: '🎧', keys: ['kopfhörer'] }, { kat: 'Musik', emoji: '🎛️', keys: ['dj', 'mischpult'] }, { kat: 'Musik', emoji: '🎷', keys: ['saxophon'] }, { kat: 'Musik', emoji: '🪗', keys: ['akkordeon'] }, { kat: 'Musik', emoji: '📣', keys: ['megaphon'] }, { kat: 'Musik', emoji: '🎤', keys: ['mikrofon', 'singen'] },
    { kat: 'Wissen', emoji: '📚', keys: ['bücher', 'lesen'] }, { kat: 'Wissen', emoji: '🔬', keys: ['mikroskop', 'forschung'] }, { kat: 'Wissen', emoji: '🧪', keys: ['chemie', 'labor'] }, { kat: 'Wissen', emoji: '💡', keys: ['idee', 'glühbirne'] }, { kat: 'Wissen', emoji: '🧭', keys: ['kompass', 'orientierung'] }, { kat: 'Wissen', emoji: '⚙️', keys: ['technik', 'zahnrad'] }, { kat: 'Wissen', emoji: '💻', keys: ['computer', 'programmieren'] }, { kat: 'Wissen', emoji: '🤖', keys: ['roboter'] }, { kat: 'Wissen', emoji: '🧬', keys: ['dna', 'biologie'] }, { kat: 'Wissen', emoji: '🧲', keys: ['magnet'] }, { kat: 'Wissen', emoji: '🔭', keys: ['teleskop', 'sterne'] }, { kat: 'Wissen', emoji: '🪐', keys: ['planet', 'saturn'] }, { kat: 'Wissen', emoji: '🔢', keys: ['zahlen', 'mathe'] }, { kat: 'Wissen', emoji: '⚛️', keys: ['atom', 'physik'] }, { kat: 'Wissen', emoji: '🧮', keys: ['abakus', 'rechnen'] }, { kat: 'Wissen', emoji: '📈', keys: ['diagramm'] },
    { kat: 'Natur', emoji: '🌳', keys: ['baum', 'wald'] }, { kat: 'Natur', emoji: '🦋', keys: ['schmetterling', 'insekt'] }, { kat: 'Natur', emoji: '🐞', keys: ['marienkäfer'] }, { kat: 'Natur', emoji: '🥕', keys: ['karotte', 'gemüse'] }, { kat: 'Natur', emoji: '🏕️', keys: ['campen', 'zelt'] }, { kat: 'Natur', emoji: '🌍', keys: ['erde', 'welt'] }, { kat: 'Natur', emoji: '🌱', keys: ['pflanze', 'keimling'] }, { kat: 'Natur', emoji: '🏞️', keys: ['landschaft'] }, { kat: 'Natur', emoji: '🐾', keys: ['pfote', 'tier'] }, { kat: 'Natur', emoji: '🦉', keys: ['eule'] }, { kat: 'Natur', emoji: '🦊', keys: ['fuchs'] }, { kat: 'Natur', emoji: '🐠', keys: ['fisch'] }, { kat: 'Natur', emoji: '🔥', keys: ['feuer'] }, { kat: 'Natur', emoji: '☀️', keys: ['sonne'] }, { kat: 'Natur', emoji: '🌿', keys: ['blatt'] }, { kat: 'Natur', emoji: '🍄', keys: ['pilz'] }, { kat: 'Natur', emoji: '🍁', keys: ['ahorn'] }, { kat: 'Natur', emoji: '🌻', keys: ['sonnenblume'] }, { kat: 'Natur', emoji: '🐎', keys: ['pferd', 'reiten'] }, { kat: 'Natur', emoji: '🐢', keys: ['schildkröte'] }, { kat: 'Natur', emoji: '🐜', keys: ['ameise'] }, { kat: 'Natur', emoji: '🗺️', keys: ['karte', 'schatz'] },
    { kat: 'Essen', emoji: '🍳', keys: ['kochen', 'ei'] }, { kat: 'Essen', emoji: '🍰', keys: ['kuchen', 'backen'] }, { kat: 'Essen', emoji: '🍪', keys: ['keks'] }, { kat: 'Essen', emoji: '🍎', keys: ['apfel', 'obst'] }, { kat: 'Essen', emoji: '🍕', keys: ['pizza'] }, { kat: 'Essen', emoji: '🥗', keys: ['salat'] }, { kat: 'Essen', emoji: '🍞', keys: ['brot'] }, { kat: 'Essen', emoji: '🍿', keys: ['popcorn'] }, { kat: 'Essen', emoji: '🍯', keys: ['honig', 'biene'] },
    { kat: 'Spiele', emoji: '🧩', keys: ['puzzle'] }, { kat: 'Spiele', emoji: '🎲', keys: ['würfel', 'spiel'] }, { kat: 'Spiele', emoji: '🃏', keys: ['karten'] }, { kat: 'Spiele', emoji: '♟️', keys: ['schach'] }, { kat: 'Spiele', emoji: '🎮', keys: ['videospiel', 'konsole'] }, { kat: 'Spiele', emoji: '🎳', keys: ['bowling'] }, { kat: 'Spiele', emoji: '🎱', keys: ['billard'] }, { kat: 'Spiele', emoji: '🪀', keys: ['yoyo'] }, { kat: 'Spiele', emoji: '🪁', keys: ['drachen'] },
    { kat: 'Sonstiges', emoji: '👑', keys: ['könig', 'prinzessin'] }, { kat: 'Sonstiges', emoji: '✉️', keys: ['brief'] }, { kat: 'Sonstiges', emoji: '🎁', keys: ['geschenk'] }, { kat: 'Sonstiges', emoji: '🪄', keys: ['zauber', 'magie'] }, { kat: 'Sonstiges', emoji: '🏰', keys: ['burg', 'schloss'] }, { kat: 'Sonstiges', emoji: '🚀', keys: ['rakete', 'weltall'] }, { kat: 'Sonstiges', emoji: '🤔', keys: ['denken', 'rätsel'] }, { kat: 'Sonstiges', emoji: '🤝', keys: ['zusammen', 'team'] }, { kat: 'Sonstiges', emoji: '💬', keys: ['sprechen', 'diskussion'] }, { kat: 'Sonstiges', emoji: '❤️', keys: ['herz', 'liebe'] }, { kat: 'Sonstiges', emoji: '🌐', keys: ['internet', 'sprachen'] }, { kat: 'Sonstiges', emoji: '🤗', keys: ['umarmung'] }, { kat: 'Sonstiges', emoji: '📰', keys: ['zeitung'] }, { kat: 'Sonstiges', emoji: '📽️', keys: ['film', 'kino'] }, { kat: 'Sonstiges', emoji: '🎪', keys: ['zirkus'] }, { kat: 'Sonstiges', emoji: '🤹', keys: ['jonglieren'] },
];

const BUCKET_NAME = 'angebots-bilder';

const MAX_KACHELN_PRO_SEITE = 8;
const SEITENWECHSEL_INTERVALL = 15000;

let alleAngebote = [];
let seiten = [];
let aktuelleSeite = 0;
let paginationInterval = null;

const angeboteGrid = document.getElementById('angebote-grid');
const themeToggleButton = document.getElementById('theme-toggle');
const fullscreenToggleButton = document.getElementById('fullscreen-toggle');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const neuButton = document.getElementById('neu-button');
const editModal = document.getElementById('edit-modal');
const editForm = document.getElementById('edit-form');
const modalTitel = document.getElementById('modal-titel');
const bilderUploadInput = document.getElementById('bilder-upload');
const bilderVorschau = document.getElementById('bilder-vorschau');
const iconPickerModal = document.getElementById('icon-picker-modal');
const iconAendernBtn = document.getElementById('icon-aendern-btn');
const aktuellesIconVorschau = document.getElementById('aktuelles-icon-vorschau');
const iconSuche = document.getElementById('icon-suche');
const iconKategorien = document.getElementById('icon-kategorien');
const iconPickerGrid = document.getElementById('icon-picker-grid');
const iconPickerSchliessen = document.getElementById('icon-picker-schliessen');
const hiddenIconInput = document.getElementById('icon');

let aktuelleBilderUrls = [];

function applyTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    themeToggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
}
function handleThemeToggle() {
    const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
}
function toggleFullscreen() {
    if (!document.fullscreenElement) { document.documentElement.requestFullscreen(); } 
    else if (document.exitFullscreen) { document.exitFullscreen(); }
}
function handleFullscreenChange() {
    fullscreenToggleButton.textContent = document.fullscreenElement ? '↙️' : '↗️';
}

async function ladeAngebote() {
    const { data, error } = await supabaseClient.from('angebote').select('*').order('created_at', { ascending: false });
    if (error) { console.error('Fehler beim Laden:', error); return; }
    alleAngebote = data;
    erstelleSeiten();
    if (paginationInterval) clearInterval(paginationInterval);
    if (seiten.length > 1) { startePagination(); } 
    else { zeigeSeite(0); }
}

function erstelleSeiten() {
    seiten = [];
    for (let i = 0; i < alleAngebote.length; i += MAX_KACHELN_PRO_SEITE) {
        seiten.push(alleAngebote.slice(i, i + MAX_KACHELN_PRO_SEITE));
    }
}

function zeigeSeite(seiteIndex) {
    if (!seiten[seiteIndex] && seiten.length > 0) seiteIndex = 0;
    angeboteGrid.innerHTML = seiten.length === 0 ? '' : seiten[seiteIndex].map(erstelleKachelHTML).join('');
    addAdminEventListeners();
    initialisiereGalerien();
}

function startePagination() {
    zeigeSeite(0);
    aktuelleSeite = 0;
    paginationInterval = setInterval(() => {
        angeboteGrid.style.opacity = 0;
        setTimeout(() => {
            aktuelleSeite = (aktuelleSeite + 1) % seiten.length;
            zeigeSeite(aktuelleSeite);
            angeboteGrid.style.opacity = 1;
        }, 500);
    }, SEITENWECHSEL_INTERVALL);
}

function erstelleKachelHTML(angebot) {
    const hatBilder = angebot.bilder_urls && angebot.bilder_urls.length > 0;
    const kachelKlasse = hatBilder ? 'angebot-kachel has-bg-image' : 'angebot-kachel';
    let bildHtml = '';
    if (hatBilder) {
        const bilder = angebot.bilder_urls.map((url, index) => `<img src="${url}" alt="${angebot.titel}" class="kachel-bild ${index === 0 ? 'active' : ''}">`).join('');
        const hatGalerie = angebot.bilder_urls.length > 1;
        bildHtml = `<div class="kachel-bild-wrapper" data-has-gallery="${hatGalerie}">${bilder}</div>`;
    }
    return `
        <div class="${kachelKlasse}" data-id="${angebot.id}">
            ${bildHtml}
            <div class="kachel-content">
                <div class="admin-only admin-controls">
                    <button class="edit-btn" title="Bearbeiten">✏️</button>
                    <button class="delete-btn" title="Löschen">🗑️</button>
                </div>
                <div class="kachel-icon">${angebot.icon||'✨'}</div>
                <h3 class="kachel-titel">${angebot.titel}</h3>
                <div class="kachel-meta-infos">
                    <span class="kachel-info"><span class="info-icon">👤</span> ${angebot.betreuer}</span>
                    <span class="kachel-info"><span class="info-icon">📍</span> ${angebot.ort}</span>
                </div>
                <p class="kachel-beschreibung">${angebot.beschreibung||''}</p>
            </div>
        </div>
    `;
}

async function checkUserStatus() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    const isAdmin = !!session?.user;
    document.body.classList.toggle('is-admin', isAdmin);
    loginButton.classList.toggle('hidden', isAdmin);
    logoutButton.classList.toggle('hidden', !isAdmin);
    await ladeAngebote();
}

function initialisiereGalerien() {
    document.querySelectorAll('.kachel-bild-wrapper[data-has-gallery="true"]').forEach(galerie => {
        const bilder = galerie.querySelectorAll('.kachel-bild');
        if (bilder.length <= 1) return;
        let aktuellerIndex = 0, intervalId = null;
        const starteInterval = () => {
            if (intervalId) clearInterval(intervalId);
            intervalId = setInterval(() => {
                bilder[aktuellerIndex].classList.remove('active');
                aktuellerIndex = (aktuellerIndex + 1) % bilder.length;
                bilder[aktuellerIndex].classList.add('active');
            }, 4000);
        };
        const kachel = galerie.closest('.angebot-kachel');
        kachel.addEventListener('mouseenter', () => clearInterval(intervalId));
        kachel.addEventListener('mouseleave', starteInterval);
        starteInterval();
    });
}

function showModal(angebot = null) {
    editForm.reset();
    aktuelleBilderUrls = [];
    bilderVorschau.innerHTML = '';
    if (angebot) {
        modalTitel.textContent = 'Angebot bearbeiten';
        Object.keys(angebot).forEach(key => {
            const el = editForm.querySelector(`#${key}`);
            if (el) el.value = angebot[key];
        });
        aktuellesIconVorschau.textContent = angebot.icon || '❓';
        hiddenIconInput.value = angebot.icon || '';
        if (angebot.bilder_urls) {
            aktuelleBilderUrls = [...angebot.bilder_urls];
            updateBilderVorschau();
        }
    } else {
        modalTitel.textContent = 'Neues Angebot erstellen';
        aktuellesIconVorschau.textContent = '❓';
        hiddenIconInput.value = '';
    }
    editModal.showModal();
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const id = editForm.querySelector('#angebot-id').value;
    const angebotDaten = {
        titel: editForm.querySelector('#titel').value, betreuer: editForm.querySelector('#betreuer').value,
        ort: editForm.querySelector('#ort').value, icon: editForm.querySelector('#icon').value,
        beschreibung: editForm.querySelector('#beschreibung').value, bilder_urls: aktuelleBilderUrls,
    };
    const { error } = id
        ? await supabaseClient.from('angebote').update(angebotDaten).eq('id', id)
        : await supabaseClient.from('angebote').insert([angebotDaten]);
    if (error) { alert('Fehler: ' + error.message); } 
    else { editModal.close(); await ladeAngebote(); }
}

function populateIconPickerModal(filterKat = 'alle', suchbegriff = '') {
    iconPickerGrid.innerHTML = '';
    suchbegriff = suchbegriff.toLowerCase();
    ICONS.forEach(icon => {
        const kategorieMatch = filterKat === 'alle' || icon.kat === filterKat;
        const sucheMatch = suchbegriff === '' || icon.emoji.includes(suchbegriff) || icon.keys.some(key => key.toLowerCase().includes(suchbegriff));
        if (kategorieMatch && sucheMatch) {
            const span = document.createElement('span');
            span.className = 'icon-option';
            span.textContent = icon.emoji;
            span.onclick = () => {
                hiddenIconInput.value = icon.emoji;
                aktuellesIconVorschau.textContent = icon.emoji;
                iconPickerModal.close();
            };
            iconPickerGrid.appendChild(span);
        }
    });
}

function populateKategorieFilter() {
    const kategorien = ['alle', ...new Set(ICONS.map(i => i.kat))];
    iconKategorien.innerHTML = '';
    kategorien.forEach(kat => {
        const btn = document.createElement('button');
        btn.className = 'kategorie-btn';
        if (kat === 'alle') btn.classList.add('active');
        btn.textContent = kat.charAt(0).toUpperCase() + kat.slice(1);
        btn.dataset.kat = kat;
        btn.onclick = () => {
            document.querySelectorAll('.kategorie-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            populateIconPickerModal(kat, iconSuche.value);
        };
        iconKategorien.appendChild(btn);
    });
}

async function handleBildUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    if (aktuelleBilderUrls.length + files.length > 3) { alert("Maximal 3 Bilder."); return; }
    for (const file of files) {
        const fileName = `public/${Date.now()}-${file.name}`;
        const { error } = await supabaseClient.storage.from(BUCKET_NAME).upload(fileName, file);
        if (error) { console.error('Upload Fehler:', error); alert("Fehler beim Upload."); continue; }
        const { data } = supabaseClient.storage.from(BUCKET_NAME).getPublicUrl(fileName);
        if (data?.publicUrl) { aktuelleBilderUrls.push(data.publicUrl); }
    }
    updateBilderVorschau();
    bilderUploadInput.value = '';
}

function updateBilderVorschau() {
    bilderVorschau.innerHTML = '';
    aktuelleBilderUrls.forEach((url, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'vorschau-bild-wrapper';
        wrapper.innerHTML = `<img src="${url}" class="vorschau-bild"><button type="button" class="bild-loeschen-btn" data-index="${index}">&times;</button>`;
        bilderVorschau.appendChild(wrapper);
    });
}

function addAdminEventListeners() {
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.onclick = async (e) => {
            const id = e.target.closest('.angebot-kachel').dataset.id;
            const { data } = await supabaseClient.from('angebote').select('*').eq('id', id).single();
            if (data) showModal(data);
        };
    });
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.onclick = async (e) => {
            const id = e.target.closest('.angebot-kachel').dataset.id;
            if (confirm('Dieses Angebot wirklich löschen?')) {
                await supabaseClient.from('angebote').delete().eq('id', id);
                await ladeAngebote();
            }
        };
    });
}

function initializeEventListeners() {
    themeToggleButton.onclick = handleThemeToggle;
    fullscreenToggleButton.onclick = toggleFullscreen;
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    loginButton.onclick = () => loginModal.showModal();
    loginForm.querySelector('#login-abbrechen').onclick = () => loginModal.close();
    logoutButton.onclick = async () => { await supabaseClient.auth.signOut(); await checkUserStatus(); };
    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const { error } = await supabaseClient.auth.signInWithPassword({ email: email.value, password: password.value });
        if (error) { alert('Login fehlgeschlagen: ' + error.message); } 
        else { loginModal.close(); await checkUserStatus(); }
    };
    neuButton.onclick = () => showModal();
    editForm.onsubmit = handleFormSubmit;
    editModal.querySelector('#abbrechen-button').onclick = () => editModal.close();
    bilderUploadInput.onchange = handleBildUpload;
    bilderVorschau.onclick = (e) => {
        if (e.target.classList.contains('bild-loeschen-btn')) {
            const index = parseInt(e.target.dataset.index, 10);
            aktuelleBilderUrls.splice(index, 1);
            updateBilderVorschau();
        }
    };
    iconAendernBtn.onclick = () => {
        populateKategorieFilter();
        populateIconPickerModal();
        iconPickerModal.showModal();
    };
    iconPickerSchliessen.onclick = () => iconPickerModal.close();
    iconSuche.oninput = () => {
        const aktiveKat = document.querySelector('.kategorie-btn.active')?.dataset.kat || 'alle';
        populateIconPickerModal(aktiveKat, iconSuche.value);
    };
}

// --- START ---
initializeTheme();
initializeEventListeners();
checkUserStatus();