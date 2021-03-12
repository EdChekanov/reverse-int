module.exports = function reverse (n) {
    n = String(n);
    if (n[0] == '-') {
      n = n.slice(1);
    }
    let result = '';
    let i = n.length - 1;
    while (i >= 0) {
        result = result + n[i];
        i--;
    }
    return result;
  }
