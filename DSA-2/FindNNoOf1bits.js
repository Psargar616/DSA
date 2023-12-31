/**
 * Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 

Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
 */

// soln 1:

// Function to count the number of set bits (1s) in the binary representation of an unsigned 32-bit integer
function hammingWeight(n) {
  let count = 0; // Initialize a counter to store the count of set bits

  // Loop through each bit of the number until the entire number becomes 0
  while (n != 0) {
    // Check if the least significant bit (LSB) is set (equal to 1) using bitwise AND operation
    if (n & 1) {
      count++; // If the LSB is set, increment the count
    }
    n = n >> 1; // Right shift the number by one bit to check the next bit
  }
  return count; // Return the total count of set bits in the given number
}

// Approach 2

// In each iteration, we use the bitwise AND operation n & (n - 1) to clear the rightmost set bit.
// We count the number of iterations until n becomes 0, and that count is the set bit count.
// Let's apply the Hamming Weight algorithm step by step:

// Initial state: 10110101, set bit count = 0
// After the 1st iteration: 10110100, set bit count = 1
// After the 2nd iteration: 10110000, set bit count = 2
// After the 3rd iteration: 10100000, set bit count = 3
// After the 4th iteration: 10000000, set bit count = 4
// After the 5th iteration: 00000000, set bit count = 5
// The final set bit count is 5, and that's the number of '1' bits in the binary representation of 10110101.

var hammingWeight = function (n) {
  let setBitCount = 0;
  while (n !== 0) {
    n &= n - 1;
    setBitCount++;
  }
  return setBitCount;
};
