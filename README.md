# Aplicación de notas
## Página Web
- Para ejecutar el proyecto se necesita:
- Git: https://git-scm.com/downloads para clonar el proyecto usando ```git clone ```
- NodeJS: https://nodejs.org/en/download
- Y npm, que puede ser instalado desde una línea de comandos ```npm install -g npm``` una vez que Node haya sido instalado
- Además ejecutar ```npm install next react react-dom```
- Dentro de la carpeta /notesapp ejecutar ```npm install```
- Una vez instaladas estas dependencias, dentro de la carpeta /notesapp ejecutar el siguiente comando ```npm run dev```
## Base de datos
- Para correr la base de datos es necesario tener python 3 instalado, https://www.python.org/downloads/.
- Dentro de la carpeta /notesapp del proyecto es necesario crear un entorno virtual ```python -m venv venv``` | ```py -m venv venv```
- Una vez creado el entorno virtual ejecutar el comando ```.\venv\Scripts\activate``` con permisos de administrador
- Dentro del entorno virtual ejecutar: ```pip install -r requirements.txt```
- Esto instalará todas las dependencias necesarias, finalmente ejecutar uno de los tres comandos: 
  ```python -m uvicorn main:app --reload``` | ```uvicorn main:app --reload``` |  ```py -m uvicorn main:app --reload```
  
