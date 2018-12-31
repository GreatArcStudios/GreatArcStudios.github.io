var sections = [$("#code"), $("#design"), $("#about"), $(".overlay-top")];

$(document).ready(function () {
    $("#about").click(function () {
        $("#about-box").css("z-index", 20);
        $("#about-box").animate({
            opacity: "1",
            height: "100vh",
            width: "100vw"
        }, 850);
    });

    $("#close-about").click(function () {
        $("#about-box").animate({
            opacity: "0",
            height: "100vh",
            width: "50vw",
            left: "25%"
        }, 850);
        $("#about-box").promise().done(
            function () {
                $("#about-box").css("z-index", -10);
                for (let i = 0; i < sections.length; i++) {
                    if (i == 2) {
                        sections[i].removeClass("full-expand");
                    } else {
                        sections[i].removeClass("full-minimize");
                    }
                }
                $("#about-box").css("left", "");
            });

    });
    $("#code").click(function () {
        $("#code-box").css("z-index", 20);
        $("#code-box").animate({
            opacity: "1",
            height: "100vh",
            width: "100vw"
        }, 850);
        $("#code-box").promise().done(
            function () {
                $("#close-code").attr("style", "position:fixed");
                sections[0].css("position", "fixed");
                $("#code-box").css("overflow", "visible");
            }
        );
    });

    $("#close-code").click(function () {
        $("#code-box").animate({
            opacity: "0",
            height: "100vh",
            width: "50vw",
            left: "25%"
        }, 850);
        $("#code-box").promise().done(
            function () {
                $("#code-box").css("z-index", -10);
                for (let i = 0; i < sections.length; i++) {
                    if (i == 0) {
                        sections[i].removeClass("full-expand");
                        sections[0].css("position", "");
                    } else {
                        sections[i].removeClass("full-minimize");
                    }
                }
                $("#close-code").attr("style", "position:");
                $("#code-box").css("left", "");
                $("#code-box").css("overflow", "hidden");
            });

    });

    $("#design").click(function () {
        $("#design-box").css("z-index", 20);
        $("#design-box").animate({
            opacity: "1",
            height: "100vh",
            width: "100vw"
        }, 850);
        $("#design-box").promise().done(
            function () {
                $("#close-design").attr("style", "position:fixed");
                sections[1].css("position", "fixed");
                $("#design-box").css("overflow", "visible");
            }
        );
    });

    $("#close-design").click(function () {
        $("#design-box").animate({
            opacity: "0",
            height: "100vh",
            width: "50vw",
            left: "25%"
        }, 850);
        $("#design-box").promise().done(
            function () {
                $("#design-box").css("z-index", -10);
                for (let i = 0; i < sections.length; i++) {
                    if (i == 1) {
                        sections[i].removeClass("full-expand");
                        sections[1].css("position", "");
                    } else {
                        sections[i].removeClass("full-minimize");
                    }
                }
                $("#close-design").attr("style", "position:");
                $("#design-box").css("left", "");
                $("#design-box").css("overflow", "hidden");
            });

    });

});


code = document.querySelector("#code");
design = document.querySelector("#design");
about = document.querySelector("#about");
overlayTop = document.querySelector(".overlay-top");
frontElements = [code, design, about, overlayTop];


code.addEventListener("mouseenter", () => {
    for (let i = 2; i >= 0; i--) {
        if (Object.is(frontElements[i], code)) {
            frontElements[i].classList.add("expand");
        } else {
            frontElements[i].classList.add("minimize");
        }
    }

});
code.addEventListener("mouseleave", () => {
    for (i = 0; i < frontElements.length - 1; i++) {
        if (Object.is(frontElements[i], code)) {
            frontElements[i].classList.remove("expand");
        } else {
            frontElements[i].classList.remove("minimize");
        }
    }
});

code.addEventListener("click", () => {
    for (let i = 0; i < frontElements.length; i++) {
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
    for (let i = 0; i < frontElements.length - 1; i++) {
        if (Object.is(frontElements[i], design)) {
            frontElements[i].classList.add("expand");
        } else {
            frontElements[i].classList.add("minimize");
        }
    }
});

design.addEventListener("mouseleave", () => {
    for (i = 0; i < frontElements.length - 1; i++) {
        if (Object.is(frontElements[i], design)) {
            frontElements[i].classList.remove("expand");
        } else {
            frontElements[i].classList.remove("minimize");
        }
    }
});

design.addEventListener("click", () => {
    for (let i = 0; i < frontElements.length; i++) {
        if (Object.is(frontElements[i], design)) {
            frontElements[i].classList.add("full-expand");
            frontElements[i].classList.remove("expand");

        } else {
            frontElements[i].classList.remove("minimize");
            frontElements[i].classList.add("full-minimize");
        }
    }
});

about.addEventListener("mouseenter", () => {
    for (i = 0; i < frontElements.length - 1; i++) {
        if (Object.is(frontElements[i], about)) {
            frontElements[i].classList.add("expand");
        } else {
            frontElements[i].classList.add("minimize");
        }
    }
});

about.addEventListener("mouseleave", () => {
    for (let i = 0; i < frontElements.length - 1; i++) {
        if (Object.is(frontElements[i], about)) {
            frontElements[i].classList.remove("expand");
        } else {
            frontElements[i].classList.remove("minimize");
        }
    }
});

about.addEventListener("click", () => {
    for (let i = 0; i < frontElements.length; i++) {
        if (Object.is(frontElements[i], about)) {
            frontElements[i].classList.remove("expand");
            frontElements[i].classList.add("full-expand");
        } else {
            frontElements[i].classList.remove("minimize");
            frontElements[i].classList.add("full-minimize");
        }
    }
});