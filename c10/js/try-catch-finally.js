var $feed = $('#feed');

// Correct feed
var response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l tins are all reduced this week","price": 30,"link": "http://www.example.com/farrow-and-ball/"},{"title": "Siecle Paints from the UK","description": "Probably the best named paints in the world","price": 28,"link": "http://www.example.com/siecle/"},{"title": "Kelly Hoppen","description": "Now stocking paints by interior designer Kelly Hoppen","price": 42,"link": "http://www.example.com/kelly-hoppen/"}]}';
// Feed with errors - comment the next line out to see it working
// response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l '; // JSON data

if (response) {
    try {
        var dealData = JSON.parse(response);
        showContent();
    } catch (e) {
        console.log(e.name + ' ' + e.message);
        $feed.html('<em>Não foi possível mostrar os dados</em>')
    } finally {
        var $link = $('<a href="try-catch-finally.html">reload</a>');
        $feed.append($link);
    }
}

function showContent() {
    var newContent = '';

    for (var i in dealData.deals) {
        newContent += '<div class="deal">';
        newContent += '<h2>' + dealData.deals[i].title + '</h2>';
        newContent += '<p>' + dealData.deals[i].description + '</p>';
        newContent += '<a href="' + dealData.deals[i].link + '">' + dealData.deals[i].link + '</a>';
        newContent += '</div>';
    }

    $feed.html(newContent);
}