
window.onload = () => {
    var sayButtons = document.getElementsByClassName("sayButton");
    var eraseButtons = document.getElementsByClassName("eraseButton");
    for(var sb of sayButtons) {
        sb.addEventListener("click", say1, false);
        sb.addEventListener("click", say2, false);
    }
    for(var eb of eraseButtons) {
        eb.addEventListener("click", erase1, false);
        eb.addEventListener("click", erase2, false);
    }

    
    var sayButtons2 = document.getElementsByClassName("sayButton2");
    var eraseButtons2 = document.getElementsByClassName("eraseButton2");
    for(var sb of sayButtons2) {
        sb.onclick = say1;
        sb.onclick = say2;
    }
    for(var eb of eraseButtons2) {
        eb.onclick = erase1;
        eb.onclick = erase2;
    }
}

function say1() {
    var hellos = document.getElementsByClassName("hello1");
    for(var h of hellos) {
        h.innerHTML += "hello! これはclass: \"hello1\" の要素です．";
    }
}

function erase1() {
    var hellos = document.getElementsByClassName("hello1");
    for(var h of hellos) {
        h.innerHTML = "";
    }
}

function say2() {
    var hellos = document.getElementsByClassName("hello2");
    for(var h of hellos) {
        h.innerHTML += "hello! これはclass: \"hello2\" の要素です．";
    }
}

function erase2() {
    var hellos = document.getElementsByClassName("hello2");
    for(var h of hellos) {
        h.innerHTML = "";
    }
}


