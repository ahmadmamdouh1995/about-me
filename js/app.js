'use strict';
alert('welcome to my web site ');
var name = prompt("can you tell us your NAME pleas !", "ex:AHMAD");
var guess1 = prompt("can you guess my studied ?", "yes or no");
switch (guess1.toLowerCase()) {
    case "yes":
        alert('you are great man ');
        //console.log(guess1);
        break;
    case "no":
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
       // console.log(guess2);
        break
    case "no":
        alert('opps man ! try once more ');
       // console.log(guess2);
        break
    default:
        //console.log(guess2);

}
alert(`second answer is ${guess2}`);

var guess3 = prompt("can you guess my age ?", "yes or no")
switch (guess3.toLowerCase()) {
    case "yes":
        alert('amazing man !');
       // console.log(guess3);
        break;
    case "no":
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
       // console.log(guess4);
        break;
    case "no":
        alert('oppes , take another chance !');
       // console.log(guess4);
        break;
    default:
        //console.log(guess4);

}
alert(`your name is ${name}`);
//console.log(name);

