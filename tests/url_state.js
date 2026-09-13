function validUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

console.assert(validUrl('https://example.com'));
console.assert(!validUrl('not-a-url'));
console.assert(!validUrl(''));
console.log('URL validation tests passed');
