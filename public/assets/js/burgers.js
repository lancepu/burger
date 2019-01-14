// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    let id = $(this).data("id");
    let devour = {
      devoured: true
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devour
    }).then(function() {
      console.log("devoured a burger, like a boss!");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created a new burger!");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
