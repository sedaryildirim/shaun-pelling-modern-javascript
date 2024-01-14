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
// function doesnt need to be declared in the function
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
// const calcNewArea = radius => 3.14 * radus **2;

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
//     for(let i = 0; 1 < products.length; i++){
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
        total += products[i] + products[i]  * tax;
    }
    return total;
;}

console.log(bill([10, 15, 30], 0.2));