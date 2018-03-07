
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {};

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    switch (mySrc) {
        case 'images/foodlePrint.png':
            myImage.setAttribute ('src','images/foodle1.png');
            break;
            
        case 'images/foodle1.png':
            myImage.setAttribute ('src','images/foodle2.png');
            break;
            
        case 'images/foodle2.png':
            myImage.setAttribute ('src','images/foodle3.png');
            break;
            
        case 'images/foodle3.png':
            myImage.setAttribute ('src','images/foodle4.png');
            break;
            
        case 'images/foodle4.png':
            myImage.setAttribute ('src','images/foodlePrint.png');
            break;
            
    }
    
//    if(mySrc === 'images/foodlePrint.png') {
//      myImage.setAttribute ('src','images/foodle1.png');
//    } else {
//      myImage.setAttribute ('src','images/foodle2.png');
//    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}