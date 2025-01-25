var audio;
var isPlaying = false;

function playStream() {
  const button = document.getElementById("buttonPlay");
  
  if (audio && isPlaying) {
    audio.pause();
    isPlaying = false;
    button.textContent = "PLAY"; // Change text to "Play"
  } else {
    if (!audio) {
      audio = new Audio("https://stream.zeno.fm/c3vth2hpychvv");
    }
    audio.play();
    isPlaying = true;
    button.textContent = "PAUSE"; // Change text to "Pause"
  }
}
function openViraSoftware() {
  window.open('https://bento.me/virasoftware');
}
function openGitHub() {
  window.open('https://github.com/LeonidasChalikias');
}
function openSerenDipiWare() {
  window.open('https://serendipiwa.re/?ref=popmusicradio');
}
function openAboutUs() {
  window.open('aboutus.html');
}