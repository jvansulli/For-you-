const intro = document.getElementById("intro");

const gallery = document.getElementById("gallery");

const ending = document.getElementById("ending");

const voiceButton = document.getElementById("voiceButton");

const voiceAudio = document.getElementById("voiceAudio");





// لمس صفحه اول و رفتن به عکس ها

intro.addEventListener("click", function(){


    intro.classList.add("fade-out");


    setTimeout(function(){


        intro.style.display = "none";


        gallery.classList.remove("hidden");


    },1000);



});







// پخش ویس با لمس آیکون

voiceButton.addEventListener("click", function(){


    voiceAudio.play();


    voiceButton.innerHTML="🔊";


});







// بعد از تمام شدن ویس

voiceAudio.addEventListener("ended", function(){



    gallery.classList.add("fade-out");



    setTimeout(function(){


        gallery.style.display="none";


        ending.classList.remove("hidden");


    },1000);



});
