
String.prototype.format = function() { // https://stackoverflow.com/a/4673436/6923555
	var args = arguments;
	var iArg = -1;
	return this.replace(/(%s|%d)/g, function(match, number) {
		return args[++iArg] !== undefined ? args[iArg] : match;
	});
};