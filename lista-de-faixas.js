'use strict';

$(document).ready(() => {
	criaFaixa();
	$('[name=fechado]').on('change', setaFechado);
	$('[name=tituloTopo]').on('input', setaTituloTopo);
	$('#adicionar').on('click', criaFaixa);
	$('#remover').on('click', removeUltimaFaixa);
});

class Faixa {
	constructor() {
		this.index = $('#faixas > .faixa').length;
		this.$tpl = $('#templates > .faixa').clone();
		this.inputCb = null;
		this.acimaCb = null;
		this._colocaNumero();
		this._setaEventos();
		this._adicionaNaPagina('#faixas');
	}

	deleta() {
		this.$tpl.remove();
	}

	onInput(cb) {
		this.inputCb = cb;
		this.inputCb( this._serializaLinha() );
	}

	onAcima(cb) {
		this.acimaCb = cb;
	}

	poeFoco() {
		this.$tpl.find('input:first').focus();
	}

	trocaValores(outraFaixa) {
		let outros = [];
		outraFaixa.$tpl.find('input').each((idx, elem) => outros.push($(elem).val()) );
		this.$tpl.find('input').each((idx, elem) => {
			let $elem = $(elem);
			let nome = $elem.attr('name');
			outraFaixa.$tpl.find(`[name=${nome}]`).val($elem.val());
			$elem.val(outros[idx]);
		});
		this.$tpl.find('input:first').trigger('input');
		outraFaixa.$tpl.find('input:first').trigger('input');
	}

	_colocaNumero() {
		this.$tpl.find('.faixaNum').text(this.index + 1);
		this.$tpl.find('[name=acima]').toggle(this.index > 0);
	}

	_setaEventos() {
		this.$tpl.find('input').each((idx, elem) => {
			$(elem).on('input', () => {
				if (this.inputCb) this.inputCb( this._serializaLinha() );
			});
		});

		this.$tpl.find('[name=acima]').on('click', () => {
			if (this.acimaCb) this.acimaCb();
		});
	}

	_adicionaNaPagina(onde) {
		$(onde).append(this.$tpl);
		this.poeFoco();
	}

	_serializaLinha() {
		let num = this.index + 1;
		let ret = '';
		let pegaCampo = (campo, k) => {
			let val = this.$tpl.find(`[name=${campo}]`).val().trim();
			if (val) ret += `|${k}${num}=${val} `;
		};
		pegaCampo('titulo', 'título');
		pegaCampo('nota', 'nota');
		pegaCampo('letra', 'letra');
		pegaCampo('musica', 'música');

		let min = this.$tpl.find('[name=duracao_m]').val();
		let sec = this.$tpl.find('[name=duracao_s]').val();
		if (min && sec) ret += `|duração${num}=${min}:${sec} `;

		return ret.substr(0, ret.length - 1);
	}
}

let campos = {
	fechado: false,
	tituloTopo: '',
	faixas: [],
	serializado: []
};

function setaFechado() {
	campos.fechado = $('[name=fechado]').prop('checked');
	geraFinal();
}

function setaTituloTopo() {
	campos.tituloTopo = $('[name=tituloTopo]').val().trim();
	geraFinal();
}

function criaFaixa() {
	let novaFaixa = new Faixa();
	novaFaixa.onInput((linha) => {
		campos.serializado[novaFaixa.index] = linha;
		geraFinal();
	});
	novaFaixa.onAcima((index) => {
		novaFaixa.trocaValores(campos.faixas[novaFaixa.index - 1]);
	});
	campos.faixas.push(novaFaixa);
	$('#remover').prop('disabled', campos.faixas.length === 1);
}

function removeUltimaFaixa() {
	campos.faixas.last().deleta();
	campos.faixas.pop();
	campos.serializado.pop();
	campos.faixas.last().poeFoco();
	$('#remover').prop('disabled', campos.faixas.length === 1);
	geraFinal();
}

function geraFinal() {
	let linhas = '';
	campos.serializado.forEach((linha) => {
		linhas += `\n${linha}`;
	});
	$('#final').text(
		'{{Lista de faixas' +
		(campos.fechado ? '\n|fechado=sim' : '') +
		(campos.tituloTopo ? `\n|topo=${campos.tituloTopo}` : '') +
		linhas +
		'\n}}'
	);
}