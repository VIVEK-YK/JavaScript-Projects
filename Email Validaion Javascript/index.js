
let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let txt = document.getElementById('text');

let emailVal = document.getElementById('email');

emailVal.addEventListener('input',()=>{
  // console.log('hey');
  if(emailVal.value.match(regEx)){
    text.style.color = "blue";
    text.textContent = "Valid Email";
    return true;
  }
  else{
    text.style.color = "#a52a2a";
    text.textContent = "Invalid Email";
    return false;
  }
})