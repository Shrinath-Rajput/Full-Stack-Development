// let str="       SHrinath   ";

// console.log(str.trim())

// let str="    I Love King       ."
// console.log(str.toUpperCase())
// console.log(str.trim())
// console.log(str.indexOf('Love'))


// let msg="    dyp   "
// let newmsg=msg.trim().toUpperCase();
// console.log(newmsg);


// let clg="dyp is a eon clg of enginnering of kolhapur ";
// console.log(clg.slice(10,13));
// console.log(clg.slice(-2));
// console.log(clg.slice(1,10).toUpperCase());

// console.log(clg.replace("dyp","Sit"));
// console.log(k.repeat(2));

// let str="help           ";
// console.log(str.trim().toUpperCase())


let student=['Shrinath',99,'Virat ',100]
let fav_hobby=['cricket','coding',18]

student.push('karan')
student.unshift(1000)

console.log(student)

console.log(student.indexOf('Shrinath'))
console.log(student.includes(100))

console.log(student.concat(fav_hobby))
console.log(student.reverse())

console.log(student.slice(1,3))
console.log(fav_hobby.slice(1,3))
console.log(student.slice(-1))

console.log(student.splice(3))
console.log(student.splice(3))

console.log(student.sort())
console.log(fav_hobby.sort())


let month=['jan','jul','mar','aug'];
console.log(month)