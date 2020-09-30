/*
 * Author: William Ramos <wramos@csumb.edu>
 * Created: 28 September 2020
 * License: Public Domain
 */

 // Anon Functions and Callbacks

 firstThing("TEST 1");
 secondThing("TEST 2");
 thirdThing("TEST 3");

 // Test 1

 setTimeout(function() {
 	firstThing("TEST 1");
 } , 0);

 setTimeout(function() {
 	secondThing("TEST 1");
 } , 0);


setTimeout(function() {
	thirdThing("TEST 1");
} , 0