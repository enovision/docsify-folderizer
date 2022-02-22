import { Folderizer } from './folderizer.js';

const LANG = 'folderizer';
const SELECTOR = 'pre[data-lang="' + LANG + '"]';

const plugin = (hook, vm) => {
    let config = Object.assign({}, {
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

    hook.beforeEach(function (content) {
        config.elId++;
        return content;
    });

    hook.afterEach(function (html, next) {
        let parentNode, targetNode,
            folderizer = new Folderizer(config, html);

        const htmlElement = document.createElement('div');

        htmlElement.innerHTML = html;

        htmlElement.querySelectorAll(SELECTOR).forEach((element) => {
            parentNode = element.parentNode;
            // sourceHtml = element.innerHTML;
            targetNode = folderizer.renderFolder(element, config);
            parentNode.replaceChild(targetNode, element);
        });

        next(htmlElement.innerHTML);
    });
};

export default plugin;