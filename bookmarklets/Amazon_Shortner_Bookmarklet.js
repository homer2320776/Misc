javascript:(function(x){var asin = x.getElementById('ASIN');var url='https://amzn.com/'+asin.value;navigator.clipboard.writeText(url);alert('Copied to clipboard\n'+url);}(document))
