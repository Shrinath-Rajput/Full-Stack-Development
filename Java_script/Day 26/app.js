// async function

// async function greet()
// {
//     console.log( "Good morning");
// }
// greet().then(()=>
// {
//     let num=prompt("Enter Your number")
//     return(num)
// })
// greet().then((num)=>
// {
//     if (num%2==0)
//     {
//         console.log("Even Number")
//     }else{
//         console.log("odd Number")
//     }
// }
// )
// greet();



// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function colorText() {

//     let h1 = document.querySelector('h1');
//     let text = h1.innerText;
    
//     h1.innerHTML = "";   // clear kara

//     for (let char of text) {
//         let span = document.createElement("span");
//         span.innerText = char;
//         span.style.color = "red";   // color
//         h1.appendChild(span);

//         await delay(300);   // 300ms wait
//     }
// }


// function delay()
// {
//    return new Promise((resolve,rejected)=>
// {
//     setTimeout(()=>
//     {
//         console.log("Shri");
//     },2000)
// })
   

   


// async function color()
// {
// h1=document.querySelector('h1');
// console.dir(h1)
// }


let h1 = document.querySelector("h1");
h1.style.color = "blue";


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeColor() {
    let h1 = document.querySelector("h1");

    await delay(1000);
    h1.style.color = "red";

    await delay(2000);
    h1.style.color = "green";

    await delay(3000);
    h1.style.color = "blue";
}

changeColor();
