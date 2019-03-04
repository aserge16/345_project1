window.onload = setTime;
setInterval(timer, 1000);

function timer() {
    var urls = window.location.href;
	var lastTimeStamp = sessionStorage.getItem("savedTime");
	var delayTime = sessionStorage.getItem("savedDelay");
	if (delayTime == null){
		delayTime = 5;
	}
    clockStart = parseInt(lastTimeStamp);
    var currentTime = new Date();
    var tSecs = Math.round((currentTime.getTime() - clockStart)/1000);
    var iMins = Math.floor(tSecs/60);
    if (tSecs > delayTime){
        var answer = window.confirm(urls +" has been open longer than " + delayTime + " minutes, would you like to quit now?");
        if (answer){
            open(location, '_self').close();
        } else {
            setTime();
        }
    }
}

function util(cur,last){
    if (cur == last || last == null){
        alert(last);
    } else {
        alert("False");
    };
}

function setTime() {
    var startTime = new Date();
    var clockStart = startTime.getTime();
    sessionStorage.setItem("savedTime", clockStart.toString())
}

function closeCurrentWindow() {
    window.close();
}
