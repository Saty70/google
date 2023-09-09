const audio = new Audio("tudutudu.mp3");
const buttons = document.querySelectorAll("button");
const textInput = document.getElementById("twxt");
const natio = document.getElementById("nation");
let counter = 1;

let isPlaying = false; // Flag to track the audio playback state

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (isPlaying) {
        textInput.value = "";
      // If audio is playing, pause it
      audio.pause();
    } else {
        textInput.value = "Have a nice day ☀️";
        audio.currentTime = 0;
      // If audio is paused, play it
      audio.play();
    }
    isPlaying = !isPlaying; // Toggle the playback state
  });
});

natio.addEventListener("click",()=>{
  if(counter%2!=0){
    natio.innerText="United Kingdom"
    counter++;
  }
  else{
    natio.innerText="India"
    counter++;
  }
})