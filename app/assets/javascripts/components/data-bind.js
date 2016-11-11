/************************************************************************

	Component:
		Data-Bind

	This treats anything with the same data-bind attribute as a group. Everything 
	in a particular group will get the same value when any of the grouped
	inputs are changed.

	Supports: 
		checkbox, toggles, text fields, range sliders, dropdowns


************************************************************************/

(function(){	
	'use strict';

	$j(document).on('input change', '[data-bind]', updateBoundInputs)

	function updateBoundInputs(e) {
		let $target = $(e.target),
			selector = $target.attr('data-bind'),
			value = $target.val();

		if($target.is('[type="checkbox"]')) {
			$j('[data-bind="' + selector + '"]').prop('checked', $target.prop('checked'));
		}

		$j('[data-bind="' + selector + '"]').val(value);
	}

})();
