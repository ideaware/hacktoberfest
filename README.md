# Hacktoberfest 2019 - Ideaware

## Bienvenidos

Este es el `Landing Page` para el evento de Hacktoberfest organizado por [Ideaware](https://ideaware.co) con el patrocinio de [DigitalOcean](https://www.digitalocean.com) y [Dev](https://dev.to)

## ¿Qué es Hacktoberfest?

Es un evento organizado por Digital Ocean y Dev con diferentes aliados alrededor del mundo para que todos conozcamos y aportemos al código abierto. Este año Ideaware se alía con estos grandes para traerles Hacktoberfest Barranquilla, la idea detrás de este evento es difundir la importancia del Open Source en el mundo del software. La dinámica es simple: sube mínimo cuatro pull-request y podrás ganar una camisa oficial del evento enviada directamente por los organizadores. ¿Quieres participar?

## Como contribuir a este proyecto

1. Crea un fork del proyecto
2. Clona el repo a tu máquina ```> git clone git@github.com:<TuNombreDeUsuario>/hacktoberfest.git ```
3. Muévete al directorio del repo ```> cd hacktoberfest ```
4. Agrega el remote del repo original como upstream:
    Para usuarios Linux y MAC: ```> git remote add upstream git@github.com:ideaware/hacktoberfest.git```
    Para windows: ```> git remote add upstream https://github.com/ideaware/hacktoberfest.git```
5. Actualiza si hubo algún cambio ```> git fetch upstream master```
6. Trae los cambios de la rama master en upstream a tu local ```> git pull upstream master```
7. Crea una nueva rama con tu contribución ```> git checkout -b mi-nueva-contribucion```
8. Haz tus cambios en el editor de texto de tu preferencia
9. Verifica los archivos cambiados ```> git status```
10. Verifica los cambios por archivos ```> git diff```
11. Agrega los cambios para ser **comitieados**  ```> git add .```
12. Sube al repo original ```> git push origin mi-nueva-contribucion```
13. En github crea un PR (pull request) hacia el repo original, para ello haz click en ``New pull request``, agrega un título y una descripción a tu PR, haz click en ``Create pull request`` y listo! Tu PR ya ha sido creado

## Protips

Al momento de realizar un PR siempre es bueno proveerle información útil a los Administradores del repositorio, esto lo puedes hacer en la descripción de tu PR como por ejemplo, los cambios que realizas y por qué o el ``issue`` que solucionaste; de esta forma los Administradores podrán evaluar tu PR con mayor facilidad y rapidez.

Además GitHub y Git poseen una serie de ``keywords`` que también son muy útiles en los PR, ya que permiten cerrar (close #1) o hacer referencia (#1) a un issue, para mayor información sobre como cerrar issues puedes visitar estás páginas [Cerrar issues con palabras claves](https://help.github.com/en/articles/closing-issues-using-keywords) y [aquí](https://github.blog/2013-01-22-closing-issues-via-commit-messages/).