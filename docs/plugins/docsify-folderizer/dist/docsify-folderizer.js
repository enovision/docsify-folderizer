class $e26f720a7bd85d21$export$21626440d1f34496 {
    /**
     * constructor
     */ constructor(config, html){
        let me = this;
        me.config = config;
        me.html = html;
        me.htmlEl = null;
        me.elementHtml = null;
        me.elementSplit = [];
        me.lastLevel = 0;
        me.postHandler = config.postHandler;
        me.iconPrefix = config.iconPrefix;
        me.iconMap = config.iconMap;
        me.iconMapOpen = config.iconMapOpen;
        me.iconFile = config.iconFile;
        me.iconQuestion = config.iconQuestion;
        me.iconClass = config.iconClass;
        me.iconColor = config.iconColor;
        me.charPath = config.charPath;
        me.charFile = config.charFile;
        me.charMap = config.charMap;
        me.charMapOpen = config.charMapOpen;
        me.validator = [
            me.charFile,
            me.charMap,
            me.charMapOpen,
            me.charPath
        ];
        me.typeFile = config.typeFile;
        me.typeMap = config.typeMap;
        me.typeMapOpen = config.typeMapOpen;
        me.colorName = config.colorName;
        // bindings 
        me.renderFolder.bind(me);
        me.renderDiv.bind(me);
        me.renderList.bind(me);
        me.renderListRow.bind(me);
    }
    /**
     * 
     * @param {*} element 
     * @returns 
     */ renderFolder(element) {
        let me = this, divNode, ulNode, liNode, split, el, ix;
        me.elementHtml = element.innerHTML;
        divNode = me.renderDiv();
        ulNode = me.renderList();
        el = element.getElementsByClassName('lang-folderizer');
        split = el[0].innerHTML.split('\n');
        for(ix = 0; ix < split.length; ix++){
            liNode = me.renderListRow(split[ix]);
            ulNode.appendChild(liNode);
        }
        divNode.appendChild(ulNode);
        return divNode;
    }
    renderDiv() {
        let me = this, divElement;
        divElement = document.createElement('div');
        divElement.classList.add('shortcode-thunder-folder');
        if (!me.empty(me.config.wrapClass)) divElement.classList.add(me.config.wrapClass);
        return divElement;
    }
    /**
     * renderList
     * @returns 
     */ renderList() {
        let ulElement = document.createElement('ul');
        ulElement.classList.add('folder-container');
        return ulElement;
    }
    /**
     * renderListRow
     * @param {string} elText 
     * @returns 
     */ renderListRow(elText) {
        let me = this, firstClass, splitClass, splitCls, ix;
        let liElement = document.createElement('li');
        let content, icon, level, type;
        level = me.getLevel(elText);
        type = me.getType(elText);
        content = me.getContent(elText);
        icon = me.getIcon(type);
        firstClass = me.lastLevel !== null && level !== me.lastLevel;
        liElement = document.createElement('li');
        splitClass = type.split(' ');
        for(ix = 0; ix < splitClass.length; ix++){
            splitCls = splitClass[ix];
            liElement.classList.add(splitCls);
        }
        liElement.classList.add(level);
        liElement.classList.add(firstClass ? '--first--' : '--rest--');
        liElement.appendChild(icon);
        liElement.appendChild(content);
        me.lastLevel = level;
        return liElement;
    }
    /**
     * getIcon
     * @param {string} type 
     * @returns 
     */ getIcon(type) {
        let me = this;
        let icon = me.iconQuestion, iconEl, iconColor = me.config.iconColor;
        if (type === me.typeMap) {
            icon = me.iconMap;
            iconColor = me.config.colors.folder;
            if (me.empty(iconColor)) iconColor = me.iconColor;
        } else if (type === me.typeMapOpen) {
            icon = me.iconMapOpen;
            iconColor = me.config.colors.folderClosed;
            if (me.empty(iconColor)) iconColor = me.iconColor;
        } else if (type === me.typeFile) {
            icon = me.iconFile;
            iconColor = me.config.colors.file;
            if (me.empty(iconColor)) iconColor = me.iconColor;
        }
        iconEl = document.createElement('i');
        iconEl.classList.add(me.iconPrefix);
        iconEl.classList.add(icon);
        iconEl.classList.add(me.iconClass);
        if (!me.empty(iconColor)) iconEl.style.color = iconColor;
        return iconEl;
    }
    /**
     * @returns 
     */ getContent(elText) {
        let me = this, elContent, elTextNode, type, pos = 0, ix, output, splitClass, splitCls, splitText = me.strsplit(elText, 1), validator = me.array_merge(me.validator, [
            ' '
        ]);
        for(ix = 0; ix < splitText.length; ix++){
            if (!me.in_array(splitText[ix], validator)) break;
            pos++;
        }
        output = elText.substr(pos);
        type = me.getType(elText);
        elContent = document.createElement('span');
        splitClass = type.split(' ');
        for(ix = 0; ix < splitClass.length; ix++){
            splitCls = splitClass[ix];
            if (ix === splitClass.length - 1) splitCls += '-name';
            elContent.classList.add(splitCls);
        }
        elTextNode = document.createTextNode(output);
        elContent.appendChild(elTextNode);
        return elContent;
    }
    /**
     * @returns integer
     */ getLevel(elText) {
        let me = this, level = 0, splitText = me.strsplit(elText, 1);
        for(var ix = 0; ix < splitText.length; ix++)if (splitText[ix] == me.charPath) level++;
        return 'level-' + level;
    }
    /**
     * @returns 
     */ getType(elText) {
        let me = this, text, type = me.typeFile, splitText = me.strsplit(elText, 1);
        for(var ix = 0; ix < splitText.length; ix++){
            text = splitText[ix];
            if (!me.in_array(text, me.validator)) break;
            if (text === me.charFile) type = me.typeFile;
            else if (text === me.charMap) type = me.typeMap;
            else if (text === me.charMapOpen) type = me.typeMapOpen;
        }
        return type;
    }
    /**
     * PHP strsplit alternative in JS
     */ strsplit(string, splitLength = null) {
        let chunks = [], pos = 0, len = string.length;
        if (splitLength === null) splitLength = 1;
        if (string === null || splitLength < 1) return false;
        string += '';
        while(pos < len)chunks.push(string.slice(pos, pos += splitLength));
        return chunks;
    }
    /**
     * PHP array_merge alternative in JS
     * @param {*} arr1 
     * @param {*} arr2 
     * @returns 
     */ array_merge(arr1, arr2) {
        return Array.from(new Set(arr1.concat(arr2).sort((a, b)=>a - b
        )));
    }
    /**
     * PHP in_array alternative in JS
     */ in_array(needle, haystack) {
        let length = haystack.length;
        for(var i = 0; i < length; i++){
            if (haystack[i] == needle) return true;
        }
        return false;
    }
    /**
     * PHP empty alternative in JS
     */ empty(variable) {
        let empty = false;
        if (variable === null || typeof variable === 'undefined' || variable === '') empty = true;
        return empty;
    }
}


const $e6b6ce3190375b0f$var$LANG = 'folderizer';
const $e6b6ce3190375b0f$var$SELECTOR = 'pre[data-lang="' + $e6b6ce3190375b0f$var$LANG + '"]';
const $e6b6ce3190375b0f$var$plugin = (hook, vm)=>{
    let config = Object.assign({
    }, {
        elId: 0,
        iconPrefix: 'icon',
        iconMap: 'icon-folder',
        iconMapOpen: 'icon-folder-open',
        iconFile: 'icon-file',
        iconQuestion: 'icon-question',
        iconClass: '--icon--',
        iconColor: '#ff9900',
        charPath: '+',
        charFile: '.',
        charMap: 'o',
        charMapOpen: '^',
        typeFile: 'file-item',
        typeMap: 'folder-item',
        typeMapOpen: 'folder-item-open folder-item',
        wrapClass: '',
        colors: {
            folder: null,
            folderClosed: null,
            file: null,
            fileClosed: null
        }
    }, vm.config.folderizer);
    hook.beforeEach(function(content) {
        config.elId++;
        return content;
    });
    hook.afterEach(function(html, next) {
        let parentNode, targetNode, folderizer = new $e26f720a7bd85d21$export$21626440d1f34496(config, html);
        const htmlElement = document.createElement('div');
        htmlElement.innerHTML = html;
        htmlElement.querySelectorAll($e6b6ce3190375b0f$var$SELECTOR).forEach((element)=>{
            parentNode = element.parentNode;
            // sourceHtml = element.innerHTML;
            targetNode = folderizer.renderFolder(element, config);
            parentNode.replaceChild(targetNode, element);
        });
        next(htmlElement.innerHTML);
    });
};
var $e6b6ce3190375b0f$export$2e2bcd8739ae039 = $e6b6ce3190375b0f$var$plugin;


if (!window.$docsify) window.$docsify = {
};
window.$docsify.plugins = (window.$docsify.plugins || []).concat($e6b6ce3190375b0f$export$2e2bcd8739ae039);


//# sourceMappingURL=docsify-folderizer.js.map
