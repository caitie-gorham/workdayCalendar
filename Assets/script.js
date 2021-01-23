$(document).ready(function() {
    
    // print current date to top of page 
    var localTime = luxon.DateTime.local();
    var formatTime = localTime.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY)
    $("#currentDay").text(formatTime);

    // function that uses luxon and updates each color block in textFill to represent current time 
    
    var hour = localTime.hour // create a variable that pulls the current hour using luxon

    

    $(".textFill").each(function(){ // function that runs for each time block text fill area
        var elementTime = parseInt($(this).attr("time-hour")) // create a variable that is the number of the hour of the time block 
        if (hour === elementTime) { // if time block is present hour
            $(this).addClass("present"); // make textarea red (use .present css sytling)
        } else if(hour > elementTime) {  // if time block is greater than the current hour, meaning it is in the past
            $(this).addClass("past");  // make textarea gray (use .past css sytling)
        } else {  // if time block is not present or past 
            $(this).addClass("future"); // make textarea green (use .future css sytling)
        }
        
        $(this).val(localStorage.getItem($(this).parent().attr("id")))
        
        $(".saveBtn").on("click", function(){ 
            var text = $(this).siblings(".textFill").val()
            var savedText = $(this).parent().attr("id") 
            localStorage.setItem(savedText, text) 
        })
    })
        

});