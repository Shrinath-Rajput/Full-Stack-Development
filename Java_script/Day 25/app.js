// function one()
// {
//     return 1;
// }

// function two()
// {
//     return one()+ one();
// }

// function three()
// {
//     let ans=two()+one();
//     console.log(ans);
// }

// three();

// call back hell

// function savetodb(data,sucess,failure)
// {
//     let internetspeed=Math.floor(Math.random()*10)+1
//     if (internetspeed>4)
//     {
//        sucess();

//     }else{
//         failure();
//     }
// }

// // callback
// savetodb("Shrinath", ()=>
// {
//      console.log('Data Was Saved ');
//      savetodb("king ",()=>
//     {
//         console.log("agian data saved")
//         savetodb("Hello ",()=>
//         {
//             console.log("saved");
//         },()=>
//         {
//             console.log("Not wet");
//         })
//     },()=>{
//         console.log("Not saved")
//     })
// },
// ()=>
// {
//     console.log("Weak Connection ")
// });

// promises

function savedb(data)
{
    return new Promise((success,failure)=>{
        let internetspeed=Math.floor(Math.random()*10);
        if (internetspeed>4)
        {
            success("Data is Saved ")
        }else{
            failure("Weak Connection")
        }
    })
}

// the and cathc method
let request=savedb("Shrinath ")
request.then(()=>
{
console.log(" Data1 saved .You Are GreatFul cause your dataset is stored");
savedb("Apna collage").then(()=>
{
    console.log("Data2 . saved")

    savedb("good").then(()=>
    {
        console.log("Virat the run machine  ");
    });

})
})
.catch(()=>
{
    console.log("No Way Data is not Save cause Connection Falied ");
})
