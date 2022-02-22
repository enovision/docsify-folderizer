# Folderizer Plugin for Docsify

## What is it?

The `docsify-folderizer` plugin is an easy way to present folder structures in a nice graphical way.

It works with **folders**, **files** and indented trees. To a certain extend it is quite flexible too and
a lot of parameters can be modified, like for example the icon colors. 

This plugin comes with its own fontawesome icons, but are created with the web application of [Fontastic](https://app.fontastic.me/). It is an excerpt of the Fontawesome icons. You can define your own icon set as well. Small modification to the css is required however.

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


This is how you define it

<div style="background:#f1f1f1;color:#000;border-radius:0;">
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

### Presentation

And this is how it looks in a browser

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
