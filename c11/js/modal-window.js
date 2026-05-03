var modal = (function() {
    var $window = $(window);
    var $modal = $('<div class="modal">');
    var $content = $('<div class="modal-content">');
    var $close = $('<button role="button" class="modal-close">close</button>');

    $modal.append($content, $close);

    $close.on('click', function(e) {
        e.preventDefault();
        modal.close();
    })

    return {
        center: function() {
            var top = $window.height() - $modal.outerHeight();
            var left = $window.width() - $modal.outerWidth();
            $modal.css({
                top: Math.max(top + $window.scrollTop(), 0) / 2,
                left: Math.max(left + $window.scrollLeft(), 0) / 2
            });
        },

        open: function(settings) {
            $content.empty().append(settings.content);

            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');

            modal.center();

            $window.on('resize', modal.center)
        },
        
        close: function() {
            $content.empty();
            $modal.detach();
            $window.off('resize', modal.center)
        }
    }
}());