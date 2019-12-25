$(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);

    var slideCount = $('#slider ul li, #slider2 ul li').length;
    var slideWidth = $('#slider ul li, #slider2 ul li').width();
    var slideHeight = $('#slider ul li, #slider2 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider, #slider2').css({ width: slideWidth, height: slideHeight });

    $('#slider ul, #slider2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child, #slider2 ul li:last-child').prependTo('#slider ul, #slider2 ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
      
    function moveLeft2() {
        $('#slider2 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
      
    function moveRight2() {
        $('#slider2 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });
      
    $('a.control_prev2').click(function () {
        moveLeft2();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
      
    $('a.control_next2').click(function () {
        moveRight2();
    });

});    