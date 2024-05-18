const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(() => {
    $('input[name=tel]').mask('(00) 00000-0000');
    $('.box-plan-checkbox').hide();
    $('textarea[name=description]').val('');
    $('legend').html('0/500');
});

$('select[name=subject]').change(function (e) {
    e.preventDefault();

    $('.box-plan-checkbox').hide();

    $('.form-check-input').prop('checked', false);

    if ($('select[name=subject]').val() === 'Convênios') {
        $('.box-plan-checkbox').show();
    }
});

$('textarea[name=description]').keyup(() => {
    let count = $('textarea[name=description]').val().length;

    $('legend').html(`${count}/500`);
});

