$(function () {
  // Add click event listener to the save buttons within time-blocks
  $(".saveBtn").on("click", function () {
    // Get the user input from the textarea within the same time-block
    const userInput = $(this).siblings("textarea").val();

    // Get the id of the time-block (e.g., "hour-9") for using as a key in local storage
    const timeBlockId = $(this).parent().attr("id");

    // Save the user input in local storage with the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });
});

$(function () {
  // Add code to apply the "past," "present," or "future" class to each time-block
  $(".time-block").each(function () {
    // Get the current hour in 24-hour format using Day.js
    const currentHour = dayjs().format("H");

    // Get the hour specified in the time-block's id (e.g., "hour-9" => 9)
    const timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    // Compare the current hour with the time-block hour
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
});

$(function () {
  // Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements
  $(".time-block").each(function () {
    // Get the id of the time-block (e.g., "hour-9") for using as a key in local storage
    const timeBlockId = $(this).attr("id");

    // Retrieve the user input from local storage using the time-block id as the key
    const userInput = localStorage.getItem(timeBlockId);

    // Set the value of the corresponding textarea with the retrieved user input
    $(this).find("textarea").val(userInput);
  });
});

$(function () {
  // Add code to display the current date in the header of the page
  const currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
