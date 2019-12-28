$(document).ready(function($) {
	// setInterval(function () {
	//     moveRight();
	// }, 3000);
	var wrapSlider1 = $('#slider-wrap');
	console.log(wrapSlider1.height());
	var slideCount = $('#slider ul li').length;
	var slideCount2 = $('#slider2 ul li').length;
	var slideWidth = $('#slider ul li').width();
	console.log(slideWidth);
	var slideWidth2 = $('#slider2 ul li').width();
	console.log(slideWidth2);
	var slideHeight = $('#slider ul li').height();
	console.log(slideHeight);
	var slideHeight2 = $('#slider2 ul li').height();
	console.log(slideHeight2);
	var sliderUlWidth = slideCount * slideWidth;

	var slider2UlWidth = slideCount2 * slideWidth2;

	$('#slider').css({ width: slideWidth, height: slideHeight });
	$('#slider2').css({ width: slideWidth2, height: slideHeight2 });

	$('#slider ul').css({
		width: sliderUlWidth,
		marginLeft: -slideWidth
	});

	$('#slider2 ul').css({
		width: slider2UlWidth,
		marginLeft: -slideWidth2
	});

	// $('#slider ul li:last-child, #slider2 ul li:last-child').prependTo(
	// 	'#slider ul, #slider2 ul'
	// );

	function moveLeft() {
		$('#slider ul').animate(
			{
				left: +slideWidth
			},
			200,
			function() {
				$('#slider ul li:last-child').prependTo('#slider ul');
				$('#slider ul').css('left', '');
			}
		);
	}

	function moveLeft2() {
		$('#slider2 ul').animate(
			{
				left: +slideWidth2
			},
			200,
			function() {
				$('#slider2 ul li:last-child').prependTo('#slider2 ul');
				$('#slider2 ul').css('left', '');
			}
		);
	}

	function moveRight() {
		$('#slider ul').animate(
			{
				left: -slideWidth
			},
			200,
			function() {
				$('#slider ul li:first-child').appendTo('#slider ul');
				$('#slider ul').css('left', '');
			}
		);
	}

	function moveRight2() {
		$('#slider2 ul').animate(
			{
				left: -slideWidth2
			},
			200,
			function() {
				$('#slider2 ul li:first-child').appendTo('#slider2 ul');
				$('#slider2 ul').css('left', '');
			}
		);
	}

	$('a.control_prev').click(function() {
		moveLeft();
	});

	$('a.control_prev2').click(function() {
		moveLeft2();
	});

	$('a.control_next').click(function() {
		moveRight();
	});

	$('a.control_next2').click(function() {
		moveRight2();
	});
});
