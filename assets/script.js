let currentDay = moment();
let currentTime = moment();
let time = $(".row");


$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

// $("currentTime").text(currentTime.format("hh a"))
// localStorage.setItem();


// This gives 
$("button").on("click", function(event) {
    
    console.log($(event.target).siblings("textarea").val());
    
    console.log($(event.target).attr("data-time"));
    
    event.preventDefault();
}) 

// if (time === "9am") {
//     $("row").css({"background-color": "#ff6961", "color": "white"});
// }