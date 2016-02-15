(function ($) {
    var fixHelper = function (e, ui) {
        ui.children().each(function () {
            $(this).width($(this).width());
        });
        return ui;
    };

    $.fn.SortableGridView = function (action) {
        var widget = this;
        var grid = $('tbody', this);

        grid.sortable({
            forcePlaceholderSize: true,
            axis: 'y',
            forceHelperSize: true,
            handle: '.sortHandle',
            items: 'tr',
            update: function () {
                var items = {};
                var i = 0;
                $('tr', grid).each(function () {
                    var currentKey = $(this).data('key');
                    items[i] = currentKey;
                    ++i;
                });
                modalOpen();
                $.ajax({
                    'url': action,
                    'type': 'post',
                    'data': {'items': JSON.stringify(items)},
                    'success': function () {
                        modalClose();
                        widget.trigger('sortableSuccess');
                    },
                    'error': function (request, status, error) {
                        modalClose();
                        alert(status + ' ' + error);
                    }
                });
            },
            helper: fixHelper
        });
    };
})(jQuery);
