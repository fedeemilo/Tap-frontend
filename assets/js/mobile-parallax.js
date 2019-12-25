var scrollTop = $(window).scrollTop();
var mobileWrapper = $('.mobile-wrapper');
var offsetWrapper = mobileWrapper.offset();

// Get the offset position of the element
var sticky = mobileWrapper.offset();
console.log(sticky);
// Add the sticky class to the element when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset > sticky['top'] - 120) {
		mobileWrapper.addClass('sticky');
		mobileWrapper.removeClass('scrolled-down');
	} else {
		mobileWrapper.removeClass('sticky');
		mobileWrapper.removeClass('scrolled-down');
	}
}

$(document).ready(function() {
	// When the user scrolls the page, execute myFunction
	$(window).scroll(function() {
		myFunction();
		if (window.pageYOffset > 0) {
			$('#imagen-celular')
				.attr('src', './assets/images/8-parallax.jpg')
				.addClass('img-fluid')
				.css({ 'padding-top': '3.6rem' });
		}
		if (window.pageYOffset > 1217) {
			$('#imagen-celular')
				.attr('src', './assets/images/9-parallax.jpg')
				.addClass('img-fluid')
				.css({ 'padding-top': '3.6rem' });
		}
		if (window.pageYOffset > 1700) {
			$('#imagen-celular')
				.attr('src', './assets/images/10-parallax.jpg')
				.addClass('img-fluid')
				.css({ 'padding-top': '3.6rem' });
		}
		if (window.pageYOffset > 2200) {
			$('#imagen-celular')
				.attr('src', './assets/images/8-parallax.jpg')
				.addClass('img-fluid')
				.css({ 'padding-top': '3.6rem' });
		}
		if (window.pageYOffset > 2585) {
			mobileWrapper.addClass('scrolled-down');
		}
	});
});
