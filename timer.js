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
	chrome.tabs.query({'active': true, 'currentWindow': true},
	function(tabs){
		urls = tabs[0].url;
        });
	document.getElementById("test").innerHTML = urls;
	setTimeout(function () {clock()}, 1000)
}

function store_delay(){
	var delay_time = parseInt(document.getElementById('amount').value);
	sessionStorage.setItem("savedDelay", delay_time);
	document.getElementById('amount').value = "";
}

document.addEventListener('DOMContentLoaded', function () {
	clock();
	var button = document.getElementById("submit_button");
	button.addEventListener('click', store_delay);
});
