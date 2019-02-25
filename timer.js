var urls = localStorage.getItem("savedURL");
chrome.tabs.query({'active': true, 'currentWindow': true},
    function(tabs){
    urls = tabs[0].url;
});

if (localStorage.getItem("savedTime") === null || localStorage.getItem("savedURL") != urls) {
	startday = new Date();
	clockStart = startday.getTime();
	localStorage.setItem("savedTime", clockStart.toString());
} else {
	clockStart = parseInt(localStorage.getItem("savedTime"))

};
localStorage.setItem("savedURL", urls);

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
	//document.getElementById("timer").innerHTML = tSecs
	document.getElementById("test").innerHTML = urls;
	//document.getElementById("test2").innerHTML = localStorage.getItem("savedURL");
	//time = time+1
	//localStorage.setItem("savedTime", time.toString())
	//alert(sMins+":"+sSecs);
	setTimeout(function () {clock()}, 1000)
}

function allTask() {
	clock()
}

document.addEventListener('DOMContentLoaded', function () {
	//document.getElementById('timer').addEventListener('click', clickHandler);
	//alert("Hello world");
	allTask();
  });