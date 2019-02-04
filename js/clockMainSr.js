var ccm = [document.getElementById("ccm-one"), document.getElementById("ccm-two"), document.getElementById("ccm-three")];
var ccmBlank = document.getElementById("ccm-blank");
var ctm = [document.getElementById("ctm-one"),document.getElementById("ctm-two")];
var ctmBlank = [document.getElementById("triLeft"),document.getElementById("triRight"),document.getElementById("triBottom")];
var csm = [document.getElementById("csm-one"),document.getElementById("csm-two"),document.getElementById("csm-three"),document.getElementById("csm-four")];
//var outForForm = document.getElementById('timeDisp');
//var inForForm = document.getElementById('userGuess');

var csmBlank = document.getElementById("csm-blank");

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
	//inForForm.value = hGuess + "." + pT(mGuess);
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

function pT(tu) {
	var cTu = 0, tTu = 0, sTu = 0, rTu = 0;
	if (tu >= 15 ) 
		cTu = tu / 15, rTu = tu % 15, cTu = floorIt(cTu);
	if (tu >= 5 && tu < 15) 
		tTu = tu / 5, rTu = tu % 5, tTu = floorIt(tTu);
	else 
		if (tu > 5) 
			tTu = rTu / 5, rTu = rTu % 5, tTu = floorIt(tTu);
	if (tu >= 1 && tu < 5) 
		sTu = tu / 1, sTu = floorIt(sTu);
	else 
		sTu = rTu / 1, sTu = floorIt(sTu);
	pTu = cTu + "." + tTu + "." + sTu;
	return pTu;
}

function floorIt(x) {
	x = Math.floor(x);
	return x;
}

function hourColour(colrs) {
	var val = colrs.split(",");
	var sTuC = val[0], tTuC = val[1], cTuC = val[2];
	for (var i = 0; i < 4; i++) {
			csm[i].style.background = sTuC;
	}
	csmBlank.style.borderColor = sTuC;
	for (var i = 0; i < 2; i++) {
			ctm[i].style.borderBottomColor = tTuC;
	}
	for (var i = 0; i < 3; i++) {
			ccm[i].style.backgroundColor = cTuC;
			ctmBlank[i].style.borderBottomColor = tTuC;
	}
	ccmBlank.style.borderColor = cTuC;
}

function showTime(m) {
	pTuM = pT(m);
	//pTuS = pT(s);
	//following line outputs minutes in dot notated form into console
	//console.log(pTuM);
	mAr = pTuM.split(".");
	cTuM = parseInt(mAr[0]);
	tTuM = parseInt(mAr[1]);
	sTuM = parseInt(mAr[2]);
	
	//document.getElementById("showCircleSeconds").innerHTML = pTuS;
	//calculates what needs to be displayed to have the correct time be interpreted by the user
	var dSM = new ClockDspElement(sTuM,4,csm,"inline-block");
	var dTM = new ClockDspElement(tTuM,2,ctm,"inline-block");
	var dCM = new ClockDspElement(cTuM,3,ccm,"block");
}
	
function hourPreCh(h) {
	//list of color vars to use english insted of hex
	var re = "#FF0000", gr = "#00FF00", bl = "#0000FF", cy = "#FFFF00", ma = "#FF00FF", ye = "#00FFFF";
	//script to set clock color using array
	var hours = [[gr,re,bl],[re,bl,gr],[gr,bl,re],[bl,re,gr],[re,gr,bl],[cy,ma,ye],[ma,ye,cy],[ye,cy,ma],[ma,cy,ye],[cy,ye,ma],[ye,ma,cy],[bl,gr,re]];
	colSet = hours[h - 1].join(",");
	hourColour(colSet);
}

function ClockDspElement(tU,limit,tag,dType) {
	this.active = false;
		if (tU > 0) {
			this.active = true;
			for (var i = 0; i < tU; i++) {
				tag[i].style.display = dType;
			}
		}
		else {
			this.active = false;
				if (!this.active) {
					for (var i = 0; i < limit; i++) {
						tag[i].style.display = "none";
					}
				}
		}
}

function startClock() {
	getTime();
}

function getTime() {
	var hour = calcRandHour();
	//adjust hours for qa
	//hour = hour + 2;
	var h = hour;
	var m = calcRandMin();
	//adjust minutes for qa
	//minutes = minutes + 4;
	//var s = now.getSeconds();
	h = showHour(h,hour);
	storeTime(h,m);
	showTime(m);
	//outForForm.value = h + "." + pT(m);
	document.getElementById("hourGuess").select();
	//will output to document a translation of the clock in current time format/terms
	document.getElementById("testCheck").innerHTML = "The clockface reads as " + h + dd + ", " + m + " minute(s)<ul><li>A small square represents a single time unit</li><li>A 3-4-5 triangle represents five time units</li><li>One third of a circle represents 15 time units (in this case minutes.)</li></ul>";
}

function showHour(h,h2) {
	dd = "am";
	if (h >= 12) {
		h = h2 - 12;
		dd = "pm";
		ctm[0].style.left = "57px";
		ctm[0].style.top = "50px";
		ctm[1].style.left = "141px";
		ctm[1].style.top = "50px";
		ctmBlank[0].style.left = "172px";
		ctmBlank[1].style.left = "-55px";
		ctmBlank[2].style.left = "57px";
	}
	else {
		document.getElementById("clockFace").style.transform = "rotate(180deg)";
		document.getElementById("clockFace").style.msTransform = "rotate(180deg)";
		document.getElementById("clockFace").style.webkitTransform = "rotate(180deg)";
		ctm[0].style.transform = "rotate(360deg)";
		ctm[0].style.left = "56px";
		ctm[0].style.top = "49px";
		ctm[1].style.transform = "rotate(360deg)";
		ctm[1].style.left = "140px";
		ctm[1].style.top = "49px";
		//csm[0].style.top = "113px";
		//csm[1].style.top = "113px";
		//csm[2].style.top = "130px";
		//csm[3].style.top = "130px";
	}
	if (h == 0) {
		h = 12;
    }
	hourPreCh(h);
	return h;
}