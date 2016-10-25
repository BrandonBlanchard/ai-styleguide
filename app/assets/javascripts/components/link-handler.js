/*****************************************************************************
Link handler

usage:
	<a href="<%= some_link_from_rails %>" data-component="popout" data-args="resizable=1,scrollbars=1,height=600,width=800">My Link Name</a>
			or
	<a href="http://my-link.net/" data-component="popout" data-args="resizable=1,scrollbars=1,height=600,width=800">My Link Name</a>

explanation:
	data-component="popout" is used to identify this link when the even bubbles up
	href: url to target
	data-args="args" arguments passed to the window.open() method

intent:
	instead of writing all this for each popout link:
	
	<a href="" id="help-link">Help</a>

	var helpUrl = "<%= help_url %>";

	$j('#help_link').click(function(event){
	var helpWindow = window.open(helpUrl, "onlineHelp", "resizable=1,scrollbars=1,height=600,width=800");
	event.preventDefault(); // Prevent link from following its href
	});

	we can do:
	
	<a href="<%= my_link_from_rails %>" data-component="popout-link" data-args"resizable=1,scrollbars=1,height=600,width=800">My Link Label</a>
   

*****************************************************************************/

(function(){
	$j(document).on('click', '[data-component="popout-link"]', openLink);

	function openLink(event){
		let $target = $j(event.target),
			urlToOpen = $target.attr('href'),
			options = $target.data('args'),
			name = $target.data('name');

		window.open(urlToOpen, name, options);

		return false; // prevents further bubbling (replacement for preventDefault)
	}
})();
