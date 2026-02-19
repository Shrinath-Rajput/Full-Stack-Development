let btn=document.querySelector("#btn");
let ui=document.querySelector(".record");
let int=document.querySelector("#int");


btn.addEventListener("click",function()
{
    let item=document.createElement('li');
    item.innerText=int.value;

    let delbtn=document.createElement('button');
    delbtn.innerText='delete';
    delbtn.classList.add('delete');


    


    


    item.appendChild(delbtn);
    ui.appendChild(item);
    
    int.value="";

})

 let del=document.querySelectorAll('.delt')
for (delt of del)
{
    delt.addEventListener('click',function()
{
    let par=this.parentElement;
    par.remove()
})
}

ui.addEventListener("click",function(event)
{    
     
    if(event.target.nodeName=="BUTTON")
    {
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("Delete");
    }
})