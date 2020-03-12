/**
 * @module Calculation
 * @for MathJS
 */

 /**
  * Simple method for getting positive representation of a number.
  * 
  * @param {Number} val the value to represent as a positive
  * @return {Number} the positive representaton of given number
  * 
  * @computation O(1)
  */
function abs(val) {
    return (val < 0 ? -val : val);
}

/**
 * Method to evaluate base^exp.
 * 
 * @param {Number} base base value
 * @param {Number} exp exponent value
 * @return {Number} the result y of y = b^x
 * 
 * @computation O(log(n)) where n = exp
 */
function pow(base, exp) {
    if (Math.floor(exp) == 0) {
        return 1;
    }

    let result = pow(base, exp / 2);

    if (exp & 1) {
        return base * result * result;
    }
    else {
        return result * result;
    }
}

 /**
  * Newtonian Method for calculating square root. 
  * 
  * @param {Number} val the value to square root
  * @return {Number} the (estimate) square root of given number
  * 
  * @computation O(M(n))
  */
function sqrt(val) {
    let x = 1.0;
    let z = 1.0;
    for (let i = 0; i < 10; i++) {
        z = x - (x*x - val) / (2*x); 

        if (z == x) {
            return z;
        }

        x = z;
    }

    return x;
}

 module.exports = {
    abs: abs,
    pow: pow,
    sqrt: sqrt
 };