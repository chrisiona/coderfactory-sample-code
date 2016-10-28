/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

    JavaScript is designed on a simple object-based paradigm. 
    
    An object is a collection of properties, and a property is an association 
    between a name (or key) and a value. A property's value can be a function, 
    in which case the property is known as a method. 
    
    In addition to objects that are predefined in the browser, you can define 
    your own objects. This chapter describes how to use objects, properties, 
    functions, and methods, and how to create your own objects.
*/

// OBJECT LITERALS
var ObjectLiteral = {
    firstName: "Chris",
    lastName: "Iona",
    human: true,
    preferences: {
        fontSize: "18pt",
        colourTheme: "blue"
    },
    locations: [
        "Sydney",
        "Adelaide",
        "Perth"
    ],
    currentTime: function(){
        return new Date();
    }
};

// Dot Notation
ObjectLiteral.firstName;
ObjectLiteral.last




Name;
ObjectLiteral.currentTime();

// Update a Property
ObjectLiteral.firstName = "Charlie";
ObjectLiteral.firstName;

// Bracket Notation
ObjectLiteral['firstName'];
ObjectLiteral['lastName'];
ObjectLiteral['currentTime']();



// OBJECT CONSTRUCTOR FUNCTIONS
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

var Chris = new Person("Chris Iona", 80, "M");

Chris;
Chris.name;
Chris.age;
Chris.sex;

Chris.location;



// PROTOTYPE (Contructed Functions)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
Person.prototype.location = "Sydney";
Chris.location;

var Mary = new Person("Mary Citizen", 60, "F");

// Accessing the Prototype
Mary.location;                  // Inherited
Mary.__proto__.location;        // BAD! (Internal Property)
Object.getPrototypeOf(Chris);   // Object Method
Object.getPrototypeOf(Mary);    // Object Method




// HAS OWN Property
Chris.hasOwnProperty('name');




// FILTERING (ARRAYS)
var a = [1,2,"twenty",99,23,19,4];

a.filter(function(item) { return item > 10 });
a.filter(function(item) { return item > 10 }).sort();
