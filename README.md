<p align="center">
    <a href="#" rel="noopener">
        <img width=40% height=40%x src="https://i.imgur.com/NhBBsZ9.png" alt="Logo Apology">
    </a>
</p>
<div align="center">

# ¿Por qué usar un sistema de control de versiones como Git?
nos ayuda a guardar el historial de cambios y crecimiento de los archivos de nuestro proyecto.
</div>

<div align="center">

![GitHub last commit](https://img.shields.io/github/last-commit/jdBritto/Directory?color=blue)
![jdBritto](https://img.shields.io/badge/jdBritto-welcome-brightgreen)
![GitHub pull request check state](https://img.shields.io/github/status/s/pulls/jdBritto/Directory/1)
![GitHub repo size](https://img.shields.io/github/repo-size/jdBritto/Directory?color=greem&label=peso%20repo&logo=jeff&logoColor=red&style=plastic)
![GitHub](https://img.shields.io/github/license/jdBritto/Directory)


</div>

## 📝 Table of Contents
- [Comandos básicos](#basic-comand)
- [Analisis / verificacion](#analytic)
- [Backup volver en el tiempo](#restore)
- [Ramas](#ramas)
- [Reiniciar](#reset)
<!--[Usage](#usage)
- [Technology Stack](#tech-stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments) -->

# <p align="center">🧐Comandos básicos de git <a name ="basic-comand"></a></p>

**inicializa un repositorio de GIT en la carpeta donde se ejecute el comando.**
````
git init
````
**Añade los archivos especificados al área de preparación (staging).**
````
git add
````
**Confirma los archivos que se encuentran en el área de preparación y los agrega al repositorio. con un mensaje**
````
git commit -m “commit description”
````
**Añade al staging area y hace un commit mediante un solo comando. (No funciona con archivos nuevos)**
````
git commit -am “commit description”
````
**Ofrece una descripción del estado de los archivos (untracked, ready to commit, nothing to commit).**
````
git status
````
**Remueve los archivos del index.**
````
git rm (. -r, filename) (–cached)
````
**Configura un email.**
````
git config --global user.email tu@email.com
````
**Configura un nombre.**
````
git config --global user.name <Nombre como se verá en los commits>
````
**Lista las configuraciones.**
````
git config --list
````
**Guarda los datos del usuario remoto para subir al repositorio en la nube**
````
git config --global credential.helper store
````

## <p align="center">⌛Analizar cambios en los archivos de un proyecto Git <a name="analytic"></a></p>
**lista de manera descendente los commits realizados.**
````
git log
````
**además de listar los commits, muestra la cantidad de bytes añadidos y eliminados en cada uno de los archivos modificados.**
````
git log --stat
````
**muestra de manera comprimida toda la historia del repositorio de manera gráfica y embellecida.**
````
git log --all --graph --decorate --oneline
````
**permite ver la historia de los cambios en un archivo, recientemente realizados.**
````
git show filename
````
**compara diferencias entre en cambios confirmados.**
````
git diff <commit1> <commit2>
````

## <p align="center">📱Volver en el tiempo con branches y checkout <a name="restore"></a></p>
**regresa al commit especificado, eliminando todos los cambios que se hicieron después de ese commit.**
````
git reset <commit> --soft/hard
````
**permite regresar al estado en el cual se realizó un commit o branch especificado, pero no elimina lo que está en el staging area.**
````
git checkout <commit/branch> <filename>
````
**deshacer cambios en un archivo en estado modified (que ni fue agregado a staging)**
````
git checkout – <filePath>
````
## <p align="center">👀git rm y git reset</p><a name="reset"></a>
**Este comando nos ayuda a eliminar archivos de Git sin eliminar su historial del sistema de versiones. Esto quiere decir que si necesitamos recuperar el archivo solo debemos “viajar en el tiempo” y recuperar el último commit antes de borrar el archivo en cuestión.**
`- git rm no puede usarse por sí solo, así nomás. Se debe utilizar uno de los flags para indicar a Git cómo eliminar los archivos que ya no se necesitan en la última versión del proyecto:`
````
git rm
````
**elimina los archivos del área de Staging y del próximo commit, pero los mantiene en nuestro disco duro.**
````
git rm --cached <archivo/s>
````
**elimina los archivos de Git y del disco duro. Git siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos aplicar comandos más avanzados).**
````
git rm --force <archivo/s>
````
**Con git reset volvemos al pasado sin la posibilidad de volver al futuro. Borramos la historia y la debemos sobreescribir.**
````
git reset
````
**Vuelve el branch al estado del commit especificado, manteniendo los archivos en el directorio de trabajo y lo que haya en staging considerando todo como nuevos cambios. Así podemos aplicar las últimas actualizaciones a un nuevo commit.**
```
git reset --soft
```
**Borra absolutamente todo. Toda la información de los commits y del área de staging se borra del historial.**
```
git reset --hard
```
**No borra los archivos ni sus modificaciones, solo los saca del área de staging, de forma que los últimos cambios de estos archivos no se envíen al último commit. Si se cambia de opinión se los puede incluir nuevamente con git add.**
```
git reset HEAD
```

## <p align="center">:octocat: Ramas o Branches en git <a name="ramas"></a></p>
*Al crear una nueva rama se copia el último commit en esta nueva rama. Todos los cambios hechos en esta rama no se reflejarán en la rama master hasta que hagamos un merge.*
**crea una nueva rama.**
```
git branch <new branch>
```
**se mueve a la rama especificada.**
```
git checkout <branch name> 
```
**fusiona la rama actual con la rama especificada y produce un nuevo commit de esta fusión.**
```
git merge <branch name>
```
**lista las ramas generadas.**
```
git branch
```
## Use costume all git consol bash
