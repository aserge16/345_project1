chrome.runtime.onMessage.addListener(function(request,sender, sendResponse){ //receive message from event.js
    chrome.tabs.query({'active': true, 'currentWindow': true}, 
    function(tabs){
        chrome.tabs.remove(tabs[0].id);  //terminate tab
        });

})