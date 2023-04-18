console.log('hello');


let x = setInterval(() => {
    let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
 
let releaseDate = new Date("may 5 2023 15:33:00").getTime();
let today = new Date().getTime();

// remaining Time
let remTime = releaseDate-today

if(releaseDate<today){
    document.querySelector('.countDown').textContent = "Session Expired"
}

// 1s = 1000 ms 
// 1 min = 60 sec
// 1 hour = 60 min
// 1 day = 24 hrs

let myDay = Math.floor(remTime / (24*60*60*1000));
let myHour = Math.floor((remTime % (24*60*60*1000))/(60*60*1000));
let myMinute = Math.floor(((remTime % (24*60*60*1000))%(60*60*1000))/(60*1000));
let mySec = Math.floor((((remTime % (24*60*60*1000))%(60*60*1000))%(60*1000))/1000)

days.textContent = myDay;
hours.textContent = myHour;
minutes.textContent = myMinute;
seconds.textContent = mySec;

if(parseInt(days.textContent) < 10){
    days.innerHTML = "0" + days.textContent
}
if(parseInt(hours.textContent) < 10){
    hours.innerHTML = "0" + hours.textContent
}
if(parseInt(minutes.textContent) < 10){
    minutes.innerHTML = "0" + minutes.textContent
}
if(parseInt(seconds.textContent) < 10){
    seconds.innerHTML = "0" + seconds.textContent
}
 if(days.textContent <= 0 && hours.textContent <= 0 && minutes.textContent <= 0 && seconds.textContent <= 0){
    clearInterval(x);
    
 }


}, 1000);







// console.log(myDay)
// console.log(myHour)
// console.log(myMinute)
// console.log(mySec)










// console.log(releaseDate)
// console.log(today)
// console.log(remTime)
