$(document).ready(function() {

  $.get("/api/user_data").then(function(data) {
    $("#currentUserId").val(data.id);
      });
   // });
  // let submitForm = $("form#submitItemForm");
  
  // submitForm.on("submit", function(event) {
  //   event.preventDefault();

  //   let itemTitle = $("input#item_title").val().trim(); 
  //   let itemCategory = $("#item_category option:selected").text();
  //   let itmDescription = $("textarea#item_description").val();
  //   let imgFileName = $("#uploadImg").val().replace(/.*(\/|\\)/, '');

  //   $.get("/api/user_data").then(function(data) {
  //     let itemData = {
  //       title: itemTitle,
  //       itemDescription: itmDescription,
  //       itemCategory: itemCategory,
  //       UserId: data.id,
  //       imgName: imgFileName
  //     };
  //     console.log(itemData);
  //     createItem(itemData);
  //   });
  // });

  // function createItem(itemData) {
  //   $.post("/api/newItem", itemData).then(function(data) {
  //   console.log("returned from api/newitem");
  // //   $(".member-name").text(data.name);
  //   });
  // }

  });