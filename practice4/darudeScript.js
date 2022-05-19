

$(document).ready(function () {
    $.getJSON("https://itunes.apple.com/lookup?id=1472380750&entity=album", function (data) {
        $("h2").text("bugger");
    }) 
        
});