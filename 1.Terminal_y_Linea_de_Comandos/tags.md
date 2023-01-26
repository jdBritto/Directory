<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/FxL5qM0.jpg" alt="Bot logo"></a>
</p>

<h3 align="center">Project Title</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Platform](https://img.shields.io/badge/platform-reddit-orange.svg)](https://www.reddit.com/user/Wordbook_Bot)
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 🤖 Few lines describing what your bot does.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Demo / Working](#demo)
- [How it works](#working)
- [Usage](#usage)
- [Getting Started](#getting_started)
- [Deploying your own bot](#deployment)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about" ></a>


## 🎥 Tags / Versiones <a name = "demo"></a>
<div align="center">

![Working](https://media.giphy.com/media/20NLMBm0BkUOwNljwv/giphy.gif)

</div>


## 💭 Cómo funciona <a name = "working"></a>

Los tags o etiquetas nos permiten asignar versiones a los commits con cambios más importantes o significativos de nuestro proyecto.

## 🎈Comandos para trabajar con etiquetas:
**Crear un nuevo tag y asignarlo a un commit:**
>git tag -a nombre-del-tag id-del-commit.

**Borrar un tag en el repositorio local:**
>git tag -d nombre-del-tag.

**Listar los tags de nuestro repositorio local:**
>git tag o git show-ref --tags.

**Publicar un tag en el repositorio remoto:**
>git push origin --tags.

**Borrar un tag del repositorio remoto:**
>git tag -d nombre-del-tag y git push origin :refs/tags/nombre-del-tag.

# Para generar un comando complejo con varios comandos de una forma optimizada, utilizamos conjuntos de sentencias conocidas como alias.

## 🎈Cómo aregar un alias solo para git
**Para un proyecto:**
> git config alias.arbolito "log --all --graph --decorate --oneline"

**Global:**
> git config --global alias.arbolito "log --all --graph --decorate --oneline"

**Para correrlo:**
> it arbolito

````
Ejecutan este comando en la terminal y queda guardado en los alias pero de git. con esto se puede ejecutar cada que se escribe git superlog

git config --global alias.superlog "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
````