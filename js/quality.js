
/* work on fixing button think where
high and theme buttons you could only chosse one of theme) 
*/
function changeButton(selector) {
  const button = document.querySelector(selector);
  if(!button.classList.contains('is-toggled')) {

    turnOffPerviousButton();

    button.classList.add('is-toggled')
  } else {
    button.classList.remove('is-toggled')
  }
}


function turnOffPerviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}



function changeBlindness(selector) {
  const changeThemeButton = document.querySelector(selector);
  if(!changeThemeButton.classList.contains('is-Toggled-Blind')) {
    
    previousThemeButton();
  
  changeThemeButton.classList.add('is-Toggled-Blind');
  } else {
    changeThemeButton.classList.remove('is-Toggled-Blind');
  }


}

function previousThemeButton() {
  const previousTheme = document.querySelector('.is-toggled-theme');
  if(previousTheme) {
    previousTheme.classList.remove('is-toggled-theme')
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
