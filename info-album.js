'use strict';

$(document).ready(function() {
	campo(['nome', 'tipo', 'gravado', 'estudio', 'genero', 'gravadora', 'produtor']);
	wikiLnk(['artista', 'idioma']);
	dataDeInicio(['lancado']);
	duracao(['duracao']);
	outroAlbum(['ultimoalbum', 'proximoalbum']);

	defRadio('tipo', 0);
	defRadio('idioma', 0);
});

function campo(names) {
	$.each(names, function(i, name) {
		$('input[name='+name+']').on('input', function() {
			$('#out_'+name).text($(this).val());
		});
	});
}

function wikiLnk(names) {
	$.each(names, function(i, name) {
		$('input[name='+name+']').on('input', function() {
			var val = $(this).val();
			$('#out_'+name).text(val ? '[['+val+']]' : '');
		});
	});
}

function dataDeInicio(names) {
	$.each(names, function(i, name) {
		$('input[name^='+name+']').on('input', function() {
			var d = $('input[name='+name+'_d]').val();
			var m = $('input[name='+name+'_m]').val();
			var y = $('input[name='+name+'_y]').val();
			$('#out_'+name).text(d || m || y ?
				'{{Data de início|'+d+'|'+m+'|'+y+'}}' : '');
		});
	});
}

function duracao(names) {
	$.each(names, function(i, name) {
		$('input[name^='+name+']').on('input', function() {
			var m = $('input[name='+name+'_m]').val();
			var s = $('input[name='+name+'_s]').val();
			$('#out_'+name).text(m && s ?
				'{{Duração|m='+m+'|s='+s+'}}' : '');
		});
	});
}

function outroAlbum(names) {
	$.each(names, function(i, name) {
		$('input[name^='+name+']').on('input', function() {
			var a = $('input[name='+name+']').val();
			var y = $('input[name='+name+'_ano]').val();
			var out = '';
			if (a) {
				out = "''[["+a+"]]''";
				if (y) {
					out += '<br/>([['+y+']])';
				}
			}
			$('#out_'+name).text(out);
		});
	});
}

function defRadio(name, pos) {
	$('input[name='+name+']:eq('+pos+')')
		.prop('checked', true)
		.trigger('input');
}