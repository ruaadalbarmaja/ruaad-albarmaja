$(document).ready(function () {
    // تأثير الهيدر عند التمرير
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // كود الفلترة لمعرض الأعمال
    $('#portfolio-flters button').on('click', function () {
        $('#portfolio-flters button').removeClass('active');
        $(this).addClass('active');
        var selectedFilter = $(this).attr('data-filter');
        if (selectedFilter === "all") {
            $('.portfolio-item-wrapper').fadeOut(200).promise().done(function () {
                $('.portfolio-item-wrapper').fadeIn(300);
            });
        } else {
            $('.portfolio-item-wrapper').fadeOut(200).promise().done(function () {
                $('.portfolio-item-wrapper[data-category="' + selectedFilter + '"]').fadeIn(
                    300);
            });
        }
    });

    // التمرير السلس وإغلاق القائمة التلقائي في الجوال
    $('.navbar-nav a, .btn, footer a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);

            if ($(window).width() < 992) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });
});
