'use strict';

alert("WELCOME TO MY PAGE");

let x = prompt("Do you know me (yes or no)?");
x.toLowerCase(); console.log(x);
if (x == "yes"||x=="y") {
    let y = prompt("Where and How ?");
    console.log(y)
} else if (x == "no"||x=="n") {
    // console.log(x)
    alert("You will become Know me");
} else {
    console.log(x);
}

let userage = prompt("Your age more than 18 (yes or no)? ")
switch (userage) {
    case 'yes':
    case 'y':
        // console.log(userage);
        alert("Welcome to our page");
        break;

    case 'no':
    case 'n':
        // console.log(userage);
        alert("Sorry you can/'t enter to this page");
                 break;

                 default:
                     alert("should write yes or no");
}

 let details = prompt("Interested in know more details about Ahmad (yes or no)?");
 if (details=="yes"||"y"){
    // console.log(details);
     alert("Thank You")
 } else if (details=="no"||"n") {
    //  console.log(details);
     alert("Not Problem")

 }


let people= prompt ("Are you working or is still student(YES OR NO)?")

switch(people.toUpperCase()) {
    case 'YES':
    case 'Y':
        alert("GOOD LUCK");
        // console.log(people);
        break;

        case 'NO':
            case 'N':
                alert("best wishes for you")
                // console.log(people);
                break;

                defult :
                alert ("wrong answer")
}


let view=prompt("Do you have a desire to share my webpage in your webpages? ")
switch(people.toLowerCase()) {
    case 'yes':
        case 'y':
            // console.log("people")
            alert("Thankyou for your effort")
            break;

            case 'no':
                case 'n':
                    // console.log("people")
                    alert("Try to think about your decision")
                    break;
}