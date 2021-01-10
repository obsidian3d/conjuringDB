let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/magic-swirl.png') {
        myImage.setAttribute('src', 'images/magic-swirl2.png');    
    }
    else {
        myImage.setAttribute('src', 'images/magic-swirl.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContext = 'Magic is cool ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

//alert('hello!');

/*
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}*/
