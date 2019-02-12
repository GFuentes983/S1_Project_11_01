"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Gabriel Fuentes 
   Date: 2.12.19  

*/

//Variable with a value of the date 
var thisTime = new Date();

// Sets the value of timeStr variable to be the method of thisTime variable
var timeStr = thisTime.toLocaleString();

//Changes the HTML of the element with the id of timeStamp and changes it to the variable timeStr
document.getElementById('timeStamp').innerHTML = timeStr;

// Creates a variable where the value is the hours in thisTime
var thisHour = thisTime.getHours();

// Creates a variable to get month value of thisTime
var thisMonth = thisTime.getMonth();

//Creates a mapNum that creates a with an operator
var mapNum = (2*thisMonth + thisHour) %24;
