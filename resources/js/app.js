/*-----------------------------------
DROPDOWN MENU
-----------------------------------*/

const stripeIcon = document.getElementById('stripes');
const crossIcon = document.getElementById('cross');
const dropdownButton = document.getElementById('dropdown-menu');
const dropdownMenu = document.getElementById('dd-menu');

// Function to initiate or close menu
const initiateDd = () => {
    if (stripeIcon.style.display != 'none') {
        stripeIcon.style.display = 'none';
        crossIcon.style.display = 'inline-block';
        dropdownMenu.style.pointerEvents = 'auto';
        dropdownMenu.style.transition = 'opacity 200ms ease-out 0ms';
        dropdownMenu.style.opacity = '1';
    } else {
        stripeIcon.style.display = 'inline-block';
        crossIcon.style.display = 'none';
        dropdownMenu.style.pointerEvents = 'none';
        dropdownMenu.style.opacity = '0';
    }
    
}

/*-----------------------------------
ANIMATED LOGO
-----------------------------------*/

const colorArr = ['#eba945', '#ff796b', '#9d66ff'];
let sqrOne = document.getElementById('yellow-block');
let sqrTwo = document.getElementById('red-block');
let sqrThree = document.getElementById('purple-block');

// Random color function
let rdmColor = arr => {
    return arr[Math.floor(Math.random() * 3)];
}

// Assign color function
let assignColor = square => {
    let newColor = rdmColor(colorArr);
    
    if (newColor === square.style.backgroundColor) {
        do {
            newColor = "";
            newColor = rdmColor(colorArr);
        } while (newColor === square.style.backgroundColor);
    }

    square.style.backgroundColor = newColor;
}

// Function intervals
setInterval(function() {
    assignColor(sqrOne);
}, 500);

setInterval(function() {
    assignColor(sqrTwo);
}, 500);

setInterval(function() {
    assignColor(sqrThree);
}, 500);

/*-----------------------------------
EMAIL ADDRESS TOGGLE
-----------------------------------*/

let emailBttn = document.getElementById('email-bttn');
let triangle = document.getElementById('triangle');
let textBox = document.getElementById('textbox');

emailBttn.addEventListener('mouseover', function() {
    emailBttn.style.opacity = '1';
    emailBttn.addEventListener('mouseout', function() {
        emailBttn.style.opacity = '0.5';
    })
});

emailBttn.addEventListener('click', function() {
    triangle.style.transition = 'opacity 400ms ease-out 0ms';
    textBox.style.transition = 'opacity 400ms ease-out 0ms';

    if (triangle.style.opacity != 1 && textbox.style.opacity != 1) {
        triangle.style.opacity = '1';
        textBox.style.opacity = '1';
        triangle.style.userSelect = 'auto';
        textBox.style.userSelect = 'auto';
        emailBttn.style.opacity = '1';
    } else {
        triangle.style.opacity = '0';
        textBox.style.opacity = '0';
        triangle.style.userSelect = 'none';
        textBox.style.userSelect = 'none';
        emailBttn.style.opacity = '0.5';
    }
});

/*-----------------------------------
TEXT CURSOR
-----------------------------------*/

let textCursor = document.getElementById('text-cursor');
let alternate = 1;

setInterval(function() {
    if (alternate === 1) {
        textCursor.style.opacity = '0';
        alternate = 0;
    } else if (alternate === 0) {
        textCursor.style.opacity = '1';
        alternate = 1;
    }
}, 600);

/*-----------------------------------
TYPING ANIMATION
-----------------------------------*/

let greeting = document.getElementById('greeting');
let mainTextBox = document.getElementById('main-text-box');
let rest = document.getElementById('rest');
let arr = ['H', 'i', ' ', 't', 'h', 'e', 'r', 'e', '!'];
let tempHide = document.getElementById('temp-hide');
let sideBar = document.getElementById('sidebar');
let mediaQuery = 0;

greeting.innerText = '';
mainTextBox.style.minHeight = '200px';
tempHide.style.opacity = '0';
sideBar.style.maxHeight = '0';
sideBar.style.padding = '0';
sideBar.style.opacity = '0';


let i = 0;

setTimeout(function() {
    if (greeting.innerText != 'Hi there!') {
        let typing = setInterval(function() {
            if (i < arr.length) {
                greeting.innerText += arr[i];
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }
}, 400);

setTimeout(function() {
    rest.style.transition = 'opacity 400ms ease-in-out'
    rest.style.opacity = '1';
}, 1300);

setTimeout(function() {
    mainTextBox.style.transition = 'min-height 600ms ease-in-out';
    mainTextBox.style.minHeight = '520px';
    tempHide.style.transition = 'opacity 400ms ease-in-out';
    tempHide.style.opacity = '1';
    sideBar.style.transition = 'opacity 400ms linear 800ms, padding 10ms linear 800ms, max-height 600ms ease-in-out 800ms';
    sideBar.style.maxHeight = '500px';
    sideBar.style.padding = '20px';
    sideBar.style.opacity = '1';
}, 1800);