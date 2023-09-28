import state from "./focusTime/state.js";

const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');

export function updateTime(minutes, seconds){
    let minute = minutes ?? state.minutes;
    let second = seconds ?? state.seconds;

    $minutes.textContent = String(minute).padStart(2, '0');
    $seconds.textContent = String(second).padStart(2, '0');
}