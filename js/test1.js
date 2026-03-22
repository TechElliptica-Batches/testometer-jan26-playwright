
// Object 
// attribute and behaviour = object
// Human = name,age, height, width
// behaviour = talk, walk

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(content){
        console.log(this.name , " - " , content);
    }
}

class Emp extends Human{
    speak(content){
        console.log(this.name , "[" ,this.age,"]" , " - " , content);
    }
}
// method / fucntion overriding 
const h1 = new Emp("Vaibhav", 35);
h1.speak("Hello")

const h2 = new Emp("Sunil", 30);
h2.speak("How r u ");

const h3 = new Emp("Arsh", 20);
h3.speak("I m good.");
h2.speak("Good morning")

// public - i am available everywhere
// private - i am available only in class
// protected - i am availnle in class, inside inherited class as well