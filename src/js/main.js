const text = "Willkommen bei den Klimascouts!";
const initialDelay = 500; // milliseconds
const letterDelay = 50; // milliseconds

let index = 0;

function writeText() {
  document.getElementById('text').innerText = text.slice(0, index);
  index++;
  
  if(index <= text.length) {
    setTimeout(writeText, letterDelay);
  }
}

setTimeout(writeText, initialDelay);