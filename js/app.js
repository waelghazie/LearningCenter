$('.carousel').carousel({
    interval: 4000
})

function carouselLeft() {
    $('.carousel').carousel('prev')
}

function carouselNext() {
    $('.carousel').carousel('next')
}

$('.carouselBody').on('hover', function () {
    $('.carousel').carousel('pause')
});

$(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 100) {
            $('#global-nav').addClass('scrolled-nav');
            $('#logo').addClass('logo-small');
        } else if (scrollTop < 100) {
            $('#global-nav').removeClass('scrolled-nav');
            $('#logo').removeClass('logo-small');
        }

    });

});