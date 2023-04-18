console.log('hell');
let p = document.querySelector('p');
navigator.getBattery().then((battery)=>{
    let batteryLevel = (battery.level)*100;
    // let batteryLevel = 67;
    p.innerHTML = `Your Battery Level is ${batteryLevel}%`

    let power1 = document.querySelector(".power1");
    let power2 = document.querySelector(".power2");
    let power3 = document.querySelector(".power3");
    let power4 = document.querySelector(".power4");
    let power5 = document.querySelector(".power5");
    let power6 = document.querySelector(".power6");
    let power7 = document.querySelector(".power7");
    let power8 = document.querySelector(".power8");
    let power9 = document.querySelector(".power9");
    let power10 = document.querySelector(".power10");
    if(batteryLevel>0 && batteryLevel>=10){
        power1.style.backgroundColor = 'blue';
    }
    if(batteryLevel>0 && batteryLevel>=20){
        power2.style.backgroundColor = 'blue';
    }
    if(batteryLevel>0 && batteryLevel>=30){
        power3.style.backgroundColor = 'blue';
    }
    if(batteryLevel>0 && batteryLevel>=40){
        power4.style.backgroundColor = 'blue';
    }
    if(batteryLevel>0 && batteryLevel>=50){
        power5.style.backgroundColor = 'blue';
    }
    if(batteryLevel>0 && batteryLevel>=60){
        power6.style.backgroundColor = 'blue';
    }
    if(batteryLevel>0 && batteryLevel>=70){
        power7.style.backgroundColor = 'blue';
    }
    if(batteryLevel>0 && batteryLevel>=80){
        power8.style.backgroundColor = 'blue';
    }
    if(batteryLevel>0 && batteryLevel>=90){
        power9.style.backgroundColor = 'blue';
    }
    if(batteryLevel>0 && batteryLevel>=1000){
        power100.style.backgroundColor = 'blue';
    }
})