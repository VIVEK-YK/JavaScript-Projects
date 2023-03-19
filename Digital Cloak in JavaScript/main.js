let time = document.querySelector('.time');
function display(){
    let myDate = new Date();
    let sec = myDate.getSeconds();
    let minute = myDate.getMinutes();
    let hour = myDate.getHours();
    if(sec<10){
        sec = "0"+ sec
    }
    if(minute<10){
        minute = "0"+ minute
    }
    if(hour<10){
        hour = "0"+ hour
    }
    time.textContent = `${hour}:${minute}:${sec}`
}
setInterval(display, 1000)