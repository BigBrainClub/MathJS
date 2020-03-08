/**
 * @module Math
 * @submodule Calculation
 * @for MathJS
 */

 /**
  * Newtonian Method for calculating square root. 
  * 
  * @param {number} val the value to square root
  * @return {number} the (estimate) square root of given number
  * 
  * @computation O(M(n))
  */
function sqrt(val) {
    let x = 1.0;
    let z = 1.0;
    for (let i = 0; i < 10; i++) {
        z = x - (x*x - val) / (2*x); 

        if (z == x)
        {
            return z;
        }

        x = z;
    }

    return x;
}

 module.exports = {
    sqrt: sqrt
 };