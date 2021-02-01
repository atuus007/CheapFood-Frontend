@echo off
cls
echo "1 - Frissitsen (npm-et)"
echo "2 - Inditsa a projektet"
set /P N=Adja meg a számot! 

:switch-case-example
  goto :switch-case-N-%N% 2>nul || (
    echo "Rossz szam!"
pause
  )
  goto :switch-case-end

:switch-case-N-1
	echo "Installing updates..."
	npm install npm@latest -g

:switch-case-N-2
	echo "Running Server...."
	npm start
	goto :switch-case-end     

:switch-case-end
   	echo "program vege"
pause