# How it works

## Defining a folder structure

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

## What does this mean?

| Character | Description | What it means | Icon |
| --------- | ----------- | ----------- | ---- |
| o         | lowercase "o" character | folder (closed) | <i class="icon icon-folder"></i> |
| ^         | caret character         | folder (open) |  <i class="icon icon-folder-open"></i> |  
| +         | plus character          | level (indention) |  |
| .         | dot character           | file          |  <i class="icon icon-file"></i> |  

### Samples

| Definition | What it means |
| --------- | ----------- | 
| o top-level | a closed folder icon with the name `top-level` |
| +o second-level | as above but 1 level lower and named `second-level` |
| +. second-level.file | file on the same level as former sample |
| +++++^ deep-level-open-folder | an open folder icon with the name `deep-level-open-folder` on a deep level |
| o^.++ drunken-definition | Some drunken definition that makes no sense |

### How that would look

```folderizer
o top-level
+o second-level
+. second-level.file
+++++^ deep-level-open-folder 
o^.++ drunken-definition
```

!> **Important** How the folder looks depends on your definition, there is no actual check or validation, it is just handling the presentation of your pseudo-coded folder structure.

## How indention looks

<div class="raw-pre">
<pre>
```folderizer
o folder-zero
+o subfolder-one
++. file-1.one
++. file-2.one
+o subfolder-two
++. file-1.two
++. file-2.two
``` 
</pre>  
</div>

```folderizer
o folder-zero
+o subfolder-one
++. file-1.one
++. file-2.one
+o subfolder-two
++. file-1.two
++. file-2.two
``` 