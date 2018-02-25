console.log('calvin is connected')



$('document').ready(function(){
	$('.readmore').click(function(){
		$('.hide').slideDown().show()
		$('.readmore').hide()
	})
})


$('document').ready(function(){
	$('.readless').click(function(){
		$('.hide').slideUp().hide()
		$('.readmore').show()
	})
})


$('document').ready(function(){
	$('.learnmore').click(function(){
		$('#learnmoretext').slideDown().show()
		$('.learnmore').hide()
	})
})

