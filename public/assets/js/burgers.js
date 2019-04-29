$(function() {
$(".create-form").on("submit", function(event) {
    event.preventDefault();
    console.log("hola");

    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    var devouredBurger = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });



}); 