/*****************************************************************************
Link handler

usage:
	<a href="<%= some_link_from_rails %>" data-action="popout" data-args="resizable=1,scrollbars=1,height=600,width=800">My Link Name</a>
			or
	<a href="http://my-link.net/" data-action="popout" data-args="resizable=1,scrollbars=1,height=600,width=800">My Link Name</a>

explanation:
	data-action="popout" is used to identify this link when the even bubbles up
	href: url to target

intent:
	simplify links like documentation and help,
	using this modified method we can handle all links like these two

	var helpUrl = "<%= help_url %>";
    	var docsUrl = "<%= docs_url %>";

	$j('#help_link').click(function(event){
	var helpWindow = window.open(helpUrl, "onlineHelp", "resizable=1,scrollbars=1,height=600,width=800");
	event.preventDefault(); // Prevent link from following its href
	});

*****************************************************************************/

(function(){

	// Not the fastest, targeting the document means the event has to bubble up to the document level
	// this also means it's easier for another piece of js to stop the event from bubbling
	// buuuuutt.. this is probably the best way to handle links being ajaxed in and out
	// alternitively this might actually be faster in the case we have a lot of links to handle
	// i.e. one event handler watching 1000 events is better than 1000 handlers watching 1 event each
	$j(document).on('click', '[data-action="popout"]', openLink);

	function openLink(event){
		var $target = $j(event.target),
			urlToOpen = $target.attr('href'),
			options = $target.data('args');

		window.open(urlToOpen, '', options);

		return false; // prevents further bubbling (replacement for preventDefault)
	}

})();
