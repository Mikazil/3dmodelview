// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);


function seedemo() {
  document.getElementById('demowindow').style.display = "block";
  document.getElementById('menu').style.display = "none";
  document.getElementById('back').style.display = "block"
};

function backbutton() {
  document.getElementById('demowindow').style.display = "none";
  document.getElementById('menu').style.display = "flex";
  document.getElementById('instruction').style.display = "none";
  document.getElementById('about').style.display = "none"
  document.getElementById('back').style.display = "none"

};

function instruction() {
  document.getElementById('menu').style.display = "none";
  document.getElementById('instruction').style.display = "flex";
  document.getElementById('back').style.display = "block"

};

function about() {
  document.getElementById('menu').style.display = "none"
  document.getElementById('about').style.display = "block"
  document.getElementById('back').style.display = "block"

}