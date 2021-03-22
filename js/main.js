function clickedNext() {
    var startImg = $('.show-img');

    if (startImg.hasClass('last-cld')) {
        var imgNext = $('#dad-img');
        startImg.removeClass('show-img');
        imgNext.addClass('show-img');
    } else {
        var imgNext = startImg.next();
        startImg.removeClass('show-img');
        imgNext.addClass('show-img');

    }

}

function clickedPrev() {
    var startImg = $('.show-img');

    if (startImg.hasClass('.show-img.dad')) {
        var imgNext = $('.last-cld');
        startImg.removeClass('show-img');
        imgNext.addClass('show-img');
    
    } else {
        var imgNext = startImg.prev('img');
        startImg.removeClass('show-img');
        imgNext.addClass('show-img');

    }

}


function init() {

    $('.skip-next').click(clickedNext);
    $('.skip-prev').click(clickedPrev);
}

$(document).ready(init)