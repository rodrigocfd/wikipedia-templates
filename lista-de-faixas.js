'use strict';

$(document).ready(function() {
	linha.cria();

	$('#adicionar').on('click', linha.cria);
	$('#remover').on('click', linha.remove);
	limpar();
});

var bind = {
	campo: function(names) {
		// $('#linhas').on('input', '.', function() {
		// 	campos[name] = $(this).val();
		// 	if (onDone) onDone();
		// });
	}
};

var linha = {
	cria: function() {
		var numLinhas = $('#linhas > .linha').length;
		var $linha = $('#templates > .linha').clone();
		$linha.find('input').each(function() {
			var $input = $(this);
			$input.attr('name', $input.attr('name') + (numLinhas + 1));
		});
		$('#linhas').append($linha);
		$('#remover').prop('disabled', $('#linhas > .linha').length === 1);
	},

	remove: function() {
		$('#linhas .linha:last').remove();
	}
};

function limpar() {
	util.limpar();
	$('input:eq(0)').focus();
}

var campos = { };

function gerarFinal() {
	$('#final').text(
		'{{Lista de faixas' +
		'}}'
	);
}