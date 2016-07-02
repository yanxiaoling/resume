~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 414 * 100 + "px";
}();

//->初始化Swiper
new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
});


function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            slide.id = (n == 1 || n == 5) ? "page1" :((n==2)?"page2":((n==3)?"page3":((n==0||n==4)?"page4":null)));
            return;
        }
        slide.id = null;
    });
}

//->音频的自动播放
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {

        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {

    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);

