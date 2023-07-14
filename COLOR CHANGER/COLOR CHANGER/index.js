var redBtn = document.getElementsByClassName('btn-1')[0];
var blueBtn = document.getElementsByClassName('btn-2')[0];
var Greenbtn = document.getElementsByClassName('btn-3')[0];
var Orangebtn = document.getElementsByClassName("btn-4")[0];
var yellowbtn = document.getElementsByClassName("btn-5")[0];
var body = document.getElementsByTagName('body')[0];

redBtn.addEventListener("click", changeColor);
function changeColor () {
    body.style.backgroundColor = "red";
}

blueBtn.addEventListener("click", ChangeBlueColor);
function ChangeBlueColor () {
    body.style.backgroundColor = 'blue';
}

Greenbtn.addEventListener('click', changeGreenColor);
function changeGreenColor () {
    body.style.backgroundColor = 'green';
}

Orangebtn.addEventListener('click', changeOrangeclr);
function changeOrangeclr () {
    body.style.backgroundColor = 'orange';
}

yellowbtn.addEventListener('click', changeyellowclr);
function changeyellowclr () {
    body.style.backgroundColor = 'yellow';
}
