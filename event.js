setTime()

var defaultID = setInterval(function(){timer(30)}, 1000); // Set the default time threshold to 30 minutes
chrome.runtime.onMessage.addListener( //receive message from popup.js background script
    function(request, sender, sendResponse){
        clearInterval(defaultID); //stop the current countdown from running
        if (request.click == "True"){
            setTime(); //reset the clock
            alert("Delay time set!");
            minute = parseInt(request.time);
            defaultID = setInterval(function(){timer(minute), 1000}); //set the new countdown accoirding to user's input
        }
    }
)

// Countdown clock. Input: Time in minutes/ Output: Confirmation box 
function timer(minute) {
    var urls = window.location.href;
    var lastTimeStamp = sessionStorage.getItem("savedTime");
    clockStart = parseInt(lastTimeStamp);
    var currentTime = new Date();
    var tSecs = Math.round((currentTime.getTime() - clockStart)/1000);
    var iMins = Math.floor(tSecs/60);
    if (iMins == minute){ //confirmation box 
        var answer = window.confirm(urls +" has been open for " + iMins.toString()+ " minutes, would you like to quit now?");
        if (answer){
            chrome.runtime.sendMessage("close"); //send message to close tabs(closeTab.js)
        } else {
            setTime() //reset countdown
        }
    }
}

function setTime() { //set the start mark of countdown
    var startTime = new Date();
    var clockStart = startTime.getTime();
    sessionStorage.setItem("savedTime", clockStart.toString());
}
