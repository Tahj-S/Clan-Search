// script.js
function searchClan() {
    var clanTag = $('#clanTagInput').val();
    var apiUrl = 'https://biggamesapi.io/api/clans/' + encodeURIComponent(clanTag);

    $.getJSON(apiUrl, function (data) {
        var $clanResults = $('#clanResults');
        $clanResults.empty(); // Clear previous results

        if (data.name) {
            var $clanItem = $('<div>').html('<strong>' + data.name + '</strong> - Points: ' + data.points);
            $clanResults.append($clanItem);
        } else {
            $clanResults.text('Clan not found. Please check the clan tag.');
        }
    });
}

