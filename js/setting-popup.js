// Get the buttons
const openSettingsButton = document.getElementById('setting-icon');
const closeSettingsButton = document.querySelector(".js-exit");

// Function for changing the state of the settings
function settings(state) {


  if (state === 'open'){
    // Remove the display on the element which then causes it to default back to your CSS
    closeSettingsButton.style.display = "";

    // TODO: show the settings tab

    // End function
    return;
  }


  if (state === 'close'){
    // Set display to none to hide the button
    closeSettingsButton.style.display = "none";
    
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

const qualtiyContainer = document.querySelector('.js-quality-container');
const controlsContainer = document.querySelector('.js-controls-container');
const chatContainer = document.querySelector('.js-chat-container');
const keybindsContainer = document.querySelector('js-keybinds-container');
const gameMechanicsContainer = document.querySelector('.js-game-mechanics-container');

function container(condition) {
  if (condition === 'open') {
    // allows container to appear
    qualtiyContainer.classList.add('.is-container');

    return;
  }
  
  if (condition === 'closed') {
    // makes container disapper 
    qualtiyContainer.classList.remove('.is-container');

    return;
  }
}

qualtiyContainer.onclick = () => {
  container('open');
}

qualtiyContainer.onclick = () => {
  container('closed');
}
