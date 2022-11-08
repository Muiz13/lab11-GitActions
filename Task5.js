function Task5(a) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < 10; i++) {
    if (a == array[i]) {
      return true;
    }
  }
  return false;
}

module.exports = Task5;
