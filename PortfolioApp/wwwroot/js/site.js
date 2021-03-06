﻿// Write your Javascript code.

$('nav a[href="/' + location.pathname.split("/")[1] + '"]').addClass('selected');
if (location.href.split("=")[1] === null || location.href.split("=")[1] === undefined) {
    $('nav a[href="?culture=bg"]').addClass('selected');
} else {
    $('nav a[href="?culture=' + location.href.split("=")[1] + '"]').addClass('selected');
}

$("a[rel~='keep-params']").click(function (e) {
    e.preventDefault();

    var params = window.location.search,
        dest = $(this).attr('href') + params;

    window.setTimeout(function () {
        window.location.href = dest;
    }, 100);
});

$(function () {
    var selectedClass = "";
    $(".fil-cat").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });
});