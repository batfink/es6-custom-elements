'use strict';

class MyButton extends HTMLButtonElement {

    createdCallback() {
        console.log('my-button created');
        console.log('my-button instance of MyButton?', this instanceof MyButton);
        this.textContent = 'MyButton extends HTMLButtonElement';
    }

    attachedCallback() {
        console.log('my-button attached');
        this.addEventListener('click', console.log.bind(console, 'button clicked'), false);
    }

    detachedCallback() {}

    attributeChangedCallback() {}

}

document.registerElement('my-button', {
    prototype: MyButton.prototype,
    extends: 'button'
});
