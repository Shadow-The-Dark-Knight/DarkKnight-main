import { settings } from "./quality.js";
settings();


window.onload = () => {
const mouseBtn = document.querySelector('.js-button');

function mouse(selector) {
    if (selector === 'clicked') {
        mouseBtn.classList.add('js-button');
        return;
    }
    if(selector === 'notclicked') {
        mouseBtn.classList.remove('js-button');
        return
    }
}



mouseBtn.onclick = () => {
    mouse('clicked')
};

mouseBtn.onclick = () => {
    mouse('notclicked')
};


mouse('notclicked');
};
