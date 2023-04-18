console.log('ej');
window.onload = () => {
    let button = document.querySelector('button');
    button.addEventListener('click', ()=>{
        // let url = 'https://dummyjson.com/comments'
        fetch('https://dummyjson.com/comments')
        .then((Response) => {
            if(!Response.ok){
                throw new Error ('error in resoponse')
            }
            return Response.json();
        })
        .then((data) => {
            console.log(data.comments[0]);
            console.log(data.comments[0].id);
            console.log(data.comments[0].user.username);
            let length = data.comments.length
            let div = document.querySelector("div");
            for(let i = 0; i<length; i++){
                div.innerHTML += 
                `<div>
                <span>${data.comments[i].id}.</span> 
                <span class = "bold">${data.comments[i].user.username}</span>:- &nbsp;&nbsp;&nbsp;
                <span> ${data.comments[i].body}</span> </div>
                <hr>`
            }

        })
        .catch((error)=>{
            console.error('There has been a problem with your fetch operation:', error)
        })












        button.style.display = 'none';
    })
}