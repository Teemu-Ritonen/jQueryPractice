

$(document).ready(function () {
    $.get("https://itunes.apple.com/lookup?id=1472380750&entity=album", function (status) {
        $("h2").text("bugger");
    }) 
        
});