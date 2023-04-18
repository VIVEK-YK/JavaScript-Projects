console.log('hello')

let input = document.querySelector('.textInput')
let vol = document.getElementById('volRange')
let speed = document.getElementById('speedRange')
let btn = document.querySelector('#button')

let speech = new SpeechSynthesisUtterance();
 
btn.addEventListener('click',(e)=>{
  e.preventDefault();
  speech.lang = "hi-IN"
  speech.text = input.innerText;
  speech.volume = vol.value;
  speech.rate = speed.value;
  window.speechSynthesis.speak(speech);
})