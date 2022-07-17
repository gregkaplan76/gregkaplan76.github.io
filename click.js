// Create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>Warning</h2>';
msg += 'The images you are about to see are pretty sweet. ';
msg += 'Imagine hiring me to take some for you!</div>';

var elNote = document.createElement('div');       // Create a new element
elNote.setAttribute('id', 'note');                // Add an id of note
elNote.innerHTML = msg;                           // Add the message
document.body.appendChild(elNote);                // Add it to the page

function dismissNote() {                          // Declare function
  document.body.removeChild(elNote);              // Remove the note
}

var elClose = document.getElementById('close');   // Get the close button
elClose.addEventListener('click', dismissNote, false);// Click close-clear note