const openSettingsButton = document.getElementById('setting-icon');
const closeSettingsButton = document.querySelector(".js-exit");
const containerOfBtns = document.querySelector('.js-navbar');
const overlayBackground = document.querySelector('.js-overlay');

export function settings(state) {

  if (state === 'open'){
    closeSettingsButton.style.display = "";
    containerOfBtns.style.display = "";
    Object.assign(overlayBackground.style, {
      background: "",
      boxShadow: "",
      border: "",
    })
    openSettingsButton.style.display = "none";


 
    return;
  }


  if (state === 'close'){
    // Set display to none to hide the button
    closeSettingsButton.style.display = "none";
    containerOfBtns.style.display = "none";
    Object.assign(overlayBackground.style, {
      background: "none",
      boxShadow: "none",
      border: "none",
    })
    openSettingsButton.style.display = "";
    return;
  }

}

openSettingsButton.onclick = () => {
  settings('open');
};

closeSettingsButton.onclick = () => {
  settings('close');
};
settings('open');

const lightBtn = document.querySelector(".js-light");
const darkBtn = document.querySelector('.js-dark');
const colorBtn = document.querySelector('.js-color');

const highBtn = document.querySelector(".js-high");
const medBtn = document.querySelector('.js-med');
const lowBtn = document.querySelector('.js-low');



function colorBtns (btnHover) {
if(btnHover === "light") {
  lightBtn.style.background = "#ff9d4c6d";
  darkBtn.style.background = "";
  colorBtn.style.background = "";
  return
}

if(btnHover === "dark") {
  darkBtn.style.background = "#ff9d4c6d";
  lightBtn.style.background = "";
  colorBtn.style.background = "";

  return
}

if(btnHover === "color") {
  colorBtn.style.background = "#ff9d4c6d"; 
  darkBtn.style.background = "";
  lightBtn.style.background = "";

  return
}

if(btnHover === "high") {
  highBtn.style.background = "#ff9d4c6d";
  lowBtn.style.background = "";
  medBtn.style.background = "";
  return
} 

if(btnHover === "med") {
  highBtn.style.background = "";
  lowBtn.style.background = "";
  medBtn.style.background = "#ff9d4c6d";
  return
} 

if(btnHover === "low") {
  highBtn.style.background = "";
  lowBtn.style.background = "#ff9d4c6d";
  medBtn.style.background = "";
  return
} 

}

lightBtn.onclick = () => {
  colorBtns('light');
}

darkBtn.onclick = () => {
  colorBtns('dark');
}

colorBtn.onclick = () => {
  colorBtns('color');
}

highBtn.onclick = () => {
  colorBtns("high");
}

medBtn.onclick = () => {
  colorBtns("med");
}

lowBtn.onclick = () => {
  colorBtns("low");
}