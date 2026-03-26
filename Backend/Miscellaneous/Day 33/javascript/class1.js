class Student{
    constructor (name,age)
    {
        this.name=name;
        this.age=age;

    }
    talk()
    {
        console.log(`Hii ! I am ${this.name} ` )
    }
}

// let p1=new Student("Shrinath",25)

class Person extends Student{
    constructor( name,age,marks,city)
    {
        super(name,age);
        this.marks=marks;
        this.city=city;

    }
    greet()
    {
        return "Hello"
    }
}

let s2=new Person("Shrinath",25,95,"Kolhapur")