var questionBank = ["According to the \"American Society of Composers, Authors and Publishers\" in 2016, what is the most played holiday song of the last 50 years?", "In the earliest known version of the 12 days of Christmas, what kind of birds were given in groups of four?"]
var answerBank = [["Santa Claus Is Coming to Town", "Silent Night", "All I Want for Christmas is You", "Silver Bells"], ["\"Collie\" birds", "\"Mocking\" birds", "\"Pheasant\" birds", "\"Plump\" birds"]];
var run = 0;
var number = 10;
    function countdown() {
        number--;
//        while (number > 0) {
        $("#countdown-timer").html("<h1 id='countdown-timer'>" + number + "</h1>");
        console.log(number);
        if (number === 0) {
            clearInterval(run);
        }
//    }
    }


$("button").click(function() {
    // hiding button and extra line break
    $("button, br").hide();
    // adding line, text, countdown timer, text
    $(".page-header").append("<hr></hr> <h3 id='time-remaining'>Time remaining:</h3> <h1 id='countdown-timer'>" + number + "</h1>", "<span id='really-plain'> &nbsp;seconds</span>");
    // not sure about this one completely
    run = setInterval(countdown, 1000);
    // adding questions
    $(".page-header").append("<hr></hr>");
    for (i=0; i<questionBank.length; i++) {
        $(".page-header").append("<p>" + questionBank[i] + "</p>");
        for (j=0; j<answerBank[i].length; j++) {
            $(".page-header").append("<input id='answers' type='radio' name='question-i'>" + answerBank[i][j] + " &nbsp;</input>");
        }
        $(".page-header").append("<br>", "<br>", "<br>");
    }

 
    
  


});