// buttonStack = function(){
// 	$('.buttons').masonry({
// 		itemSelector: '.button',
// 		columnWidth: '.buttons'
// 		})
// 	};
// $(window).on('load', buttonStack);

var $grid = $('.buttons').masonry({
	itemSelector: '.button',
	columnWidth: '.button'
	})
};
$grid.imagesLoaded().progress( function() {
  	$grid.masonry('layout');
});