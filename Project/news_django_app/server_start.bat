@echo off
call venv\Scripts\activate.bat
start http://localhost:8080/
waitress-serve news_django_app.wsgi:application
pause