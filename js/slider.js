function mostrarSlider() {
	$('.slide').first().addClass('active-work');
	$('.work-mobile-nav span').first().addClass('active-work');

	$('.work-mobile-nav span').click(function(event){
		var $this = $(this),
			$sibilings = $this.parent().children(),
			position = $sibilings.index($this);

			$('.slide').removeClass('active-work').eq(position).addClass('active-work');
			$('.work-mobile-nav span').removeClass('active-work').eq(position).addClass('active-work');

			$sibilings.removeClass('active-work');
			$this.addClass('active-work');
	});

	$('.work-control-next, .work-control-prev').click(function(){
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
	mostrarSlider();
});