# <p align="center"> :alien: En este ejemplo, aprenderemos cómo configurar nuestras llaves SSH en local.</p>

## <p align="center"> Cómo generar tus llaves SSH </p>

- 1. Generar tus llaves SSH**
Recuerda que es muy buena idea proteger tu llave privada con una contraseña.

ssh-keygen -t rsa -b 4096 -C "tu@email.com"
- 2. Terminar de configurar nuestro sistema.
En Windows y Linux:

Encender el “servidor” de llaves SSH de tu computadora:
eval $(ssh-agent -s)
Añadir tu llave SSH a este “servidor”:
ssh-add ruta-donde-guardaste-tu-llave-privada
En Mac:

Encender el “servidor” de llaves SSH de tu computadora:
eval "$(ssh-agent -s)"
Si usas una versión de OSX superior a Mac Sierra (v10.12), debes crear o modificar un archivo “config” en la carpeta de tu usuario con el siguiente contenido (ten cuidado con las mayúsculas):
Host *

AddKeysToAgent yes
UseKeychain yes
IdentityFile ruta-donde-guardaste-tu-llave-privada
Añadir tu llave SSH al “servidor” de llaves SSH de tu computadora (en caso de error puedes ejecutar este mismo comando pero sin el argumento -K):
ssh-add -K ruta-donde-guardaste-tu-llave-privada

# Generar una nueva llave SSH: (Cualquier sistema operativo)

- ssh-keygen -t rsa -b 4096 -C "youremail@example.com"

# Comprobar proceso y agregarlo (Windows)

- eval $(ssh-agent - s)
- ssh-add ~/.ssh/id_rsa
# Comprobar proceso y agregarlo (Mac)

- eval "$(ssh-agent -s)"
- ¿Usas macOS Sierra 10.12.2 o superior?
## Haz lo siguiente:

- cd ~/.ssh
## Crea un archivo config…
- Con Vim vim config
- Con VSCode code config
* Pega la siguiente configuración en el archivo…
* Host *
*  AddKeysToAgent yes
*  UseKeychain yes
*  IdentityFile ~/.ssh/id_rsa
# Agrega tu llave

* ssh-add -K ~/.ssh/id_rsa
🥳

# Conectar repositorio Remoto
La creación de las SSH es necesario solo una vez por cada computadora. Aquí conocerás cómo conectar a GitHub usando SSH.

Luego de crear nuestras llaves SSH podemos entregarle la llave pública a GitHub para comunicarnos de forma segura y sin necesidad de escribir nuestro usuario y contraseña todo el tiempo.

Para esto debes entrar a la Configuración de Llaves SSH en GitHub, crear una nueva llave con el nombre que le quieras dar y el contenido de la llave pública de tu computadora.

Ahora podemos actualizar la URL que guardamos en nuestro repositorio remoto, solo que, en vez de guardar la URL con HTTPS, vamos a usar la URL con SSH:

- ssh
- git remote set-url origin url-ssh-del-repositorio-en-github
# Comandos para copiar la llave SSH:
 -Mac:

- pbcopy < ~/.ssh/id_rsa.pub
- Windows (Git Bash):
- clip < ~/.ssh/id_rsa.pub
# Linux (Ubuntu):
- cat ~/.ssh/id_rsa.pub
