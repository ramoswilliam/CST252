/*
 * Author: William Ramos <wramos@csumb.edu>
 * Created: 30 September 2020
 * License: Public Domain
 */

 // JavaScript for the Web

var outputEl = document.getElementByID("output");

// Create a new element with document.createElement("p") and assign it to a cariable new1El
var new1El  document.createElement("p");
// Change the html attribute of new1El to say "Something new"
new1El.innerHTML("Something new.");
//Create a new element with document.createElement("p") abd assign it to a variable new1El
var new2El = document.createElement("p");
//Change the html attribute of new1El to say "Something else."
new2El.innerHTML("Something else.");
//Append both new elements one at a time using appendChild()
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
new1El.style.color = "blue";
outputEl.style.border = "solid 1px red";