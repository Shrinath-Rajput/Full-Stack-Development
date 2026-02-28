// function evenno()
// {
//     let a=prompt("ENter the Your Number :")
//     if (a%2==0)
//     {
//         console.log("EVen No")
//     }
//     else{
//         console.log("odd no")
//     }
// }
// evenno();


// function noise()
// {
//     let rand=Math.floor(Math.random()*6 )
//     console.log(rand)
// }

// noise()


// function shri(name,age)
// {
//     name=prompt("Enter your name")
//     age=prompt("Enter your age ")
//     console.log(name)
//     console.log(age)
// }



// function votting(age)
// {
//     if (age>=18)
//     {
//         print("elsible for vote ")
//     }
//     else{
//         print("Not elisible for vote ")
//     }
// }
// votting();
// shri();


// function average()
// {
//     let a=prompt("Enter your first value");
//     let b=prompt("Enter your second value");
//     let c=prompt("Enter your third number  ");

//     let avr=(a+b+c) /3;
//     console.log(avr);

// }
// average();

// function table()
// {
//     let n=prompt("Enter your table number ");

//     for (let i=1; i<11;i++)
//     {
//         console.log(n*i)
//     }
// }
// table()

// function getsum(n)
// {
//     let sum=prompt("Enter your no")
//     for (let i=1;i<=n;i++)
//     {
//         sum=sum+i
//     }
//     return sum
// }
// console.log(getsum(10))


let str=['shrinath','king','raja'];

function concat(str)
{
    let result;
    for (let i=0;i<str.length;i++)
    {
        result +=str[i];
    }
    return result
}

console.log(concat(str))