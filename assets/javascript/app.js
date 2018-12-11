var number = 100;
$("button").click(function() {
    $("button").hide();
    $("br").hide();
    $(".page-header").append("<hr></hr>");
    $(".page-header").append("<h3 id='time-remaining'>Time remaining:<h3>");
    $(".page-header").append("<h1 id='countdown-timer'>" + number + "<h1>")

});