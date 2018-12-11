var number = 100;
$("button").click(function() {
    // hiding button and extra line break
    $("button, br").hide();
    // adding line, text, countdown timer, text
    $(".page-header").append("<hr></hr> <h3 id='time-remaining'>Time remaining:<h3> <h2 id='countdown-timer'>" + number + "<span id='really-plain'> seconds</span><h2>");

 
});