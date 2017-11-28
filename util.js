
var ctrl = {
	defRadio: function(name, pos) {
		$(`input[name=${name}]:eq(${pos})`)
			.prop('checked', true)
			.trigger('input');
	},

	limpar: function() {
		$('input[type=text], input[type=number]').val('').trigger('input');
		$('input[type=radio]').prop('checked', false).trigger('change');
	}
};