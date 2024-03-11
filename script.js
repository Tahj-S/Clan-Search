function searchClan() {
    var clanTag = $('#clanTagInput').val();
    var apiUrl = 'https://biggamesapi.io/api/clans/' + encodeURIComponent(clanTag);

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var $clanResults = $('#clanResults');
            $clanResults.empty();

            if (data.name) {
                var $clanItem = $('<div>').html('<strong>' + data.name + '</strong> - Points: ' + data.points);
                $clanResults.append($clanItem);
            } else {
                $clanResults.text('Clan not found. Please check the clan tag.');
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            console.error('Error fetching data:', textStatus, errorThrown);
            $('#clanResults').text('An error occurred while fetching data. Please try again later.');
        }
    });
}

