jQuery(document).ready(function ($) {

    var slideCount = $('#slider ul li').length;
	var slideCountTwo = $('#slider-two ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideWidthTwo = $('#slider-two ul li').width();
	var slideHeight = $('#slider ul li').height();
	var slideHeightTwo = $('#slider-two ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	var sliderUlWidthTwo = slideCountTwo * slideWidthTwo;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	$('#slider-two').css({ width: slideWidthTwo, height: slideHeightTwo });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	$('#slider-two ul').css({ width: sliderUlWidthTwo, marginLeft: - slideWidthTwo });
	
    $('#slider ul li:last-child').prependTo('#slider ul');
	$('#slider-two ul li:last-child').prependTo('#slider-two ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
	
	function moveLeftTwo() {
        $('#slider-two ul').animate({
            left: + slideWidthTwo
        }, 200, function () {
            $('#slider-two ul li:last-child').prependTo('#slider-two ul');
            $('#slider-two ul').css('left', '');
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
	
	function moveRightTwo() {
        $('#slider-two ul').animate({
            left: - slideWidthTwo
        }, 200, function () {
            $('#slider-two ul li:first-child').appendTo('#slider-two ul');
            $('#slider-two ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });
	
	$('a.control_prev_two').click(function () {
        moveLeftTwo();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
	
	$('a.control_next_two').click(function () {
        moveRightTwo();
    });

});    
