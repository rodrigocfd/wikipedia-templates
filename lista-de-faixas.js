'use strict';

$(document).ready(function() {
	faixa.cria();

	$('#adicionar').on('click', faixa.cria);
	$('#remover').on('click', faixa.remove);
	limpar();
});

var faixa = {
	cria: function() {
		var numFaixas = $('#faixas > .faixa').length;
		var $novaFaixa = $('#templates > .faixa').clone();
		$novaFaixa.find('.faixaNum').text(numFaixas + 1);
		$novaFaixa.find('input').each(function() {
			var $input = $(this);
			var nome = $input.attr('name');
			$input.attr('name', `${nome}${numFaixas + 1}`);
			$input.on('input', function() {
				var idx = numFaixas;
				if (!campos.faixas[idx]) campos.faixas[idx] = { };
				campos.faixas[idx][nome] = $(this).val();
				gerarFinal();
			});
		});
		$('#faixas').append($novaFaixa);
		campos.faixas.push({ titulo: '' });
		faixa.habilitaRemover();
		gerarFinal();
	},

	remove: function() {
		$('#faixas .faixa:last').remove();
		campos.faixas.pop();
		faixa.habilitaRemover();
		gerarFinal();
	},

	habilitaRemover: function() {
		$('#remover').prop('disabled', $('#faixas > .faixa').length === 1);
	}
};

function limpar() {
	util.limpar();
	$('input:eq(0)').focus();
}

var campos = { faixas: [] };

function gerarFinal() {
	var linhas = '';
	campos.faixas.forEach(function(f, i) {
		linhas += `\n|título${i + 1} = ${f.titulo}`;
		if (f.nota) linhas += ` |nota${i + 1} = ${f.nota}`;
		if (f.letra) linhas += ` |letra${i + 1} = ${f.letra}`;
		if (f.musica) linhas += ` |música${i + 1} = ${f.musica}`;
	});
	$('#final').text(
		'{{Lista de faixas' +
		linhas +
		'\n}}'
	);
}