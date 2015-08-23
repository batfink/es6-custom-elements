class MyButton extends HTMLButtonElement {

    createdCallback() {
        console.log('my-button created');
        this.textContent = 'MyButton extends HTMLButtonElement';
    }

    attachedCallback() {
        console.log('my-button attached');
        this.addEventListener('click', console.log.bind(console, 'button clicked'), false);
    }

    detachedCallback() {}

    attributeChangedCallback() {}

}

var MyButton = document.registerElement('my-button', {
    prototype: MyButton.prototype,
    extends: 'button'
});
