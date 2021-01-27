let addToDoButton = document.getElementById('add-to-do');
let toDoContainer = document.getElementById('to-do-container');
let inputField = document.getElementById('input-field');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.Value;
    toDoContainer.appendChild(paragraph);
})