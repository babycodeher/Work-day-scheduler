let currentDay = moment();
let currentHour = moment().hours();

// Displays current day and date and time
$("#currentDay").text(currentDay.format("dddd, MMMM Do, hh:mma"));


// Specifies the style for the hour element by defining style as present, past or future

$(".time-block").each(function(){
    let hour = parseInt($(this).attr("id").split(["-"])[1]);

    if(hour === currentHour) {
        $(this).addClass("present");
    } else if(hour < currentHour) {
        $(this).removeClass("present");
        $(this).addClass("past");   
        
    } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");   
    }
});

// Event listener for when a button is clicked
$(".saveBtn").on("click", function(event) {
    
    // Specifies which time button is clicked and corresponding schedule
    let scheduleItem = ($(event.target).siblings("textarea").val());
    
    let dataTime = ($(event.target).attr("data-time"));

    // Save the user input to local Storage
    localStorage.setItem(dataTime, scheduleItem);
}); 

