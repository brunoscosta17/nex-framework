class Nex {
    constructor() {
        this.container = null;
    }

    getContainer() {
        return this.container;
    }

    setContainer(containerName = '') {
        containerName != '' ? this.container = document.querySelector(containerName) : false;
    }
}

class Component {
    constructor(containerName) {
        this.container = document.querySelector(containerName);
    }

    createElement(values) {
        const element = document.createElement(options.tagName);
        element.id = options.id;
        element.textContent = options.content;
    }
}