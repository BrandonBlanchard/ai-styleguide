/*************************************************************************

Material Design Ripple Effect

**************************************************************************/

(function(){
	'use strict';

	var ink = false,
		parent = $j(document);

	$j(document).on('click', '.ripple, .button, .modal__backdrop, .toggle-box__toggle, .tab-group__tab', ripple);

	function ripple(e) {
		var x = 0,
			y = 0,
			size = 0,
			$target = $(e.target);

		if(!ink) {
			init();
		}

		ink = ink.detach();
		$j(ink).appendTo($target);

		if(ink.hasClass('animate')) {
			ink.removeClass();
			ink.addClass('ink');
		}

		size = Math.min(Math.max($target.outerWidth() + 10, $target.outerHeight() + 10), 300);
		x = e.pageX - $target.offset().left - size/2;
		y = e.pageY - $target.offset().top - size/2;

		ink.css({
			'height': size + 'px',
			'width': size + 'px',
			'top': y,
			'left' : x
		});

		ink.addClass('animate');
	}

	function init(){

		$j('body').append('<span class="ink" />');
		ink = $('.ink');
	}

})();