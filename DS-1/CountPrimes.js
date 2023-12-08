/*
Problem Description
Count the number of prime numbers less than a non-negative number, n.

Input format
Single line containing one integer N

Output format
Single line containing one number denoting the number of prime numbers less than N

Sample Input 1
10

Sample Output 1
4

Explanation
There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */

function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

function countPrimes(n) {
  let count = 0;
  let primes = []
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
        primes.push(i)
       count++;
    }
  }
  console.log(primes)
  return count;
}

let result = countPrimes(10)
console.log("Number of prime numbers between 0 to 10 is : ",result)