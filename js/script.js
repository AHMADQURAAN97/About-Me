"use strict";

let names = prompt("What's Your Name ?");
alert("WELCOME TO MY PAGE" + " " + names);

let score = 0;
let grade = function () {
  score++;
};

let x = prompt("Do you know me (yes or no)?");
x.toLowerCase();
console.log(x);

if (x == "yes" || x == "y") {
  let y = prompt("Where and How ?");
  console.log(y);
  grade();
} else if (x == "no" || x == "n") {
  // console.log(x)
  alert("You will become Know me");
} else {
  console.log(x);
}

let userage = prompt("Your age more than 18 (yes or no)? ");
switch (userage.toLowerCase()) {
  case "yes":
  case "y":
    // console.log(userage);
    alert("Welcome to our page");
    grade();
    break;

  case "no":
  case "n":
    // console.log(userage);
    alert("Sorry you can/'t enter to this page");
    break;

  default:
    alert("should write yes or no");
}

let details = prompt(
  "Interested in know more details about Ahmad (yes or no)?"
);
x.toLowerCase();
console.log(x);
if (details == "yes" || "y") {
  // console.log(details);
  alert("Thank You");
  grade();
} else if (details == "no" || "n") {
  //  console.log(details);
  alert("Not Problem");
}

let people = prompt("Are you working or is still student(YES OR NO)?");

switch (people.toUpperCase()) {
  case "YES":
  case "Y":
    alert("GOOD LUCK");
    // console.log(people);
    grade();
    break;

  case "NO":
  case "N":
    alert("best wishes for you");
    // console.log(people);
    break;

    defult: alert("wrong answer");
}

let view = prompt(
  "Do you have a desire to share my webpage in your webpages? "
);
switch (people.toLowerCase()) {
  case "yes":
  case "y":
    // console.log("people")
    alert("Thankyou for your effort");
    grade();
    break;

  case "no":
  case "n":
    // console.log("people")
    alert("Try to think about your decision");
    break;
}

let h = prompt("What is your rate about this page?");

for (let i = 0; i <= 3; i++) {
  if (h == 50) {
    alert(" you got the correct answer ");
    grade();
    break;
  } else if (h > 50) {
    alert("too high");
    h = prompt("What is your rate about this page?");
  } else if (h < 50) {
    alert("too low");
    h = prompt("What is your rate about this page?");
  }
  if (i == 3) {
    alert("the correct answer is 50");
  }
}

let remo = ["INTRODUCTION", "MY GOALS!", "TOP TEN PLACES"];

let mark = prompt("What most of thing you like it in my webpage").toUpperCase();

for (let attempt = 1; attempt < 6; attempt++) {
  if (mark == remo[0] || mark == remo[1] || mark == remo[2]) {
    alert("It's Nice");
    grade();
    break;
  } else {
    alert("Wrong");
    mark = prompt("What most of thing you like it in my webpage").toUpperCase();
  }
}

alert("Your score is " + score + " out of 7");
