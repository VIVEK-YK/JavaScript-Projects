console.log('hell');

let mSeconds = document.querySelector(".mSeconds")
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");


let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;

function stopWatch(){
    msec++;
    if(msec == 100){
        sec++;
        msec = 0;
    }
    if(sec == 60){
        min++;
        sec = 0;
    }
    if(min == 60){
        hr++;
        min = 0;
    }
    let mSecStr = msec < 10? "0"+ msec: msec;
    mSeconds.textContent = mSecStr; 
    let secStr = sec < 10? "0"+ sec: sec;
    seconds.textContent = secStr; 
    let minStr = min < 10? "0"+ min: min;
    minutes.textContent = minStr; 
    let hrStr = hr < 10? "0"+ hr: hr;
    hours.textContent = hrStr; 
}

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

start.addEventListener('click',()=>{
    let int = setInterval(stopWatch, 10);
    stop.addEventListener("click",()=>{
        clearInterval(int);
    })
    reset.addEventListener("click",()=>{
        clearInterval(int);
        mSeconds.textContent = "00";
        seconds.textContent = "00";
        minutes.textContent = "00";
        hours.textContent = "00";
    })
})





