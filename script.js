var milesPerYear = prompt("How many miles do you drive a year?");
var pricePerGallon = prompt("How much is gas per gallon?");
var mpg;
var mpgMath;
var gallonMath;
var car1 = document.body.querySelector("#car1");
var car2 = document.body.querySelector("#car2");
var car3 = document.body.querySelector("#car3");
var car4 = document.body.querySelector("#car4");

function yearlycost(ph1, ph2, ph3,ph4) {
  milesPerYear = ph1;
  pricePerGallon = ph2;
  mpg = ph3;
  mpgMath = milesPerYear / mpg; //miles per year / mpg
  gallonMath = mpgMath * pricePerGallon; //mpgmath * price per gallon
  ph4.innerHTML ="If you drove " + milesPerYear + " miles a year with $" + pricePerGallon + " a gallon and a mpg of " + mpg + " it would cost " + gallonMath;//make code that changes the innerHTML id so you can put them whereever you want???
}

yearlycost(milesPerYear, pricePerGallon, 12,car1);
yearlycost(milesPerYear, pricePerGallon, 17,car2);
yearlycost(milesPerYear, pricePerGallon, 26,car3);
yearlycost(milesPerYear, pricePerGallon, 29,car4);
