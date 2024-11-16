const Txt = document.getElementById("Txt");
const list = document.getElementById("list");

function addlist(){
     if(Txt.value==''){
        alert("You must enter a list item")
     }
     else{
        let li= document.createElement("li");
        li.innerHTML=Txt.value;
        list.appendChild(li);
        span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
        savedata();
     }
}
list.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
});
function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function getdata(){
    list.innerHTML=localStorage.getItem("data");
}
getdata();