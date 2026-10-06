# Ferienprogramm-Planer – Projektübersicht & Übergabe

Stand: 05.10.2026 · lokales Git-Repo `C:\ferienprogramm` (ursprünglich aus Repo `nassdaniel1987-a11y/Timerapp`,
Branch `claude/html-table-word-export-6gpc7b`)

## Worum geht's?

Eine **einzelne HTML-Datei** (`Ferienprogramm.html`), mit der man Ferienprogramm-Pläne für Kinder/Hort
(Vorlage: „Herbst Junior GTS1“, Word-Tabelle A4 quer, Wochentage als Spalten, Angebote als Felder)
im Browser zusammenbaut und als **Word-Datei (.docx)** exportiert.

- Kein Build, keine Installation: `Ferienprogramm.html` per Doppelklick im Browser öffnen.
- Einzige Abhängigkeit: die Bibliothek **docx** (v9.5.1), lokal in `lib/docx.js` (UMD, stellt `window.docx` bereit)
  → Export geht auch offline.
- Gespeichert wird in **Dateien** (Datenordner oder Arbeitsmappe, s. u.); `localStorage` ist nur Absturzschutz
  (im Schulnetz löscht Chrome beim Schließen allen Browser-Speicher).

## Dateien

| Datei | Inhalt |
|---|---|
| `Ferienprogramm.html` | Die komplette App (CSS + HTML + JS in einer Datei – bewusst nicht aufgeteilt) |
| `lib/docx.js` | docx 9.5.1 (UMD) für den Word-Export |
| `README.md` | Kurzbeschreibung für Nutzer |
| `PROJEKT.md` | Diese Übersicht |
| `probe-teilnehmerliste.html` | Erste Probe der Interessenliste (abgenommen, nur noch Referenz) |
| `test-datenordner.html` | Test, ob Chrome im Schulnetz in einen Ordner schreiben darf (noch im Schulnetz testen!) |
| `.claude/launch.json` | Test-Server (`python -m http.server 8765`) für die Vorschau |

## Funktionen (aktueller Stand)

**Seite & Layout**
- Arbeitsfläche ist eine echte **A4-Seite quer** (297 × 210 mm), wird immer komplett ins Fenster eingepasst (kein Zoom).
- Titel links (+ Deko-Emoji), Untertitel/Gruppe rechts, Tageszeile, Tabelle, Hinweis-Kasten unten (`**fett**` möglich).
- Die Tabelle füllt automatisch genau die Resthöhe der Seite → Export passt auf **eine Seite**.
- Mehrere **Wochen** als Reiter (eine Word-Seite pro Woche), Datum automatisch („Montag, 26.10.2026“).
- **Themen**: Klassisch, Herbst, Winter, Frühling, Sommer (Farben + Deko); Farben einzeln anpassbar.

**Felder (Angebote) – „Baukasten“**
- Jedes Feld ist ein **freies Rechteck**; die Fläche ist lückenlos in Felder aufgeteilt, leere Bereiche sind leere Felder („＋ Feld“).
- **Rand ziehen**: Griff innen am eigenen Rand eines Angebots.
  - Liegen genau zwei gleich lange Felder aneinander → Linie verschiebt sich gemeinsam.
  - Sonst ändert sich **nur das angefasste Feld**: kleiner → Lücke wird leeres Feld; größer → wächst nur in leere Felder.
  - Einrasten an anderen Kanten (±1,5 mm), sonst 0,5-mm-Raster, Mindestgröße 12 × 8 mm, mm-Anzeige beim Ziehen.
- Linien in der **Tageszeile** verschieben die Tagesgrenze (und alles, was genau daran liegt).
- **Teilen** (nebeneinander/untereinander), **Verbinden** mit Nachbarn (orange ＋ oder Knöpfe ← → ↑ ↓; nur wenn Ergebnis ein Rechteck ist).
- **Tauschen**: Feld auf ein anderes ziehen.
- **Baukasten** links: Vorlagen per Drag & Drop in leere Felder (oder Doppelklick); eigene Felder „🧱 Merken“.
- Zeilen-Bänder (zwischen durchgehenden Linien): hinzufügen, löschen, verschieben (Werkzeuge rechts neben der Seite).
- Tage hinzufügen/löschen/verschieben (nur wenn kein Feld über die Tagesgrenze ragt).
- Felder-Inhalt: Symbol (Emoji), Titel, `#` Interessenliste, Uhrzeit, Beschreibung, fetter Hinweis, Ansprechpartner, Farbe, Schriftgröße.
- Neues Feld: Titel „Neues Angebot“ ist sofort markiert → einfach lostippen.
- Warnung **„⚠ zu viel Text“** pro Feld + Statusanzeige oben; **„✨ Text einpassen“** verkleinert die Schrift übervoller Felder (0,5-pt-Schritte bis 6 pt).

**Bilder**
- Hochladen oder Bilddatei direkt aufs Feld ziehen (wird verkleinert; PNG behält Transparenz).
- **Einfach ziehen**, frei im ganzen Feld: seitlich → Text fließt daneben; mittig → Text springt darüber/darunter.
- Blaue Ecke = Größe, ✕ = löschen. Sonderfälle in der Bilderliste: „über/unter dem Text“, „frei über den Text legen“ (vor/hinter Text).
- Felder mit frei platzierten Bildern sind oben ausgerichtet (sonst vertikal zentriert).

**Bearbeiten-Fenster**
- Schwebend, an der orangen Leiste verschiebbar; öffnet sich neben dem angeklickten Feld (bis man es selbst verschiebt; „↺ auto“ setzt zurück).
- Bereiche einklappbar (Text, Symbol, Farbe & Schrift, Bilder, Größe & Aufteilung) – offen/zu wird gemerkt.
- Ohne Auswahl klappt es zu einer Leiste unten rechts ein; beim Verschieben/Anklicken von Bildern öffnet es sich nicht.
- „⇥“ dockt es als feste Spalte rechts an.

**Sonstiges**: Rückgängig (Strg+Z, 80 Schritte), Entf löscht ausgewähltes Feld/Bild, Esc hebt Auswahl auf.

**Direkt im Feld bearbeiten (seit 05.10.2026)**
- Neues Feld („＋ Feld“) → Bearbeiten-Fenster öffnet sich wie bisher zum ersten Eintragen.
- Bestehendes Feld anklicken → **Kontextleiste** über dem Feld (Farbe, Symbol, A−/A+, #, „＋ Text“, Teilen, Kopie, Merken,
  ⚙ = Fenster öffnen, Löschen); das große Fenster bleibt eingeklappt.
- Text im ausgewählten Feld anklicken (oder Doppelklick, oder Enter = Titel) → direkt schreiben (`contenteditable`),
  Enter/Esc beendet (Beschreibung/Hinweis: Enter = neue Zeile, Strg+Enter beendet). Ein Rückgängig-Schritt pro Bearbeitung.
- Oben Knopf **🎨 Seite & Design** (zweiter Klick / ✕ klappt ein); eingeklappte Leiste öffnet mit einem Klick.

**Interessenlisten**
- Pro Feld mit `#`: Bereich „📋 Interessenliste“ (Treffpunkt, Plätze, Eintragen bis, Warteliste, Bitte mitbringen, eigener Text).
- In „Seite & Design“: Text-Vorlage mit Platzhaltern `{Titel} {Datum} {Uhrzeit} {Ansprechpartner} {Treffpunkt} {Plätze} {Gruppe}`,
  Spalten (Klasse/Gruppe/✓ Personal), Zeilen Warteliste, „an Word-Export anhängen“.
- Seite A4 hoch; Zeilenhöhe wird im (unsichtbaren) Druckbereich `#printArea` ausgemessen, damit alles auf eine Seite passt
  (Ziel 12 mm, 8–16 mm). Ohne Plätze-Angabe: so viele Zeilen wie passen.
- Word: je Liste ein eigener Abschnitt (hoch, eigene Fußzeile mit Ansprechpartner); hinter der Tabelle ein winziger Absatz,
  sonst entsteht eine leere Folgeseite. In echtem Word geprüft (Word → PDF): jede Liste genau 1 Seite.

**Druckansicht** (🖨 Drucken)
- Vorschau-Fenster mit allen Wochen (Kopien der Seite ohne Griffe) + optional Interessenlisten; `window.print()`.
- Druck-CSS: nur `#printArea`; Plan-Seiten mit benanntem `@page plan { size: A4 landscape }`, Listen hoch.

**Speichern in Dateien** (📂 Pläne, 💾 Speichern, Strg+S)
- **Datenordner** (File System Access API, Chrome/Edge): `plaene/<Name>.json`, `bilder/*`, `baukasten.json`;
  speichert automatisch 1,2 s nach jeder Änderung. Ordner-Zugriff wird in IndexedDB gemerkt → zu Hause beim Start
  „🔌 Verbinden“; im Schulnetz muss der Ordner jedes Mal neu gewählt werden.
- **Arbeitsmappe** (Notlösung): eine JSON `{ app, kind: "arbeitsmappe", version, current, plans: {Name: plan}, lib, images }`,
  Speichern = Download; Warnung beim Schließen, wenn ungespeichert. Alte Einzel-Plan-Dateien `{plan, lib}` lassen sich öffnen.
- Beim Start öffnet sich der Dialog „Pläne & Speicherort“.

**Baukasten mit Reitern**: ⭐ Baukasten | 🗂 Archiv (alle Angebote aus den *anderen* Plänen, doppelte nur einmal, Suche, ⭐ = merken)
| 🖼 Bilder (Bild-Bibliothek; hochgeladene Bilder werden automatisch gemerkt; Bild auf Feld ziehen).

## Word-Export (wie er funktioniert)

- Ein Abschnitt, A4 quer, Seitenrand = Einstellung (Standard 10 mm); jede Woche beginnt mit Seitenumbruch.
- Titel als Absatz mit rechtem Tabstopp + Unterlinie; Hinweise als schattierte Absätze mit Akzentlinie links.
- **Tabellenraster** = Vereinigung aller Feldkanten (+ Tagesgrenzen) → Felder werden mit `gridSpan`/`vMerge`
  (docx: `columnSpan`/`rowSpan`) abgebildet; Zeilenhöhen **exakt** (`HeightRule.EXACT`), feste Spaltenbreiten.
- Gleiche Maße wie im Editor (mm → Twips), 4 mm Sicherheitsreserve in der Höhe.
- **Emojis** werden als kleine PNG-Bilder eingefügt (per Canvas gezeichnet), da Arial keine Emojis hat (sonst Kästchen).
- Bilder: seitlich = schwebend mit Umbruch „Quadrat“, mittig = „Oben und unten“, Position relativ zur Zelle
  (verankert im ersten Absatz der Zelle); „über/unter dem Text“ = Inline-Bild; „frei“ = schwebend ohne Umbruch.

## Datenmodell (Dateien s. o.; Absturzschutz in localStorage `ferienplaner.v2`, `ferienplaner.lib.v2`, `ferienplaner.name`, UI `ferienplaner.ui`)

```js
plan = {
  title, subtitle, deco, footer, theme,
  headColor, titleColor, accentColor, noteColor, lineColor,
  fontSize /*pt*/, titleSize /*pt*/, margin /*mm*/, headH /*mm Tageszeile*/, active /*Wochen-Index*/,
  lists: { text /*Vorlage*/, klasse, gruppe, staff, wait /*Zeilen*/, attach },
  weeks: [{
    id, name, start /*YYYY-MM-DD*/, days: ["Montag, 26.10.2026", …], colW: [Gewichte der Tagesspalten],
    blocks: [{   // Rechtecke, Anteile 0…1 der Tabellenfläche, füllen die Fläche lückenlos
      id, x, y, w, h, empty,
      icon, title, hash, time, desc, note, contact, color, fs /*null = Standard*/,
      list: { place, seats, wait, until, bring, text } /*nur bei # genutzt*/,
      imgs: [{ id, src /*dataURL*/, ar /*h/w*/, w /*mm*/, mode, ox, oy /*mm*/, x, y, behind }]
      // mode: "left" | "right" | "center" (frei im Feld, Textumfluss) | "top" | "bottom" | "free"
    }]
  }]
}
```
`migrate()` wandelt ältere Pläne (Raster mit `col/row/cs/rs`, `rowH`) automatisch in Rechtecke um.

## Code-Landkarte (`Ferienprogramm.html`)

- **Konstanten/Themen**: `PX`, `TW`, `EMU`, `PAGE_W/H`, `SAFETY`, `THEMES`, `EMOJIS`
- **Modell**: `block()`, `demoPlan()`, `defaultLib()`, `migrate()`, `fromGrid()`, `newWeek()`, `fillTile()/clearTile()/contentOf()`
- **Geometrie**: `cluster()` (Felder an einem Linienstück), `fullLines()`, `bands()`, `carve()`, `mergeEmptyAround()`
- **Rendering**: `renderAll()`, `renderSheet()` (Seite, Felder absolut in mm, Griffe, Zeilenwerkzeuge), `renderBlock()`, `renderEmpty()`, `renderContent()`, `renderImg()`, `checkOverflow()`, `fitZoom()`
- **Interaktion**: `startEdge()` (gemeinsam) / `soloEdge()` (nur ein Feld), `merge()`, `split()`, `startImgDrag()`, `wireDropTargets()` (Baukasten einsetzen, Felder tauschen), Zeilen/Tage: `addRow/delBand/moveBand/addCol/delCol/moveCol`
- **Editor-Fenster**: `renderRight()`, `renderBlockEditor()`, `renderPageEditor()`, `sec()/wireSecs()`, `placeWindow()/applyWindowMode()`
- **Export**: `wordKit()` (gemeinsame Helfer `em()` Emoji→Bild, `runs()` `**fett**`), `exportWord()` mit `blockCell()`
- **Direkt bearbeiten / Leiste**: `startInline()`, `renderCtx()/positionCtx()`, `openPop()/closePop()`
- **Interessenlisten**: `listData()`, `blockDate()`, `buildListPages()` (misst Zeilen), `listSections()`, `exportListsWord()`
- **Druck/Vorschau**: `buildPlanPages()`, `showPreview()` (Modal `#lmodal`)
- **Dateien**: `store`, `connectFolder()`, `saveNow()`, `markDirty()`, `workbook()`, `openFile()`, `openPlan()/newPlan()/copyPlan()`, Dialog `renderFiles()`
- **Baukasten**: `renderLib()` (Reiter), `libItem()`, `archiveItems()`, `rememberImage()`, `imageData()`
- Änderungen immer über `change(fn)` (Undo-Snapshot + speichern + neu zeichnen).

## Testen (so wurde bisher getestet)

**Lokal (seit 05.10.2026):** Test-Server über `.claude/launch.json`; Word ist installiert → erzeugte .docx per Word-COM
(PowerShell) in PDF umwandeln und Seiten/Seitenzahl prüfen; Druckansicht per Chrome headless `--print-to-pdf`.
Datenordner mit dem browserinternen Ordner (`navigator.storage.getDirectory()`) getestet – der echte Ordner-Dialog
und das Schulnetz sind **noch nicht** getestet (→ `test-datenordner.html`).

Früher (Cloud-Umgebung):

- Playwright (Chromium) headless: Seite öffnen, Felder ziehen/teilen/verbinden, Bilder hochladen/ziehen, Export auslösen.
- Export geprüft, indem das `.docx` entpackt und `word/document.xml` analysiert wurde
  (jede Tabellenzeile: Summe `gridSpan` = Anzahl `gridCol`; Seitengröße; Anker/Umbruch der Bilder).
- **Nicht geprüft:** Darstellung in echtem Word/LibreOffice (LibreOffice lief in der Cloud-Umgebung nicht).
  → Lokal unbedingt Export in Word öffnen und gegen die App vergleichen.

## Verlauf (Wünsche & Entscheidungen)

1. Grundversion: Tabelle wie Vorlage, Baukasten, Word-Export.
2. A4 quer auf einer Seite, Felder größer/kleiner, Bilder verschieben/skalieren/löschen, „aufpeppen“ (Themen, Symbole).
3. Bearbeiten-Fenster schwebend/verschiebbar; neuer Titel automatisch markiert.
4. Fenster zu groß → einklappbare Bereiche; Zoom-Knöpfe entfernt (Seite immer ganz sichtbar).
5. Emojis in Word als Kästchen → als Bilder exportiert.
6. Bilder sollen mit Text interagieren → Textumfluss; dann: nur durch Ziehen, ohne Auswahl/Fenster.
7. Linie bei mehrtägigen Feldern verschiebt zu viel → Umbau auf freie Rechtecke; später: Ränder einzeln, Lücken erlaubt.
8. Bild „klebt am Text“ → frei im ganzen Feld platzierbar.

**Vorlieben des Nutzers:** möglichst direkt per Maus (ziehen statt Menüs/Klicks), wenig Fenster, nichts soll die Seite verdecken,
Ergebnis muss in Word genauso aussehen und auf eine A4-Seite passen. Sprache der App: Deutsch.

## Geplant (besprochen am 05.10.2026) – Punkte 1–6 sind umgesetzt

Word-Export wurde vom Nutzer in echtem Word geprüft: sieht gut aus. Das Baukasten-Prinzip bleibt.

1. **Lokales Projekt**: Git-Repo, docx-Bibliothek lokal mitliefern (Export offline), README neu.
2. **Interessenlisten** (Probe: `probe-teilnehmerliste.html`, vom Nutzer abgenommen)
   - A4 hoch, eine Seite pro Angebot mit `#`, Farben aus dem Plan-Thema.
   - Kopf: „Interessenliste“, Plan-Titel/Gruppe, Titel + Symbol; Info-Kasten: Wann, Treffpunkt,
     **Ansprechpartner (immer!)**, Plätze; Text aus Vorlage; „Bitte mitbringen“; „Eintragen bis“.
   - Tabelle: Nr. | Name | Klasse | ✓ dabei (Personal), **große Zeilen** (Kinder schreiben selbst), Warteliste W1…;
     Ansprechpartner zusätzlich in der Fußzeile. Muss auf eine Seite passen (Zeilenhöhe passt sich an).
   - **Pro Feld** (Bearbeiten-Fenster, Bereich „📋 Interessenliste“, nur wenn `#` an): Treffpunkt, Plätze
     (leer = so viele Zeilen wie passen), Warteliste ja/nein, Eintragen bis, Bitte mitbringen, eigener Text;
     Titel/Symbol/Datum (aus Tagesspalte, mehrtägig „Mo 26.10. – Mi 28.10.“)/Uhrzeit/Ansprechpartner automatisch.
     Knopf „👁 Liste ansehen“ (Vorschau).
   - **Global** (Seiten-Einstellungen): Textvorlage mit Platzhaltern {Titel} {Datum} {Uhrzeit} {Ansprechpartner} …,
     Spaltenauswahl (Name/Klasse/Gruppe/✓ Personal), Standard-Warteliste.
   - **Erstellen**: Knopf „📋 Interessenlisten“ oben → eine .docx mit allen Listen (alle Wochen); Drucken im Browser;
     Häkchen beim Word-Export „Interessenlisten anhängen“ (Plan quer + Listen hoch in einer Datei).
3. **Bearbeiten direkt im Feld**: erstes Eintragen weiter über das Fenster; danach Text per Anklicken direkt im Feld
   bearbeiten + kleine **Kontextleiste** am Feld (Farbe, Symbol, Teilen, Löschen …).
4. **Druckansicht** für den Plan.
5. **Speichern in Dateien** – im Schulnetz löscht Chrome beim Schließen allen Browser-Speicher!
   - **Datenordner** per File System Access API (Chrome): bei jedem Start „📂 Datenordner öffnen“, danach automatisch speichern.
     Aufbau: `plaene/*.json`, `bilder/*`, `baukasten.json` (Archiv entsteht aus `plaene/`).
   - Notlösung: eine Arbeitsmappe `Ferienprogramm.json` (alles inkl. Bilder) öffnen/speichern; Warnung bei ungespeicherten Änderungen.
   - localStorage nur noch als Absturzschutz. Einzel-Export/Import (Plan, Baukasten) als JSON bleibt.
   - Ordnerzugriff vorab im Schulnetz testen: `test-datenordner.html`.
6. **Baukasten mit Reitern**: ⭐ Baukasten | 🗂 Archiv (alle Felder aus allen Plänen, durchsuchbar) | 🖼 Bilder-Bibliothek –
   alles per Drag & Drop ins Feld; aus dem Archiv per Klick in den Baukasten übernehmen.

Weitere Ideen (noch nicht entschieden): Kinderansicht/Tagesaushang, Elternbrief mit Abschnitt, Ausflugs-Zusatzangaben,
Schlechtwetter-Alternative, Ferien/Feiertage je Bundesland, mehrere Gruppen, Betreuer-Einteilung, Archiv,
Bild-Bibliothek, Woche duplizieren, Kopieren/Einfügen, Mehrfachauswahl, Wiederholen (Strg+Y), Rechtschreibprüfung,
QR-Code, PWA (offline installierbar).

## Offene Punkte / Ideen

- **Im Schulnetz testen**: `test-datenordner.html` und danach den echten Datenordner-Ablauf.

- Optional: „Text einpassen“ automatisch statt per Knopf.
- Optional: vertikale Ausrichtung pro Feld wählbar (Felder mit Bild sind derzeit oben ausgerichtet).
- Zwei frei platzierte Bilder im selben Feld stehen untereinander (nicht nebeneinander auf gleicher Höhe).
- Tage löschen/verschieben nur möglich, wenn kein Feld über die Tagesgrenze ragt.
