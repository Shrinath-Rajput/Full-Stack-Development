
//  on click 
// let btn=document.querySelector("#button1");
// console.dir(btn)

// function sayhello()
// {
//     alert ("Hello")
// }
// btn.onclick=sayhello;
// btn.onmouseenter=function()
// {
//     console.log("You entered")
// }


// Action Listerner

let btns=document.querySelectorAll('.buttonk');


for (btn of btns)
{
btn.addEventListener('click',sayhello);
btn.addEventListener ('dblclick',sayhii);
}

function sayhello()
{
    console.log("Hello Who are you??")
}

function sayhii()
{
    alert("open webiste")
}