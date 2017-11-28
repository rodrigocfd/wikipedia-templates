
var util = {
	setRadioVal: function(name, index) {
		$(`input[name=${name}]:eq(${index})`)
			.prop('checked', true)
			.trigger('input');
	},

	limpar: function() {
		$('input[type=text], input[type=number]').val('').trigger('input');
		$('input[type=radio]').prop('checked', false).trigger('change');
	}
};