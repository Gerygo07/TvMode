onSolved()

function onSolved() {
    setTimeout(function() {
        if (window.innerHeight < window.innerWidth) {
            open("../HTML/home.html","_self")
        } else {
            onSolved();
        }
    }, 100);
}