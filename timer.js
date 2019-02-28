//if (localStorage.getItem("savedTime") === null || localStorage.getItem("savedURL") != urls) {
//	startday = new Date();
//	clockStart = startday.getTime();
//	localStorage.setItem("savedTime", clockStart.toString());
//} else {
//	clockStart = parseInt(localStorage.getItem("savedTime"))
//};

var urls;
var lastTimestamp;
var lastURL;


function initStopwatch() {
	var currentTime = new Date();
	chrome.storage.local.get(["savedTime"], function(data) {
		lastTimestamp = data.savedTime;
	});
	clockStart = parseInt(lastTimestamp);
	return((currentTime.getTime() - clockStart)/1000);
	}


function clock() {
	var tSecs = Math.round(initStopwatch());
	var iSecs = tSecs%60;
	var iMins = Math.round((tSecs-30)/60);
	var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
    var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
	document.getElementById("timer").innerHTML = sMins+":"+sSecs;
	//document.getElementById("timer").innerHTML = tSecs
	chrome.tabs.query({'active': true, 'currentWindow': true},
	function(tabs){
		urls = tabs[0].url;
        });
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

