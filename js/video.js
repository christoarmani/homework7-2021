var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("New speed is"+video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate = video.playbackRate * 1.1;
	console.log("New speed is"+video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 5 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 5;
	}
	console.log("Video time is"+video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Video is muted");
	}
	else if (video.muted == true){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Video is unmuted");
	}
});

// Volume Silder
// document.querySelector("volumeSlider"){
// var slider = document.getElementById("volumeSlider");
// var output = document.getElementById("volume");
// output.innerHTML = slider.value;

// slider.oninput = function() {
// 	output.innerHTML = this.value;
// }
// });

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log("Changing Volume");
	console.log(this.value);
	video.volume = this.value /100;
	document.querySelector("#volume").innerHTML=video.volume *100 +"%";
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList.remove("oldTime");
});