function operation(a, b, op) {
    if (typeof a !== "number" || typeof b !== "number") {
      return false;
    }
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "*") {
      return a * b;
    } else if (op === "/") {
      return a / b;
    } else {
      return false;
    }
  }

console.log(operation(5,15,'/'))
