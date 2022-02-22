# Folderizer Plugin for Docsify

## What is it?

The `docsify-folderizer` plugin is an easy way to present folder structures in a nice graphical way.

It works with **folders**, **files** and indented trees. To a certain extend it is quite flexible too and
a lot of parameters can be modified, like for example the icon colors. 

## Fontawesome 

This plugin comes with its own subset of [Fontawesome](https://www.fontawesome.com) icons, but are created with the web application of [Fontastic](https://app.fontastic.me/). 
It is an excerpt of the Fontawesome icons. You can define your own icon set as well. Small modification to the css is required however.

## How does it look?

```folderizer
o [root]
+. index.html
+. inferno.js
+o src
++. BasicComponent.js
+^ log
++. log-02-02-2022.log
++. log-12-02-2022.log
++. log-20-02-2022.log
++. log-22-02-2022.log
```

This is a presentation with custom settings in the `index.html` file (see: [Settings](03_settings.md)).

```javascript
folderizer: {
  colorName: '#ff9900',
    iconColor: '#abdeff',
    colors: {
      file: '#ff9900'
    }
  }
```

## This is how you define it

<div class="raw-pre">
<pre>
```folderizer
o [root]
+. index.html
+. inferno.js
+o src
++. BasicComponent.js
+^ log
++. log-02-02-2022.log
++. log-12-02-2022.log
++. log-20-02-2022.log
++. log-22-02-2022.log
``` 
</pre>  
</div>