import { useCallback, useEffect, useState } from "react";
import Button from "./Button.jsx";
import CounterOutput from "./CounterOutput.jsx";
import PrimeCheck from "./PrimeCheck.jsx";

function isPrime(number) {
  let prime = true;
  if (number === 0 || number === 1) {
    prime = false;
  } else if (number > 1) {
    for (let i = 2; i <= number / 2; i++) {
      if (number % i === 0) {
        prime = false;
      }
    }
  }

  return prime;
}

export default function Counter({ newCount }) {
  const [count, setCount] = useState(newCount);

  const handleDecr = useCallback(function handleDecr() {
    setCount((prevCount) => prevCount - 1);
  }, []);
  const handleIncr = useCallback(function handleIncr() {
    setCount((prevCount) => prevCount + 1);
  }, []);
  const handleReset = useCallback(function handleReset() {
    setCount(0);
  }, []);

  useEffect(() => {
    setCount(newCount);
  }, [newCount]);

  return (
    <div className="flex items-center justify-center flex-col space-y-4">
      <CounterOutput count={count} />
      <div className="flex items-center justify-center space-x-2">
        <Button onClick={handleIncr}>+1</Button>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleDecr}>-1</Button>
      </div>
      <PrimeCheck isPrime={isPrime} count={count} />
    </div>
  );
}
