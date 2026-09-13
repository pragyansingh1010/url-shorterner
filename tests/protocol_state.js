function protocol(value) {
  try {
    const url = new URL(value);
    return url.protocol;
  } catch {
    return null;
  }
}

console.assert(protocol('https://example.com') === 'https:');
console.assert(protocol('http://example.com') === 'http:');
console.assert(protocol('bad-value') === null);
console.log('URL protocol tests passed');
