
const openSettingsButton = document.getElementById('setting-icon');
const closeSettingsButton = document.querySelector(".js-exit");
const containerOfBtns = document.querySelector('.js-navbar');
const overlayBackground = document.querySelector('.js-overlay');


   function settings(state) {

  if (state === 'open'){
    closeSettingsButton.style.display = "";
    containerOfBtns.style.display = "";
    Object.assign(overlayBackground.style, {
      background: "",
      boxShadow: "",
      border: "",
      position: 'absolute',
     
    })
    openSettingsButton.style.display = "none";


 
    return;
  }


  if (state === 'close'){
    closeSettingsButton.style.display = "none";
    containerOfBtns.style.display = "none";
    Object.assign(overlayBackground.style, {
      background: "none",
      boxShadow: "none",
      border: "none",
      animate: "none",
    })
    openSettingsButton.style.display = "";
    return;
  }
};

const keyframes = [
  { top: '-90rem'
   },
  { top: '-1rem'
   }      
];

const options = {
  duration: 1500,    
  easing: 'linear',    
  fill: 'forwards'     // Keep element in final postion 
};


openSettingsButton.onclick = () => {
  settings('open');
};

closeSettingsButton.onclick = () => {
  settings('close');
};
settings('close');
overlayBackground.animate(keyframes, options); // sets property 
