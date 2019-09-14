/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding means that this refers to whatever comes before the . in calling a function, so if I had an object called "Bonnie" and invoked a function within it using this, this would refer to the object ie this.name would be the name listed in the object called "Bonnie".
* 2. Explicit binding works with .call .apply and .bind to tell the function what variable the this keyword means
* 3. New binding means that the this keyword inside a constructor object is used to create a new object when the constructor is called with the new keyword - this then refers to the new object instead of the constructor object
* 4. Window binding makes the this keyword refer the window or global scope
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this); //this refers to the window

// Principle 2

// code example for Implicit Binding
let hello = {
    name: Bonnie,
    sayHello: function() {
        console.log(`Hello ${this.name}.`) //this refers to the variable 'hello'
    }
}

// Principle 3

// code example for New Binding
function User(atts) {
    this.name = atts.name,
    this.email = atts.email,
    this.hello = function() {
        console.log(`Hello, my name is ${this.name}. My email address is ${this.email}`); //this refers to the new variable we create with the User constructor
    };
};
const john = new User({
    name: 'John', 
    email: 'test@test.com'
});
john.hello(); //for this example this would refer to john

// Principle 4
// .call - for comma seperated arguments, / apply - for array of arguments, / .bind for 

// code example for Explicit Binding

