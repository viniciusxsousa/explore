import { switchMode } from "./switchMode.js";

switchMode.buttonLiht.addEventListener('click', () => {
    switchMode.toggleLight();
});

switchMode.buttonDark.addEventListener('click', () => {
    switchMode.toggleDark();
})