'use strict';

$(document).ready(function() {
	bind.campo(['nome', 'tipo', 'gravado', 'estudio', 'genero', 'gravadora', 'produtor']);
	bind.wikiLnk(['artista', 'idioma']);
	bind.dataDeInicio(['lancado']);
	bind.duracao(['duracao']);
	bind.outroAlbum(['ultimoalbum', 'proximoalbum']);

	$('#lancado_hoje').on('click', function() { util.setDataHoje('lancado'); });
	$('#limpar').on('click', limpar);
	limpar();
});

var bind = {
	campo: function(names) {
		util.bindInput(campos, names, gerarFinal);
	},

	wikiLnk: function(names) {
		util.bindInputWikiLnk(campos, names, gerarFinal);
	},

	dataDeInicio: function(names) {
		names.forEach(function(name) {
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
		names.forEach(function(name) {
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
		names.forEach(function(name) {
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
	util.limpar();
	util.setRadioVal('tipo', 0);
	util.setRadioVal('idioma', 0);
	$('input:eq(0)').focus();
}

var campos = { };

function gerarFinal() {
	function c(name) { return campos[name] ? campos[name].trim() : '' };
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