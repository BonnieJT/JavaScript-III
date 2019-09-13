/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding means that this refers to whatever comes before the . in calling a function, so if I had an object called "Bonnie" and invoked a function within it using this, this would refer to the object ie this.name would be the name listed in the object called "Bonnie".
* 2. Explicit binding works with .call .apply and .bind to tell the function what variable the this keyword means
* 3. New binding means that the this keyword inside a constructor object is used to create a new object when the constructor is called with the new keyword - this then refers to the new object instead of the constructor object
* 4. Window binding makes the this keyword refer to the variable for the scope it resides in
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myAge(age) {
    console.log(this);
    return age;
}
myAge(35);

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding
function User(atts) {
    this.name = atts.name,
    this.email = atts.email,
    this.hello = function() {
        console.log(`Hello, my name is ${this.name}. My email address is ${this.email}`);
    };
};
const john = new User({
    name: 'John', 
    email: 'test@test.com'
});
john.hello();
// Principle 4
const mySkills = [HTML, JS, CSS];
// code example for Explicit Binding

