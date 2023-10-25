
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (matrix == '' || matrix == undefined) { return [];} else {
    return matrix.reduce((arr2, c, i) => {c.sort((a, b) => !(i & 1) ? a - b : b - a).map(el => arr2.push(el));
      return arr2;}, [])
    }
  }

