/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

    In JavaScript, functions are first-class objects, because they can have 
    properties and methods just like any other object. What distinguishes 
    them from other objects is that functions can be called. 

    In brief, they are Function objects.
*/


// FUNCTION DECLARATION
function square(number) {
  return number * number;
}

square( 40 );


/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

    Functions are not the same as procedures. 

    A function always returns a value, whereas a procedure might not.

    To return a value other than the default, a function must have a return
    statement that specifies the value to return. A function without a return
    statement will return a default value. In the case of a constructor called
    with the new keyword, the default value is the value of its this parameter. 

    For all other functions, the default return value is undefined.
*/

// ANONYMOUS FUNCTION EXPRESSION
var square = function( number ) {
    return number * number;
};

square( 40 );



// NAMED FUNCTION EXPRESSION
var square = function square ( number ) {
    return number * number;
};



// IMMEDIATELY-INVOKED FUNCTION EXPRESSION
// (aka self executing functions)
(function(n) {
    var NumberToSquare = 40;
    console.log( "SQUARE", square(NumberToSquare) );
    console.log( "'this' IS GLOBAL SCOPE", this === global );
})((function(){return 50})());

console.log("NumberToSquare", NumberToSquare);




// SELF EXECUTING FUNCTIONS WITH CONTEXT
var Car = function(name){
    return {model: 123, name: name};
};
 
(function(car1, car2) {
    var NumberToSquare = 40;
    console.log( "SQUARE", square(NumberToSquare) );
    console.log( "IS GLOBAL SCOPE", this === global );
    console.log( "CAR 1", car1 );
    console.log( "CAR 2", car2 );
})(new Car('Hyundai'), new Car('Ford'));

console.log("NumberToSquare", NumberToSquare);



/*
    http://ryanmorr.com/understanding-scope-and-context-in-javascript/

    SCOPE pertains to the variable access of a function when it is invoked and 
    is unique to each invocation.

    CONTEXT is always the value of the this keyword which is a reference to the
    object that “owns” the currently executing code.
*/

var GloballyScopedVariable = 500;
var AccessedGloballyScopedVariable = 200;

function HasLocalScope() {
    var LocallyScopedVariable = 100;

    AccessedGloballyScopedVariable = 300;
}

console.log( "GloballyScopedVariable", GloballyScopedVariable );

console.log( "AccessedGloballyScopedVariable", AccessedGloballyScopedVariable );

HasLocalScope();

console.log( "LocallyScopedVariable", LocallyScopedVariable );




/*
    LET'S REVIEW THE 'this' KEYWORD
*/

function KittyCat( name ) {
    console.log("KittyCat", name, this);
}

var GlobalScope = KittyCat( "Global Scope" );
var LocalScope = new KittyCat( "Localised Scope" );

console.log( typeof LocalScope, LocalScope );






/*
    MODULE PATTERN
*/

var DogModule = (function() {
    var privateMantra = 'Dogs Rule!  Boo, Cats...';
    var publicMantra = 'Dogs Rule, and respect Cats.';

    function privateDogsMantra() {
        return privateMantra;
    }

    function publicDogsMantra() {
        return publicMantra;
    }
    var publicDogsMantraUpdate = function updateMantra( mantra ) {
        publicMantra = mantra;
        return publicMantra;
    }

    return {
        type: 'animal',
        mantra: publicDogsMantra,
        updateMantra: publicDogsMantraUpdate
    };
})();

console.log( "DogModule", DogModule );
console.log( "DogModule Type: " + DogModule.type );
console.log( "DogModule Mantra: " + DogModule.mantra() );