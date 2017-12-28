'use strict';

$(document).ready(() => {
	criaFaixa();
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
			if (val) ret += `|${k}${num} = ${val} `;
		};
		pegaCampo('titulo', 'título');
		pegaCampo('nota', 'nota');
		pegaCampo('letra', 'letra');
		pegaCampo('musica', 'música');
		return ret.substr(0, ret.length - 1);
	}
}

let faixas = [];
let serializado = [];

function criaFaixa() {
	let novaFaixa = new Faixa();
	novaFaixa.onInput((linha) => {
		serializado[novaFaixa.index] = linha;
		geraFinal();
	})
	faixas.push(novaFaixa);
	$('#remover').prop('disabled', faixas.length === 1);
}

function removeUltimaFaixa() {
	let ultima = faixas.pop();
	ultima.deleta();
	serializado.pop();
	faixas[faixas.length - 1].poeFoco();
	$('#remover').prop('disabled', faixas.length === 1);
	geraFinal();
}

function geraFinal() {
	var linhas = '';
	serializado.forEach((linha) => {
		linhas += `\n${linha}`;
	});
	$('#final').text(
		'{{Lista de faixas' +
		linhas +
		'\n}}'
	);
}