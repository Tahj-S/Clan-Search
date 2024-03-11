// script.js
$(document).ready(function () {
    var settings = {
        "url": "https://biggamesapi.io/api/clans?page=1&pageSize=100&sort=Points&sortOrder=desc",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        // Process the data and create HTML elements
        var $clanResults = $('#clan-search-results');
        response.forEach(function (clan) {
            var $clanItem = $('<div>').text(clan.name + ' - Points: ' + clan.points);
            $clanResults.append($clanItem);
        });
    });
});
