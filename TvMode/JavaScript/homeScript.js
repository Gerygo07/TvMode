let hbo     = document.getElementById("HBO");
let netflix = document.getElementById("Netflix");
let youtube = document.getElementById("YouTube");
let horizongo = document.getElementById("HorizonGo");
let searchBar = document.getElementById("searchBar");
let settings = document.getElementById("settings");
let keyboard = document.getElementById("keyboard");
let keys = document.getElementById("keys");

setTimeout(() => {
    keyboard.style.height = "40vh";
}, 3000);
setTimeout(() => {
    keys.style.opacity = 1;
}, 4900);


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

let aKey = document.getElementById("A");
let bKey = document.getElementById("B");
let cKey = document.getElementById("C");
let dKey = document.getElementById("D");
let eKey = document.getElementById("E");
let fKey = document.getElementById("F");
let gKey = document.getElementById("G");
let hKey = document.getElementById("H");
let iKey = document.getElementById("I");
let jKey = document.getElementById("J");
let kKey = document.getElementById("K");
let lKey = document.getElementById("L");
let mKey = document.getElementById("M");
let nKey = document.getElementById("N");
let oKey = document.getElementById("O");
let pKey = document.getElementById("P");
let qKey = document.getElementById("Q");
let rKey = document.getElementById("R");
let sKey = document.getElementById("S");
let tKey = document.getElementById("T");
let uKey = document.getElementById("U");
let vKey = document.getElementById("V");
let wKey = document.getElementById("W");
let xKey = document.getElementById("X");
let yKey = document.getElementById("Y");
let zKey = document.getElementById("Z");
let őKey = document.getElementById("Ő");
let úKey = document.getElementById("Ú");
let éKey = document.getElementById("É");
let áKey = document.getElementById("Á");
let űKey = document.getElementById("Ű");
let öKey = document.getElementById("Ö");
let óKey = document.getElementById("Ó");
let üKey = document.getElementById("Ü");
let space = document.getElementById("space");
let backSpace = document.getElementById("backSpace");

aKey.addEventListener("click",function() {searchBar.value += "a";});
bKey.addEventListener("click",function() {searchBar.value += "b";});
cKey.addEventListener("click",function() {searchBar.value += "c";});
dKey.addEventListener("click",function() {searchBar.value += "d";});
eKey.addEventListener("click",function() {searchBar.value += "e";});
fKey.addEventListener("click",function() {searchBar.value += "f";});
gKey.addEventListener("click",function() {searchBar.value += "g";});
hKey.addEventListener("click",function() {searchBar.value += "h";});
iKey.addEventListener("click",function() {searchBar.value += "i";});
jKey.addEventListener("click",function() {searchBar.value += "j";});
kKey.addEventListener("click",function() {searchBar.value += "k";});
lKey.addEventListener("click",function() {searchBar.value += "l";});
mKey.addEventListener("click",function() {searchBar.value += "m";});
nKey.addEventListener("click",function() {searchBar.value += "n";});
oKey.addEventListener("click",function() {searchBar.value += "o";});
pKey.addEventListener("click",function() {searchBar.value += "p";});
qKey.addEventListener("click",function() {searchBar.value += "q";});
rKey.addEventListener("click",function() {searchBar.value += "r";});
sKey.addEventListener("click",function() {searchBar.value += "s";});
tKey.addEventListener("click",function() {searchBar.value += "t";});
uKey.addEventListener("click",function() {searchBar.value += "u";});
vKey.addEventListener("click",function() {searchBar.value += "v";});
wKey.addEventListener("click",function() {searchBar.value += "w";});
xKey.addEventListener("click",function() {searchBar.value += "x";});
yKey.addEventListener("click",function() {searchBar.value += "y";});
zKey.addEventListener("click",function() {searchBar.value += "z";});
őKey.addEventListener("click",function() {searchBar.value += "ő";});
úKey.addEventListener("click",function() {searchBar.value += "ú";});
éKey.addEventListener("click",function() {searchBar.value += "é";});
áKey.addEventListener("click",function() {searchBar.value += "á";});
űKey.addEventListener("click",function() {searchBar.value += "ű";});
öKey.addEventListener("click",function() {searchBar.value += "ö";});
óKey.addEventListener("click",function() {searchBar.value += "ó";});
üKey.addEventListener("click",function() {searchBar.value += "ü";});
space.addEventListener("click",function() {searchBar.value += " ";});
backSpace.addEventListener("click",function() {
    searchBar.value = searchBar.value.slice(0,-1);
});