function cleanUrl(value) {
  return value.trim();
}

console.assert(cleanUrl(' https://example.com ') === 'https://example.com');
console.assert(cleanUrl('example.com') === 'example.com');
console.assert(cleanUrl('   ') === '');
console.log('URL trimming passed');
