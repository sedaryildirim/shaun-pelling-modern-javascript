// pop up alert with message - function
// alert("hello, world");

// log something to console in browser - function
console.log(1);
console.log(2);

// variables - stores javascript data types (eg, numbers or strings) to be used later
let age = 25;

// variable age is equal to 25
// prints the variable age to console log
console.log(age);

// can chain variables
let year = 2024;
console.log(age, year);

// override variables
// redefine a variable, age now shows as 30
age = 30;

// const creates a constant variable
// variable points cant be changed
const points = 100;
console.log(points);

// var is older keyword for variables
// used before let and const
var score = 75;
console.log(score);

// constraints
// variables cant have spaces
// variables should be camel case
// variables cant start with a number
// variables have reserved keywords, eg, const, let, var

// data types are as follows
// numbers = 1,2,3,4
// strings = text
// boolean = true or false
// null = explicity set a variable has no value - an empty value
// undefined =  for variables that have not yet been defined - an empty value
// object = complex data structures, arrays, dates, literals etc
// symbols = used with objects

// strings
console.log("hello, world");

let email = 'email@email.com';
console.log(email);

// string concatenation
console.log("hello" + ", " + "world")

let firstName = 'Sid';
let lastName = 'Y';
console.log(firstName, lastName);

let fullName = firstName + " " + lastName;
console.log(fullName);

// getting characters
// shows first character (starts at 0)
console.log(fullName[0]);
console.log(firstName[1]);
console.log(firstName[2]);

// string length
let myName = 'Sid';
console.log(myName.length);

// string methods
// .toUpperCase() is a method/function
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

// .indexOf finds @ in email variable
// assigns it to index variable
let index = email.indexOf('@');
console.log(index);

// common string methods
let newEmail = 'email@email.com';

// lastindexof will find the position of the last last e
let newResult = newEmail.lastIndexOf('e');
console.log(newResult);

// slice
// slice will slice from position to position
let newResultTwo = newEmail.slice(0,5);
console.log(newResultTwo);

// substring
// substring starts at position 0 and gets 5 characters
let newResultThree = newEmail.substring(0,5);
console.log(newResultThree);

// replace
// replaces the FIRST e with m
let newResultFour = newEmail.replace('e', 'm');
console.log(newResultFour);

// datatypes
// numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, %
console.log(10/2);

let remainderOf = radius % 3;
console.log(remainderOf);

let areaOfCircle = pi*radius**2;
console.log(areaOfCircle);

// order of operation
// B I D MA A S
// Brackets, Indices, Division, Multiplication, Addition, Subtraction
let bidmas = 5*(10-3)**2;
console.log(bidmas);

let likes = 10;

// shorthand notation
// likes = likes + 1;
// ++ adds one
likes++;

// -- subtract one
likes--;

// += takes current value and adds on the specified value
likes+=10;

// -= takes the current value and subtracts the specified value
likes-=5;

// *= takes the current value and multiplies by specified value
likes*=2;

// /= takes the current value and divides by specified value
likes/=5
console.log(likes);

// NaN - not a number
console.log(5/'hello');

// concatenate numbers and strings
let concatenate = 'the blog has ' + likes + ' likes';
console.log(concatenate);


// template strings
const title = ' Best reads of 2024';
const author = ' Sid';
const newLikes = 30;

// concatenation way
let stringsResult = 'The blog called' + title + ' by' + author + ' has ' + newLikes + ' likes';
console.log(stringsResult);

// template string / template literal way
let stringsResultTwo = `the blog called ${title} by ${author} has ${newLikes} likes`;
console.log(stringsResultTwo);

// creating html templates
// can be output to browser
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>this blog has ${newLikes} likes</span>
`;
console.log(html);

// Objects - Arrays, Dates, Literals etc
// array syntax
// below is an array stored in a variable
let ninjas = ['sid', 'ryu', 'chun-li'];
console.log(ninjas);

// get  position in array
console.log(ninjas[1]);

// override a position in an array
// changes ryu to ken
ninjas[1] = 'ken';
console.log(ninjas);

// can store strings, numbers ec
let ages = [20, 25, 30, 35];
console.log(ages[2]);

// can also store different date types
let random = ['sid', 'ryu', 1, 2];
console.log(random);

// functions work on arrays
// below logs how many items in an array
console.log(ninjas.length);

// array methods
// join array date sets together
let results = ninjas.join(',');
console.log(results);

// indexof shows the position of data in an array
let resultsTwo = ninjas.indexOf('chun-li');
console.log(resultsTwo);

// concat
// concatenates two arrays together
let resultThree = ninjas.concat(['ken', 'crystal']);
console.log(resultThree);

// push
// push a new value onto array, return length of new array
let resultFour = ninjas.push('ken');
console.log(resultFour);

// pop
// takes off end value
let resultFive = ninjas.pop();
console.log(resultFive);

// null and undefined
// null is an intentional value
let ageNew = null;
console.log(ageNew, ageNew +3, 'the age is ${ageNew}');

// booleans
// true and false
// booleans and comparisons
console.log(true, false);

// methods can return booleans
let emailNew = 'email@email.com'
let resultEmailNew = emailNew.includes('@');
console.log(resultEmailNew);

// comparisons operators
// == is something equal to something
let ageComparison = 25;
console.log(ageComparison == 25);
console.log(ageComparison == 30);

// != negates - is age not equal to 25
console.log(ageComparison != 30);

// > greater than
console.log(ageComparison > 20);

// < less than
console.log(ageComparison < 20);

// <= less than or equal to
console.log(ageComparison <= 20);

// >= greater than or equal to
console.log(ageComparison >= 20);

// loose comparison is two ==
// strict comparison is an extra =, so == would be === or != would be !==
// strict checks data types and compares

// type conversion
// turning one data type into another data type
let scoreNew = '100';

// score function turns score variable into a number
scoreNew = Number(scoreNew);
console.log(scoreNew +1);

