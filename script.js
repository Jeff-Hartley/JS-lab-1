// Example: Declaring and using a variable
let greeting = "Hello, World!";
console.log(greeting); // This should print "Hello, World!" in the console
 
// creating some variables.
let studentName = "Jeff";
let studentAge = 31;
let isEnrolled = true;

// logging the initital variables.
console.log(studentName, studentAge, isEnrolled);

//new variables for the different types.
let isString = "This is a string.";
let isNumber = 2;
let isBoolean = true;
let isArray = ['Apples', 'Oranges', 'Grapes', 'Pineapple', 'Bananas', 'Kiwi'];
let person = {
    firstName: "Jeff",
    lastName: "Hartley",
    age: 31
  };

  // using the variables.
  console.log(`${person.firstName} is my first name. ${person.lastName} is my last name. I am ${person.age} years old. In February I will be ${(person.age + 1)}. This was done with an object`); // object
console.log(`${isString}. However ${isNumber} is a number. If 1+1=2 that would be ${isBoolean} This is an example of boolean. Some fruit I like are ${isArray[0]}, ${isArray[3]}, ${isArray[4]} & ${isArray[5]}. This was done with an array.`);


// some math
let newNumber = 5;
console.log("Initial value is", newNumber);
newNumber ++; // adds 1
console.log("Add 1, it is now", newNumber);
newNumber --; // subtracts 1
newNumber --; // subtracts another, making it minus 2 TOTAL
console.log("Subtract 2 and it is", newNumber);
newNumber *= 3; // will multiply by 3
console.log("Times by 3 and it is", newNumber);
newNumber --; // subtracts 1
console.log("Minus 1, it is", newNumber);
newNumber %= 2; // the modulo of 2. divide by 2 and shows the remainder.
console.log("The modulo of it when divded by 2 is", newNumber);
newNumber = (newNumber + 7) / 2; //PEMDAS. will do brackets first and then divide by 2
console.log("Using PEMDAS, if we bracket our number and add 7 to it, then divide it by two it is now", newNumber);

// comparisson operators
let lowNumber = 1;
let highNumber = 1000;

console.log("Now I have two new variables. lowNumber has a value of 1. highNumber has a value of 1000.");
console.log("Is lowNumber greater than highNumber? I don't think so. It should be false.");
console.log(lowNumber > highNumber); // testing if 1 is greater than 1000
console.log("Now is lowNumber less than highNumber? This should be true.");
console.log(lowNumber < highNumber); // testing if 1 is less than 1000
console.log("Are they equal? Absolutely not.");
console.log(lowNumber == highNumber); // testing if 1 is equal to 1000
console.log("Since they are not equal, the not equal operator will be true!")
console.log(lowNumber != highNumber); // testing if 1 is not equal to 1000


// true / false variables for AND, OR and NOT operators.
let shouldBeTrue = true;
let shouldBeFalse = false;

// AND operator
console.log("I have made two variables, shouldBeTrue and shouldBeFalse. They have the boolean values of their name.");
console.log("Using the AND operator, if shouldBeTrue and shouldBeFalse are both true, then it is true. If one is true and one is false, it is false. If they are both false, it is false.");
console.log(shouldBeTrue && shouldBeFalse); 
console.log("Since shouldBeTrue and shouldBeFalse are not both true, it was false.");
//OR operator
console.log("Using the OR operator, if one of the variables OR the other variable is true, it will be true. If they are both false, it will be false.");
console.log(shouldBeTrue || shouldBeFalse); 
console.log("Since shouldBeTrue was true, the statement is true. All the operator needs is one variable to be true.");
//NOT operator
console.log("Finally comes the NOT operator. It flips the value of the variable.");
console.log("shouldBeTrue will now be false. shouldBeFalse will now be true.");
console.log("This is shouldBeTrue,", !shouldBeTrue); // will be false
console.log("This is shouldBeFalse,", !shouldBeFalse); // will now be true

console.log("Very interesting stuff. Thanks for checking out the console!");

