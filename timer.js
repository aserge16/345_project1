// WORK IN PROGRESS
// Implimentation of interval clock for user benefit

function initStopwatch() {
	var currentTime = new Date();
	var lastTimestamp = sessionStorage.getItem("savedTime");
	clockStart = parseInt(lastTimestamp);
	return((currentTime.getTime() - clockStart)/1000);
}

function clock() {
	var tSecs = Math.round(initStopwatch());
	var iSecs = tSecs%60;
	var iMins = Math.round((tSecs-30)/60);
	var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
	var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
	
	document.getElementById("clock").innerHTML = sMins+":"+sSecs;
	setTimeout(function () {clock()}, 1000)
}

document.addEventListener('DOMContentLoaded', function () {
	clock();
});
