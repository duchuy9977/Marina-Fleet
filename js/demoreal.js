/**
 * Created by ASUS on 04-Oct-19.
 */
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}
//scroll to bottom

setTimeout(function(){
    //time to scroll to bottom
    $("html, body").animate({ scrollTop: 700 }, 2000);
},4000);//call every 2000 miliseconds