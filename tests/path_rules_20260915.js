function hasPath(value) {
  return value.length > 0;
}

console.assert(hasPath('example.com'));
console.assert(!hasPath(''));
