## Settings

### Alternate settings

You can change some settings of this plugin. The place to do this is the index.html file of 
your Docsify implementation.

In the `windows.$docsify` configuration you can add an entry `folderizer`. Within that object you can then
change the settings like in the example below. Usually it is not required to modify if you like the style
with the monochrome colored icons.

```javascript
   window.$docsify = {
      folderizer: {
        iconPrefix: 'icon',
        colorName: '#ff9900',
        iconColor: '#abdeff',
        colors: {
          file: '#ff9900'
        }
      }
    }
```

## Settings overview

| Setting | Description | Default | 
| --------- | ----------- | ----------- | 
| iconPrefix | Awesome prefix (could be 'fa') | 'icon' |
| iconMap | Awesome folder (closed) icon |'icon-folder' | 
| iconMapOpen | Awesome folder open icon |'icon-folder-open' | 
| iconFile | File css class |'icon-file' | 
| iconQuestion | Icon for fallback |'icon-question' | 
| iconClass | Icon css class | '--icon--' | 
| iconColor | default icon color format ('#ff9900') | '' | 
| charPath | pseudo-code character for a level path (plus-sign) | '+' | 
| charFile | pseudo-code character for a file (dot) | '.' | 
| charMap | pseudo-code character for a folder (closed) | 'o' | 
| charMapOpen | pseudo-code character for an open folder (caret) | '^' | 
| typeFile | css class for a file icon | 'file-item' | 
| typeMap | css class for a closed folder icon | 'folder-item' | 
| typeMapOpen | css classes for an open folder icon | 'folder-item-open folder-item' | 
| wrapClass | Additional wrapper css class  | '' | 
| colors | Object with colors for folders and file | see below |   

### colors

This should be an object within the settings.

| Setting | Description | Default | 
| --------- | ----------- | ----------- | 
| folder | Alternate color folder icon | null |
| folderClosed | Alternate color folder closed icon | null |
| file | Alternate color file icon | null |