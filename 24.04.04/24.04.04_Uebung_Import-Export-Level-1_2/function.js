// * array functions
// first element of array
function firstElement(x) {
  return x[0];
}

// all but the last element of array
function exceptLastElement(x) {
  return x.slice(0, -1);
}

// only last element of array
function lastElement(x) {
  return x[x.length - 1];
}

// all but first element of array
function exceptFirstElement(x) {
  return x.slice(1);
}

// remove an element
function removeElement(arr, item) {
  return arr.filter((i) => i !== item);
}

// unique values, remove double elements
function removeDoubles(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

// sum of array
function sumArray(arr) {
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }
  // return sum;

  return arr.reduce((sum, item) => sum + item);
}

// * non array functions
// random Number
// Bereich von 0-10 => *10 und Bereich von 10-20 => +10 ==> *10 + 10 => 11-20
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// change first letter to uppercase
function firstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

// change string to uppercase
function uppercase(string) {
  return string.toUpperCase();
}

// check if last letter is same
function checkLetters(string1, string2) {
  if (string1.slice(-1) === string2) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  firstElement,
  exceptLastElement,
  lastElement,
  exceptFirstElement,
  removeElement,
  removeDoubles,
  sumArray,
  randomNum,
  firstLetter,
  uppercase,
  checkLetters,
};
