
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

// let btns=document.querySelectorAll('.buttonk');


// for (btn of btns)
// {
// btn.addEventListener('click',sayhello);
// btn.addEventListener ('dblclick',sayhii);
// }

// function sayhello()
// {
//     console.log("Hello Who are you??")
// }

// function sayhii()
// {
//     alert("open webiste")
// }

// let bot=document.querySelector('.buttonk');
// bot.addEventListener("click", function()
// {
//     console.dir(this);
//     this.style.backgroundColor="red";
// })
// let btn=document.querySelector(".button1");

// let sub=addEventListener("click",function()
// {
//     let email=document.querySelector('#exampleInputEmail1');
//     let password=document.querySelector('#exampleInputPassword1');
//     if (email==""|| password=="")
//     {
//         this.alert("Please enter and fill info")
//     }
// })

let btn=document.querySelector("#sumbit123");

btn.addEventListener("click",function(event)
{
    let email=document.querySelector("#exampleInputEmail1").value;
    let pass=document.querySelector("#exampleInputPassword1").value;
    if (email=="" || pass=="")
    {
        event.preventDefault()
        alert("Firstly, Fill this form and go ahead____")
    }
})

let form=document.querySelector("form");
form.addEventListener("submit",function(event)
{
    event.preventDefault()
    let email=document.querySelector("#exampleInputEmail1");
    let pass=document.querySelector("#exampleInputPassword1");
    console.log(email.value);
    console.log(pass.value);

    alert(`Hi! Your Email is  ${email.value}  and your password is ${pass.value} save is ` );

})