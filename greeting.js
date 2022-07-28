var username = prompt("What's your name?") 
var limit = 20
var greeting = 'Howdy ';
/*var name = 'Molly';*/

var welcomeMessage = greeting + username + ", thanks for visiting my page"+'!';

var el = document.getElementById('greeting');

el.textContent = welcomeMessage;