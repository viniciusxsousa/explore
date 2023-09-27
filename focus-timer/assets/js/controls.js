const controls = {
    controls: document.querySelector('.buttons'),
    action: '',
    observeClick() {
        this.controls.addEventListener('click', (event) => {
            this.action = event.path[1].dataset.action;
        })
    }
}

export {controls}