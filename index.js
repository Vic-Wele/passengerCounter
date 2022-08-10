// This function is to increment the current value of the count
function increment() {
  count += 1;
  counter.textContent = count;
}

// This function is to decrement the current value of the count
function decrement() {
  count -= 1;
  counter.textContent = count;
}

//This function is to save and display current value as an alert
function totalSave() {
  let countStr = count + "-";
  saveTotal.textContent += countStr;
  counter.textContent = 0;
  count = 0;
}

//these are the variables used to store the ID's of the buttons
let counter = document.getElementById("counter");
let incrementer = document.getElementById("btn-add");
let decrementer = document.getElementById("btn-rdc");
let btnSave = document.getElementById("save");
let saveTotal = document.getElementById("saveTotal");

// The original counter value
let count = 0;

// Adding event listener to the buttons
incrementer.addEventListener("click", increment);
decrementer.addEventListener("click", decrement);
btnSave.addEventListener("click", totalSave);
