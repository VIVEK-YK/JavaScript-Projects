
let input = document.querySelector("#input");
let add = document.querySelector("#add");
let edit = document.querySelector("#edit");
let message = document.querySelector(".message");
let todoBox = document.querySelector(".todoBox");

add.addEventListener("click", addData);

let box = [];


function addData(){
    box = `<div class="output">
    <div class="message">${input.value}</div>
    <div class="buttons">
        <img src="edit.png" onclick="editData(this)" alt="" id="edit">
        <img src="delete.png" onclick="deleteData(this)"  alt="" id="delete">
    </div>
</div>`;
    todoBox.innerHTML += box
    input.value = "";
    
}


function editData(e){
    console.log(e.parentElement.previousElementSibling.innerHTML);
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

function deleteData(e){
    e.parentElement.parentElement.remove();
}