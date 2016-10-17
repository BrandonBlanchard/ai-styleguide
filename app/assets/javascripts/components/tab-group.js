/*********************************************************************************
	Component:
		Tab-Group

	Usage: 


**********************************************************************************/

(function(){

	$(document).on('click', '[data-component="tab-group"] .tab-group__tab', onTabClicked);

	function onTabClicked(e) {
		var $target,
			$tabsInGroup;

		// Hide all tab content
		$j(e.target).parent().parent().children('.tab-group__content').removeClass('tab-group__content--active');

		// Deactivate all tabs
		$j(e.target).parent().children('.tab-group__tab').removeClass('tab-group__tab--active');

		// Activate current tab
		$j(e.target).addClass('tab-group__tab--active');

		// Activate current tab content
		$j($j(e.target).attr('href')).addClass('tab-group__content--active');

		// Prevent bubbling
		return false;
	}
})();