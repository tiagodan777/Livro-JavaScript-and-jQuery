$(function() {
    var $list = $('.tab-list');

    $list.each(function() {
        var $activeTab = $(this).find('li.active');
        var $activePanel = $('div' + $activeTab.children().attr('href'));

        $(this).on('click', '.tab-control', function(e) {
            e.preventDefault();

            var id = this.hash;

            if (id && !$(this).parent().is('.active')) {
                $activeTab.removeClass('active');
                $activePanel.removeClass('active');

                $activeTab = $(this).parent().addClass('active');
                $activePanel = $(id).addClass('active');
            }
        });
    });
});