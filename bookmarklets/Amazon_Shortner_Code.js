javascript: (function(x) {
	var asin = x.getElementById('ASIN');
	var url = 'https://amzn.com/dp/' + asin.value;
	navigator.clipboard.writeText(url);
	alert('Copied to clipboard\n'+url);
}(document))
