$(document).ready(function(){
	$("#masonry-container").masonry({
		columnWidth: 320,
		isAnimated:  true,
		itemSelector: '.box',
		isFitWidth: true
	})
})
	

	
	
/*function clicked(){
		$('.grid').masonry({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.grid-item',
		  // use element for option
		  columnWidth: '.grid-sizer',
		  isAnimated: true,
		  percentPosition: true,
		  animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		})	
	}*/

/*	.imagesLoaded(function(){
			$('#content').masonry('reload');
		});*/