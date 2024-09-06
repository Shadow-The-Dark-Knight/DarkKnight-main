
const openSettingsButton = document.getElementById('setting-icon');
const closeSettingsButton = document.querySelector(".js-exit");
const containerOfBtns = document.querySelector('.js-navbar');
const overlayBackground = document.querySelector('.js-overlay');


// Function for changing the state of the settings
  function settings(state) {

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


  // if the state was not matched make a error
  
  
 

}


openSettingsButton.onclick = () => {
  settings('open');
};

closeSettingsButton.onclick = () => {
  settings('close');
};
settings('close');
