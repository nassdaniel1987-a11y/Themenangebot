@echo off
setlocal
rem Startet den Ferienprogramm-Planer in Chrome mit einem EIGENEN, dauerhaften Profil.
rem Grund: "O:\Google Chrome.bat" spiegelt Chrome bei jedem Start mit robocopy /MIR neu
rem nach %USERPROFILE%\GoogleChromePortable - dabei wird das Profil (und damit der
rem gemerkte Datenordner) jedes Mal geloescht. Unser Profil liegt deshalb hier neben
rem Ferienprogramm.html im Ordner "Chromeprofil" und bleibt erhalten.

set "HIER=%~dp0"
set "PROFIL=%HIER%Chromeprofil"
set "CACHE=%LOCALAPPDATA%\FerienplanerCache"
set "PORTABLE=%USERPROFILE%\GoogleChromePortable"

rem Chrome noch nicht kopiert (z. B. nach Neuanmeldung)? Dann wie die Schul-Datei einmal kopieren.
if not exist "%PORTABLE%\App" (
  echo Chrome wird aus O:\ kopiert - das kann ein paar Minuten dauern ...
  robocopy "O:\GoogleChromePortable10" "%PORTABLE%" /MIR /FFT /NFL /NDL /NJH /NJS /NC /NS /NP >nul
  attrib -R "%PORTABLE%" /S /D /L
  attrib -R "%PORTABLE%\*" /S /L
)

rem chrome.exe suchen: erst in der lokalen Kopie, sonst direkt auf O:\
set "CHROME="
if exist "%PORTABLE%\App" for /r "%PORTABLE%\App" %%f in (chrome.exe) do if exist "%%f" set "CHROME=%%f"
if not defined CHROME if exist "O:\GoogleChromePortable10\App" for /r "O:\GoogleChromePortable10\App" %%f in (chrome.exe) do if exist "%%f" set "CHROME=%%f"
if not defined CHROME (
  echo chrome.exe wurde nicht gefunden.
  echo Bitte einmal "O:\Google Chrome.bat" starten, Chrome wieder schliessen und es erneut versuchen.
  pause
  exit /b 1
)

rem Die Seite wird als normaler Dateipfad uebergeben (wie beim Doppelklick) - das klappt
rem auch mit Umlauten und Punkten im Pfad. --app="file:///..." wurde im Schulnetz ignoriert.
set "SEITE=%HIER%Ferienprogramm.html"
if not exist "%SEITE%" (
  echo Ferienprogramm.html liegt nicht neben dieser Startdatei:
  echo %HIER%
  pause
  exit /b 1
)

rem Kleines Protokoll zur Fehlersuche (start-log.txt neben dieser Datei)
> "%HIER%start-log.txt" echo Chrome: %CHROME%
>> "%HIER%start-log.txt" echo Profil: %PROFIL%
>> "%HIER%start-log.txt" echo Seite:  %SEITE%

start "" "%CHROME%" --user-data-dir="%PROFIL%" --disk-cache-dir="%CACHE%" --no-first-run --no-default-browser-check --new-window "%SEITE%"
