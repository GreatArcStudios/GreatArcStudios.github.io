$(function () {
    $(".middle-label")
});


code = document.querySelector("#code");
design = document.querySelector("#design");
about = document.querySelector("#about");
frontElements = [code, design, about];


code.addEventListener("mouseenter", () => {
    for (i = 0; i < frontElements.length; i++) {
        if (Object.is(frontElements[i], code)) {
            frontElements[i].classList.add("expand");
        } else {
            frontElements[i].classList.add("minimize");
        }
    }

});
code.addEventListener("mouseleave", () => {
    for (i = 0; i < frontElements.length; i++) {
        if (Object.is(frontElements[i], code)) {
            frontElements[i].classList.remove("expand");
        } else {
            frontElements[i].classList.remove("minimize");
        }
    }
});

code.addEventListener("click", () => {
    for (i = 0; i < frontElements.length; i++) {
        if (Object.is(frontElements[i], code)) {
            frontElements[i].classList.remove("expand");
            frontElements[i].classList.add("full-expand");
        } else {
            frontElements[i].classList.remove("minimize");
            frontElements[i].classList.add("full-minimize");
        }
    }
});

design.addEventListener("mouseenter", () => {
    for (i = 0; i < frontElements.length; i++) {
        if (Object.is(frontElements[i], design)) {
            frontElements[i].classList.add("expand");
        } else {
            frontElements[i].classList.add("minimize");
        }
    }
});

design.addEventListener("mouseleave", () => {
    for (i = 0; i < frontElements.length; i++) {
        if (Object.is(frontElements[i], design)) {
            frontElements[i].classList.remove("expand");
        } else {
            frontElements[i].classList.remove("minimize");
        }
    }
});

design.addEventListener("click", () => {
    for (i = 0; i < frontElements.length; i++) {
        if (Object.is(frontElements[i], design)) {
            frontElements[i].classList.remove("expand");
            frontElements[i].classList.add("full-expand");
        } else {
            frontElements[i].classList.remove("minimize");
            frontElements[i].classList.add("full-minimize");
        }
    }
});

about.addEventListener("mouseenter", () => {
    for (i = 0; i < frontElements.length; i++) {
        if (Object.is(frontElements[i], about)) {
            frontElements[i].classList.add("expand");
        } else {
            frontElements[i].classList.add("minimize");
        }
    }
});

about.addEventListener("mouseleave", () => {
    for (i = 2; i >= 0; i--) {
        if (Object.is(frontElements[i], about)) {
            frontElements[i].classList.remove("expand");
        } else {
            frontElements[i].classList.remove("minimize");
        }
    }
});

about.addEventListener("click", () => {
    for (i = 0; i < frontElements.length; i++) {
        if (Object.is(frontElements[i], about)) {
            frontElements[i].classList.remove("expand");
            frontElements[i].classList.add("full-expand");
        } else {
            frontElements[i].classList.remove("minimize");
            frontElements[i].classList.add("full-minimize");
        }
    }
});