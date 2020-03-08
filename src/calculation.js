/**
 * @module Math
 * @submodule Calculation
 * @for MathJS
 */


 /**
  * Simple method for getting positive representation of a number.
  * 
  * @param {Number} val the value to represent as a positive
  * @return {Number} the positive representaton of given number
  */
function abs(val)
{
    return (val < 0 ? -val : val);
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

        if (z == x)
        {
            return z;
        }

        x = z;
    }

    return x;
}

 module.exports = {
    abs: abs,
    sqrt: sqrt
 };