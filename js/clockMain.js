var ccm1 = document.getElementById("ccm-one");
var ccm2 = document.getElementById("ccm-two");
var ccm3 = document.getElementById("ccm-three");
var ccmBlank = document.getElementById("ccm-blank");
var ctm1 = document.getElementById("ctm-one");
var ctm2 = document.getElementById("ctm-two");
var csmBlank = document.getElementById("csm-blank");
var csm1 = document.getElementById("csm-one");
var csm2 = document.getElementById("csm-two");
var csm3 = document.getElementById("csm-three");
var csm4 = document.getElementById("csm-four");
function calcRandHour() {
	var rh = Math.round(Math.random() * 24);
	return rh;
}
function calcRandMin() {
	var rm = Math.round(Math.random() * 59);
	return rm;
}
function timeCheck() {
	var messageString = "";
	var hourR = false;
	var minR = false;
	var hGuess = parseInt(document.getElementById('hourGuess').value);
	var mGuess = parseInt(document.getElementById('minuteGuess').value); 
	if (hGuess === hAnswer) {
		messageString += "Hour is correct.\n";
		hourR = true;
	}
	else {
		messageString += "Hour is incorrect. The correct hour is " + hAnswer + ".\n";
	}
	if (mGuess === mAnswer) {
		messageString += "Minute is correct.\n";
		minR = true;
	}
	else {
		messageString += "Minute is incorrect. The correct minute is " + mAnswer + ".\n";
	}
	if (hourR && minR) {
		messageString += "Awesome work, refresh this page for another puzzle!";
	}
	else {
		messageString += "Better luck next time. Refresh this page for another puzzle!";
	}
	alert(messageString); 
}

var gButt = document.getElementById('chGuess');
gButt.onclick = timeCheck;

function storeTime(h,m) {
	hAnswer = h;
	mAnswer = m;
}

function showTime() {
	//var now = new Date();
	var hour = calcRandHour();
	//adjust hours for qa
	//hour = hour + 2;
	var h = hour;
	var minutes = calcRandMin();
	//adjust minutes for qa
	//minutes = minutes + 4;
	//var seconds = now.getSeconds();
	//checks for am/pm and change 24hr to 12
	var dd = "am";
	if (h >= 12) {
		h = hour - 12;
		dd = "pm";
		document.getElementById("ctm-one").style.left = "58px";
		document.getElementById("ctm-one").style.top = "50px";
		document.getElementById("ctm-two").style.left = "142px";
		document.getElementById("ctm-two").style.top = "50px";
	}
	else {
		document.getElementById("clockFace").style.transform = "rotate(180deg)";
		document.getElementById("clockFace").style.msTransform = "rotate(180deg)";
		document.getElementById("clockFace").style.webkitTransform = "rotate(180deg)";
		document.getElementById("ctm-one").style.transform = "rotate(360deg)";
		document.getElementById("ctm-one").style.left = "58px";
		document.getElementById("ctm-one").style.top = "49px";
		document.getElementById("ctm-two").style.transform = "rotate(360deg)";
		document.getElementById("ctm-two").style.left = "142px";
		document.getElementById("ctm-two").style.top = "49px";
		document.getElementById("csm-one").style.top = "113px";
		document.getElementById("csm-two").style.top = "113px";
		document.getElementById("csm-three").style.top = "130px";
		document.getElementById("csm-four").style.top = "130px";
	}
	if (h == 0) {
		h = 12;
    }
	storeTime(h,minutes);
	//displaySquareSeconds(seconds);
	//displayTriSeconds(seconds);
	//displayCircleSeconds(seconds);
	displaySquareMinutes(minutes);
	//console.log("square minutes " + displaySquareMinutes(minutes));
	displayTriMinutes(minutes);
	//console.log("tri minutes " + displayTriMinutes(minutes));
	displayCircleMinutes(minutes);
	//console.log("circle minutes " + displayCircleMinutes(minutes));
	//if (!squareSeconds){
	//document.getElementById("squSecLab").visibility = hidden;
	//}
	document.getElementById("testCheck").innerHTML = "The clockface reads as " + h + dd + ", " + minutes + " minute(s)<ul><li>A small square represents a single time unit</li><li>A 3-4-5 triangle represents five time units</li><li>One third of a circle represents 15 time units (in this case minutes.)</li></ul>";
	if (h == 12) {
		csmBlank.style.borderColor = "#0000FF";
		csm1.style.background = "#0000FF";
		csm2.style.background = "#0000FF";
		csm3.style.background = "#0000FF";
		csm4.style.background = "#0000FF";
		ctm1.style.borderBottom = "140px solid #00FF00";
		ctm2.style.borderBottom = "140px solid #00FF00";
		ccm1.style.backgroundColor = "#FF0000";
		ccm2.style.backgroundColor = "#FF0000";
		ccm3.style.backgroundColor = "#FF0000";
		ccmBlank.style.border = "1px solid #FF0000";
	}
	if (h == 1) {
		csmBlank.style.borderColor = "#00FF00";
		csm1.style.background = "#00FF00";
		csm2.style.background = "#00FF00";
		csm3.style.background = "#00FF00";
		csm4.style.background = "#00FF00";
		ctm1.style.borderBottom =  "140px solid #FF0000";
		ctm2.style.borderBottom =  "140px solid #FF0000";
		ccm1.style.backgroundColor = "#0000FF";
		ccm2.style.backgroundColor = "#0000FF";
		ccm3.style.backgroundColor = "#0000FF";
		ccmBlank.style.border = "1px solid #0000FF";
	}
	if (h == 2) {
		csmBlank.style.borderColor = "#FF0000";
		csm1.style.background = "#FF0000";
		csm2.style.background = "#FF0000";
		csm3.style.background = "#FF0000";
		csm4.style.background = "#FF0000";
		ctm1.style.borderBottom =  "140px solid #0000FF";
		ctm2.style.borderBottom =  "140px solid #0000FF";
		ccm1.style.backgroundColor = "#00FF00";
		ccm2.style.backgroundColor = "#00FF00";
		ccm3.style.backgroundColor = "#00FF00";
		ccmBlank.style.border = "1px solid #00FF00";
	}
	if (h == 3) {
		csmBlank.style.borderColor = "#00FF00";
		csm1.style.background = "#00FF00";
		csm2.style.background = "#00FF00";
		csm3.style.background = "#00FF00";
		csm4.style.background = "#00FF00";
		ctm1.style.borderBottom =  "140px solid #0000FF";
		ctm2.style.borderBottom =  "140px solid #0000FF";
		ccm1.style.backgroundColor = "#FF0000";
		ccm2.style.backgroundColor = "#FF0000";
		ccm3.style.backgroundColor = "#FF0000";
		ccmBlank.style.border = "1px solid #FF0000";
	}
	if (h == 4) {
		csmBlank.style.borderColor = "#0000FF";
		csm1.style.background = "#0000FF";
		csm2.style.background = "#0000FF";
		csm3.style.background = "#0000FF";
		csm4.style.background = "#0000FF";
		ctm1.style.borderBottom =  "140px solid #FF0000";
		ctm2.style.borderBottom =  "140px solid #FF0000";
		ccm1.style.backgroundColor = "#00FF00";
		ccm2.style.backgroundColor = "#00FF00";
		ccm3.style.backgroundColor = "#00FF00";
		ccmBlank.style.border = "1px solid #00FF00";
	}
	if (h == 5) {
		csmBlank.style.borderColor = "#FF0000";
		csm1.style.background = "#FF0000";
		csm2.style.background = "#FF0000";
		csm3.style.background = "#FF0000";
		csm4.style.background = "#FF0000";
		ctm1.style.borderBottom =  "140px solid #00FF00";
		ctm2.style.borderBottom =  "140px solid #00FF00";
		ccm1.style.backgroundColor = "#0000FF";
		ccm2.style.backgroundColor = "#0000FF";
		ccm3.style.backgroundColor = "#0000FF";
		ccmBlank.style.border = "1px solid #0000FF";
	}
	if (h == 6) {
		csmBlank.style.borderColor = "#FFFF00";
		csm1.style.background = "#FFFF00";
		csm2.style.background = "#FFFF00";
		csm3.style.background = "#FFFF00";
		csm4.style.background = "#FFFF00";
		ctm1.style.borderBottom =  "140px solid #FF00FF";
		ctm2.style.borderBottom =  "140px solid #FF00FF";
		ccm1.style.backgroundColor = "#00FFFF";
		ccm2.style.backgroundColor = "#00FFFF";
		ccm3.style.backgroundColor = "#00FFFF";
		ccmBlank.style.border = "1px solid #00FFFF";
	}
	if (h == 7) {
		csmBlank.style.borderColor = "#FF00FF";
		csm1.style.background = "#FF00FF";
		csm2.style.background = "#FF00FF";
		csm3.style.background = "#FF00FF";
		csm4.style.background = "#FF00FF";
		ctm1.style.borderBottom =  "140px solid #00FFFF";
		ctm2.style.borderBottom =  "140px solid #00FFFF";
		ccm1.style.backgroundColor = "#FFFF00";
		ccm2.style.backgroundColor = "#FFFF00";
		ccm3.style.backgroundColor = "#FFFF00";
		ccmBlank.style.border = "1px solid #FFFF00";
	}
	if (h == 8) {
		csmBlank.style.borderColor = "#00FFFF";
		csm1.style.background = "#00FFFF";
		csm2.style.background = "#00FFFF";
		csm3.style.background = "#00FFFF";
		csm4.style.background = "#00FFFF";
		ctm1.style.borderBottom =  "140px solid #FFFF00";
		ctm2.style.borderBottom =  "140px solid #FFFF00";
		ccm1.style.backgroundColor = "#FF00FF";
		ccm2.style.backgroundColor = "#FF00FF";
		ccm3.style.backgroundColor = "#FF00FF";
		ccmBlank.style.border = "1px solid #FF00FF";
	}
	if (h == 9) {
		csmBlank.style.borderColor = "#FF00FF";
		csm1.style.background = "#FF00FF";
		csm2.style.background = "#FF00FF";
		csm3.style.background = "#FF00FF";
		csm4.style.background = "#FF00FF";
		ctm1.style.borderBottom =  "140px solid #FFFF00";
		ctm2.style.borderBottom =  "140px solid #FFFF00";
		ccm1.style.backgroundColor = "#00FFFF";
		ccm2.style.backgroundColor = "#00FFFF";
		ccm3.style.backgroundColor = "#00FFFF";
		ccmBlank.style.border = "1px solid #00FFFF";
	}
	if (h == 10) {
		csmBlank.style.borderColor = "#FFFF00";
		csm1.style.background = "#FFFF00";
		csm2.style.background = "#FFFF00";
		csm3.style.background = "#FFFF00";
		csm4.style.background = "#FFFF00";
		ctm1.style.borderBottom =  "140px solid #00FFFF";
		ctm2.style.borderBottom =  "140px solid #00FFFF";
		ccm1.style.backgroundColor = "#FF00FF";
		ccm2.style.backgroundColor = "#FF00FF";
		ccm3.style.backgroundColor = "#FF00FF";
		ccmBlank.style.border = "1px solid #FF00FF";
	}
	if (h == 11) {
		csmBlank.style.borderColor = "#00FFFF";
		csm1.style.background = "#00FFFF";
		csm2.style.background = "#00FFFF";
		csm3.style.background = "#00FFFF";
		csm4.style.background = "#00FFFF";
		ctm1.style.borderBottom =  "140px solid #FF00FF";
		ctm2.style.borderBottom =  "140px solid #FF00FF";
		ccm1.style.backgroundColor = "#FFFF00";
		ccm2.style.backgroundColor = "#FFFF00";
		ccm3.style.backgroundColor = "#FFFF00";
		ccmBlank.style.border = "1px solid #FFFF00";
	}
	/*if (seconds == 0) {
		document.getElementById("showSquareSeconds").innerHTML = "";
		document.getElementById("showCircleSeconds").innerHTML = "";
		document.getElementById("showTriSeconds").innerHTML = "";
	}*/
	if (minutes == 0) {
		csm1.style.display = "none";
		csm2.style.display = "none";
		csm3.style.display = "none";
		csm4.style.display = "none";
		ctm1.style.display = "none";
		ctm2.style.display = "none";
		ccm1.style.display = "none";
		ccm2.style.display = "none";
		ccm3.style.display = "none";
	}
	//if time is equal to multiple of 5 clear the 1time-unit measure
	//in seconds
	/*if (mClear.length > 0) {
		for (var ii = 0; ii < mClear.length; ii++){
			if (mClear[ii] == seconds){
		document.getElementById("showSquareSeconds").innerHTML = "";
		}
		}
	}*/
	//in minutes
	if (mClear.length > 0) {
		for (var kk = 0; kk < mClear.length; kk++){
			if (mClear[kk] == minutes){
				document.getElementById("csm-one").setAttribute("style", "display: hidden;");
				document.getElementById("csm-two").setAttribute("style", "display: hidden;");
				document.getElementById("csm-three").setAttribute("style", "display: hidden;");
				document.getElementById("csm-four").setAttribute("style", "display: hidden;");
		}
		}
	}
	//if time is equal to multiple of 15 clear the 5time-unit measure
	//in seconds
	/*if (mClearTwo.length > 0) {
		for (var jj = 0; jj < mClearTwo.length; jj++){
			if (mClearTwo[jj] == seconds){
		document.getElementById("showTriSeconds").innerHTML = "";
		}
		}
	}*/
	//in minutes
	if (mClearTwo.length > 0) {
		for (var ll = 0; ll < mClearTwo.length; ll++){
			if (mClearTwo[ll] == minutes){
		document.getElementById("ctm-one").style.display = "none";
		document.getElementById("ctm-two").style.display = "none";
		}
		}
	}
	//if new hour make sure to display 15time-unit measure (empty) to read hour by color
	if (mClearThree.length > 0) {
		for (var mm = 0; mm < mClearThree.length; mm++){
			if (mClearThree[mm] == minutes) {
				document.getElementById("ccm-blank").style.display = "block";
			}		
		}
	}
	//var t = setTimeout("showTime()",1000);
	}
	
//var squareSeconds = true;
//var circleSeconds = true;
//var triSeconds = true;
var mCheckOne = [1,6,11,16,21,26,31,36,41,46,51,56];
var mCheckTwo = [2,7,12,17,22,27,32,37,42,47,52,57];
var mCheckThree = [3,8,13,18,23,28,33,38,43,48,53,58];
var mCheckFour = [4,9,14,19,24,29,34,39,44,49,54,59];
var mClear = [5,10,15,20,25,30,35,40,45,50,55];
var mClearTwo = [15,30,45];
var mClearThree = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var mCheckFiveOne = [5,6,7,8,9,10,11,12,13,14,20,21,22,23,24,35,36,37,38,39,40,41,42,43,44,50,51,52,53,54,55,56,57,58,59];
var vmCheckFifteenOne = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
var mCheckFiveTwo = [10,11,12,13,14,25,26,27,28,29,40,41,42,43,44,55,56,57,58,59];
var vmCheckFifteenTwo = [30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
var vmCheckFifteenThree = [45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];

/*function displaySquareSeconds(squareSec) {
if (mCheckOne.length > 0) {
	for (var i = 0; i < mCheckOne.length; i++) {
	if (mCheckOne[i] == squareSec) {
		squareSeconds = true;
		document.getElementById("showSquareSeconds").innerHTML = "*";
		}
		}
		}
if (mCheckTwo.length > 0) {
	for (var j = 0; j < mCheckOne.length; j++) {
	if (mCheckTwo[j] == squareSec) {
		squareSeconds = true;
		document.getElementById("showSquareSeconds").innerHTML = "**";
		}
		}
		}
if (mCheckThree.length > 0) {
	for (var k = 0; k < mCheckOne.length; k++) {
	if (mCheckThree[k] == squareSec) {
		squareSeconds = true;
		document.getElementById("showSquareSeconds").innerHTML = "***";
		}
		}
		}
if (mCheckFour.length > 0) {
	for (var l = 0; l < mCheckOne.length; l++) {
	if (mCheckFour[l] == squareSec) {
		squareSeconds = true;
		document.getElementById("showSquareSeconds").innerHTML = "****";
		}
		}
		}
	else {
		squareSeconds = false;
		document.getElementById("showSquareSeconds").innerHTML = "&nbsp;";
		}
}
function displayTriSeconds(triSec) {
if (mCheckFiveOne.length > 0) {
	for (var n = 0; n < mCheckFiveOne.length; n++) {
	if (mCheckFiveOne[n] == triSec) {
		triSeconds = true;
		document.getElementById("showTriSeconds").innerHTML = "--";
		}
		}
		}
if (mCheckFiveTwo.length > 0) {
	for (var m = 0; m < mCheckFiveTwo.length; m++) {
	if (mCheckFiveTwo[m] == triSec) {
		triSeconds = true;
		document.getElementById("showTriSeconds").innerHTML = "-- --";
		}
		}
		}
	else {
		triSeconds = false;
		document.getElementById("showTriSeconds").innerHTML = "&nbsp;";
		}
}
function displayCircleSeconds (circleSec){
if (vmCheckFifteenOne.length > 0) {
	for (var o = 0; o < vmCheckFifteenOne.length; o++) {
	if (vmCheckFifteenOne[o] == circleSec) {
		circleSeconds = true;
		document.getElementById("showCircleSeconds").innerHTML = "~~";
		}
		}
		}
if (vmCheckFifteenTwo.length > 0) {
	for (var p = 0; p < vmCheckFifteenTwo.length; p++) {
	if (vmCheckFifteenTwo[p] == circleSec) {
		circleSeconds = true;
		document.getElementById("showCircleSeconds").innerHTML = "~~ ~~";
		}
		}
		}
if (vmCheckFifteenThree.length > 0) {
	for (var q = 0; q < vmCheckFifteenThree.length; q++) {
	if (vmCheckFifteenThree[q] == circleSec) {
		circleSeconds = true;
		document.getElementById("showCircleSeconds").innerHTML = "~~ ~~ ~~";
		}
		}
		}
	else {
		circleSeconds = false;
		document.getElementById("showCircleSeconds").innerHTML = "&nbsp;";
		}
}*/
function displaySquareMinutes(squareMin) {
var squareMins = false;
//console.log("squareminutes function squaremins var " + squareMins);
if (mCheckOne.length > 0) {
	for (var i = 0; i < mCheckOne.length; i++) {
	if (mCheckOne[i] == squareMin) {
		squareMins = true;
		csm1.setAttribute("style", "display: inline-block;");
		}
		}
		}
if (mCheckTwo.length > 0) {
	for (var j = 0; j < mCheckOne.length; j++) {
	if (mCheckTwo[j] == squareMin) {
		squareMins = true;
		csm1.setAttribute("style", "display: inline-block;");
		csm2.setAttribute("style", "display: inline-block;");
		}
		}
		}
if (mCheckThree.length > 0) {
	for (var k = 0; k < mCheckOne.length; k++) {
	if (mCheckThree[k] == squareMin) {
		squareMins = true;
		csm1.setAttribute("style", "display: inline-block;");
		csm2.setAttribute("style", "display: inline-block;");
		csm3.setAttribute("style", "display: inline-block;");
		}
		}
		}
if (mCheckFour.length > 0) {
	for (var l = 0; l < mCheckOne.length; l++) {
	if (mCheckFour[l] == squareMin) {
		squareMins = true;
		csm1.setAttribute("style", "display: inline-block;");
		csm2.setAttribute("style", "display: inline-block;");
		csm3.setAttribute("style", "display: inline-block;");
		csm4.setAttribute("style", "display: inline-block;");
		}
		}
		}
	else {
		squareMins = false;
		if (!squareMins){
		csm1.setAttribute("style", "display: hidden;");
		csm2.setAttribute("style", "display: hidden;");
		csm3.setAttribute("style", "display: hidden;");
		csm4.setAttribute("style", "display: hidden;");
		}
		}
}
function displayTriMinutes(triMin) {
var triMinutes = false;
//console.log("triminutes function triminutes var " + triMinutes);
if (mCheckFiveOne.length > 0) {
	for (var n = 0; n < mCheckFiveOne.length; n++) {
	if (mCheckFiveOne[n] == triMin) {
		triMinutes = true;
		ctm1.style.display = "inline-block";
		}
		}
		}
if (mCheckFiveTwo.length > 0) {
	for (var m = 0; m < mCheckFiveTwo.length; m++) {
	if (mCheckFiveTwo[m] == triMin) {
		triMinutes = true;
		ctm1.style.display = "inline-block";
		ctm2.style.display = "inline-block";
		}
		}
		}
	else {
		triMinutes = false;
		}
		if (!triMinutes) {
		ctm1.style.display = "none";
		ctm2.style.display = "none";
		}
}
function displayCircleMinutes (circleMin){
var circleMinutes = false;
//console.log("circleminutes function circleminutes var " + circleMinutes);
if (vmCheckFifteenOne.length > 0) {
	for (var o = 0; o < vmCheckFifteenOne.length; o++) {
	if (vmCheckFifteenOne[o] == circleMin) {
		circleMinutes = true;
		ccm1.style.display = "block";
		}
		}
		}
if (vmCheckFifteenTwo.length > 0) {
	for (var p = 0; p < vmCheckFifteenTwo.length; p++) {
	if (vmCheckFifteenTwo[p] == circleMin) {
		circleMinutes = true;
		ccm1.style.display = "block";
		ccm2.style.display = "block";
		}
		}
		}
if (vmCheckFifteenThree.length > 0) {
	for (var q = 0; q < vmCheckFifteenThree.length; q++) {
	if (vmCheckFifteenThree[q] == circleMin) {
		circleMinutes = true;
		ccm1.style.display = "block";
		ccm2.style.display = "block";
		ccm3.style.display = "block";
		}
		}
		}
	else {
		circleMinutes = false;
		if (!circleMinutes){
		ccm1.style.display = "none";
		ccm2.style.display = "none";
		ccm3.style.display = "none";
		}
		}
}