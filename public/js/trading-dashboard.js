$(document).ready(function() {
    
    $.get("/api/user_data").then(function(data) {

        let userID = data.id;
        console.log(userID);
        
        $.get("/api/items_data", userID).then(function(data) {
            console.log(data);
            console.log("back from the server");
            if(data.length !==0) {
                data.forEach(function(item, index) {
                    //console.log(item);
                    let htmlContent = `<div class="col-sm-3 mb-4">
                    <a href="#"><img class="img-thumbnail itemLink" data-id="${item.id}" src="assets/db_images/${item.imgName}" alt="${item.title}" width="100%"></a></div>`;

                    $("#uploadedItems").prepend(htmlContent);
                });
            } else {
                $("#uploadedItems").html( "<p>You have not added items to trade with others.</p>" );
            } 
        });
    });


});
  