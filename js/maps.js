jQuery(function(){
	$('.map').load(function(){
		$(this).hide();
	})
	$('.view-map').click(function(){
		map = $(this).data('target');
		$map = $(map);
		$map.toggle(500);
	});
});