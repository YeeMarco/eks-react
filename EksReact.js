class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }
    setAttributes(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(vchild) {
        vchild.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

export class Component {
    constructor() {
        this.children = [];
    }
    mountTo(parent) {
        let vdom = this.render();
        vdom.mountTo(parent);
    }
    setAttribute(name, value) {
        this[name] = value;
    }
    appendChild(child) {
        this.children.push(child);
    }
}

export let EksReact = {
    createElement: (type, attributes, ...children) => {
        let el;
        if (typeof type === 'string') {
            el = new ElementWrapper(type);
        } else {
            el = new type();
        }
        for (const name in attributes) {
            el.setAttribute(name, attributes[name]);
        }
        let insertChildren = (children) => {
            for (const child of children) {
                if (typeof child === 'object' && child instanceof Array) {
                    insertChildren(child);
                } else {
                    if (
                        !(child instanceof Component) &&
                        !(child instanceof ElementWrapper) &&
                        !(child instanceof TextWrapper)
                    ) {
                        child = String(child);
                    }
                    if (typeof child === 'string') {
                        child = new TextWrapper(child);
                    }
                    el.appendChild(child);
                }
            }
        };
        insertChildren(children);
        return el;
    },
    render(vdom, element) {
        vdom.mountTo(element);
    }
};