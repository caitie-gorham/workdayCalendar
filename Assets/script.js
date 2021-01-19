$(document).ready(function() {
    
    // print current date to top of page 
    var localTime = luxon.DateTime.local();
    var formatTime = localTime.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY)
    $("#currentDay").text(formatTime);
    
    
 

    // function that uses luxon and updates each color block in textFill to represent current time 

    
    var hour = localTime.hour // create a variable that pulls the current hour using luxon
    
    if (hour === ) { // if time block is present hour
        $(".textFill").addClass("present"); // make textarea red (use .present css sytling)
    } else if(hour < ) {  // else if time block is greater than present hour
        $(".textFill").addClass("future");  // make textarea green (use .future css styling)
    } else {  // else 
        $(".textFill").addClass("past"); // make textarea gray (use .past css styling)
    }

    // load any saved data from local storage to correct div
    // on click listener for the save button 
    // save values of text to local storage
    // values will be from the textarea

});