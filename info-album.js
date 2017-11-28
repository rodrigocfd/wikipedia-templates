'use strict';

$(document).ready(function() {
	bind.campo(['nome', 'tipo', 'gravado', 'estudio', 'genero', 'gravadora', 'produtor']);
	bind.wikiLnk(['artista', 'idioma']);
	bind.dataDeInicio(['lancado']);
	bind.duracao(['duracao']);
	bind.outroAlbum(['ultimoalbum', 'proximoalbum']);

	$('#limpar').on('click', limpar);
	limpar();
});

var bind = {
	campo: function(names) {
		$.each(names, function(i, name) {
			$(`input[name=${name}]`).on('change input', function() {
				campos[name] = $(this).val();
				gerarFinal();
			});
		});
	},

	wikiLnk: function(names) {
		$.each(names, function(i, name) {
			$(`input[name=${name}]`).on('change input', function() {
				var val = $(this).val();
				campos[name] = val ? `[[${val}]]` : '';
				gerarFinal();
			});
		});
	},

	dataDeInicio: function(names) {
		$.each(names, function(i, name) {
			$(`input[name^=${name}]`).on('input', function() {
				var d = $(`input[name=${name}_d]`).val();
				var m = $(`input[name=${name}_m]`).val();
				var y = $(`input[name=${name}_y]`).val();
				campos[name] = (d || m || y) ?
					`{{Data de início|${d}|${m}|${y}}}` : '';
				gerarFinal();
			});
		});
	},

	duracao: function(names) {
		$.each(names, function(i, name) {
			$(`input[name^=${name}]`).on('input', function() {
				var m = $(`input[name=${name}_m]`).val();
				var s = $(`input[name=${name}_s]`).val();
				campos[name] = (m && s) ?
					`{{Duração|m=${m}|s=${s}}}` : '';
				gerarFinal();
			});
		});
	},

	outroAlbum: function(names) {
		$.each(names, function(i, name) {
			$(`input[name^=${name}]`).on('input', function() {
				var a = $(`input[name=${name}]`).val();
				var y = $(`input[name=${name}_ano]`).val();
				campos[name] = '';
				if (a) {
					campos[name] = `''[[${a}]]''`;
					if (y) {
						campos[name] += `<br/>([[${y}]])`;
					}
				}
				gerarFinal();
			});
		});
	}
};

function limpar() {
	ctrl.limpar();
	$('input:eq(0)').focus();
	ctrl.defRadio('tipo', 0);
	ctrl.defRadio('idioma', 0);
}

var campos = { };

function gerarFinal() {
	function c(name) { return campos[name] ? $.trim(campos[name]) : '' };
	$('#final').text(
		'{{Info/Álbum\n' +
		`|nome          = ${c('nome')}\n` +
		`|tipo          = ${c('tipo')}\n` +
		`|artista       = ${c('artista')}\n` +
		`|lançado       = ${c('lancado')}\n` +
		`|gravado       = ${c('gravado')}\n` +
		`|estúdio       = ${c('estudio')}\n` +
		`|gênero        = ${c('genero')}\n` +
		`|duração       = ${c('duracao')}\n` +
		`|idioma        = ${c('idioma')}\n` +
		`|gravadora     = ${c('gravadora')}\n` +
		`|produtor      = ${c('produtor')}\n` +
		`|último álbum  = ${c('ultimoalbum')}\n` +
		`|próximo álbum = ${c('proximoalbum')}\n` +
		'}}'
	);
}