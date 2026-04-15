/// <reference types="jquery" />

$(function() {
    $('li:contains("pine")').text('almonds');
    $('li').html(function() {
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
});