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

