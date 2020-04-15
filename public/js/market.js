$(document).ready(function() {

    $.get("/api/items").then(function(data) {
       
        data.forEach(function(item, index) {
            let htmlContent = `<div class="col-sm-3 mb-4">
            <a href="/itemdetails?item=${item.id}"><img class="img-thumbnail" src="assets/db_images/${item.imgName}" alt="${item.title}" width="100%"></a></div>`;
            $("#itemsContainer").append(htmlContent);
        });
    });

});