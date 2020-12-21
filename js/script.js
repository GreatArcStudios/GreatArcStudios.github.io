var sections = [$("#code"), $("#design"), $("#academics"), $("#about"), $(".overlay-top")];

$(window).on('load', function () {
	$("#main").animate({opacity: '1'}, 100);

	//setTimeout(removeLoader, 0);
});

function removeLoader() {
	$("#loading").fadeOut(100, function () {
		$("#loading").remove();
	});
	$("#main").animate({opacity: '1'}, 100);
}

$(document).ready(function () {
	let about_box = $("#about-box");
	$("#about").click(function () {
		$("#about").addClass("full-expand");
		about_box.css("display", "flex");
		$("#about").attr("style", "position:fixed");
		about_box.animate({
			opacity: "1",
		}, 850);
	});

	$("#close-about").click(function () {
		about_box.animate({
			opacity: "0",
		}, 850);
		about_box.promise().done(
			function () {
				about_box.css("display", "none");
				for (i = 0; i < sections.length; i++) {
					if (i == 3) {
						sections[i].removeClass("full-expand");
						sections[3].css("position", "");
					} else {
						sections[i].removeClass("full-minimize");
					}
				}
				about_box.attr("style", "position:");

			});

	});

	$("#academics").click(function () {
		$("#academics").addClass("full-expand");
		let academics_box = $("#academics-box");
		academics_box.css("display", "block");
		sections[2].css("position", "fixed");
		academics_box.animate({
			opacity: "1",
		}, 850);
		academics_box.promise().done(
			function () {
				$("#close-academics").attr("style", "position:fixed");
				$("#academics-box").css("overflow", "visible");
				$('.slide').css("display", "flex");
			}
		);

	});

	$("#close-academics").click(function () {
		let academics_box = $("#academics-box");

		academics_box.animate({
			opacity: "0"
		}, 850);
		academics_box.promise().done(
			function () {
				academics_box.css("display", "none");
				for (i = 0; i < sections.length; i++) {
					if (i == 2) {
						sections[i].removeClass("full-expand");
						sections[2].css("position", "");
					} else {
						sections[i].removeClass("full-minimize");
					}
				}
				$("#close-academics").attr("style", "position:");
				academics_box.css("overflow", "hidden");
				//$('.slide').css("display", "block");
			});

	});


	$("#code").click(function () {
		$("#code").addClass("full-expand");
		$("#code-box").css("display", "block");
		sections[0].css("position", "fixed");
		$("#code-box").animate({
			opacity: "1"
		}, 850);
		$("#code-box").promise().done(
			function () {
				$('.slide').css("display", "flex");
				$("#close-code").attr("style", "position:fixed");
				$("#code-box").css("overflow", "visible");
			}
		);

	});

	$("#close-code").click(function () {
		sections[0].css("position", "");
		$("#code-box").animate({
			opacity: "0"
		}, 850);
		$("#code-box").promise().done(
			function () {
				$("#code-box").css("display", "none");
				for (i = 0; i < sections.length; i++) {
					if (i == 0) {
						sections[i].removeClass("full-expand");
					} else {
						sections[i].removeClass("full-minimize");
					}
				}
				$("#close-code").attr("style", "position:");
				$("#code-box").css("overflow", "hidden");
				$('.slide').css("display", "block");
			});

	});

	$("#design").click(function () {
		$("#design").addClass("full-expand");
		$("#design-box").css("display", "block");
		sections[1].css("position", "fixed");
		$("#design-box").animate({
			opacity: "1"
		}, 850);
		$("#design-box").promise().done(
			function () {

				$('.slide').css("display", "flex");
				$("#close-design").attr("style", "position:fixed");
				$("#design-box").css("overflow", "visible");
			}
		);

	});

	$("#close-design").click(function () {
		sections[1].css("position", "");
		$("#design-box").animate({
			opacity: "0"
		}, 850);
		$("#design-box").promise().done(
			function () {
				$("#design-box").css("display", "none");
				for (i = 0; i < sections.length; i++) {
					if (i == 1) {
						sections[i].removeClass("full-expand");
					} else {
						sections[i].removeClass("full-minimize");
					}
				}
				$("#close-design").attr("style", "position:");
				$("#design-box").css("overflow", "hidden");
				$('.slide').css("display", "block");
			});

	});

});


let code = document.querySelector("#code");
let design = document.querySelector("#design");
let about = document.querySelector("#about");
let academics = document.querySelector("#academics");
let overlayTop = document.querySelector(".overlay-top");
let frontElements = [code, design, academics, about, overlayTop];

function mouseEnter(panel) {

		for (let i = 0; i < frontElements.length - 1; i++) {
			if (Object.is(frontElements[i], panel)) {
				frontElements[i].classList.add("expand");
			} else if (i !== frontElements.length - 1) {
				frontElements[i].classList.add("minimize");
			}
		}
}

function mouseLeave(panel) {

		for (let i = 0; i < frontElements.length - 1; i++) {
			if (Object.is(frontElements[i], panel)) {
				frontElements[i].classList.remove("expand");
			} else if (i !== frontElements.length - 1) {
				frontElements[i].classList.remove("minimize");
			}
		}
}

function mouseClick(panel) {

		for (let i = 0; i < frontElements.length; i++) {
			if (Object.is(frontElements[i], panel)) {
				frontElements[i].classList.remove("expand");

			} else {
				frontElements[i].classList.remove("minimize");
				frontElements[i].classList.add("full-minimize");
			}
		}

}

code.addEventListener("mouseenter", () => {

	for (i = 3; i >= 0; i--) {


			if (Object.is(frontElements[i], code)) {
				frontElements[i].classList.add("expand");
			} else {
				frontElements[i].classList.add("minimize");
			}
		}

});

// mouse events

code.addEventListener("mouseleave", () => {
	mouseLeave(code)
});

code.addEventListener("click", () => {
	mouseClick(code);
});

design.addEventListener("mouseenter", () => {
	mouseEnter(design);

});

design.addEventListener("mouseleave", () => {
	mouseLeave(design)
});

design.addEventListener("click", () => {
	mouseClick(design)
});


academics.addEventListener("mouseenter", () => {
	mouseEnter(academics)
});

academics.addEventListener("mouseleave", () => {
	mouseLeave(academics)
});

academics.addEventListener("click", () => {
	mouseClick(academics)
});


about.addEventListener("mouseenter", () => {
	mouseEnter(about)
});

about.addEventListener("mouseleave", () => {
	mouseLeave(about)
});

about.addEventListener("click", () => {
	mouseClick(about)
});


