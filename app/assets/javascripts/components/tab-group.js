/*********************************************************************************
	Component:
		Tab-Group

	Usage: 


**********************************************************************************/

(function(){

	$(document).on('click', '[data-component="tab-group"] .tab-group__tab', onTabClicked);

	function onTabClicked(e) {
		var $tabsInGroup,
			$target = $(e.target),
			$activeContent = $($target.attr('href'));

		// Hide all tab content
		$target.parent('.tab-group__tabs').parent('.tab-group').children('.tab-group__content').removeClass('tab-group__content--active');

		// Deactivate all tabs
		$target.parent().children('.tab-group__tab').removeClass('tab-group__tab--active');

		// Activate current tab
		if($target.hasClass('.tab-group__tab')){
			$target.addClass('tab-group__tab--active');
		} else {
			$target.parent('.tab-group__tab').addClass('tab-group__tab--active');
		}

		// Activate current tab content
		$activeContent.addClass('tab-group__content--active');

		moveActiveMarker($target.parent('.tab-group__tabs'), $target);

		// Prevent bubbling
		e.preventDefault();
	}

	function moveActiveMarker($tabGroupTabs, $activeTab) {
		let leftPos = $activeTab.position().left,
			width = $activeTab.outerWidth();

		$tabGroupTabs.children('.tab-group__tab-active-marker').css({'left': leftPos, 'width': width });
	}

})();
