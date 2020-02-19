'use strict';
alert('welcome to my web site ');
var x = 0;
var name = prompt("can you tell us your NAME pleas !", "ex:AHMAD");
var guess1 = prompt("can you guess my studied ?", "yes or no");
switch (guess1.toLowerCase()) {
    case "yes":
        alert('you are great man ');
        x = x + 1;
        //console.log(guess1);
        break;
    case "no":
        alert('try again bro');
    // console.log(guess1);
    case "y":
        alert('you are great man ');
        x = x + 1;
        //console.log(guess1);
        break;
    case "n":
        alert('try again bro');
        // console.log(guess1);
        break;
    default:
    //console.log(guess1);

}
alert(`first answer is ${guess1}`);

var guess2 = prompt("can you guess my fav food ?", "yes or no");
switch (guess2.toLowerCase()) {
    case "yes":
        alert('good job man');
        x = x + 1;
        // console.log(guess2);
        break;
    case "no":
        alert('opps man ! try once more ');
        // console.log(guess2);
        break;
    case "y":
        alert('good job man');
        x = x + 1;
        // console.log(guess2);
        break;
    case "n":
        alert('opps man ! try once more ');
        // console.log(guess2);
        break;
    default:
    //console.log(guess2);

}
alert(`second answer is ${guess2}`);

var guess3 = prompt("can you guess my age ?", "yes or no")
switch (guess3.toLowerCase()) {
    case "yes":
        alert('amazing man !');
        x = x + 1;
        // console.log(guess3);
        break;
    case "no":
        alert('oppes , welcome any where !');
        //console.log(guess3);
        break;
    case "y":
        alert('amazing man !');
        x = x + 1;
        // console.log(guess3);
        break;
    case "n":
        alert('oppes , welcome any where !');
        //console.log(guess3);
        break;
    default:
    // console.log(guess3);

}
alert(`your third answer is : ${guess3}`);

var guess4 = prompt("can you guess my phone type ?", "yes or no")
switch (guess4.toLowerCase()) {
    case "yes":
        alert('perfect man !');
        x = x + 1;
        // console.log(guess4);
        break;
    case "no":
        alert('oppes , take another chance !');
        // console.log(guess4);
        break;
    case "y":
        alert('perfect man !');
        x = x + 1;
        // console.log(guess4);
        break;
    case "n":
        alert('oppes , take another chance !');
        // console.log(guess4);
        break;
    default:
    //console.log(guess4);

}
alert(`your fourth answer is : ${guess4}`);


var guess5 = prompt("can you guess my car model ?", "yes or no")
switch (guess5.toLowerCase()) {
    case "yes":
        alert('perfect man !');
        x = x + 1;
        // console.log(guess4);
        break;
    case "no":
        alert('oppes , take another chance !');
        // console.log(guess4);
        break;
    case "y":
        alert('perfect man !');
        x = x + 1;
        // console.log(guess4);
        break;
    case "n":
        alert('oppes , take another chance !');
        // console.log(guess4);
        break;
    default:
    //console.log(guess4);

}
alert(`your fifth answer is : ${guess5}`);


var guess6 = prompt("can you guess my brothers num ? ", "guess anumber between 1 & 10")
for (var i = 0; i < 3; i++) {
    if (guess6 == 6) {
        alert('you are geniuses bro');
        x = x + 1;
        { break; };
    } else if (guess6 < 5) {
        alert('the guess is too low , try agin ');
        var guess6 = prompt("can you guess my brothers num ? ", "guess anumber between 1 & 10");
    } else if (guess6 > 5) {
        alert('the guess is near , try again ');
        var guess6 = prompt("can you guess my brothers num ? ", "guess anumber between 1 & 10");
    }
}
alert(`your sixth answer is : ${guess6}`);
alert(`the correct answer is : 6 `)
alert(`your name is ${name}`);
//console.log(name);

var laptobs = ['lenovo', 'hp', 'dell', 'ibm', 'acer', 'mac'];
var guess7 = prompt("guess my fav laptob type ?", "dell");

for (var i = 0; i < 5; i++) {
    if (laptobs[i] == guess7 ) {
        alert('good job bro !');
        x = x + 1;
        { break; };
    } else {
        alert('try agin man !');
        var guess7 = prompt("guess my fav laptob type ?", "dell");
    }
}

alert(`the answer is : ${laptobs}`);
alert(`the number of correct answer out of 7 is : ${x}`);



