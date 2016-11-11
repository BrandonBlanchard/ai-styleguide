/****************************************************

	Toggle Script

	<div data-target="" data-trigger="toggle" data-class=".class-to-toggle"></div>

*****************************************************/

(function(){	
	'use strict';

	$j(document).on('click', '[data-trigger="toggle"]', onToggle);

	function onToggle(e){
		let $trigger = $j(e.target),
			$class = $trigger.data('class'),
			$target = $j($trigger.data('target'));

		if($target.hasClass($class)){
			$target.removeClass($class);
		} else {
			$target.addClass($class);
		}

		e.preventDefault();
	}

})();
