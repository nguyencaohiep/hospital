$('.top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: true,
});

$('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: true,
});

$('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: false,
});

var mess = document.querySelector(".messenger");
var mess_toggle = document.querySelector(".toggle_mess");
var toggle = -1;
mess_toggle.addEventListener("click", () => {
    if (toggle == 1){
        mess.classList.add("hide");
    }
    else {
        mess.classList.remove("hide");
    }
    toggle = -toggle;
});

var hidden = mess.querySelector(".mess-header .hidden");
hidden.addEventListener("click", () => {
    mess.classList.add("hide");
    toggle = -toggle;
});