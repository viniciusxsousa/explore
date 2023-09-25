export const alertError = {
    box: document.querySelector('.alert__error'),
    open() {
        this.box.classList.add('open');
    },
    close() {
        this.box.classList.remove('open');
    }
}