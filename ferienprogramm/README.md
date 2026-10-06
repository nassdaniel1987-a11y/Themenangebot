# Ferienprogramm-Planer

Ferienprogramm-Pläne (A4 quer, Wochentage als Spalten) im Browser zusammenbauen – und als **Word-Datei**
oder direkt **gedruckt** ausgeben. Dazu automatisch **Interessenlisten** zum Eintragen für die Kinder.

## Starten

`index.html` per Doppelklick in **Chrome** (oder Edge) öffnen. Keine Installation, kein Internet nötig
(die Word-Bibliothek liegt in `lib/docx.js` – der Ordner `lib` muss neben `index.html` liegen).

### Im Schulnetz: `Ferienprogramm starten.bat`

Die Schul-Startdatei `O:\Google Chrome.bat` kopiert Chrome bei jedem Start neu (`robocopy /MIR`) und löscht dabei
das Chrome-Profil – deshalb vergisst Chrome den Datenordner. `Ferienprogramm starten.bat` (liegt neben `index.html`)
startet dieselbe Chrome-Kopie, aber mit eigenem Profil im Ordner `Chromeprofil` daneben. Der Planer öffnet sich als
eigenes Fenster; der Datenordner wird gemerkt („🔌 Verbinden“ statt jedes Mal neu suchen).
Den ganzen Ordner dafür auf ein Laufwerk legen, das erhalten bleibt (z. B. Home-Laufwerk).

## Speichern – wichtig im Schulnetz

Der Browser vergisst im Schulnetz beim Schließen alles. Deshalb wird in **Dateien** gespeichert:

- **📂 Datenordner** (empfohlen): Beim Start einen Ordner wählen (Netzlaufwerk, Home-Ordner, USB-Stick).
  Danach wird alles automatisch gespeichert:
  ```
  Ferienprogramm-Daten/
    plaene/      ein .json pro Plan
    bilder/      gemerkte Bilder (man kann auch selbst Bilder hineinkopieren)
    baukasten.json
  ```
- **📄 Arbeitsmappe** (Notlösung): alles in *einer* Datei `Ferienprogramm.json`.
  Beim Start öffnen, am Ende **💾 Speichern** (landet im Download-Ordner – die Datei gut aufheben).

Über **📂 Pläne** oben: Pläne öffnen, neu anlegen, kopieren, Speicherort wählen, Arbeitsmappe herunterladen.
Strg+S speichert.

## Bedienung in Kürze

- **Baukasten** links: Bausteine in leere Felder ziehen (oder Doppelklick).
  Reiter **🗂 Archiv** = alle Angebote aus früheren Plänen, **🖼 Bilder** = gemerkte Bilder (auf ein Feld ziehen).
- **＋ Feld** in einem leeren Bereich: neues Angebot – das Fenster öffnet sich zum Eintragen.
- **Feld anklicken**: kleine Leiste am Feld (Farbe, Symbol, Schrift, #, Text hinzufügen, Teilen, Kopie, Merken, ⚙, Löschen).
- **Text im ausgewählten Feld anklicken** (oder Doppelklick): direkt im Feld schreiben. Enter/Esc = fertig.
- **Ränder ziehen** = Größe ändern, Feld auf ein anderes ziehen = tauschen.
- **🎨 Seite & Design**: Thema, Überschrift, Hinweise unten, Vorlage für die Interessenlisten.
- **📋 Interessenlisten**: für jedes Angebot mit **#** eine A4-Seite zum Eintragen (Treffpunkt, Plätze,
  Warteliste, „Bitte mitbringen“ … im Bereich „📋 Interessenliste“ des Felds).
- **🖨 Drucken**: Druckansicht aller Wochen, auf Wunsch mit Interessenlisten.
- **⬇ Word-Datei**: Plan als .docx (eine Seite pro Woche), auf Wunsch mit angehängten Interessenlisten.

Rückgängig: Strg+Z · Entf löscht das ausgewählte Feld · Esc hebt die Auswahl auf.
