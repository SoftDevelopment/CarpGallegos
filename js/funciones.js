function _scroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
		var target=$($(this).attr('href'));

		if (target.length)
		{
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}


function trabajo() {
	$('.thumb-unit').click(function(event) {
		event.preventDefault();
		$('.work-belt').css('left', '-100%');
		$('.work-container').toggle(400, 'swing');
	});

	$('.work-return').click(function(event) {
		event.preventDefault();
		$('.work-belt').css('left', '0%');
		$('.work-container').toggle(400, 'swing');
	});
}


function cargarTrabajo(){
	$.ajaxSetup({cache: true});

	$('.thumb-unit').click(function(event){
		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newFolder=$this.find('input:hidden').val(),
			spinner='<div class="loader">Loading...</div>',
			newHTML='includes/'+ newFolder;
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);
	});
}



function mostrarSlider() {
	$('.slide').first().addClass('active-work');

	$('.work-control-next, .work-control-prev').click(function(event){
		var $this=$(this),
			curActiveClient=$('.slides-container').find('.active-work'),
			position=$('.slides-container').children().index(curActiveClient),
			clientNum=$('.slide').length;

			if($this.hasClass('work-control-next'))
			{
				if (position < clientNum-1){
					$('.active-work').removeClass('active-work').next().addClass('active-work');
				}else
				{
					$('.slide').removeClass('active-work').first().addClass('active-work');
					$('.slide').removeClass('active-work').first().addClass('active-work');
				}
			}else
			{
				if(position === 0)
				{
					$('.slide').removeClass('active-work').last().addClass('active-work');
				}else
				{
					$('.active-work').removeClass('active-work').prev().addClass('active-work');
				}
				
			}
			
			
	});
}



$(function() {
	_scroll(1000);
	trabajo();
	cargarTrabajo();
	mostrarSlider();
});
