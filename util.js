'use strict';

var util = {
	setRadioVal: function(name, index) {
		$(`input[name=${name}]:eq(${index})`)
			.prop('checked', true)
			.trigger('input');
	},

	setDataHoje: function(name) {
		var hoje = new Date();
		$(`input[name=${name}_d]`).val(hoje.getDate()).focus();
		$(`input[name=${name}_m]`).val(hoje.getMonth() + 1);
		$(`input[name=${name}_y]`).val(hoje.getFullYear()).trigger('input');
	},

	urlBoa: function(u) {
		if (!u) return false;
		if (!u.startsWith('http://') && !u.startsWith('https://')) return false;
		return u.length > 10;
	},

	limpar: function() {
		$('input[type=text], input[type=number]').val('').trigger('input');
		$('input[type=radio]').prop('checked', false).trigger('change');
	},

	bindInput: function(campos, names, onDone) {
		names.forEach(function(name) {
			$(`input[name=${name}]`).on('change input', function() {
				campos[name] = $(this).val();
				if (onDone) onDone();
			});
		});
	},

	bindInputWikiLnk: function(campos, names, onDone) {
		names.forEach(function(name) {
			$(`input[name=${name}]`).on('change input', function() {
				var val = $(this).val();
				campos[name] = val ? `[[${val}]]` : '';
				if (onDone) onDone();
			});
		});
	}
};