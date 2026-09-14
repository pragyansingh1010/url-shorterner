function validUrl(url) {
  return typeof url === 'string' && url.trim().length > 0;
}

console.assert(validUrl('https://example.com'));
console.assert(validUrl('a'));
console.assert(!validUrl(''));
console.assert(!validUrl('   '));
console.log('URL input rules passed');
