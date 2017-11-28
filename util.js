'use strict';

var util = {
	setRadioVal: function(name, index) {
		$(`input[name=${name}]:eq(${index})`)
			.prop('checked', true)
			.trigger('input');
	},

	limpar: function() {
		$('input[type=text], input[type=number]').val('').trigger('input');
		$('input[type=radio]').prop('checked', false).trigger('change');
	},

	bindInput: function(names, onDone) {
		names.forEach(function(name) {
			$(`input[name=${name}]`).on('change input', function() {
				campos[name] = $(this).val();
				if (onDone) onDone();
			});
		});
	},

	bindInputWikiLnk: function(names, onDone) {
		names.forEach(function(name) {
			$(`input[name=${name}]`).on('change input', function() {
				var val = $(this).val();
				campos[name] = val ? `[[${val}]]` : '';
				if (onDone) onDone();
			});
		});
	}
};