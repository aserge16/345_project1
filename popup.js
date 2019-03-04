document.addEventListener("DOMContentLoaded", function(){
    var submitButton = document.getElementById("timeSubmission");
    submitButton.addEventListener('click', updateTime);
})
function updateTime(){
    var minute = document.getElementById('Timer').value;
    sessionStorage.setItem("savedDelay", minute);
    sessionStorage.setItem("clicked", "true");
}