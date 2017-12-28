'use strict';

$(document).ready(function() {
	bind.campo(['refName', 'url', 'titulo', 'fonte', 'idioma']);
	bind.data(['data', 'acesso']);
	bind.iframe('url', '#pagina');

	$('#data_hoje').on('click', function() { util.setDataHoje('data'); });
	$('#acesso_hoje').on('click', function() { util.setDataHoje('acesso'); });
	$('#limpar').on('click', limpar);
	limpar();
	$('#pagina').hide();
});

var bind = {
	campo: function(names) {
		util.bindInput(campos, names, gerarFinal);
	},

	data: function(names) {
		names.forEach(function(name) {
			$(`input[name^=${name}]`).on('input', function() {
				var d = $(`input[name=${name}_d]`).val();
				var m = $(`input[name=${name}_m]`).val();
				var y = $(`input[name=${name}_y]`).val();
				var meses = ['', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
					'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
				campos[name] = (d ? `${d} de ` : '') + (m ? `${meses[m]} de ` : '') + y;
				gerarFinal();
			});
		});
	},

	iframe: function(name, ifr) {
		$(`input[name=${name}]`).on('input', function() {
			let urlVal = $(this).val().trim();
			$(ifr).attr('src', util.urlBoa(urlVal) ? urlVal : 'about:blank');
			$(ifr).toggle(util.urlBoa(urlVal));
		});
	}
};

function limpar() {
	util.limpar();
	util.setRadioVal('idioma', 0);
	$('input:eq(0)').focus();
}

var campos = { };

function gerarFinal() {
	var refName = campos.refName.trim() ? ` name="${campos.refName.trim()}"` : '';
	function c(name) { return campos[name] ? campos[name].trim() : '' };
	function ifc(txt, name) { return campos[name] ? txt : ''; }
	$('#final').text(
		`<ref${refName}>{{Citar web` +
ifc(` |url=${c('url')}`, 'url') +
ifc(` |titulo=${c('titulo')}`, 'titulo') +
ifc(` |publicado=${c('fonte')}`, 'fonte') +
ifc(` |data=${c('data')}`, 'data') +
ifc(` |acessodata=${c('acesso')}`, 'acesso') +
ifc(` |lingua2=${c('idioma')}`, 'idioma') +
		'}}</ref>'
	);
}