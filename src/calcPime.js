export default function isPrime(number) {
  let prime = true;
  const limit = Math.sqrt(number);

  if (number <= 1) {
    prime = false;
  } else if (number > 1) {
    for (let i = 2; i <= limit; i++) {
      if (number % i === 0) {
        prime = false;
      }
    }
  }

  return prime
    ? `${number} is a Prime number`
    : `${number} is not a Prime number`;
}
