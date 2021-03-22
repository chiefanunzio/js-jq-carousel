
function clickedNext(){
    var startImg = $('.show-img');
    var imgNext = startImg.next(); 
    
    startImg.removeClass('show-img');
    imgNext.addClass('show-img');
    
}

function clickedPrev(){
    var startImg = $('.show-img');
    var imgNext = startImg.prev(); 
    
    startImg.removeClass('show-img');
    imgNext.addClass('show-img');
    
}


function init(){
    
    $('.skip-next').click(clickedNext);
    $('.skip-prev').click(clickedPrev);
}

$(document).ready(init)