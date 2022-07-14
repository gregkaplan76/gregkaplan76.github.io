var i = 1;       // Set counter to 1
var msg = '';    // Message

// Store 5 times table in a variable
while (i < 6) {
  msg += i + ' photo' + ' x 25.50 = ' + '$' + (i * 25.50) + '<br />';
  i++;
}

document.getElementById('answer').innerHTML = msg;