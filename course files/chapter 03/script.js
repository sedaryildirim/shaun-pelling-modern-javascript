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

// do while loops
