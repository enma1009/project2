$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    let userName = data.name;
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    $(".member-name").text(userName);
  });
});
