let currentDay = moment();
// let currentHour = moment().hours("ha");


// Displays current day and date
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));


// localStorage.setItem();


// This gives 
$(".saveBtn").on("click", function(event) {
    
    // Check to confirm which timeblock button was clicked
    console.log($(event.target).siblings("textarea").val());
    
    console.log($(event.target).attr("data-time"));
    
}) 

