var video = document.getElementById("video1");
var botonplay = document.getElementById("botonplay");
var botonpause = document.getElementById("botonpause");
var botonmute = document.getElementById("botonmuted");
var botonunmute = document.getElementById("botonunmuted");

function playvideo(){
    video.play();
    botonplay.style.display= "none";
    botonpause.style.display= "block";
    botonmute.style.display= "block";
    setTimeout(chequearsitermino, 64000);
}

function pausevideo(){
    video.pause();
    botonplay.style.display= "block";
    botonpause.style.display= "none";
    botonmute.style.display= "none";
    botonunmute.style.display= "none";
}

function mutearvideo(){
    video.muted= "true";
    botonmute.style.display= "none";
    botonunmute.style.display= "block";
}
function unmutearvideo(){
    video.muted = !video.muted;
    botonmute.style.display= "block";
    botonunmute.style.display= "none";
}

function chequearsitermino(){ 
    if (video.ended == false){
        setTimeout(chequearsitermino, 2000);
    } else {
        botonplay.style.display= "block";
        botonpause.style.display= "none";
        botonmute.style.display= "none";
        botonunmute.style.display= "none";
        video.load();
    }
}

var video2 = document.getElementById("video2");
var botonplay2 = document.getElementById("botonplay2");
var botonpause2 = document.getElementById("botonpause2");
var trailer = document.getElementById("documentalh4");

function playvideo2(){
    pausevideo();
    video2.play();
    botonplay2.style.display= "none";
    botonpause2.style.display= "block";
    setTimeout(chequearsitermino2, 34000);
    trailer.style.display= "none";
}

function pausevideo2(){
    video2.pause();
    botonplay2.style.display= "block";
    botonpause2.style.display= "none";
}

function chequearsitermino2(){ 
    if (video2.ended == false){
        setTimeout(chequearsitermino2, 2000);
    } else {
        botonplay2.style.display= "block";
        botonpause2.style.display= "none";
        video2.load();
        trailer.style.display= "block";
    }
}