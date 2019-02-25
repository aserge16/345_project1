
startday = new Date();
clockStart = startday.getTime();

function clickHandler(e) {
	setTimeout(handler, 1000);
  }

function initStopwatch() {
	var currentTime = new Date();
	return((currentTime.getTime() - clockStart)/1000);
	}
function clock() {
	var tSecs = Math.round(initStopwatch());
	var iSecs = tSecs%60;
	var iMins = Math.round((tSecs-30)/60);
	var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
    var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
	document.getElementById("timer").innerHTML = sMins+":"+sSecs;
	//alert(sMins+":"+sSecs);
	setTimeout(function () {clock()}, 1000)
}


document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('timer').addEventListener('click', clickHandler);
	//alert("Hello world");
	clock();
  });