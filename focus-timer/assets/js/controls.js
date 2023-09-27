import state from "./focusTime/state.js";

const controls = {
    controls: document.querySelector('.buttons'),
    btnPlay: document.querySelector('.button__play'),
    btnPause: document.querySelector('.button__pause'),
    btnSet: document.querySelector('.button__stopwatch'),
    btnStop: document.querySelector('.button__stop'),
    btnMusicOff: document.querySelector('.button_speakerOff'),
    btnMusicOn: document.querySelector('button__speakerOn'),
    action: '',
    observeClick() {
        this.controls.addEventListener('click', (event) => {
            this.action = event.path[1].dataset.action;

            switch(this.action) {
                case 'toggleRunning':
                    toggleRunning();
                    break
                default:
                    console.log('Não há ação');
            }
        })
    }
}

function toggleRunning() {
    state.isRunning = !state.isRunning;

    controls.btnPlay.classList.toggle('button-disable');
    controls.btnPause.classList.toggle('button-disable');
    controls.btnSet.classList.toggle('button-disable');
    controls.btnStop.classList.toggle('button-disable');
}

export {controls}