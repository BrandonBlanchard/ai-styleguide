/***************************************************************************

Not for production use!!!!!!

***************************************************************************/

(function(){	

	var loadingClass = 'loader--animate',
		completeClass = 'loader--complete';

	function loadAnim(e){
		e.preventDefault();
		
		let selector = $j(e.target).attr('href');

		$j(selector).addClass(loadingClass);

		setTimeout(function(){ let sel = selector; completeAnim(sel); }, 6500);

	}

	function completeAnim(selector) {
		$j(selector).removeClass(loadingClass);
		$j(selector).addClass(completeClass);
	}

	function resetAnim(e){
		e.preventDefault();

		let selector = $j(e.target).attr('href');
		$j(selector).removeClass(loadingClass);
		$j(selector).removeClass(completeClass);

	}


	$j(document).ready(function(){
		$j(document).on('click', '.loader-demo--play', loadAnim);
		$j(document).on('click', '.loader-demo--reset', resetAnim);

	});

})();
