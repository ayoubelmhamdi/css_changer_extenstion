// popup.js
// document.querySelector('h1').addEventListener('click', function() {
//     alert('Hello, World!');
// });


function functionForButton1() {
    alert('Button 1 clicked!');
}

function functionForButton2() {
    alert('Button 2 clicked!');
}

function functionForButton3() {
    alert('Button 3 clicked!');
}

// Add event listeners to your buttons when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button1').addEventListener('click', functionForButton1);
    document.getElementById('button2').addEventListener('click', functionForButton2);
    document.getElementById('button3').addEventListener('click', functionForButton3);
});
