/* ============ BEFORE YOU GET STARTED ============ */
/* here is a very short function that pops up an alert window that says 'Hello!' */
// function hello() {
//   alert('Hello!');
// }

// /* Here's the steps to test it:

// - Open index.html in chrome.
// - Type the keyboard shortcut `cmd + option + j`. Dev tools should open to the console.
// - You should see the message saying 'starter.js is connected!'
// - Underneath that, next to the blue arrow, type `hello()` to call the `hello` function
// - You should get an alert window that says HELLO!
//7 and 8 need alerts
//1 through 6 is console.log
// */

// /* ================= AS YOU COMPLETE EACH STEP ============= */

// /* After each step, perform the following commands in the terminal:
// 1. git add .
// 2. git commit -m "add completed part PART-NUMBER-HERE"
// This will help us track your progress and it will give you practice writing good commit messages!!
// */

// /* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */
// /* ======================= WRITE YOUR ANSWERS HERE!!!!! =============== */
// /* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */

// // PART 0: Just DO it!!
let name = 'Sarah';
let justDoIt = function(name) {
console.log(name +', JUST DO IT!');
};
justDoIt(name);


// // PART 1: Big or Small String?
// //Write a **function** called `bigOrSmallString` that accepts one argument, a string, and returns "This word is loooooong!" if the string's length is greater than 10, and "This word is short 😬" otherwise.

let string = "This is my string";
let bigOrSmallString = function (string) {
 if (string.length > 10) {
  console.log("This word is loooooong!")
 } else {
  console.log("This word is short 😬");
 }

}
bigOrSmallString(string);

// // PART 2: Odd or Even String Length?
let str = "Sarah";
let oddOrEvenString =function() {
  if (oddOrEvenString.length % 2 ) {
    console.log ('This string length is TOTALLY even!');
  } else {
    console.log ('This string length is odd..');
  }
}
oddOrEvenString(str);


// PART 3: Median
let arr = [1,2,4,6,7,9,3];
let medianOfArray = function(num) {
  num.sort(function(a,b) {return a - b;});
  let divide = Math.floor(num.length/2);
  if (num.length % 2)
    console.log (num[divide]);
  else
    console.log (num[divide-1] + num[divide])/ 2;
}
medianOfArray(arr);

/////NEED HELP
// // PART 4: Sum Array
let arraySum = [1, 2, 3]

function arraySum (array) {
 if (array.length === 0) {
  return 0
 }
 let sum =0
 for (i =0; i < array.length; i++) {
  sum += array[i]
 }
 return sum
}
console.log(arraySum)



// // PART 5: Vowel Count
let str1 = "this is my string";
let vowelCount =function (str) {
  let vowel = 0;
  for (i=0; i <str.length; i++) {
    if (str1.match(/[aeiou]/g)) {
      vowel +=1;
    }
  }
  return vowel;
};
console.log(vowelCount)

// // PART 6: Initials
let getInitials = [];
function initials(name) {
  let word = name.split(" ");
  for (i = 0; i < word.length; i++) {
    var letter = word[i];
    for (let j = 0; j < letter.length; j++) {
      getInitials.push(letter[0]);
      break;
    }
  }
  console.log(getInitials);
  return getInitials;
}
initials("Sarah M Currey")


// // PART 7: Days of the week
let whichDay = prompt("Is the weekend close?");

dayofWeek = function() {
let day;
switch (new Date().getDay()) {
  case 1:
   alert("Engergize!");
   break;
  case 2:
    alert("Just getting started!");
     break;
  case 3:
    alert("Hump Hump!");
     break;
  case 4:
    alert("Almost there!");
     break;
  case 5:
  case 6:
  case 0:
   alert("Weeeeeee!");
    break;
  default:
   alert("Huh, sorry didn\'t get that");
    break;
}
dayofWeek();


// // PART 8: Let's take the Subway
// let subwayLines = prompt("Which subway line are you taking today? \nChoose \nl (the L train), \nn (the N train), and \ns (the Six train)");
// if (subwayLines === 'l') {
//   alert("\n8th Ave, \n6th Ave, \nUnion Square, \n3rd Ave, \n1st Ave, \nBedford Ave");
// } else if (subwayLines === 'n') {
//   alert('\nTimes Square, \n Hearld Square, \n 28th St, \n 23rd St - DAPS Nexus, \n Union Square, \n 8th St');
// } else if (subwayLines === 's') {
//   alert("\n Grand Central, \n 33rd St, \n 28th St, \n 23rd St, \n Union Square, \n Astor Place");
// }
// let thankYou = alert('Thank you for your time!');


// // PART 9: Truth - y & False -y Checker
// let arrayChecker = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];
// let truthyFalsey = function(arr) {
//   for (i = 0; i < arr.length; i++);
//     if (truthyFalsey === true) {
//       console.log("Truthy!");
//     } else {
//       console.log("Falsy.")
//     }
// }
// truthyFalsey(arrayChecker);


// // BONUS: Double X Counter
// let countXx =function ()


// // BONUS Two-Dimensional Array




// /* connection checker console log */
//console.log('starter.js is connected! Let\'s get to work! 💪');
