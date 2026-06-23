@echo off
cd /d "C:\Users\Admin\Documents\New project\food-picker"
set PATH=C:\Program Files\nodejs;%PATH%
echo ?????????...
start http://localhost:3001/food-picker/
node server/index.js
pause
