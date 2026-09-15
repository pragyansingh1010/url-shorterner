function cleanUrl(value) {
  return value.trim();
}

console.assert(cleanUrl(' https://example.com ') === 'https://example.com');
