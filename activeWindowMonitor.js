window.onload = setTime;
setInterval(timer, 1000);

function timer() {
    var urls = window.location.href;
    var lastTimeStamp = sessionStorage.getItem("savedTime");
    clockStart = parseInt(lastTimeStamp);
    var currentTime = new Date();
    var tSecs = Math.round((currentTime.getTime() - clockStart)/1000);
<<<<<<< HEAD
    var iMins = Math.floor(tSecs/60);
    //alert(tSecs)
    if (tSecs > 5){
        var answer = window.confirm(urls +" has been open longer than 30 minutes, would you like to quit now?");
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
