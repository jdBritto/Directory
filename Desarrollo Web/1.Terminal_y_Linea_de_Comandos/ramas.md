<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="https://static.platzi.com/media/platzi-isotipo@2x.png" alt="Project logo"></a>
 <img width=100px height=100px src="https://static.platzi.com/media/logotipo-platzi.png" alt="Project logo"></a>
</p>

<h3 align="center">Curso Profesional de Git y GitHub</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/jdBritto/Directory/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/jdBritto/Directory/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/jdBritto/Directory/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Comandos](#comand_basic)
- [Usage](#usage)

# 🧐 Manejo de ramas

## 🏁 Getting Started <a name = "getting_started"></a>


``Si no te funciona el comando gitk es posible no lo tengas instalado por defecto.
Para instalar gitk debemos ejecutar los siguientes comandos:``
````
sudo apt-get update
sudo apt-get install gitk
````
>Repasa: [¿Qué es Git?](https://platzi.com/clases/1557-git-github/20215-que-es-git/)

Las ramas nos permiten hacer cambios a nuestros archivos sin modificar la versión principal ``(master)``. Puedes trabajar con ramas que nunca envías a GitHub, así como pueden haber ramas importantes en GitHub que nunca usas en el repositorio local. Lo crucial es que aprendas a manejarlas para trabajar profesionalmente.

Si, estando en otra rama, modificamos los archivos y hacemos commit, tanto el historial ``(git log)`` como los archivos serán afectados. La ventaja que tiene usar ramas es que las modificaciones solo afectarán a esa rama en particular. Si luego de ``“guardar”`` los archivos ``(usando commit)`` nos movemos a otra rama ``(git checkout otraRama)`` veremos como las modificaciones de la rama pasada no aparecen en la otraRama.

# Comandos para manejo de ramas en GitHub <a name = "comand_basic"></a>
- **Crear una rama:**
````
git branch branchName
````
- **Movernos a otra rama:**
````
git checkout branchName
````
- **Crear una rama en el repositorio local:**
````
git branch nombre-de-la-rama o git checkout -b nombre-de-la-rama.
````

- **Publicar una rama local al repositorio remoto:**
````
git push origin nombre-de-la-rama.
````

Recuerda que podemos ver gráficamente nuestro entorno y flujo de trabajo local con Git utilizando el comando **gitk**.
Gitk fue el primer visor gráfico que se desarrolló para ver de manera gráfica el historial de un repositorio de Git.
----

>Repaso: [Qué es branch.](https://platzi.com/clases/1557-git-github/19947-que-es-un-branch-rama-y-como-funciona-un-merge-en-/)

