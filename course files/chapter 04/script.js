// javascript functions
// functions are object data types
// functions are blocks of codes that can be rerun / re used

// function declaration
function greet(){
    console.log('hello there');
}
greet();


// function expression
// calling the function / invoking the function
// function doesn't need to be declared in the function
// it is declared in the const/variable
const speak = function(){
console.log('good day');
};
speak();

// function declarations are HOISTED to the top of the file
// function expressions are not

const speakNew = function(name){
    console.log(`good day ${name}`);
    };
speakNew('Sid');
    
const speakThree = function(name = 'Sedar', time = 'night'){
    console.log(`good ${time} ${name}`);
};

speakThree();

// returning values

const calcArea = function(radius){
    return 3.14 * radius **2;
}

const area = calcArea(5);
console.log(area);

// arrow functions // removes the function keyword and works the same
const calcNewArea = (radius) => {
    return 3.14 * radius **2;
};

// can be further shortened to 
// const calcNewArea = radius => 3.14 * radius **2;

const areaNew = calcArea(5);
console.log(areaNew);

// arrow functions

const calcAreaNew = radius => 3.14 * radius**2;

const areaThree = calcAreaNew(5);
console.log('area is:', areaThree);

// practice

// const greetNew = function(){
//     return 'hello, world';
// }

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] * tax;
//     }
//     return total;
// }

// possible solution
const greetNew = () => 'hello, world';
const result = greetNew();
console.log(result);

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + (products[i] * tax);
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));

// functions vs methods
// methods are functions that are associated with objects
// functions are not associated with objects

const nameMy = 'Sid';
// functions

const greetFour = () => 'hello';
let resultFourOne = greetFour();
console.log(resultFourOne);

// methods
let resultFourTwo = nameMy.toUpperCase();
console.log(resultFourTwo);

// callbacks and foreach
// callbacks are functions that are passed into another function as an argument
// the function that accepts the callback is called a higher order function
// foreach is a higher order function

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
});

// foreach
// takes in a callback function
// the callback function can take in 3 parameters
// the first parameter is the value of the array
// the second parameter is the index of the array
// the third parameter is the array itself

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach((person, index) => {
    console.log(index, person);
});

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const peopleTwo = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

peopleTwo.forEach(person => {
    // create html template
    html = `<li style="color: purple">${person}</li>`;
    // insert the template into the html
    ul.innerHTML += html;
});

console.log(html);

