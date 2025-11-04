@echo off
echo ========================================
echo   Food Recipe Manager - Startup Script
echo ========================================
echo.
echo Starting Backend Server...
echo.
start cmd /k "cd /d d:\MERN\Foodlog\backend && echo Backend Server Starting... && npm start"
timeout /t 3 /nobreak >nul
echo.
echo Starting Frontend Application...
echo.
start cmd /k "cd /d d:\MERN\Foodlog\frontend && echo Frontend Application Starting... && npm start"
echo.
echo ========================================
echo Both servers are starting!
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo ========================================
echo.
echo Press any key to close this window...
pause >nul
