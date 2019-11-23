/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  return m ** n;
}

let x = +prompt('Введите x', 0);
let n = +prompt('Введите n', 0);
alert(pow(x, n));