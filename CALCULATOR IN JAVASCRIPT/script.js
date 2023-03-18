console.log('hello');
const btn = document.querySelectorAll('.btn');
let result = document.querySelector('.input');
btn.forEach(element => 
    element.addEventListener('click',()=>{
        result.textContent += element.textContent;
        if(element.textContent =='C'){
            result.textContent = '';
           
        }
        let calc = document.querySelector('.equal');
        calc.addEventListener('click',()=>{
            console.log(eval(result.textContent))
            result.textContent = eval(result.textContent)
            calc.style.backgroundColor = 'blue';
            setTimeout(()=>{
                calc.style.backgroundColor = 'white';
            },500)
        })
    })
);


