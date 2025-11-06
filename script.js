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
let previousFocusElement = null;

// XSS-Schutz: HTML-Escaping für User-Input
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Debounce-Funktion für Performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Toast-Notification-System
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Loading-State Management
function setLoading(isLoading) {
    const grid = document.getElementById('angebote-grid');
    if (isLoading) {
        grid.classList.add('loading');
        grid.setAttribute('aria-busy', 'true');
    } else {
        grid.classList.remove('loading');
        grid.setAttribute('aria-busy', 'false');
    }
}

// Fokus-Management für Accessibility
function trapFocusInModal(modal) {
    const focusableElements = modal.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

function openModalWithFocus(modal) {
    previousFocusElement = document.activeElement;
    modal.showModal();
    const firstFocusable = modal.querySelector('input:not([type="hidden"]), button, textarea, select, a[href]');
    if (firstFocusable) {
        setTimeout(() => firstFocusable.focus(), 50);
    }
    trapFocusInModal(modal);
}

function closeModalAndRestoreFocus(modal) {
    modal.close();
    if (previousFocusElement) {
        previousFocusElement.focus();
        previousFocusElement = null;
    }
}

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
    setLoading(true);
    try {
        const { data, error } = await supabaseClient.from('angebote').select('*').order('created_at', { ascending: false });
        if (error) {
            console.error('Fehler beim Laden:', error);
            showToast('Fehler beim Laden der Angebote', 'error');
            return;
        }
        alleAngebote = data || [];
        erstelleSeiten();
        if (paginationInterval) clearInterval(paginationInterval);
        if (seiten.length > 1) { startePagination(); }
        else { zeigeSeite(0); }
    } finally {
        setLoading(false);
    }
}

function erstelleSeiten() {
    seiten = [];
    for (let i = 0; i < alleAngebote.length; i += MAX_KACHELN_PRO_SEITE) {
        seiten.push(alleAngebote.slice(i, i + MAX_KACHELN_PRO_SEITE));
    }
}

function zeigeSeite(seiteIndex) {
    if (!seiten[seiteIndex] && seiten.length > 0) seiteIndex = 0;

    // Placeholder für leere Liste
    if (seiten.length === 0) {
        angeboteGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon" aria-hidden="true">📚</div>
                <h2>Noch keine Angebote verfügbar</h2>
                <p>Erstellen Sie Ihr erstes Angebot, indem Sie auf den + Button klicken.</p>
            </div>
        `;
        updatePaginationIndicator(0, 0);
        return;
    }

    angeboteGrid.innerHTML = seiten[seiteIndex].map(erstelleKachelHTML).join('');
    addAdminEventListeners();
    initialisiereGalerien();
    updatePaginationIndicator(seiteIndex + 1, seiten.length);
}

function updatePaginationIndicator(aktuelleSeite, gesamtSeiten) {
    let indicator = document.getElementById('pagination-indicator');

    if (gesamtSeiten <= 1) {
        // Kein Indikator bei nur einer Seite
        if (indicator) indicator.remove();
        return;
    }

    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'pagination-indicator';
        indicator.setAttribute('aria-live', 'polite');
        indicator.setAttribute('aria-atomic', 'true');
        document.body.appendChild(indicator);
    }

    indicator.textContent = `Seite ${aktuelleSeite} von ${gesamtSeiten}`;
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

    // XSS-Schutz: Alle User-Inputs escapen
    const safeTitel = escapeHtml(angebot.titel);
    const safeBetreuer = escapeHtml(angebot.betreuer);
    const safeOrt = escapeHtml(angebot.ort);
    const safeBeschreibung = escapeHtml(angebot.beschreibung);
    const safeIcon = escapeHtml(angebot.icon) || '✨';

    let bildHtml = '';
    if (hatBilder) {
        const bilder = angebot.bilder_urls.map((url, index) => `<img src="${escapeHtml(url)}" alt="Bild ${index + 1} von ${safeTitel}" class="kachel-bild ${index === 0 ? 'active' : ''}">`).join('');
        const hatGalerie = angebot.bilder_urls.length > 1;
        bildHtml = `<div class="kachel-bild-wrapper" data-has-gallery="${hatGalerie}" role="img" aria-label="Bildergalerie für ${safeTitel}">${bilder}</div>`;
    }
    return `
        <div class="${kachelKlasse}" data-id="${escapeHtml(angebot.id)}">
            ${bildHtml}
            <div class="kachel-content">
                <div class="admin-only admin-controls">
                    <button class="edit-btn" aria-label="Angebot ${safeTitel} bearbeiten" title="Bearbeiten">✏️</button>
                    <button class="delete-btn" aria-label="Angebot ${safeTitel} löschen" title="Löschen">🗑️</button>
                </div>
                <div class="kachel-icon" aria-hidden="true">${safeIcon}</div>
                <h3 class="kachel-titel">${safeTitel}</h3>
                <div class="kachel-meta-infos">
                    <span class="kachel-info"><span class="info-icon" aria-hidden="true">👤</span> ${safeBetreuer}</span>
                    <span class="kachel-info"><span class="info-icon" aria-hidden="true">📍</span> ${safeOrt}</span>
                </div>
                <p class="kachel-beschreibung">${safeBeschreibung}</p>
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

// Memory Leak Fix: Galerie-Intervalle sauber aufräumen
let galerieIntervalle = [];

function initialisiereGalerien() {
    // Alte Intervalle aufräumen
    galerieIntervalle.forEach(interval => clearInterval(interval));
    galerieIntervalle = [];

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
            galerieIntervalle.push(intervalId);
        };

        const kachel = galerie.closest('.angebot-kachel');
        const mouseEnterHandler = () => clearInterval(intervalId);
        const mouseLeaveHandler = () => starteInterval();

        kachel.addEventListener('mouseenter', mouseEnterHandler);
        kachel.addEventListener('mouseleave', mouseLeaveHandler);

        starteInterval();
    });
}

function showModal(angebot = null) {
    editForm.reset();
    aktuelleBilderUrls = [];
    bilderVorschau.innerHTML = '';
    if (angebot) {
        modalTitel.textContent = 'Angebot bearbeiten';
        // ID explizit setzen (das Input-Feld heißt 'angebot-id', nicht 'id')
        document.getElementById('angebot-id').value = angebot.id || '';
        // Restliche Felder setzen
        document.getElementById('titel').value = angebot.titel || '';
        document.getElementById('betreuer').value = angebot.betreuer || '';
        document.getElementById('ort').value = angebot.ort || '';
        document.getElementById('beschreibung').value = angebot.beschreibung || '';
        document.getElementById('icon').value = angebot.icon || '';
        aktuellesIconVorschau.textContent = angebot.icon || '❓';
        if (angebot.bilder_urls) {
            aktuelleBilderUrls = [...angebot.bilder_urls];
            updateBilderVorschau();
        }
    } else {
        modalTitel.textContent = 'Neues Angebot erstellen';
        document.getElementById('angebot-id').value = '';
        aktuellesIconVorschau.textContent = '❓';
        hiddenIconInput.value = '';
    }
    openModalWithFocus(editModal);
}

// Input-Validierung mit Längenlimits
function validateInput(value, maxLength, fieldName) {
    const trimmed = value.trim();
    if (!trimmed) {
        showToast(`${fieldName} darf nicht leer sein`, 'error');
        return null;
    }
    if (trimmed.length > maxLength) {
        showToast(`${fieldName} ist zu lang (max. ${maxLength} Zeichen)`, 'error');
        return null;
    }
    return trimmed;
}

async function handleFormSubmit(event) {
    event.preventDefault();

    // Input-Validierung
    const titel = validateInput(editForm.querySelector('#titel').value, 100, 'Titel');
    const betreuer = validateInput(editForm.querySelector('#betreuer').value, 100, 'Betreuer');
    const ort = validateInput(editForm.querySelector('#ort').value, 100, 'Ort');
    const beschreibung = editForm.querySelector('#beschreibung').value.trim();
    const icon = editForm.querySelector('#icon').value;

    if (!titel || !betreuer || !ort) return;

    if (beschreibung.length > 500) {
        showToast('Beschreibung ist zu lang (max. 500 Zeichen)', 'error');
        return;
    }

    if (!icon) {
        showToast('Bitte wählen Sie ein Icon aus', 'error');
        return;
    }

    const id = editForm.querySelector('#angebot-id').value;
    const angebotDaten = {
        titel, betreuer, ort, icon, beschreibung, bilder_urls: aktuelleBilderUrls,
    };

    setLoading(true);
    const { error } = id
        ? await supabaseClient.from('angebote').update(angebotDaten).eq('id', id)
        : await supabaseClient.from('angebote').insert([angebotDaten]);
    setLoading(false);

    if (error) {
        showToast('Fehler beim Speichern: ' + error.message, 'error');
    } else {
        showToast(id ? 'Angebot erfolgreich aktualisiert!' : 'Angebot erfolgreich erstellt!', 'success');
        closeModalAndRestoreFocus(editModal);
        await ladeAngebote();
    }
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
            span.setAttribute('role', 'button');
            span.setAttribute('tabindex', '0');
            span.setAttribute('aria-label', `Icon ${icon.emoji} auswählen`);
            span.onclick = () => {
                hiddenIconInput.value = icon.emoji;
                aktuellesIconVorschau.textContent = icon.emoji;
                iconPickerModal.close();
            };
            span.onkeydown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    hiddenIconInput.value = icon.emoji;
                    aktuellesIconVorschau.textContent = icon.emoji;
                    iconPickerModal.close();
                }
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

// Dateinamen-Sanitization für sichere Uploads
function sanitizeFileName(fileName) {
    // Nur Dateiname ohne Pfad
    const baseName = fileName.replace(/^.*[\\\/]/, '');
    // Extension extrahieren
    const parts = baseName.split('.');
    const extension = parts.length > 1 ? parts.pop() : '';
    const name = parts.join('.');
    // Nur alphanumerische Zeichen, Bindestriche und Unterstriche
    const safeName = name.replace(/[^a-zA-Z0-9-_]/g, '_').substring(0, 50);
    return extension ? `${safeName}.${extension}` : safeName;
}

// Bildkompression für kleinere Dateigrößen
async function compressImage(file, maxSizeMB = 2) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                // Max. Breite/Höhe: 1920px
                const maxDimension = 1920;
                if (width > maxDimension || height > maxDimension) {
                    if (width > height) {
                        height = (height / width) * maxDimension;
                        width = maxDimension;
                    } else {
                        width = (width / height) * maxDimension;
                        height = maxDimension;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    if (blob) {
                        resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
                    } else {
                        reject(new Error('Kompression fehlgeschlagen'));
                    }
                }, 'image/jpeg', 0.85);
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function handleBildUpload(event) {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    const verfuegbarePlaetze = 3 - aktuelleBilderUrls.length;
    if (files.length > verfuegbarePlaetze) {
        showToast(`Maximal 3 Bilder erlaubt. Sie können noch ${verfuegbarePlaetze} Bild(er) hochladen.`, 'error');
        return;
    }

    for (const file of files) {
        // Dateityp-Validierung
        if (!file.type.startsWith('image/')) {
            showToast(`"${file.name}" ist kein gültiges Bild`, 'error');
            continue;
        }

        // Dateigröße-Validierung (5MB max vor Kompression)
        if (file.size > 5 * 1024 * 1024) {
            showToast(`"${file.name}" ist zu groß (max. 5MB)`, 'error');
            continue;
        }

        try {
            // Bild komprimieren
            const compressedFile = await compressImage(file);

            // Sicherer Dateiname
            const safeName = sanitizeFileName(file.name);
            const fileName = `public/${Date.now()}-${safeName}`;

            // Upload mit Feedback
            const { error } = await supabaseClient.storage.from(BUCKET_NAME).upload(fileName, compressedFile);

            if (error) {
                console.error('Upload Fehler:', error);
                showToast(`Fehler beim Hochladen von "${file.name}"`, 'error');
                continue;
            }

            const { data } = supabaseClient.storage.from(BUCKET_NAME).getPublicUrl(fileName);
            if (data?.publicUrl) {
                aktuelleBilderUrls.push(data.publicUrl);
            }
        } catch (err) {
            console.error('Kompressionsfehler:', err);
            showToast(`Fehler bei der Verarbeitung von "${file.name}"`, 'error');
        }
    }

    updateBilderVorschau();
    bilderUploadInput.value = '';
}

function updateBilderVorschau() {
    bilderVorschau.innerHTML = '';

    // Bilder-Counter anzeigen
    const counter = document.createElement('div');
    counter.className = 'bilder-counter';
    counter.textContent = `${aktuelleBilderUrls.length}/3 Bilder`;
    counter.setAttribute('aria-live', 'polite');
    bilderVorschau.appendChild(counter);

    aktuelleBilderUrls.forEach((url, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'vorschau-bild-wrapper';
        wrapper.innerHTML = `<img src="${url}" class="vorschau-bild" alt="Vorschau Bild ${index + 1}"><button type="button" class="bild-loeschen-btn" data-index="${index}" aria-label="Bild ${index + 1} entfernen">&times;</button>`;
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
    loginButton.onclick = () => openModalWithFocus(loginModal);
    loginForm.querySelector('#login-abbrechen').onclick = () => closeModalAndRestoreFocus(loginModal);
    logoutButton.onclick = async () => { await supabaseClient.auth.signOut(); await checkUserStatus(); };
    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const { error } = await supabaseClient.auth.signInWithPassword({ email: email.value, password: password.value });
        if (error) { alert('Login fehlgeschlagen: ' + error.message); }
        else { closeModalAndRestoreFocus(loginModal); await checkUserStatus(); }
    };
    neuButton.onclick = () => showModal();
    editForm.onsubmit = handleFormSubmit;
    editModal.querySelector('#abbrechen-button').onclick = () => closeModalAndRestoreFocus(editModal);
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
        openModalWithFocus(iconPickerModal);
    };
    iconPickerSchliessen.onclick = () => closeModalAndRestoreFocus(iconPickerModal);

    // Debounced Icon-Suche für bessere Performance
    const debouncedIconSearch = debounce(() => {
        const aktiveKat = document.querySelector('.kategorie-btn.active')?.dataset.kat || 'alle';
        populateIconPickerModal(aktiveKat, iconSuche.value);
    }, 300);

    iconSuche.oninput = debouncedIconSearch;

    // ESC-Taste für Modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (editModal.open) closeModalAndRestoreFocus(editModal);
            if (loginModal.open) closeModalAndRestoreFocus(loginModal);
            if (iconPickerModal.open) closeModalAndRestoreFocus(iconPickerModal);
        }
    });
}

// --- START ---
initializeTheme();
initializeEventListeners();
checkUserStatus();