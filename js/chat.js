
function textButton(selector) {
  const textButton = document.querySelector(selector);
  if(!textButton.classList.contains('is-Toggled')) {

    previousButton();

    textButton.classList.add('is-Toggled');
  } else {
    textButton.classList.remove('is-Toggled');
  }
}

function previousButton() {
const previousTitleButton = document.querySelector('.is-Toggled');
if(previousTitleButton) {
  previousTitleButton.classList.remove('.is-Toggled');
}
}

const exitBtn = document.querySelector('.js-exit');
const navBar = document.querySelector('.js-navbar');
const returnSetBtn = document.querySelector('.js-icon');

function escape(selector) {
 if(selector === 'open') {
  exitBtn.style.display = "";
  navBar.style.display = "";
  returnSetBtn.style.display = "none";
  return;
 } 
 if(selector === 'closed') { 
  exitBtn.style.display = "none";
  navBar.style.display = "none";
  returnSetBtn.style.display = "";
 
  return;
}
 }


 returnSetBtn.onclick = () => {
  escape('open');
 }

 exitBtn.onclick = () => {
  escape('closed');
 }

escape('open');

