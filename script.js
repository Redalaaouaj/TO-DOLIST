let task=document.getElementById("task");
let ul= document.querySelector("ul");
document.getElementById("add").addEventListener("click",function(){
    if(task.value===''){
        alert('You must write something !');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=task.value;
        ul.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    task.value="";
    SaveData();
})

ul.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
},false)

function SaveData(){
    localStorage.setItem("data", ul.innerHTML);
}
function ShowData(){
    ul.innerHTML=localStorage.getItem("data");
}
ShowData();