@echo off
cd /d "%~dp0.."

echo Regeneration du manifest...
node eana\scripts\build-manifest.js
if errorlevel 1 (
  echo.
  echo ERREUR lors de la regeneration du manifest. Rien n'a ete envoye.
  pause
  exit /b 1
)

echo.
echo Termine. Manifest regenere (rien envoye sur GitHub, a faire via GitHub Desktop).
pause
