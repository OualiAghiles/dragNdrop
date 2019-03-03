### Les outils conseiller
##### Navigateurs
>
>    <a href="https://www.mozilla.org/fr/firefox/new/" target="_blank">Firefox</a> lien pour installer Firefox
>
>    <a href="https://www.google.com/chrome/" target="_blank">google Chrome</a> lien pour installer Google Chrome
>
#### Editeur de texte
Qu'est ce qu'un editeur de text ?
Comment son nom l'indique l'editeur de text permet de modifier et de gerer des fichiers text
Dans notre cas c'est bien du text que nous allons traité, la specificité de ces editeurs est la coloration sytaxique.
>
>    <a href="https://code.visualstudio.com/" target="_blank">vscode</a>
>
>    <a href="https://atom.io/" target="_blank">Atom</a>
> 

#### Comment s'ecrit le HTML

le HTML est ce qu'on appel un langage balisé, a titre d'exemple 
un paragraphe s'écrit sur la form suivante: `<p>ici le contenu du paragraphe</p>`.
une balise est constituer de deux partie une ouvrante `<p>` et une partie fermante `</p>`.
l'interet de editeurs présenté si dessus est qu'il donne des couleur au differente balise ce qui a pour bute de faciliter la lecture.

---
## Exemple de la structure de base d'une page HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- contenu non visible sur la page -->
    <!-- Encodage de la page -->
    <meta charset ="utf-8">
    <!-- titre de la page -->
    <title>Titre de la page</title>
    <!-- lien vers la feuille de style -->
    <link rel="stylesheet" href="main.css" >
  </head>
  <!-- contenu visible sur la page -->
  <body>
    <!-- contenu de  la page -->

    <!--  lien vers le fichier JavaScript ce met a la fin de la page pour eviter de bloquer de chargement de cette derniere et amoindrir les erreurs  -->
    <script src="main.js" charset="utf-8"></script>
  </body>
</html>
```

---
## Regardons plus en details cette structure de base 
#### Balise DOCTYPE
```html
<!DOCTYPE html>
```
Le Doctype s’insère en tout début de page. Il sert à définir le type du document afin qu’il soit correctement interprété par le navigateur. Vous pouvez placez sa balise à la première ligne de votre code HTML si vous le souhaitez. Le Doctype doit toujours se situer avant la balise `<HTML>`.
la balise doctype fait partie des rare balise autofermante ces balise n'ont pas la possibilité d'avoir du comptenu en elle.

---
#### Balise HTML
```html
<!DOCTYPE html> 
<html>

</html>

```
- La balise `<html>` indique au navigateur qu’il s’agit d’un document HTML.

- La balise `<html>` représente la racine d’un document HTML.

- La balise `<html>` est le conteneur pour tous les autres éléments HTML – sauf pour l’élément <!doctype>.

- La balise `<html>` est pris en charge par tous les principaux navigateurs.

---
#### Balise HEAD
```html
<!DOCTYPE html> 
<html>
  
  <head>
  
  </head>
  
</html>
```

La balise `<head>` contient tous les éléments de l’en-tête de votre document.

L’en-tête de votre document, compris entre les balises `<head>`, doit obligatoirement contenir un titre. Il peut également contenir des scripts, des styles, des balises meta et bien plus encore 

La balise head a des balise specifique que l'on peut ajouter a l'interieurs 
Voici quelques balises : 

>    `<title></title>` *Ici Le titre de la page*
>
>    `<style></style>` *Ici le style de la page*
>
>    `<link>` *cette balise est auto fermante elle comprend des attribues*
>
>     Exemple: `<link rel="stylesheet" type="text/css" href="MonCss.css" /> `
>
>    `<meta>` *cette balise est auto fermante elle comprend des attribues* 
>
>     Exemple: `<meta charset='utf-8' /> `
>
>    `<script></script>` *Ici le script javascript de la page*
---
#### Balise BODY
```html
<!DOCTYPE html> 
<html>
  
  <head>
    <title>Titre de la page</title>
  </head>
  <body>
    Contenu de la page
  </body>
</html>
```
La balise `<body>` définit le corps du document.

La balise `<body>` définit la partie principale du document, qui contient les informations destinées à être affichées.

L’élément `<body>` contient tous les contenus d’un document HTML5, comme du texte, des hyperliens, des images, tableaux, listes, etc …

En savoir plus sur L’en-tête et le corps d’une page web en suivant le <a href="https://www.w3schools.com/tags/default.asp" target="_blac">lien</a> .

---
#### Balise COMMENTAIRE

La syntaxe `<!-- ... -->` permet de mettre en commentaire des blocs de code. Les zones commentées ne seront pas prises en compte lors de l'affichage des éléments dans le navigateur, elles seront tout simplement ignorées.
Il faut faire attention tout de même à ne pas croiser entre elles les balises de mise en commentaire. 

```html
<!-- ceci est un commentaire -->
```

---
#### Les Attributs
Les éléments peuvent aussi avoir des attributs, qui comme suit:

```html
<p class="maClass">Mon paragraphe</p>
```

Le mot clé `class` est un attribut qui permet d'ajouter la class `maClass` au paragraphe `<p>`

Dans le prochain chapitre nous verons plus en détails tous ces elements et ces attributs

---
#### Chapitres
> - [Chapitre 1 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 2 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 3 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 4 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 5 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 6 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 7 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 8 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 9 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 10 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 11 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 12 :  mise en place de notre premiere page](chapter-1.html)
> - [Chapitre 13 :  mise en place de notre premiere page](chapter-1.html)
