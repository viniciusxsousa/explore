import state from "./focusTime/state.js";
import { stop } from "./controls.js";

const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');

export function updateTime(minutes, seconds){
    let minute = minutes ?? state.minutes;
    let second = seconds ?? state.seconds;

    $minutes.textContent = String(minute).padStart(2, '0');
    $seconds.textContent = String(second).padStart(2, '0');
}

export function countDown(){
    if(!state.isRunning){
        return
    }

    let minute = Number($minutes.textContent);
    let seconds = Number($seconds.textContent);
    
    seconds--;

    if(seconds < 0) {
        seconds = 59;
        minute--;
    }

    if(minute < 0) {
        stop();
        return
    }

    updateTime(minute, seconds);

    setTimeout(() => countDown(), 1000);
}