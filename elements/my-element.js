'use strict';

var tag = document.createElement.bind(document);

class MyElement extends HTMLElement {

    createdCallback() {
        console.log('my element created');
        console.log('my-element instance of MyElement?', this instanceof MyElement);
    }

    attachedCallback() {
        console.log('my element attached');

        var h1 = tag('h1');
        h1.textContent = 'MyElement extends HTMLElement';
        this.appendChild(h1);

        var button = tag('button', 'my-button');
        this.appendChild(button);
    }

    detachedCallback() {}

    attributeChangedCallback() {}

}

document.registerElement('my-element', {
    prototype: MyElement.prototype
});
