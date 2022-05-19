

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
            $.each(response.results, function (i, results) {
                $("#cardRow").append("<div class='card m-2' style='width: 200px; height: 300px'><img src = ' " + response.results[i].artworkUrl100 + "' class='card - image - top' alt = 'darude album cover' /><div class='card - body'><h5 class='card - title mt-3'>" + response.results[i].collectionName + "</h5></div></div >");
                if (i === 50) {
                    return false;
                }
            });
        }
    });
})