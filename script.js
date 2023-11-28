   function addtask(){
    const input=document.getElementById("input"); //input
    const list=document.getElementById("list") //ul    
      
    if(input.value==""){
        alert("Please Enter a Task");
    }
    else{
        const listItem=document.createElement("li")
    listItem.innerHTML=`<span>${input.value}</span><div>
    <button id="edit" onclick="taskedit(this)" class="btn bg-success text-white"><i class="fa-solid fa-pen-to-square"></i></button>
    <button id="delete" onclick="taskdelete(this)" class="btn bg-danger text-white"><i class="fa-solid fa-trash"></i></button>
    </div>`
    list.appendChild(listItem);
     input.value="";
    }
}
function taskdelete(button){
//     var listItem = button.closest('li');
//   listItem.parentNode.removeChild(listItem);
var listItem = button.parentNode.parentNode;
listItem.parentNode.removeChild(listItem);
}
function taskedit(button){
    var listItem = button.parentNode.parentNode;
    var taskText = listItem.innerText;   
    var newtext = prompt('Edit Task:', taskText);
    if (newtext !== null && newtext !== '') {        
    listItem.querySelector('span').innerText=newtext;      
    }
}
    




