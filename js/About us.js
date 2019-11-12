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
}/**
 * Created by ASUS on 05-Oct-19.
 */
