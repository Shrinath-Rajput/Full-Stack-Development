let btn=document.querySelector("#btn");
let ui=document.querySelector(".record");
let int=document.querySelector("#int");

btn.addEventListener("click",function(event)
{
    let item=document.createElement('li');
    item.innerText=int.value;
    ui.appendChild(item);
    
    int.value="";

})