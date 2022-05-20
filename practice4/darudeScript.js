

$(document).ready(function getRecords() {
    $.ajax({
        url: "https://itunes.apple.com/search?term=darude",

        jsonp: "callback",

        dataType: "jsonp",

        data: {
            q: "select title,abstract,url from search.news where query=\"cat\"",
            format: "json"
        },

        success: function (response) {
            $(response.results).each( function () {
                createCard(this);
            });
        }
    });
})

function createCard(recordDetail) {
    $("#cardRow").append("<div class='card m-2'><img src = ' " + recordDetail.artworkUrl100 + "' class='card - image - top' alt = '" + recordDetail.collectionName + "' /><div class='card - body'><h5 class='card - title mt-3'>" + recordDetail.collectionName + "</h5></div></div >");
}