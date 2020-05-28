javascript: (function(x) {
  var asin = x.getElementById('ASIN'),
    url; {
    url = 'https://amzn.com/' + asin.value;
    prompt('Short Amazon URL (Press CTRL+C to copy):', url)
  }
}(document))
