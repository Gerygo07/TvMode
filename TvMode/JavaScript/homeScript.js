let hbo     = document.getElementById("HBO");
let netflix = document.getElementById("Netflix");
let youtube = document.getElementById("YouTube");
let horizongo = document.getElementById("HorizonGo");
let searchBar = document.getElementById("searchBar");
let settings = document.getElementById("settings");


scrollTo(0,0);

eC00();
function eC00() {
    setTimeout(function() {
        if (window.innerHeight > window.innerWidth) {
            open("../HTML/errorCode00.html","_self");
        } else {
            eC00();
        }
    }, 100);
}

hbo.addEventListener('click',function(){
    open('https://hbogo.hu','_self');
});
netflix.addEventListener('click',function(){
    open('https://www.netflix.com/hu/','_self');
});
youtube.addEventListener('click',function(){
    open('https://www.youtube.com','_self');
});
horizongo.addEventListener('click',function(){
    open('https://www.horizon.tv/hu_hu.html','_self');
});

searchBar.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     open("https://www.google.com/search?q="+searchBar.value,"_self")
    }
});
settings.addEventListener('click',function(){
    open('../HTML/Settings.html','_self');
});