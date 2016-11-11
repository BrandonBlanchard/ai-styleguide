/*******************************************************************

	Component:
		Select Box

	Usage:
		This replaces any basic css select box with the javascript driven equivelant.

********************************************************************/

(function(){	
	'use strict';

	function init(){
		var $selectBoxes = $j('[data-component="select-box"]'),
			i = 0;	

		// TODO: hide the original
		// TODO: add a data-original option to .select-box so we can update the values
		// TODO: account for multiselect boxes

		while(i < $selectBoxes.length) {
			let $parent = $j($selectBoxes[i]).parent(),
				options = gatherOptions($selectBoxes[i]),
				optionsHtml = buildOptions(options),
				optionsHeader = buildHeader(options, optionsHtml),
				selectBoxHtml = buildSelectBox(optionsHeader + optionsHtml),
				$newSelect = $(selectBoxHtml).insertAfter($selectBoxes[i]),
				left = 0,
				top = 0;

			// $newSelect.data('original', '#' + $j($selectBoxes[i]).prop('id'));

			left = $newSelect.offset().left;
			top = $newSelect.offset().top + 8;

			$newSelect.children('.select-box__content').css({ 'top': top, 'left': left });
			

			$j($selectBoxes[i]).css('display', 'none');
			
			i += 1;
		}

		$j(document).on('click', '.select-box__header', onClick);
		$j(document).on('click', '.select-box__option', onClickOption);
	}

	function onClick(e){
		let $selectBox = $j(e.target).parent('.select-box');
		
		if($selectBox.hasClass('select-box--active')){
			$selectBox.removeClass('select-box--active');
		} else {
			$selectBox.addClass('select-box--active');
		}
	}

	function onClickOption(e){
		let $option = $j(e.target),
			$content = $option.parent('.select-box__content'),
			$parent = $content.parent('.select-box'),
			$header = $parent.children('.select-box__header');

		$content.children('.select-box__option').removeClass('select-box__option--active');
		$option.addClass('select-box__option--active');
		$parent.removeClass('select-box--active');
		$header.text($option.text());
		$parent.prev().prop('value', $option.data('value')).change();
	}

	function gatherOptions($selectBox){
		var options = $j($selectBox).children('option'),
			opts = [];

		for(let i = 0; i < options.length; i += 1){
			let opt = {
				label: $j(options[i]).text(),
				value: $j(options[i]).prop('value'),
				selected: ($j(options[i]).parent('select').prop('value') == $j(options[i]).prop('value'))
			};

			opts.push(opt);
		}

		return opts;
	}

	function buildOptions(opts){
		var optionsContainer = '<ul class="select-box__content">{0}</li>',
			optionTemplate = '<li class="select-box__option {0}" data-value="{1}">{2}</li>',
			optionsHtml = '';

		for (let i = 0; i < opts.length; i += 1) {
			let option = optionTemplate
							.replace('{0}', opts[i].selected ? 'select-box__option--active': ' ')
							.replace('{1}', opts[i].value)
							.replace('{2}', opts[i].label);

			optionsHtml += option;
		}

		return optionsContainer.replace('{0}', optionsHtml);
	}

	function buildHeader(opts) {
		let headerTemplate = '<div class="select-box__header">{0}</div>',
			selected = false;

		for(let i = 0; i < opts.length; i += 1) {
			if(opts[i].selected == true){
				selected = opts[i];
				break;
			}
		}

		if(selected){
			return headerTemplate.replace('{0}', selected.label);
		}
	
		return headerTemplate.replace('{0}', 'Choose an option');
		
	}

	function buildSelectBox (htmlContent) {
		let selectTemplate = '<div class="select-box">{0}</div>'

		return selectTemplate.replace('{0}', htmlContent);
	}

	$j(document).on('turbolinks:load', init);

})();