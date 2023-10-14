@ECHO OFF
echo Minecraft Cape Renderer by Antonq
echo Starting setup...
del start.bat
echo node index.js > start.bat
npm i && del setup.bat && cls && echo Finished!
pause