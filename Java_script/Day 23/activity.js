let btn=document.querySelector('.btn');
let header=document.querySelector('.header1');
let scema=document.querySelector('.area');

function calling()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    
    let color=`(${red},${green},${blue})`;
    return color
}

btn.addEventListener('click', function()
{
    let randomcolor=calling();
    header.innerText=randomcolor;
    
    scema.style.backgroundColor=randomcolor;
    scema.value=randomcolor;
    
})
