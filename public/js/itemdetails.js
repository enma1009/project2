$(document).ready(function() {
    let url = document.location.href.split("?");
    let itemId = url[url.length-1].split("=")[1];
    $.get(`/api/item/${itemId}`).then(function(data) {  
        $("#itemTitle").text(data.title);
        $("#itemDescription").text(data.itemDescription);
        $("#itemCategory").text(data.itemCategory);
        $("#itemImg").attr('src', `/assets/db_images/${data.imgName}`);
    });
});