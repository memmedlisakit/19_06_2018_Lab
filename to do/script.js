function $(id){
    let el = document.getElementById(id);
    return el;

}


function addTask(){
    //div
    let div = document.createElement('div');
    div.style.border = "1px solid black";
    div.style.width = "100%";
    div.style.height = "50px";

    //span
    let span = document.createElement('span');
    span.innerText = $('inp').value;
    div.appendChild(span);

    //iconcheck
    let iconCheck = document.createElement('i');
    iconCheck.className ="fas fa-check";
    iconCheck.style.cssFloat = "right";
    iconCheck.style.color = "red";
    iconCheck.addEventListener("click", function(){
        let delElement = iconCheck.previousElementSibling.previousElementSibling.innerText;
        iconCheck.previousElementSibling.previousElementSibling.innerHTML = `<del>${delElement}</del>`;
        iconCheck.style.color = "green";
    
    })

    //icontrash
    let iconTrash = document.createElement('i');
    iconTrash.className = "fas fa-trash-alt";
    iconTrash.style.cssFloat = "right";
    iconTrash.addEventListener('click', function(){
        $('todo').removeChild(div);
    })
    

    //append here
    div.appendChild(iconTrash);
    div.appendChild(iconCheck);
    $('todo').appendChild(div);
}

$('add').addEventListener("click", addTask);
