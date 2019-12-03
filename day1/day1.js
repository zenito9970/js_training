
// for-in

function displayHello_forin() {
    var helloElements = document.getElementsByClassName("hello");
    for(var e in helloElements) {
        e.innerHTML = "Hello, World!";
    }
}

function eraseHello_forin() {
    var helloElements = document.getElementsByClassName("hello");
    for(var e in helloElements) {
        e.innerHTML = "";
    }
}

// forEach

function displayHello_forEach() {
    var helloElements = document.getElementsByClassName("hello");
    helloElements.forEach(element => {
        element.innerHTML = "Hello, World!";
    });
}

function eraseHello_forEach() {
    var helloElements = document.getElementsByClassName("hello");
    helloElements.forEach(element => {
        element.innerHTML = "";
    });
}

// for-of

function displayHello_forof() {
    var helloElements = document.getElementsByClassName("hello");
    for(var e of helloElements) {
        e.innerHTML = "Hello, World!";
    }
}

function eraseHello_forof() {
    var helloElements = document.getElementsByClassName("hello");
    for(var e of helloElements) {
        e.innerHTML = "";
    }
}

// for

function displayHello_for() {
    var helloElements = document.getElementsByClassName("hello");
    for(var i = 0; i < helloElements.length; i++) {
        helloElements[i].innerHTML = "Hello, World!";
    }
}

function eraseHello_for() {
    var helloElements = document.getElementsByClassName("hello");
    for(var i = 0; i < helloElements.length; i++) {
        helloElements[i].innerHTML = "";
    }
}

