# CSS
Les CSS, Cascading Style Sheets (feuilles de styles en cascade), servent à mettre en forme des documents web, type page HTML ou XML. Par l'intermédiaire de propriétés d'apparence (couleurs, bordures, polices, etc.) et de placement (largeur, hauteur, côte à côte, dessus-dessous, etc.), le rendu d'une page web peut être intégralement modifié sans aucun code supplémentaire dans la page web. Les feuilles de styles ont d'ailleurs pour objectif principal de dissocier le contenu de la page de son apparence visuelle. Ceci permet :

> -    de ne pas répéter dans chaque page le même code de mise en forme
> -    d'utiliser des styles génériques, avec des noms explicites (par exemple un style encadré pour du texte ou des images)
> -    de pouvoir changer l'apparence d'un site web complet en ne modifiant qu'un seul fichier
> -    de faciliter la lecture du code de la page

La puissance et de l'intérêt des CSS peut être démontrée en modifiant radicalement l'apparence d'une page, sans changer son code HTML d'un iota... Bref les CSS permettent de gagner en productivité et en maintenabilité des sites web, tout en offrant des possibilités graphiques incontestables. Lorsqu'on se lance dans la conception de pages web, il faut apprendre les CSS !


## Qu'est-ce qu'une feuille de style ?

Les feuilles de styles en cascade (CSS, pour Cascading Style Sheets) décrivent l'apparence des divers éléments d'une page web par le biais de couples propriété / valeur. Étant distinctes du code de la page (HTML ou XML), elles constituent un moyen pour séparer structure et mise en page d'un site web. En tant que spécification du W3C, elles obéissent à un ensemble de règles précises qui seront décrites dans les chapitres suivants et que les navigateurs web respectent progressivement.

 
```html
<p>
   <span style="font-family:monospace; color:red; font-size:5em;">
     texte du paragraphe
   </span>
</p>
```
Les feuilles de styles se proposent de résoudre ces deux problèmes par deux approches différentes :

>    En définissant une feuille de style interne au code HTML, on créé un style par page ; ceci est relativement lourd mais parfois intéressant.
>    En définissant une feuille de style externe qui peut alors être utilisée depuis n'importe quel document HTML 

## Le langage CSS/Structure et syntaxe

Ce chapitre a pour but de poser les bases de la structure d'une feuille de styles CSS ainsi que les premiers éléments de syntaxe. Nous aborderons également la liaison entre les documents web et les CSS, la propriété de cascade des styles et l'adéquation des styles à l'appareil restituant la page web. 

### Règles syntaxiques de base

#### Casse
Les feuilles de styles CSS ne sont pas sensibles à la casse : elles ne tiennent pas compte des majuscules et minuscules. Exception faite pour les éléments n'obéissant pas directement aux règles de syntaxe CSS, notamment les attributs id et class (dont le nommage est assuré par le rédacteur : vous), les noms des polices de caractères (exemple : "Trebuchet MS"), et les suffixes d'URL ne répondant pas à ces règles.

#### Mise en forme du code
Les feuilles de styles CSS ne tiennent pas compte des espaces et retours à la ligne.

#### Identifiants
Les identifiants (nom, id et class) ne peuvent contenir que des caractères A-Z, a-z, 0-9 plus le tiret (-) et le caractère de soulignement (_). Il ne peuvent pas commencer par un nombre.

#### Chaînes de caractère
Les chaînes de caractères affichables (par exemple pour les pseudo-éléments :before et :after, ou pour la propriété quote) sont entre des guillemets simples « ' » (« apostrophe ») ou doubles « " ».

Pour mettre un guillemet simple ou double dans la chaîne affichable, on fait précéder le caractère d'une barre de fraction inversée, respectivement « \' » et « \" ».
Pour mettre un retour de ligne, on utilise le caractère « \000a » (ou « \a ») ; si l'on veut revenir à la ligne dans le code, on place une barre de fraction inversée seule en fin de ligne.
En absence de la définition du jeu de caractères (charset), elles ne peuvent contenir que des caractères ASCII ; les caractères Unicode sont obtenus en mettant le code hexadécimal précédé d'une barre de fraction inversée, par exemple « \00a0 » pour une espace insécable, « \0152 » pour « œ » (on peut ignorer les zéros de tête)… Une feuille incluse dans un fichier HTML (entre les balises <style>…</style>) utilise le même jeu de caractères que la page HTML. Si la feuille de style est dans un fichier à part, on définit la feuille de code par la règle @charset (par exemple @charset "ISO-8859-1";).

#### Commentaires
Les commentaires commencent par une barre de fraction suivie d'un astérique « /* », et se concluent par la succession de caractères inverse « */ ». Ils sont facultatifs, voire inutiles, pour les modifications mineures d'affichage (inutile d'indiquer que l'on souligne, cela se lit facilement), mais indispensables pour les mises en pages importantes (inscrire par exemple la taille minimale d'une marge pour avoir la place d'insérer le menu permet de ne pas commettre de maladresse lors d'une future modification du fichier).

## Structure générale

### Syntaxe des règles de style

Une feuille de styles CSS fonctionne sous forme de déclarations.

```
selecteur{propriété:valeur;}
```

Une déclaration est composée au minimum de deux éléments : l'élément de la page auquel on souhaite appliquer un style (le sélecteur), et le groupe de règles définissant le style (propriété et valeur). Analysons cette déclaration :

```css
h1 { color: red }
```

Ici, l'élément à mettre en forme est h1 (titre de niveau 1) et le groupe de règles, délimité par les accolades, contient la règle « mettre cet élément en rouge ». Une règle consiste en une propriété (ici color), suivie par deux points (:), suivie enfin par la valeur associée à la propriété (ici rouge).

Il est bien évidemment possible de spécifier plusieurs règles, pour un même élément, en les séparant par des point-virgules (;) de cette façon :

```css
h1 {
   color: red;
   font-weight: bold
}
```


On peut aussi spécifier le même jeu de règles pour plusieurs identifiants en les séparant par des virgules (,) :

```css
h1, h2 {
   color: red;
   font-weight: bold
}
```


> **Remarque** : la dernière règle du groupe ne comporte pas obligatoirement de point-virgule terminal. Toutefois le mettre systématiquement évite de l'oublier. Il faut savoir que les erreurs de syntaxes CSS ont pour effet d'interrompre dans le navigateur web l'interprétation des styles et donc la mise en forme. Contrairement au moteur d'interprétation du code HTML des navigateurs, l'interprétation des CSS par les navigateurs ne corrige habituellement pas d'erreur de syntaxe. 


## Utiliser les styles CSS dans une page web

### Déclaration de styles
Une première méthode pour utiliser des styles CSS consiste à intégrer les styles dans l'entête du fichier HTML à l'aide d'une balise style. Le code CSS est alors simplement écrit entre la balise ouvrante et la balise fermante

```html
<html>
  <head>
    <style type="text/css">
      p {
        font-family: Bitstream Vera Sans;
        color: #666;
        line-height: 1.6em;
      }
    </style>
  </head>
  <body>
    <p>
      Exemple de page HTML avec CSS intégrés
    </p>
  </body>
 </html>
```
