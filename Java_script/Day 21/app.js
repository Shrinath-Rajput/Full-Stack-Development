// let print=[1,2,3,4,5,'shri','virat'];

// let arr=(el)=>
// {
//     console.log(el);
// }
// print.forEach(arr);


// let shri=[1,2,3,4];
// let double=(el)=>
// {
//     console.log(el*2);
// }
// shri.forEach(double);



// [2,4,6,8,10].every((arr1)=>

//     arr1%2==0);

// let num=[1,2,3,4];
// let finalval=num.reduce((res,el)=>res+el)
// console.log(finalval)


// let arr1=[1,111,11,12,121,13,134,14,156,178,122,190,187,200,100000,1200];
// let printmax=arr1.reduce( (max,el) =>
// {
//     if (el>max){
//         return el
//     }else{
//         return max
//     }
// });

// console.log(printmax)


// let nums=[10,20,30,40,50,60,70,80,90,100];
// let result=nums.every( ( el)=> el%10==0);
// console.log(result)

// let arr1=[1,111,11,12,121,13,134,14,156,178,122,190,187,200,100000,1200];
// let final=arr1.reduce( (res,el)=>{

//     if (res<el)
//     {
//         return res;
//     }else{
//         return el;
//     }

// } );
// console.log(final)


function max(...args)
{
    return args.reduce( (max,el)=>
{
    if (el>max)
    {
        return el;
    }else{
        return max;
    }

    

    
})
}
console.log(max(10,20,30,50,1));


function min(...args){
     return args.reduce((min,el)=>
    {
        if (el<min)
        {
            return el;
        }
        else{
            return min;
        }
    })

}
console.log(min(0,-1,-2,-3,1,2,5))