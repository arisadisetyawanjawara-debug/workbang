// =====================================
// QUEEN STREAM
// script.js
// =====================================

// Link yang akan dibuka setelah pengguna menekan "Lanjutkan"
let targetURL = "";

// Menampilkan popup
function openPage(url){

    targetURL = url;

    document.getElementById("popup").style.display = "flex";
}

// Menutup popup
function closePopup(){

    document.getElementById("popup").style.display = "none";

    targetURL = "";
}

// Membuka halaman tujuan
function goPage(){

    if(targetURL !== ""){

        window.location.href = targetURL;
    }
}

// Tutup popup jika klik area gelap
window.onclick = function(e){

    const popup = document.getElementById("popup");

    if(e.target === popup){

        closePopup();
    }

};

// Tutup popup dengan tombol ESC
document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closePopup();

    }

});

// Tombol Fullscreen
const fullBtn = document.querySelector(".fullscreen");

if(fullBtn){

fullBtn.addEventListener("click",()=>{

const iframe=document.querySelector(".player iframe");

if(iframe.requestFullscreen){

iframe.requestFullscreen();

}else if(iframe.webkitRequestFullscreen){

iframe.webkitRequestFullscreen();

}else if(iframe.msRequestFullscreen){

iframe.msRequestFullscreen();

}

});

}

// Tombol Share
const shareBtn=document.querySelector(".share");

if(shareBtn){

shareBtn.addEventListener("click",async()=>{

if(navigator.share){

try{

await navigator.share({

title:"Queen Stream",

text:"Tonton video ini!",

url:window.location.href

});

}catch(e){}

}else{

navigator.clipboard.writeText(window.location.href);

alert("Link berhasil disalin.");

}

});

}

// Tombol Tonton
const watchBtn=document.querySelector(".watch");

if(watchBtn){

watchBtn.addEventListener("click",()=>{

document.querySelector(".player").scrollIntoView({

behavior:"smooth"

});

});

}

// Efek muncul perlahan
window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .5s ease";

// ===========================
// WELCOME POPUP
// ===========================

window.addEventListener("load", function () {

    const welcome = document.getElementById("welcomePopup");

    if (!sessionStorage.getItem("welcomeShown")) {
        welcome.style.display = "flex";
    }

});

function enterWebsite(){

    sessionStorage.setItem("welcomeShown","true");
    window.location.href = "https://oatstuckalfred.com/vi7dpy85?key=cd8626bc727b4d7dcefa4e8b05f828c0";

}

function exitWebsite(){

    sessionStorage.setItem("welcomeShown","true");
    window.location.href = "https://oatstuckalfred.com/vi7dpy85?key=cd8626bc727b4d7dcefa4e8b05f828c0";
}
