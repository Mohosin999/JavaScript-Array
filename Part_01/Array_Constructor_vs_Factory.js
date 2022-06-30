/**
 * Initialize Array - Constructor vs Factory
 */

// Constructor Pattern
const a1 = new Array(); // []

const a2 = new Array(5);

const a3 = new Array(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5] Literal will do the same work


// Factory Pattern
const b1 = Array(); // []

const b2 = Array(5);

const b3 = Array(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5] Literal will do the same work