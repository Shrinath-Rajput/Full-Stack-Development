let url="https://catfact.ninja/fact";
let btn=document.querySelector("button");
let h1=document.querySelector("h1");

let urldog="https://dog.ceo/api/breeds/image/random";


h1.addEventListener("click",async()=>
{
     h1.style.backgroundColor= "red";
})







btn.addEventListener("click",async ()=>{

    console.log("Button was clicked");
    let fact= await getres();
    console.log(fact);
    let key=document.querySelector('#res');
    key.innerText=fact;
   

})


async function getres()
{
    try{
        let res=await axios.get(url);
         return res.data.fact;
        
        

    }catch (e){
        console.log("error",e)

    }
}


// dog api

let img=document.querySelector("#btn1");

img.addEventListener('click',async()=>
{
    let link=await showimg();
    console.log(link);
    let imgp=document.querySelector('#kadak');
    imgp.setAttribute("src",link);
    
})


async function showimg() {

    try{
        let show=await axios.get(urldog);
        return show.data.message;
    
}catch(e)
{
    return `Error is Founded ${e}`;
}
}