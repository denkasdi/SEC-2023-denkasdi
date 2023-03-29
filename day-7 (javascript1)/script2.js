//variable dom
let firstnameDOM = document.querySelector('#firstname');
let lastnameDOM = document.querySelector('#lastname');
let fullnameDOM = document.querySelector('#fullname');
let birthyearDOM = document.querySelector('#birthyear');
let ageDOM = document.querySelector('#age');
let drivecarDOM = document.querySelector('#permit')

//variable value
let firstname = prompt("What is your first name?");
let lastname = prompt("What is your last name?");
let fullname = firstname + " " + lastname;
let birthyear = prompt("Birth Year?"); 
let age = 2023 - birthyear;

//pseudocode
let drivecar;
if (age >= 17) {
    drivecar = 'permitted'
} else {
    drivecar = 'not permitted'
}

firstnameDOM.innerText = firstname;
lastnameDOM.innerText = lastname;
fullnameDOM.innerText = fullname;
birthyearDOM.innerText = birthyear;
ageDOM.innerText = age;
drivecarDOM.innerText = drivecar;