// Get the buttons
const openSettingsButton = document.getElementById('setting-icon');
const closeSettingsButton = document.querySelector(".js-exit");
const containerOfBtns = document.querySelector('.js-navbar')

// Function for changing the state of the settings
function settings(state) {


  if (state === 'open'){
    // Remove the display on the element which then causes it to default back to your CSS
    closeSettingsButton.style.display = "";
    containerOfBtns.style.display = "";
    openSettingsButton.style.display = "none";

    // TODO: show the settings tab

    // End function
    return;
  }


  if (state === 'close'){
    // Set display to none to hide the button
    closeSettingsButton.style.display = "none";
    containerOfBtns.style.display = "none";
    openSettingsButton.style.display = "";
    // TODO: hide the settings tab

    // End function
    return;
  }


  // if the state was not matched make a error
  throw new Error(`State '${state}' is not accepted`);
  
 

}

// Setup event lis for buttons
openSettingsButton.onclick = () => {
  settings('open');
};

closeSettingsButton.onclick = () => {
  settings('close');
};
settings('close');

