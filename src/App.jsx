import { useState } from "react";
import Counter from "./components/Counter";
import Configure from "./components/Configure";

export default function App() {
  const [count, setCount] = useState(0);

  function handleSetCount(enteredCount) {
    setCount(enteredCount);
  }

  return (
    <main className="w-full min-h-screen bg-cosmic-latte text-jet flex items-center justify-center flex-col">
      <Configure handleSetCount={handleSetCount} />
      <div className="w-full flex items-center justify-center p-4">
        <Counter newCount={count} />
      </div>
    </main>
  );
}
