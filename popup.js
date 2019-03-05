document.addEventListener("DOMContentLoaded", function(){
    var submitButton = document.getElementById("timeSubmission");
    submitButton.addEventListener('click', function(){
        var minute = document.getElementById('Timer').value;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {time: minute, click : "True" }, function(response) {});  
        });
    });
})
// function updateTime(){
//     var minute = document.getElementById('Timer').value;
//     sessionStorage.setItem("savedDelay", minute);
//     sessionStorage.setItem("clicked", "true");
// }