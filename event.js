
// var minute;
// var defaultId;
// var clicker;
// setTime();
// function checkClick(){
//     clicker = sessionStorage.getItem('clicked');

//     if (clicker == null){
//         //alert(clicker)
//         timer(30);
//     } else if (clicker == 'true'){
//         minute = parseInt(sessionStorage.getItem('savedDelay'));
//         // clearInterval(defaultId);
//         // setInterval(function(){ timer(minute)},1000);
//         alert(clicker)
//         timer(minute)
//     }
// }
// setInterval(function(){checkClick()},1000);

setTime()
var defaultID = setInterval(function(){timer(10)}, 1000);
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        clearInterval(defaultID);
        if (request.click == "True"){
            setTime();
            minute = parseInt(request.time);
            defaultID = setInterval(function(){timer(minute), 1000});
        }
    }
)

function timer(minute) {
    var urls = window.location.href;
    var lastTimeStamp = sessionStorage.getItem("savedTime");
    clockStart = parseInt(lastTimeStamp);
    var currentTime = new Date();
    var tSecs = Math.round((currentTime.getTime() - clockStart)/1000);
    var iMins = Math.floor(tSecs/60);
    //alert(tSecs)
    if (tSecs > minute){
        var answer = window.confirm(urls +" has been open for " + tSecs.toString()+ " minutes, would you like to quit now?");
        if (answer){
            chrome.runtime.sendMessage("close");
        } else {
            setTime()
        }
    }
}
function util(cur,last){
    if (cur == last || last == null){
        alert(last);
    } else {
        alert("False");
    };
};

function setTime() {
    var startTime = new Date();
    var clockStart = startTime.getTime();
    sessionStorage.setItem("savedTime", clockStart.toString())
}
