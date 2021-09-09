document.addEventListener("DOMContentLoaded", function () {
    
    $('.navbar-text').on("click", function () {
        $('#loginModal').modal('toggle');
    });

    $('#button-toggler').on("click", function () {
        if ($('#button-toggler').children('span').hasClass('navbar-toggler-icon')) {
            $('#button-toggler').disabled = true;
            $('#button-toggler').children('span').removeClass('navbar-toggler-icon');
            $('#button-toggler').children('span').addClass('fa fa-close');
            $('#button-toggler').disabled = false;
        }
        else if ($('#button-toggler').children('span').hasClass('fa fa-close')) {
            $('#button-toggler').disabled = true;
            $('#button-toggler').children('span').removeClass('fa fa-close');
            $('#button-toggler').children('span').addClass('navbar-toggler-icon');
            $('#button-toggler').disabled = false;
        }
    });

    $("#button-toggler").on("blur", function () {
        if ($('#button-toggler').children('span').hasClass('fa fa-close')) {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                $('#button-toggler').children('span').removeClass('fa fa-close');
                $('#button-toggler').children('span').addClass('navbar-toggler-icon');
            }
        }
        $("#Navbar").collapse('toggle');
    });

    $('#mycarousel').carousel({ interval: 3000 });
    $('#carouselButton').on('click', function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});
