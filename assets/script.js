let currentDay = moment();
let currentTime = moment();
let time = $(".time");


$("#currentDay").text(currentDay.format("dddd, MMMM do"));

// $("currentTime").text(currentTime.format("HH a"))
// localStorage.setItem();


// This gives 
$("button").on("click", function(event) {

   console.log($(event.target).siblings("textarea").val());

    console.log($(event.target).attr("data-time"));
}) 

// if (time === currentTime) {
    
// } else {
    
// }