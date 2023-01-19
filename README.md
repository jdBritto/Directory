# ¿Por qué usar un sistema de control de versiones como Git?
nos ayuda a guardar el historial de cambios y crecimiento de los archivos de nuestro proyecto.

# Comandos básicos de git 

_ git init: inicializa un repositorio de GIT en la carpeta donde se ejecute el comando.
_ git add: añade los archivos especificados al área de preparación (staging).
_ git commit -m “commit description”: confirma los archivos que se encuentran en el área de preparación y los agrega al repositorio. con un mensaje
_ git commit -am “commit description”: añade al staging area y hace un commit mediante un solo comando. (No funciona con archivos nuevos)
_ git status: ofrece una descripción del estado de los archivos (untracked, ready to commit, nothing to commit).
_ git rm (. -r, filename) (–cached): remueve los archivos del index.
_ git config --global user.email tu@email.com: configura un email.
_ git config --global user.name <Nombre como se verá en los commits>: configura un nombre.
_ git config --list: lista las configuraciones.
## Analizar cambios en los archivos de un proyecto Git
_ git log: lista de manera descendente los commits realizados.
_ git log --stat: además de listar los commits, muestra la cantidad de bytes añadidos y eliminados en cada uno de los archivos modificados.
_ git log --all --graph --decorate --oneline: muestra de manera comprimida toda la historia del repositorio de manera gráfica y embellecida.
_ git show filename: permite ver la historia de los cambios en un archivo, recientemente realizados.
_ git diff <commit1> <commit2>: compara diferencias entre en cambios confirmados.

## Volver en el tiempo con branches y checkout

_ git reset <commit> --soft/hard: regresa al commit especificado, eliminando todos los cambios que se hicieron después de ese commit.
_ git checkout <commit/branch> <filename>: permite regresar al estado en el cual se realizó un commit o branch especificado, pero no elimina lo que está en el staging area.
_ git checkout – <filePath>: deshacer cambios en un archivo en estado modified (que ni fue agregado a staging)
_ git rm y git reset
_ git rm: Este comando nos ayuda a eliminar archivos de Git sin eliminar su historial del sistema de versiones. Esto quiere decir que si necesitamos recuperar el archivo solo debemos “viajar en el tiempo” y recuperar el último commit antes de borrar el archivo en cuestión.
_ git rm no puede usarse por sí solo, así nomás. Se debe utilizar uno de los flags para indicar a Git cómo eliminar los archivos que ya no se necesitan en la última versión del proyecto:

_ git rm --cached <archivo/s>: elimina los archivos del área de Staging y del próximo commit, pero los mantiene en nuestro disco duro.
_ git rm --force <archivo/s>: elimina los archivos de Git y del disco duro. Git siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos aplicar comandos más avanzados).
_ git reset

*Con git reset volvemos al pasado sin la posibilidad de volver al futuro. Borramos la historia y la debemos sobreescribir.*

_ git reset --soft: Vuelve el branch al estado del commit especificado, manteniendo los archivos en el directorio de trabajo y lo que haya en staging considerando todo como nuevos cambios. Así podemos aplicar las últimas actualizaciones a un nuevo commit.
_ git reset --hard: Borra absolutamente todo. Toda la información de los commits y del área de staging se borra del historial.
_ git reset HEAD: No borra los archivos ni sus modificaciones, solo los saca del área de staging, de forma que los últimos cambios de estos archivos no se envíen al último commit. Si se cambia de opinión se los puede incluir nuevamente con git add.

## Ramas o Branches en git
*Al crear una nueva rama se copia el último commit en esta nueva rama. Todos los cambios hechos en esta rama no se reflejarán en la rama master hasta que hagamos un merge.*

_ git branch <new branch>: crea una nueva rama.
_ git checkout <branch name>: se mueve a la rama especificada.
_ git merge <branch name>: fusiona la rama actual con la rama especificada y produce un nuevo commit de esta fusión.
_ git branch: lista las ramas generadas.

## Use costume all git consol bash