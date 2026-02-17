let btn=document.querySelector("button");

btn.addEventListener("click",function(event)
{
    
    let email=document.querySelector("#Email").value;
    let pass=document.querySelector("#Password").value;
    if (email==""|| pass=="")
    {
        event.preventDefault()
        alert("Fill the form")
    }
})