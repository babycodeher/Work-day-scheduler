let currentDay = moment();
let currentHour = moment().hours();

// Displays current day and date
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));


// Specifies the style for the hour element by defining style as present, past or future

$(".time-block").each(function(){
    let hour = parseInt($(this).attr("id").split(["-"])[1]);
console.log(hour);
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
    
    // console.log(scheduleItem);
    // console.log(dataTime);

    // Save the data to local Storage
    localStorage.setItem(dataTime, scheduleItem);
}); 

// This code saves user input in local storage
// localStorage.setItem("");