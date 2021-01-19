$(document).ready(function() {
    
    // print current date to top of page 
    var localTime = luxon.DateTime.local();
    var formatTime = localTime.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY)
    $("#currentDay").text(formatTime);

    // function that uses luxon and updates each color block in textFill to represent current time 
    
    var hour = localTime.hour // create a variable that pulls the current hour using luxon
    
    $(".textFill").each(function(){
        var elementTime = parseInt($(this).attr("time-hour"))
        if (hour === elementTime) { // if time block is present hour
            $(this).addClass("present"); // make textarea red (use .present css sytling)
        } else if(hour > elementTime) {  
            $(this).addClass("past");  
        } else {  
            $(this).addClass("future");
        }
    })

    

    // load any saved data from local storage to correct div
    // on click listener for the save button 
    // save values of text to local storage
    // values will be from the textarea

});