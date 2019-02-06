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
const justDoIt = () => {
  let name = 'Sarah';
console.log(`${name}, just do it!`);
};
justDoIt(name);

// // PART 1: Big or Small String?
// //Write a **function** called `bigOrSmallString` that accepts one argument, a string, and returns "This word is loooooong!" if the string's length is greater than 10, and "This word is short 😬" otherwise.

const bigOrSmallString = string => {
 if (string.length > 10) {
  console.log("This word is loooooong!")
 } else {
  console.log("This word is short 😬");
 }
}
bigOrSmallString('this is my string');

// // PART 2: Odd or Even String Length?
let str = "Sarah";
let oddOrEvenString = () => {
  if (oddOrEvenString.length % 2 ) {
    console.log ('This string length is TOTALLY even!');
  } else {
    console.log ('This string length is odd..');
  }
}
oddOrEvenString(str);


// PART 3: Median
let arr = [1,2,3];
let medianOfArray = arr => {
  arr.sort(function(a,b) {return a - b;});
  let divide = Math.floor(arr.length/2);
  if (arr.length % 2)
    console.log (arr[divide]);
  else
    console.log (arr[divide-1] + arr[divide])/ 2;
}
medianOfArray(arr);


// // PART 4: Sum Array
let arr = [1,2,3];
arr.reduce(function(a,b) {
   return a + b
 },0)



// // PART 5: Vowel Count
const countVowels = subject => {
    return subject.match(/[aeiou]/gi).length;
}
countVowels('Sarah')

// // PART 6: Initials
const getInitials = name => {
 return name.split(' ').map(i => i[0].toUpperCase()).join('.');
}
getInitials("Sarah M Currey")



// // // PART 7: Days of the week
let day = prompt("What day is it?").toLowerCase();

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



// // PART 8: Let's take the Subway
let subwayLines = prompt("Which subway line are you taking today? \nChoose \nl (the L train), \nn (the N train), and \ns (the Six train)");
if (subwayLines === 'l') {
  alert("\n8th Ave, \n6th Ave, \nUnion Square, \n3rd Ave, \n1st Ave, \nBedford Ave");
} else if (subwayLines === 'n') {
  alert('\nTimes Square, \n Hearld Square, \n 28th St, \n 23rd St - DAPS Nexus, \n Union Square, \n 8th St');
} else if (subwayLines === 's') {
  alert("\n Grand Central, \n 33rd St, \n 28th St, \n 23rd St, \n Union Square, \n Astor Place");
}
let thankYou = alert('Thank you for your time!');




// // BONUS: Double X Counter
// let countXx =function ()
//Write a **function** called `countXx`. Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".
let stringX = 'abcxx, xxx, xxxx'

function countXx (str) {
 let xMatches = str.match(/[xx]/gi).length;
  console.log(xMatches);

}
countXx();

