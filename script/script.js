$(document).ready(function() {
var reply = 4;
var boxDim = function () {
	z = 100 / reply +'%';
        return z;
}

var addBox = function() {
	$('.wrapper').append('<div class="box"></div>');
}

var changeDim = function () {
	$('.box').css({width: boxDim, height: boxDim});
}

var loop = function () {
	for (var i = 0; i < reply * reply; i++) {
		addBox();
	}
}

loop();

$('.box').on('mouseenter', function() {
	$(this).css('background-color', 'beige');
});

$('.button').click(function() {
	$('.box').remove();
  reply = prompt('How many boxes would you like?');
  loop();
  changeDim();
  $('.box').on('mouseenter', function() {
	$(this).css('background-color', 'beige');

});
});
});
