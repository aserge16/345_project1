chrome.runtime.onMessage.addListener(function(request,sender, sendResponse){
    chrome.tabs.query({'active': true, 'currentWindow': true}, 
    function(tabs){
        chrome.tabs.remove(tabs[0].id);
        });

})