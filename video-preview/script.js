console.log("page loaded...");
let video = document.querySelector(".video");
video.onmouseover = () => {
    video.play();
}
video.onmouseout = () => {
    video.pause();
}