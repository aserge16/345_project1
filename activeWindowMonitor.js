chrome.windows.onCreated.addListener(setUrl(window)) ;
chrome.tabs.onUpdated.addListener(setUrl());
setInterval(resetClock, 1000);

var urls;

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
	var lastURL;
	var lastTimestamp;
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
		chrome.storage.local.set({"savedTime":clockStart.toString()}, function() {
			console.log('Saved time is ' + clockStart.toString());
		});
		chrome.storage.local.set({"savedURL": urls}, function(){
			console.log('Saved URL is ' + urls);
		});
	}
}
