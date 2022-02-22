# How it works

## Defining a folder structure

<div style="background-color:#fefefe;color:#444;border-radius:0;">
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

## What does this mean?

| Character | Description | What it means |
| --------- | ----------- | ----------- |
| o         | lowercase "o" character | folder (closed) |
| ^         | caret character         | folder (open) |   
| +         | plus character          | level (indention) |
| .         | dot character           | file          |   

### Samples

* o top-level (= a closed folder icon with the name `top-level`)
* +o second-level (= same as above but 1 level lower)
* +. second-level.file (= a file on the same level as former sample)
* +++++^ deep-level-open-folder (= an open folder icon with the name `deep-level-open-folder` on a deep level)

### How that looks

```folderizer
o top-level
+o second-level
+. second-level.file
+++++^ deep-level-open-folder 
```

!> **Important** How the folder looks depends on your definition, there is no actual check or validation, it is just handling the presentation of your pseudo-coded folder structure.