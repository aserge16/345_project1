setTime()
timer()

function timer() {
    var lastTimeStamp = sessionStorage.getItem("savedTime");
    clockStart = parseInt(lastTimeStamp);
    var currentTime = new Date();
    var tSecs = Math.round((currentTime.getTime() - clockStart)/1000);
    var iMins = Math.round((tSecs-30)/60);
    if (iMins == 0){
        timer()
    } else {
        var answer = window.confirm(	urls +" has been open longer than 30 minutes, would you like to quit now?");
		if (answer){
            close()
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
}

function setTime() {
    var startTime = new Date();
    var clockStart = startTime.getTime();
    sessionStorage.setItem("savedTime", clockStart.toString())
}