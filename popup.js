//Handle Event from the extension box
document.addEventListener("DOMContentLoaded", function(){ //listen to when the extension box is pressed
    var submitButton = document.getElementById("timeSubmission"); 
    submitButton.addEventListener('click', function(){ //listen for push event in the submit button
        var minute = document.getElementById('Timer').value;
        if (minute == '' || isNaN(minute)){ //check if user's input is valid
        	alert("Please input the proper minute you want to spend");
        } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {time: minute, click : "True" }, function(response) {}); //send message and data from extension box to event.js 
        });
    }
    });
})
