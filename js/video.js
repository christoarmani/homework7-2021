var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 5 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 5;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Muted";
	}
	else if (video.muted == true){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

// Volume Silder
document.querySelector("volumeSlider"){
var slider = document.getElementById("volumeSlider");
var output = document.getElementById("volume");
output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
}
});

document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").style.filter = "grayscale(0%)";
});