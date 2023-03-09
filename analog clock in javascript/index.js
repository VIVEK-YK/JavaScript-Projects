function update(){
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hr = date.getHours();
    // get Degree in per sec, min and hour
    var secDeg = sec*6;
    var minDeg = min*6;
    var hrDeg = hr * 30 + min / 2 +sec / 120;

    document.querySelector('#second').style.transform = 'rotate(' + secDeg + "deg)"
    document.querySelector('#minute').style.transform = 'rotate(' + minDeg + "deg)"
    document.querySelector('#hour').style.transform = 'rotate(' + hrDeg + "deg)"
}

setInterval(update,1000)