class $e619d694748047f1$export$21626440d1f34496 {
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
        me.extIcons = {
            'jpg': 'fa fa-cog',
            'pdf': 'fa fa-question'
        };
    }
    /**
     * 
     * @param {*} element 
     * @returns 
     */ renderFolder(element) {
        let me = this, divNode, ulNode, liNode, split, el, ix, node;
        me.elementHtml = element.innerHTML;
        divNode = me.renderDiv();
        ulNode = me.renderList();
        el = element.getElementsByClassName('lang-directory');
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
        let me = this, firstClass, hiliteColor, splitClass, splitCls, ix;
        let liElement = document.createElement('li');
        let content, icon, level, type, textNodeIcon, textNodeContent;
        level = me.getLevel(elText);
        type = me.getType(elText);
        content = me.getContent(elText);
        icon = me.getIcon(type);
        hiliteColor = me.config.hiliteColor;
        firstClass = me.lastLevel !== null && level !== me.lastLevel;
        liElement = document.createElement('li');
        splitClass = type.split(' ');
        for(ix = 0; ix < splitClass.length; ix++){
            splitCls = splitClass[ix];
            //if (ix === splitClass.length - 1) {
            //    splitCls += '-name';
            //}    
            liElement.classList.add(splitCls);
        }
        liElement.classList.add(level);
        liElement.classList.add(firstClass ? '--first--' : '--rest--');
        textNodeIcon = document.createTextNode(icon.innerHTML);
        textNodeContent = document.createTextNode(content.innerHTML);
        liElement.appendChild(icon);
        liElement.appendChild(content);
        if (!me.empty(me.colorName) && !me.empty(hiliteColor)) liElement.color = hiliteColor;
        me.lastLevel = level;
        return liElement;
    }
    /**
     * getIcon
     * @param {string} type 
     * @returns 
     */ getIcon(type) {
        let me = this;
        let icon = me.iconQuestion, iconEl, iconColor = me.config.iconColor, mi;
        if (type === me.typeMap) {
            mi = me.config.hiliteColor.mi;
            iconColor = me.iconColor;
            icon = me.empty(mi) ? me.iconMap : mi;
        } else if (type === me.typeMapOpen) {
            icon = me.iconMapOpen;
            iconColor = me.config.hiliteColor.mco;
            if (me.empty(me.iconColor)) iconColor = me.config.iconColor;
        } else if (type === me.typeFile) {
            icon = me.iconFile;
            iconColor = me.iconColor;
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
        let me = this, ix, level = 0, splitText = me.strsplit(elText, 1);
        for(ix = 0; ix < splitText.length; ix++)if (splitText[ix] == me.charPath) level++;
        return 'level-' + level;
    }
    /**
     * @returns 
     */ getType(elText) {
        let me = this, ix, type = me.typeFile, text, splitText = me.strsplit(elText, 1);
        for(ix = 0; ix < splitText.length; ix++){
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


const $556d90fce986c7f8$var$LANG = 'directory';
const $556d90fce986c7f8$var$SELECTOR = 'pre[data-lang="' + $556d90fce986c7f8$var$LANG + '"]';
const $556d90fce986c7f8$var$plugin = (hook, vm)=>{
    let config = Object.assign({
    }, {
        elId: 0,
        iconPrefix: 'icon',
        iconMap: 'icon-folder',
        iconMapOpen: 'icon-folder-open',
        iconFile: 'icon-file',
        iconQuestion: 'icon-question',
        iconClass: '--icon--',
        charPath: '+',
        charFile: '.',
        charMap: 'o',
        charMapOpen: '^',
        typeFile: 'file-item',
        typeMap: 'folder-item',
        typeMapOpen: 'folder-item-open folder-item',
        wrapClass: '',
        hiliteColor: {
            mc: null,
            mco: null,
            mio: null,
            fc: null,
            fi: null
        }
    }, vm.config.directory);
    hook.beforeEach(function(content) {
        config.elId++;
        return content;
    });
    hook.afterEach(function(html, next) {
        let me = this, parentNode, targetNode, folderizer = new $e619d694748047f1$export$21626440d1f34496(config, html);
        const htmlElement = document.createElement('div');
        htmlElement.innerHTML = html;
        htmlElement.querySelectorAll($556d90fce986c7f8$var$SELECTOR).forEach((element)=>{
            parentNode = element.parentNode;
            // sourceHtml = element.innerHTML;
            targetNode = folderizer.renderFolder(element, config);
            parentNode.replaceChild(targetNode, element);
        });
        next(htmlElement.innerHTML);
    });
};
var $556d90fce986c7f8$export$2e2bcd8739ae039 = $556d90fce986c7f8$var$plugin;


if (!window.$docsify) window.$docsify = {
};
window.$docsify.plugins = (window.$docsify.plugins || []).concat($556d90fce986c7f8$export$2e2bcd8739ae039);


//# sourceMappingURL=docsify-fancy-folder.js.map
