chrome.windows.onCreated.addListener(setUrl()) ;
chrome.tabs.onUpdated.addListener(setUrl());
setInterval(resetClock, 1000);


var urls;
var lastTimestamp;
var lastURL;

function setUrl() {
    startday = new Date();
    clockStart = startday.getTime();
    chrome.tabs.query({'active': true, 'currentWindow': true},
	function(tabs){
		urls = tabs[0].url;
        });
    chrome.storage.local.set({"savedTime":clockStart.toString()}, function() {
        console.log('Saved time is ' + clockStart.toString());
    });
    chrome.storage.local.set({"savedURL": urls}, function(){
        console.log('Saved URL is ' + urls);
    });
}


function resetClock() {
	chrome.storage.local.get(["savedURL"], function(data){
		lastURL = data.savedURL;
		console.log(lastURL)
	});
	chrome.storage.local.get(["savedTime"], function(data) {
		lastTimestamp = data.savedTime;
    });
    chrome.tabs.query({'active': true, 'currentWindow': true},
	function(tabs){
		urls = tabs[0].url;
        });
	if (urls !== lastURL) {
		// startday = new Date();
		// clockStart = startday.getTime();
		// chrome.storage.local.set({"savedTime":clockStart.toString()}, function() {
		// 	console.log('Saved time is ' + clockStart.toString());
		// });
		// chrome.storage.local.set({"savedURL": urls}, function(){
		// 	console.log('Saved URL is ' + urls);
		// });
		setUrl()
	} else {
		var currentTime = new Date();
		clockStart = parseInt(lastTimestamp);
		var tSecs = Math.round((currentTime.getTime() - clockStart)/1000);
		var iMins = Math.round((tSecs-30)/60);
		if (iMins > 0) {
			var answer = window.confirm(urls +" has been open longer than 30 minutes, would you like to quit now?");
			if (answer){
				chrome.tabs.query({'active': true, 'currentWindow': true}, 
				function(tabs){
					chrome.tabs.remove(tabs[0].id);
					});
				setUrl();
				} else {
					setUrl();
				}
			
		}
	}
}
