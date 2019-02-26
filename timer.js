//if (localStorage.getItem("savedTime") === null || localStorage.getItem("savedURL") != urls) {
//	startday = new Date();
//	clockStart = startday.getTime();
//	localStorage.setItem("savedTime", clockStart.toString());
//} else {
//	clockStart = parseInt(localStorage.getItem("savedTime"))
//};

var urls;

function reset_clock() {
	chrome.tabs.query({'active': true, 'currentWindow': true},
	function(tabs){
		urls = tabs[0].url;
		});
	if (urls !== localStorage.getItem("savedURL")) {
		startday = new Date();
		clockStart = startday.getTime();
		localStorage.setItem("savedTime", clockStart.toString());
		localStorage.setItem("savedURL", urls);
	} else {
		clockStart = parseInt(localStorage.getItem("savedTime"));
	}
}


function initStopwatch() {
	var currentTime = new Date();
	clockStart = localStorage.getItem("savedTime");
	return((currentTime.getTime() - clockStart)/1000);
	}


function clock() {
	reset_clock();
	var tSecs = Math.round(initStopwatch());
	var iSecs = tSecs%60;
	var iMins = Math.round((tSecs-30)/60);
	var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
    var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
	document.getElementById("timer").innerHTML = sMins+":"+sSecs;
	//document.getElementById("timer").innerHTML = tSecs
	document.getElementById("test").innerHTML = urls;
	//document.getElementById("test2").innerHTML = localStorage.getItem("savedURL");
	//time = time+1
	//localStorage.setItem("savedTime", time.toString())
	//alert(sMins+":"+sSecs);
	setTimeout(function () {clock()}, 1000)
}


function allTasks() {
	clock();
}


document.addEventListener('DOMContentLoaded', function () {
	//document.getElementById('timer').addEventListener('click', clickHandler);
	//alert("Hello world");
	//reset_clock();
	allTasks();
  });

