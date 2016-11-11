(function(){	
	'use strict';

	$j(document).on('focus', '.text-validation-demo input[type="text"]', onFocus);
	$j(document).on('blur', '.text-validation-demo input[type="text"]', onBlur);

	function onFocus(e){
		e.target.onkeypress = onKeyPress;
	}

	function onKeyPress(e){
		let $target = $j(e.target);

		$target.parent('.text-validation-demo').removeClass('text--invalid text--valid');
		$target.parent('.text-validation-demo').addClass('text--validating');

		setTimeout(function(){
			validate($target)
		}, 1500);
	}

	function onBlur(e){
		let $target = $j(e.target);

		$target.parent('.text-validation-demo').removeClass('text--invalid text--valid');
		$target.parent('.text-validation-demo').addClass('text--validating');

		validate($target);
	}

	function validate($target){
		$target.parent('.text-validation-demo').removeClass('text--validating');

		if($target.val().toLowerCase() == 'kirk' || $target.val().toLowerCase() == 'picard') {
			$target.parent('.text-validation-demo').addClass('text--valid');
		} else{
			$target.parent('.text-validation-demo').addClass('text--invalid');
		}
	}

})();
