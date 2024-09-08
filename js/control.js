import { settings } from "./quality.js";
settings();


window.onload = () => {
    const mouseBtn = document.querySelector('.js-button');

    mouseBtn.addEventListener('click', () => {
        if (mouseBtn.classList.contains('js-button')) {
            mouseBtn.classList.remove('js-button'); // Set 'notclicked' state
        } else {
            mouseBtn.classList.add('js-button'); // Set 'clicked' state
        }
    });
};
