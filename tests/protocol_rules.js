function normalizeUrl(value) {
  if (!/^https?:\/\//i.test(value)) return `https://${value}`;
  return value;
}

console.assert(normalizeUrl('example.com') === 'https://example.com');
console.assert(normalizeUrl('https://example.com') === 'https://example.com');
console.assert(normalizeUrl('http://example.com') === 'http://example.com');
console.log('URL protocol rules passed');
