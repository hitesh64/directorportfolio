@echo off
echo Pushing portfolio to GitHub repository...
"C:\Users\Hitesh ingale\AppData\Local\Programs\Git\cmd\git.exe" status
"C:\Users\Hitesh ingale\AppData\Local\Programs\Git\cmd\git.exe" remote set-url origin https://github.com/hitesh64/directorportfolio.git
"C:\Users\Hitesh ingale\AppData\Local\Programs\Git\cmd\git.exe" push -u origin main --force
