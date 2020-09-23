/*
 * Author: William Ramos <wramos@csumb.edu>
 * Created: 23 September 2020
 * License: Public Domain
 */

// Functions

function sortUserName() {
	var userName = window.prompt("State your name");
	console.log("userName = ", userName);

// split string to array
var nameArray = userName,split('');
console.log("nameArray =", namArray);

//sort array
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);

//join array back to a string
var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);

return nameSorted;
}

// output
document.writeln("Your new name: ",
	sortUserName(), "</br>");