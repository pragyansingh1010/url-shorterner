function hasProtocol(url) {
  return /^https?:\/\//i.test(url);
}

console.assert(hasProtocol('https://example.com'));
console.assert(hasProtocol('http://example.com'));
console.assert(!hasProtocol('example.com'));
console.log('URL protocol rules passed');
