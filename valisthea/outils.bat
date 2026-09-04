@echo off
cd /d "%~dp0"

echo Lancement du serveur local (fenetre separee)...
start "Valisthea - serveur local" cmd /k node claude\dev-server.js 8080

echo Ouverture de la page des outils...
timeout /t 2 /nobreak >nul
start http://localhost:8080/outils/

echo.
echo Termine. Le serveur tourne dans son autre fenetre : ferme-la (ou Ctrl+C) pour l'arreter.
pause
