$(function() {
    $('.formset-form').formset({
        addText: 'add another line',
        deleteText: 'remove line',
        addCssClass: 'btn btn-primary btn-sm',
        deleteCssClass: 'btn btn-danger btn-sm',
        added: function($row) {
            // update line title
            var index = $row.index('.formset-form') + 1;
            $row.find('.sub-header').text('Bill Line #' + index);
        }
    });
})
