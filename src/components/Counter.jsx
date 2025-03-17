import { useMemo, useCallback, useEffect, useState } from "react";
import Button from "./Button.jsx";
import CounterOutput from "./CounterOutput.jsx";
import isPrime from "../calcPime.js";
import CounterHistory from "./CounterHistory.jsx";

export default function Counter({ initialCount }) {
  const [counterChanges, setCounterChanges] = useState([
    { value: initialCount, id: Math.random() * 10000 },
  ]);
  const counterValue = counterChanges.reduce((a, c) => a + c.value, 0);
  const countIsPrime = useMemo(() => isPrime(counterValue), [counterValue]);

  const handleDecr = useCallback(function handleDecr() {
    // setCount((prevCount) => prevCount - 1);
    setCounterChanges((prev) => [
      { id: Math.random() * 1000, value: -1 },
      ...prev,
    ]);
  }, []);

  const handleIncr = useCallback(function handleIncr() {
    // setCount((prevCount) => prevCount + 1);
    setCounterChanges((prev) => [
      { id: Math.random() * 1000, value: 1 },
      ...prev,
    ]);
  }, []);

  const handleReset = useCallback(function handleReset() {
    // setCount(0);
    setCounterChanges([{ id: Math.random() * 1000, value: 0 }]);
  }, []);

  useEffect(() => {
    setCounterChanges((prev) => [
      { value: initialCount, id: Math.random() * 1000 },
      ...prev,
    ]);
  }, [initialCount]);

  return (
    <div className="flex items-center justify-center flex-col space-y-4">
      <CounterOutput count={counterValue} />
      <div className="flex items-center justify-center space-x-2">
        <Button onClick={handleIncr}>+1</Button>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleDecr}>-1</Button>
      </div>
      <h1 className="font-Manrope">{countIsPrime}</h1>
      <CounterHistory counterList={counterChanges} />
    </div>
  );
}
