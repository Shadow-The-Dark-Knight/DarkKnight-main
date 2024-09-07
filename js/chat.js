import { settings } from "./quality.js";
settings();


window.onload = () => {
const smallBtn = document.querySelector('.js-small');
const medBtn = document.querySelector('.js-normal');
const bigBtn = document.querySelector('.js-big');

function textToggle (size) {
    if(size === 'small') {
        smallBtn.style.background = "#ff8a2a";
        medBtn.style.background = "";
        bigBtn.style.background = "";

        return;
    };

    if(size === 'middle') {
        smallBtn.style.background = "";
        medBtn.style.background = "#ff8a2a";
        bigBtn.style.background = "";

        return;
    };

    if(size === 'big') {
        smallBtn.style.background = "";
        medBtn.style.background = "";
        bigBtn.style.background = "#ff8a2a";

        return;
    };
};

smallBtn.onclick = () => {
    textToggle('small')
};
medBtn.onclick = () => {
    textToggle('middle')
};
bigBtn.onclick = () => {
    textToggle('big')
};

textToggle('middle')

};

