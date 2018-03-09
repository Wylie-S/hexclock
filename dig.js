//how do i retrieve time? // set variable
//what do i want to see on the screen?
//console.log(time.getHours(); console.log(time.getMinutes(); console.log(time.getSeconds();

//i need to reference the clock to be able to push the info to it

// go back and change html /css to these id' so it links




//function the hexclock this way :


function displayHexClock() {
	//to find time  use newDate constructor //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
	// Where Date is called as a constructor (with more than one argument, the specifed arguments represent local time

	// variable  == (im requesting the hour of the day ,min,second)

	//	The representation of the hour. Possible values are "numeric" which i need in quotes so use tostring

	//https://www.youtube.com/watch?v=M3VEFVBRw-o
	var clock = new Date();
	var hours = clock.getHours();
	var mins = clock.getMinutes();
	var secs = clock.getSeconds();
	//making any exceptions?

	//everything must be 2 didits in length
	if (hours.toString().length < 2) {
		hours = '0' + hours;
	}

	if (mins.toString().length < 2) {
		mins = '0' + mins;
	}
	if (secs.toString().length < 2) {
		secs = '0' + secs;
	}

	// making it all together updating var to encompass all parts
	var time = hours + ':' + mins + ':' + secs;
	var color = '#' + hours + mins + secs;


	//clock or color  var ( what it consist of )= the answer to the string problem whic i asked when setting that variable


	//The backgroundColor property sets or returns the background color of an element which is myStr i got above
	document.body.style.backgroundColor = color;

	// Update the current time
	document.getElementById('time').innerHTML = time;

	// Update the current hex value
	document.getElementById('color').innerHTML = color;
}

// function to run or call(invoke)

//how often will it update in milleseconds so 1000= every second for thefunction hexclock
window.onload = function() {
	// Update the clock every second
	displayHexClock();
	setInterval(displayHexClock, 1000);

};
// })();