function power(a, b) {
  return Math.pow(a, b);
}

function round(b) {
  var v = Math.round(b);
  return v;
}

function ceiling(b) {
  var v = Math.ceil(b);
  return v;
}

module.exports = {
  power: power,
  round: round,
  ceiling: ceiling,
};
