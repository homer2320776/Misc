javascript: (function(x) {
	var sku = x.querySelector("#baBreadcrumbTop > li.is-current > em");
	var url = 'https://newegg.com/p/' + sku.innerHTML;
	navigator.clipboard.writeText(url);
	alert('Copied to clipboard\n' + url);
}(document))
