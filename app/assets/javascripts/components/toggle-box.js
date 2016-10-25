/**************************************************************************************
	
	Component:
		toggle-box - any number of content pieces can be open at any time (within this componene)
		toggle-box-single - only a single content piece can be open at any time (within this component)

	Usage:

	<div class="toggle-box" data-component="toggle-box">
		<div class="toggle-box__toggle"> Toggle Box 1</div>
		<div class="toggle-box__content">
			Content Piece 1
		</div>

		<div class="toggle-box__toggle"> Toggle Box 2 </div>
		<div class="toggle-box__content">
			Content Piece 2
		</div>
	</div>


***************************************************************************************/

(function(){

	$(document).on('click', '[data-component="toggle-box"] .toggle-box__toggle', onToggleMulti);

	$(document).on('click', '[data-component="toggle-box-single"] .toggle-box__toggle', onToggleSingle);

	// Handles cases where many toggle-boxes can be open
	function onToggleMulti(e){
		let $target = $j(e.target);

		if($target.hasClass('toggle-box__toggle--active')){
			$target.removeClass('toggle-box__toggle--active');
		}else {
			$target.addClass('toggle-box__toggle--active');
		}
	}

	// Handles cases where only a single toggle box can be open
	function onToggleSingle(e){
		$(e.target).parent().children('.toggle-box__toggle').removeClass('toggle-box__toggle--active');

		onToggleMulti(e);
	}


})();