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

	poeFoco() {
		this.$tpl.find('input:first').focus();
	}

	_colocaNumero() {
		this.$tpl.find('.faixaNum').text(this.index + 1);
	}

	_setaEventos() {
		this.$tpl.find('input').each((idx, elem) => {
			$(elem).on('input', () => {
				if (this.inputCb) this.inputCb( this._serializaLinha() );
			});
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
	})
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