let getseq=[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector('h2');
let btns=["red1","yellow1","blue1","green1"];


// kontya pn key vr click kel tr game is start this condition
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("Game Is started");
        started=true;
        LevelUp();
    }

})

function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
{
        btn.classList.remove("flash");
    },1000);
    
}
function uerflash(btn)
{
    btn.classList.add("uerflash");
    setTimeout(function()
{
        btn.classList.remove("uerflash");
    },1000);
    
}

function LevelUp()
{
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*btns.length);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    getseq.push(randcolor);
    console.log(getseq);
    btnflash(randbtn);
}

function checkans()
{
    // console.log(`current level ${level}`);
    let indx=level -1;
    if (userseq[indx] === getseq[indx])
    {
        console.log("Same Value");

    }else{
        h2.innerText=`Game is Over! Press any key to Start.`;
    }
}




function keypress()
{
   let btn=this;
   uerflash(btn)
   usercolor=btn.getAttribute("id");
   console.log(usercolor);


   checkans();
}

let allbtn=document.querySelectorAll(".btn")


    for (buttonbtns of allbtn)
    {
        buttonbtns.addEventListener('click',keypress)
    }
