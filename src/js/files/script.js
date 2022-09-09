import '../libs/jquery.min.js';
import "../libs/jquery.formstyler.min.js";
import "../libs/nouislider.min.js";
import "../libs/wNumb.min.js";
import "../libs/jquery.rateyo.min.js";
import '../libs/popup.min.js';
import '../libs/slick.min.js';

$(function() {

	$('select').styler();

  $('.header__lang-text, .profile__info-btn').on('click', function() {
    $('.header__lang-text, .profile__info-btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.filter__more, .filter__mobile-setup').on('click', function() {
    $('.filter__dropdown').toggleClass('active');
  });

  $('.search__heart').on('click', function() {
    $(this).toggleClass('active');
  });

  $('.notice__error-close').on('click', function() {
    $('.notice__item-error').addClass('close');
    $('.notice__item').removeClass('error');
  });



  // Rating

  var rating = 4.6;

  $(".profile__rate-counter").text(rating);

  var changeRating = function (rating) {

    $(this).next().text(rating);
  };
  $('.profile__rate-rateio').rateYo({
    precision: 1,
    rating: rating,
  }).on("rateyo.change", function (e, data) {

    changeRating.apply(this, [data.rating]);
  }).on("rateyo.set", function (e, data) {

    changeRating.apply(this, [data.rating]);
  });



  // Tabs

  
  $('.tab').on('click', function(e) {
    e.preventDefault();
  
    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
  
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });



  // Popup

  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		},
	});

  $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

  // SLider 

  $('.content-profile__slider').slick({
    arrows: true,
    nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/icons/arrow-right.svg" alt="arrow-right"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/icons/arrow-left.svg" alt="arrow-left"></button>',
  });

});



//=========================================================================================

// Burger

const menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
  const menuBody = document.querySelector('.menu__body');
  menuIcon.addEventListener("click", function(e) {
    menuIcon.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

// NoUISlider

let stepsSlider = document.getElementById('filter__price-slider');
let input0 = document.getElementById('filter__price-input0');
let input1 = document.getElementById('filter__price-input1');
let inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
  start: [20, 150],
  connect: true,
  tooltips: [ wNumb({decimals: 0}), wNumb({decimals: 0})],
  range: {
      'min': [0],
      'max': [200],
  },
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = values[handle];
});