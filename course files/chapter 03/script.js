// control flow
// loops and conditionals

// for loops
for(let i = 0; i < 5; i++){
    console.log('in loop', i);
}

console.log('loop finished');

// looping through an array
const names = ['Sid', 'Mario', 'Luigi'];

for(let i = 0; i < names.length; i++)
{
    // console.log(names[i]);
    let html = `<div> ${names[i]} </div>`;
    console.log(html);
}

// while loops
let i = 0

while(i < 5){
    console.log('in loop', i);
    i++;
}

console.log('loop finished');

let x = 0

while(x < names.length){
    console.log(names[x]);
    x++;
}
// do while loops
let y = 5;

do{
    console.log('val of y is: ', y);
    y++;
} while(y <5 );

// conditional statements
// if statements

const age = 25;

if(age > 20){
    console.log('you are over 20 years old')
}

const ninjas= ['Sid', 'Ryu', 'Chun-li', 'Yoshi'];

if(ninjas.length > 3){
    console.log("there are more than 3 ninjas")
}

const password = 'password';

if(password.length >=8 ){
    console.log('that password is fine')
} else {
    console.log('that password is not long enough')
};

// logical operators
// OR || and &&

const passwordThree = 'p31234';

if(passwordThree.length >=12 && passwordThree.includes(`@`)){
    console.log('that password is very strong')
} else if (passwordThree.length >=8 || passwordThree.includes('@')){
    console.log('that password is fine')
} else {
    console.log('that password isnt long enough part three')
};

// logical nots (!)
// reverse a boolean value

console.log(!true);
console.log(!false);

let user = false;

if(!user){
    console.log('this evaluate to true');
}

// break and continue in loops

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let p = 0; p < scores.length; p++){
if(scores[p] === 0){
    continue; // shouldnt see 0 logged to console
}
    console.log('your score: ', scores[p]);
if(scores[p] === 100){
console.log('congrats, top score');
break; // breaks out of loop
}
}

// switch statements
const grade = 'D';

switch(grade){
    case 'A':
        console.log('you got an A');
        break; // breaks out of loop if true
    case 'B':
        console.log('you got an B');
        break;
    case 'C':
        console.log('you got an C');
        break;
    case 'D':
        console.log('you got an D');
        break;
    case 'E':
        console.log('you got an E');
        break;
    default:
    console.log('not a valid grade');
}

// using if statements gets messy
// if(grade === 'A'){

// } else if(grade === 'B'){

// } else if(grade === 'C'){

// } else if(grade === 'D'){

// } else if(grade === 'E'){

// } else {

// }

// global scope
// variables and block scope
let ageNew = 30; 
// this is a global scope
// accessed anywhere

if(true){
    let ageNew = 40; // runs inside this code block
    // not accessible in the global scope
    console.log('inside first code block which is local scope', ageNew);
}

console.log('global scope', ageNew);