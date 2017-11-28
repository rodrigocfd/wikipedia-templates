'use strict';

$(document).ready(function() {
	bind.campo(['nome', 'nome_nat', 'imagem', 'imagem_tam', 'imagem_leg', 'nome_com',
		'pseudonimo', 'nascimento_loc', 'nacionalidade', 'etnia', 'morte_loc', 'morte_cau',
		'residencia', 'ocupacao', 'alma', 'conhecido', 'mae', 'pai', 'conjuge', 'filhos',
		'website']);
	bind.datasNascimentoMorte('nascimento', 'morte');

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

	datasNascimentoMorte: function(nasName, morName) {
		$(`input[name^=${nasName}], input[name^=${morName}]`).on('input', function() {
			var nas = {
				d: $(`input[name=${nasName}_d]`).val(),
				m: $(`input[name=${nasName}_m]`).val(),
				y: $(`input[name=${nasName}_y]`).val()
			};
			var mor = {
				d: $(`input[name=${morName}_d]`).val(),
				m: $(`input[name=${morName}_m]`).val(),
				y: $(`input[name=${morName}_y]`).val()
			};
			var nasDmy = (nas.d || nas.m || nas.y) ?
				`|${nas.d}|${nas.m}|${nas.y}` : '';
			var semIdade = mor.y ? '|sem idade' : '';
			campos[nasName] = nasDmy ?
				`{{dni|${nasDmy}${semIdade}}}` : '';
			campos[morName] = (mor.d || mor.m || mor.y) ?
				`{{morte|${mor.d}|${mor.m}|${mor.y}${nasDmy}}}` : '';
			gerarFinal();
		});
	}
};

function limpar() {
	ctrl.limpar();
	$('input:eq(0)').focus();
}

var campos = { };

function gerarFinal() {
	function c(name) { return campos[name] ? $.trim(campos[name]) : ''; }
	function ifc(txt, name) { return campos[name] ? txt : ''; }
	$('#final').text(
		'{{Info/Biografia\n' +
		`|nome             = ${c('nome')}\n` +
ifc(`|nome_nativo      = ${c('nome_nat')}\n`, 'nome_nat') +
		`|imagem           = ${c('imagem')}\n` +
		`|imagem_tamanho   = ${c('imagem_tam')}\n` +
		`|imagem_legenda   = ${c('imagem_leg')}\n` +
		`|nome_completo    = ${c('nome_com')}\n` +
ifc(`|pseudônimo       = ${c('pseudonimo')}\n`, 'pseudonimo') +
		`|nascimento_data  = ${c('nascimento')}\n` +
		`|nascimento_local = ${c('nascimento_loc')}\n` +
		`|nacionalidade    = ${c('nacionalidade')}\n` +
ifc(`|etnia            = ${c('etnia')}\n`, 'etnia') +
		`|morte_data       = ${c('morte')}\n` +
ifc(`|morte_local      = ${c('morte_loc')}\n`, 'morte_loc') +
ifc(`|morte_causa      = ${c('morte_cau')}\n`, 'morte_cau') +
ifc(`|residência       = ${c('residencia')}\n`, 'residencia') +
ifc(`|ocupação         = ${c('ocupacao')}\n`, 'ocupacao') +
ifc(`|alma_mater       = ${c('alma')}\n`, 'alma') +
ifc(`|conhecido        = ${c('conhecido')}\n`, 'conhecido') +
ifc(`|nome_mãe         = ${c('mae')}\n`, 'mae') +
ifc(`|nome_pai         = ${c('pai')}\n`, 'pai') +
ifc(`|cônjuge          = ${c('conjuge')}\n`, 'conjuge') +
ifc(`|filhos           = ${c('filhos')}\n`, 'filhos') +
ifc(`|website          = ${c('website')}\n`, 'website') +
		'}}'
	);
}