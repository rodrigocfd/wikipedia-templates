'use strict';

$(document).ready(function() {
	bind.latLng('latLng');
	$('#limpar').on('click', limpar);
	limpar();
});

var bind = {
	latLng: function(name) {
		$(`input[name=${name}]`).on('input', function() {
			var val = $(this).val();

			function nada() {
				campos.lat = campos.lng = '';
				$('#osm').attr('src', 'about:blank');
				$('#gmapsLnk').text('');
				gerarFinal();
			}

			if (!val) return nada();
			var ll = val.split(',');
			if (ll.length !== 2 || !ll[1]) return nada();
			ll[0] = $.trim(ll[0]);
			ll[1] = $.trim(ll[1]);

			function getDms(decimal) {
				var ret = { dec: decimal, d: 0, m: 0, s: 0 };
				decimal = Math.abs(decimal);
				ret.d = Math.floor(decimal);
				ret.m = Math.floor((decimal % 1) * 60);
				ret.s = (((decimal % 1) * 60) % 1) * 60;
				return ret;
			}
			function floatDig(nFloat, digs) {
				var n = '' + nFloat.toFixed(digs);
				while (n[n.length - 1] === '0') {
					n = n.substr(0, n.length - 1);
				}
				return parseFloat(n);
			}

			campos.lat = getDms(parseFloat(ll[0]));
			campos.lng = getDms(parseFloat(ll[1]));
			campos.lat.s = floatDig(campos.lat.s, 2);
			campos.lng.s = floatDig(campos.lng.s, 2);
			gerarFinal();

			$('#osm').attr('src', 'http://www.openstreetmap.org/export/embed.html?bbox=' +
				`${ll[1]}%2C${ll[0]}%2C` +
				`${ll[1]}%2C${ll[0]}&amp;layer=mapnik`);
			var gmapsLnk = `http://maps.google.com/maps?ll=${ll[0]},${ll[1]}` +
				`&spn=0.01,0.01&q=${ll[0]},${ll[1]}`;
			$('#gmapsLnk').html(`<a target="_blank" href="${gmapsLnk}">${gmapsLnk}</a>`);
		});
	}
};

function limpar() {
	util.limpar();
	$('#osm').attr('src', 'about:blank');
	$('#gmapsLnk').text('');
	$('input:eq(0)').focus();
}

var campos = { };

function gerarFinal() {
	function vl(val) { return val ? val : '' }
	$('#final').text(
		'{{Coor dms' +
		`|${vl(campos.lat.d)}|${vl(campos.lat.m)}|${vl(campos.lat.s)}` +
		`|${vl(campos.lng.d)}|${vl(campos.lng.m)}|${vl(campos.lng.s)}` +
		'|display=title'+
		'}}'
	);
}