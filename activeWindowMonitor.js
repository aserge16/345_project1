chrome.windows.onCreated.addListener(setUrl(window)) ;
chrome.tabs.onUpdated.addListener(setUrl());
setInterval(resetClock, 1000);

var urls;
var lastTimestamp;
var lastURL;

function setUrl(window) {
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
		startday = new Date();
		clockStart = startday.getTime();
		//localStorage.setItem("savedTime", clockStart.toString());
		//localStorage.setItem("savedURL", urls);
		chrome.storage.local.set({"savedTime":clockStart.toString()}, function() {
			console.log('Saved time is ' + clockStart.toString());
		});
		chrome.storage.local.set({"savedURL": urls}, function(){
			console.log('Saved URL is ' + urls);
		});
	}
}
