console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    info() {
        
    }

    soundOff() {
        
    }

    addHobby(hobby) {
      this.hobbies.push(hobby);
    }

    removeHobby(hobby) {
        let index = this.hobbies.indexOf(hobby);
	    this.hobbies.splice(index, 1);
    }

    greeting() {
        console.log("Hello fellow person!")
    }

}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies)
        this.occupation = occupation;
    }
    greeting() {
        console.log("Hi, I code.")
    }
   
}

 // Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let coder = new Coder("personsName", 1, "placeOfResidence", ["hobby1", "hobby2", "hobby3"], "Full Stack Web Developer");

 console.log(coder)
 console.log(coder.greeting())




 // Exercise 4 Section
 console.log("EXERCISE 4:\n==========\n");

class Calculator {

    add(a, b) {
        let res;

        if (b == undefined) {
            res = this.result + a;
        } else {
            res = a + b;
        }

        this.result = res;
        return this.result;
    }

    subtract(a, b) {
        let res;

        if (b == undefined) {
            res = this.result - a;
        } else {
            res = a - b;
        }

        this.result = res;
        return this.result;
    }

    multiply(a, b) {
        let res;

        if (b == undefined) {
            res = this.result * a;
        } else {
            res = a * b;
        }

        this.result = res;
        return this.result;
    }

    divide(a, b) {
        let res;

        if (b == undefined) {
            res = this.result / a;
        } else {
            res = a / b;
        }

        this.result = res;
        return this.result;
    }

    display() {
        console.log(this.result);
    }
}

let calc = new Calculator();

calc.add(1,1)
calc.subtract(1)
calc.multiply(10)
calc.divide(2)
calc.display();
