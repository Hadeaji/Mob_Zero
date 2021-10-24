'use strict';


const sections = ['p2', 'p3'];
const icons = ['uno', 'dos', 'tres'];

$("#uno").click(function () {
    sections.forEach(element => {
        if ($(`#${element}`).hasClass("showSection")) {
            $(`#${element}`).toggleClass("showSection");
        }
    });

    $("#p1").removeClass("blurOnShow");

    icons.forEach(element => {
        if (($(`#${element}`).hasClass("capIcon"))) {
            $(`#${element}`).toggleClass("capIcon");
        }
        if (($(`#${element}`).hasClass("minIcon"))) {
            $(`#${element}`).toggleClass("minIcon");
        }
    });
});

$("#dos").click(function () {
    sections.forEach(element => {
        if ($(`#${element}`).hasClass("showSection")) {
            $(`#${element}`).toggleClass("showSection");
        }
    });

    $("#p2").toggleClass("showSection");

    $("#p1").addClass("blurOnShow");

    icons.forEach(element => {
        if (($(`#${element}`).hasClass("capIcon"))) {
            $(`#${element}`).toggleClass("capIcon");
            $(`#${element}`).toggleClass("minIcon");
        }
        if (!($(`#${element}`).hasClass("minIcon"))) {
            $(`#${element}`).toggleClass("minIcon");
        }
    });
    $("#dos").addClass("capIcon");
});

$("#tres").click(function () {
    sections.forEach(element => {
        if ($(`#${element}`).hasClass("showSection")) {
            $(`#${element}`).toggleClass("showSection");
        }
    });

    $("#p3").toggleClass("showSection");

    $("#p1").addClass("blurOnShow");

    icons.forEach(element => {
        if (($(`#${element}`).hasClass("capIcon"))) {
            $(`#${element}`).toggleClass("capIcon");
            $(`#${element}`).toggleClass("minIcon");
        }
        if (!($(`#${element}`).hasClass("minIcon"))) {
            $(`#${element}`).toggleClass("minIcon");
        }
    });
    $("#tres").addClass("capIcon");
});

// $( "#mydiv" ).hasClass( "showSection" )

// $(button).addClass("blurOnShow")

// $("p").toggleClass("main");






const el = document.querySelector("#p1");

el.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = -e.offsetX / 10 + "px";
    el.style.backgroundPositionY = -e.offsetY / 10 + "px";
});
