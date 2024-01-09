var counter = 0;

function incrementCounter() {
  counter++;
  updateCounter();
}

function decrementCounter() {
  if (counter > 0) {
    counter--;
    updateCounter();
  }
}

function resetCounter() {
  counter = 0;
  updateCounter();
}

function updateCounter() {
  var countElement = document.getElementById('count');
  countElement.textContent = counter;
}
