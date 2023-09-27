import states from './state.js'
import { controls } from '../controls.js';

export function start(minutes, seconds) {
    states.minutes = minutes;
    states.seconds = seconds;

    controls.observeClick();
}