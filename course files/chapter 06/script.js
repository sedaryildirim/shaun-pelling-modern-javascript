// DOM
// document object model

const para = document.querySelector('div.error')
console.log(para);

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
console.log(paras[0]);
console.log(errors);

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errorsNew = document.getElementsByClassName('error');
console.log(errorsNew);

// get elements by their tag name
const parasNew = document.getElementsByTagName('p');
console.log(parasNew);

const paraNew = document.querySelector('p');

// innerText
console.log(paraNew.innerText);
paraNew.innerText = 'ninjas are awesome!';

const parasAll = document.querySelectorAll('p');
parasAll.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});

const content = document.querySelector('.content');
console.log(content.innerHTML);

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

// testing mouse over event listener
const paraNewTwo = document.querySelector('.ninjas')
{
    paraNewTwo.addEventListener('mouseover', function() {
        paraNewTwo.innerText += ' the mouse is here!';
        console.log('mouse over worked');
    }, { once: true });
}

// changing attributes
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green;');
mssg.setAttribute('style', 'margin: 50px;');
console.log(mssg.getAttribute('style'));

// rotating text
// Array of words
const words = ['word1', 'word2', 'word3', 'word4', 'word5'];
let index = 0;

// Select the paragraph
const paraRotate = document.querySelector('p');

// Change the text every 10 seconds
setInterval(() => {
    paraRotate.innerText = words[index];
    index = (index + 1) % words.length; // This will loop back to the first word after the last one
}, 2000); // 10000 milliseconds = 10 seconds

const parasNewTwo = document.querySelectorAll('p');

parasNewTwo.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    }
    if (p.innerText.includes('success')) {
        p.classList.add('success');
    }
});