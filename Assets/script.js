$(document).ready(function() {
    
    // print current date to top of page 
    var localTime = luxon.DateTime.local();
    var formatTime = localTime.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY)
    $("#currentDay").text(formatTime);
    
    
    // on click listener for the save button 
    // save values of text to local storage
    // values will be from the textarea

    // function that uses moment.js and updates each color block in textFill to represent current time 

    // load any saved data from local storage to correct div

    // $("#current-day").text([PUT MOMEMENT FUNCTION HERE])

});