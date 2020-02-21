'use strict';

alert('welcome to my website ');
var x = 0;
var name = prompt("can you tell us your NAME please !", "ex:AHMAD");
function major() {
    var guess1 = prompt("Do you think I studied Electrical engineering?");
    switch (guess1.toLowerCase()) {
        case "yes":
        case "y":
            alert('you are great man ');
            x = x + 1;
            break;
        case "no":
        case "n":
            alert('try again bro');
            break;
        default: guess1 = prompt("Only yes/y or no/n");
    }
    alert(`first answer is ${guess1}`);
}
major();

function food() {
    var guess2 = prompt("Do you think I like falafel?");
    switch (guess2.toLowerCase()) {
        case "yes":
        case "y":
            alert('good job man');
            x = x + 1;
            break;
        case "n":
        case "no":
            alert('opps man ! try once more ');
            break;
        default: guess2 = prompt("Only yes/y or no/n");
    }
    alert(`second answer is ${guess2}`);
}
food();

function age() {
    var guess3 = prompt("Do you think I'm above 20?", "yes or no")
    switch (guess3.toLowerCase()) {
        case "yes":
        case "y":
            alert('amazing man!');
            x = x + 1;
            break;
        case "no":
        case "n":
            alert('oppes , welcome any where !');
            break;
        default: guess3 = prompt("Only yes/y or no/n");
            break;
    }
    alert(`your third answer is : ${guess3}`);
}
age();

function phone() {
    var guess4 = prompt("Do think I have Iphone?")
    switch (guess4.toLowerCase()) {
        case "yes":
        case "y":
            alert('Opps I have Samsung!');
            break;
        case "no":
        case "n":
            x = x + 1;
            alert("That's right. I have Samsung!");
            break;
        default: guess4 = prompt("Only yes/y or no/n");
            break;
    }
    alert(`your fourth answer is : ${guess4}`);
}
phone();

function car() {
    var guess5 = prompt("Do you think I have Kia?")
    switch (guess5.toLowerCase()) {
        case "yes":
        case "y":
            alert('perfect man !');
            x = x + 1;
            break;
        case "no":
        case "n":
            alert('oppes , take another chance !');
            break;
        default: guess5 = prompt("Only yes/y or no/n");
            break;
    }
    alert(`your fifth answer is : ${guess5}`);
}
car();

function siblings() {
    var guess6 = parseInt(prompt("can you guess my brothers num ? ", "guess anumber between 1 & 10"));
    for (var i = 0; i < 3; i++) {
        if (guess6 === 6) {
            alert('you are geniuses bro');
            x = x + 1;
            break;
        } else if (guess6 < 5) {
            alert('the guess is too low , try agin ');
            var guess6 = parseInt(prompt("can you guess my brothers num ? ", "guess anumber between 1 & 10"));
        } else if (guess6 > 5) {
            alert('the guess is near , try again ');
            var guess6 = parseInt(prompt("can you guess my brothers num ? ", "guess anumber between 1 & 10"));
        }
        else {
            var guess6 = prompt("Put an integer");
        }
    }
    alert(`your sixth answer is : ${guess6}`);
    alert(`the correct answer is : 6 `)
    alert(`your name is ${name}`);
}
siblings();

function laptops() {
    var laptops = ['lenovo', 'hp', 'dell', 'ibm', 'acer', 'mac'];
    var test = false;
    var guess7 = prompt("guess my fav laptop type ?", "dell");
    for (var j = 0; j < 5; j++) {
        for (var i = 0; i < laptops.length; i++) {
            if (guess7 == laptops[i]) {
                alert('good job bro !');
                x = x + 1;
                test = true;
                break;
            }
        }
        if (test) {
            break;
        }
        else {
            alert('try agin man !');
            var guess7 = prompt("guess my fav laptop type ?", "dell");
        }
    }
    alert(`the answer is : ${laptops}`);
    alert(`the number of correct answer out of 7 is : ${x}`);
}
laptops();