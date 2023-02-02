$(document).ready(function() {
  $("[id^=increment]").click(function() {
    var counterId = $(this).attr("id").replace("increment", "counter");
    var count = parseInt(localStorage.getItem(counterId)) || 0;
    count++;
    localStorage.setItem(counterId, count);
    $("#" + counterId).text(count);
  });

  $("[id^=reset]").click(function() {
    var counterId = $(this).attr("id").replace("reset", "counter");
    localStorage.removeItem(counterId);
    $("#" + counterId).text(0);
  });

  $("[id^=counter]").each(function() {
    var count = localStorage.getItem($(this).attr("id"));
    if (count) {
      $(this).text(count);
    }
  });
});
