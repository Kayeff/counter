export default function PrimeCheck({ isPrime, count }) {
  return (
    <h1 className="font-Manrope">
      {isPrime(count)
        ? `${count} is a Prime number`
        : `${count} is not a Prime number`}
    </h1>
  );
}
