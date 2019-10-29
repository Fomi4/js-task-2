// Write a program that asks user to enter his favorite color.
// If the color is red, suggest him (using alert() function) to buy a Ferrari
// If the color is yellow, suggest him to buy a Lamborghini
// If the color is blue, suggest him to buy a Subaru
// else - display the following message 'We cannot find a car for you'

let color = prompt("What you favorite color?", "");

if (color == "red") {
  alert("buy a Ferrari");
} else if (color == "yellow") {
  alert("buy a Lamborghini");
} else if (color == "blue") {
  alert("buy a Subaru");
} else {
  alert("We cannot find a car for you");
}