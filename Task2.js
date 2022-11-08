function Task2(p, j, k) {
  var v = 0;
  for (let i = 0; i < p; i++) {
    if (i % j == 0 || i % k == 0) {
      v = v + i;
    }
  }

  return 0;
}

module.exports = Task2;
