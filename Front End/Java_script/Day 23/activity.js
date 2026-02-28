let btn=document.querySelector('.btn');
let header=document.querySelector('.header1');
let scema=document.querySelector('input');
let color=document.querySelector(".header1");

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
color.addEventListener("click",function()
{
    console.dir(this);
    this.style.backgroundColor="blue";
})

// keyevenet

scema.addEventListener("keydown",function(event)
{
    console.log(event.this);
    this.style.backgroundColor="gray";
})
scema.addEventListener("keyup",function(event)
{
    console.dir(event.this);
    this.style.backgroundColor="green"
    this.style.color="blue";
})
scema.addEventListener("click",function(event)
{
    console.log(event.this);
    this.style.background="white";
})
scema.addEventListener("dblclick",function(event)
{
    console.log(event.this);
    this.style.background="red";
})