let back = document.getElementById("Back");
let version = document.getElementById("version");
let server = document.getElementById("server");
let vNUM = "devEd id: alpha 0.1"
let serverState = false;

back.addEventListener("click",function() {
    open("home.html","_self");
});

function getVersion() {
    version.innerHTML = "version: " + vNUM;
}
function getServerState() {
    if (serverState == true) {
        server.innerHTML = "server: online"
    } else {
        server.innerHTML = "server: offline"
    }
}

getVersion();
getServerState();