const inputArray=[];
document.querySelector('.js-add-button')
    .addEventListener('click',() => {
        addTodo();
    });
function addTodo(){
    const inputElement=document.querySelector('.js-input');
    const dateInputElement=document.querySelector('.js-date-input');
    const name=inputElement.value;
    const date=dateInputElement.value;
    inputArray.push({name,date});
    inputElement.value='';
    dateInputElement.value='';
    renderTodoList();
}
function renderTodoList(){
    const divElement=document.querySelector('.js-container');
    let htmlElement='';
    inputArray.forEach((todoObject,index) => {
        const {name,date}=todoObject;
        htmlElement+=`<div>${name}</div>
                    <div>${date}</div>
                    <button onclick="
                        inputArray.splice(${index},${index+1});
                        renderTodoList();
                    " class="delete-button js-delete-button">
                        Delete
                    </button>`;
    });
    divElement.innerHTML=htmlElement;
}
document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton,index) => {
        deleteButton.addEventListener('click',() => {
            inputArray.splice(index,index+1);
            renderTodoList();
        });
    });