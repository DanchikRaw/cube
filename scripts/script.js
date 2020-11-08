$(document).ready(function () {
    function onAnimate() {
        $('body').on('keydown', function (e) {
            if (e.which == 37) {
                $('body').off();
                $('.block').animate({
                    'left': '-=50px'
                }, 100, function () {
                    onAnimate();
                })
            }
            if (e.which == 39) {
                $('body').off();
                $('.block').animate({
                    'left': '+=50px'
                }, 100, function () {
                    onAnimate();
                })
            }
            if (e.which == 38) {
                $('body').off();
                $('.block').animate({
                    'top': '-=50px'
                }, 100, function () {
                    onAnimate();
                })
            }
            if (e.which == 40) {
                $('body').off();
                $('.block').animate({
                    'top': '+=50px'
                }, 100, function () {
                    onAnimate();
                })
            }
        })
    }
    onAnimate();

})