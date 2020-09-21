/*
 * Author: William Ramos <wramos@csumb.edu>
 * Created: 21 September 2020
 * License: Public Domain
 */

// Arrays and Objects

//Define Variables
var myTransport = ["Toyota Corolla", "Longboard", "Fixed Gear Bicycle", "Mom's BMW"];

var myMainRide = {
	make: "Toyota",
	model: "Corolla",
	color: "Gray",
	year: "2010",
	age: function() {
		return 2020 - age;
	}
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
	JSON.stringify(myMainRide, null, '\t'), "</pre>");