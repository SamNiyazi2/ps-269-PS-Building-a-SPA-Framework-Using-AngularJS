
set scriptKey_20210123_0922=%~1

set p_8080=3166

call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%scriptKey_20210123_0922%*"
 
call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd %p_8080%

cd %~dp0
 
start npm run run-dev
 


