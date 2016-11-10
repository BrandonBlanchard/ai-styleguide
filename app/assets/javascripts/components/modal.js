/****************************************************************************************
	
	Component:
		Modal

	Usage:
		data-component="modal"
		href="#content-selector"
		data-options="key:value,key:value,key:value"

	Options:
		This should be a comma delimited list nested inside data-options=" "
	 	title: string,
	 	width: 'wide', 'extra-wide',
	 	padding: 'no-pad'

****************************************************************************************/

(function(){	
	'use strict';

	var modalContent = {}, // { '#selector': { title: 'string', content: 'html content', options: { key : value } };
		$backdrop,
		$modal,
		$modalContentContainer,
		$modalHeader,
		$modalHeaderToolBar,
		initialized = false;

	$j(document).on('click', '[data-trigger="open-modal"]', triggerOpen);
	$j(document).on('click', '[data-trigger="close-modal"]', triggerClose);
	$j(document).on('turbolinks:load', init);

	function triggerOpen(e) {
		
		e.preventDefault();
		
		loadContentIntoModal(e.target);

		$modal.addClass('modal--active');
		$backdrop.addClass('modal__backdrop--active');

		e.preventDefault;
	};

	function triggerClose(e){
		setTimeout(closeModal, 175);

		e.preventDefault();
	}

	function closeModal(e) {
		if(!initialized)
			return;

		$modal.removeClass('modal--active');

		// Remove the backdrop after the modal is mostly offscreen
		setTimeout(function(){
			$backdrop.removeClass('modal__backdrop--active');
			cleanModalMods();
		}, 375);
	};

	function loadContentIntoModal(element) {
		var contentSelector = $j(element).attr('href'),
			$content = $j(contentSelector);

		// Does the content exist in the page or is it loaded into content already?
		if(!modalContent[contentSelector]) {
			parseOptions($j(element), contentSelector);	
		}

		modalContent[contentSelector].content.appendTo($modalContentContainer);

		applyOptionsMods(modalContent[contentSelector]);

		if(modalContent[contentSelector].options.title) {
			$modalHeader.text(' ');
			$modalHeader.prepend(modalContent[contentSelector].options.title);
		}
	};

	function parseOptions($trigger, contentSelector) {
		let contentPiece = {
			content: '',
			options: { }
		},
		options;

		contentPiece.content = $(contentSelector).detach();

		options = $trigger.data('options');

		if(options != undefined) {

			if(options.length > 0) {
				// Split key value pairs
				options = options.split(',');
			}

			for(let i = 0; i < options.length; i += 1) {
				options[i] = options[i].split(':');
				
				if(options[i].length > 1) {
					contentPiece.options[options[i][0]] = options[i][1];
				}
			}
		}

		modalContent[contentSelector] = contentPiece;
	}


	// Modifier application

	function applyOptionsMods(content) {
		applyWidthMod(content);
		applyPaddingMod(content);
	}

	function applyWidthMod(content) {
		if(!content.options.width)
			return;

		if(content.options.width == 'wide')
			$modal.addClass('modal--wide');

		if(content.options.width == 'extra-wide')
			$modal.addClass('modal--extra-wide');
	}

	function applyPaddingMod(content) {
		if(!content.options.padding)
			return;

		if(content.options.padding == 'no-pad')
			$modalContentContainer.addClass('header-box__content--no-pad');
	}

	// Cleans Modifiers
	function cleanModalMods() {
		$modal.removeClass('modal--wide modal--extra-wide');
		$modalContentContainer.removeClass('header-box__content--no-pad');
		$modalHeader.text(' ');
		$modalContentContainer.empty();
	}

	// Creates the modal and hides it off screen
	function init() {
		var modalTemplate = '<!-- Located in Modal.js --> <div class="modal"><div class="header-box"><h2 class="header-box__header"><span class="header-box__header-container">&nbsp;</span><div class="header-box__header-tools"><a class="button button--tool-bar fa fa-close" data-trigger="close-modal"></a></div></h2><div class="header-box__content"></div></div></div>',
			backdropTemplate = '<!-- Located in Modal.js --> <div class="modal__backdrop" data-trigger="close-modal"></div>';

		$j('body').append(modalTemplate);
		$j('body').append(backdropTemplate);

		$modal = $('.modal');
		$modalContentContainer = $j('.modal .header-box__content');
		$modalHeader = $j('.modal .header-box__header-container');
		$modalHeaderToolBar = $j('.modal .header-box__header-tools');
		$backdrop = $j('.modal__backdrop');

		initialized = true;
	};
})();
