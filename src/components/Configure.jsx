import { useState } from "react";
import Button from "./Button";

export default function Configure({ handleSetCount }) {
  const [enteredCount, setEnteredCount] = useState("");

  function handleChange(event) {
    setEnteredCount(+event.target.value);
  }

  function handleClick() {
    if (enteredCount === "") {
      return;
    }
    handleSetCount(enteredCount);
    setEnteredCount("");
  }

  return (
    <div className="flex items-center justify-center flex-col space-y-2 p-4 font-Manrope">
      <h1 className="text-xl">Configure Counter</h1>
      <div className="flex items-center justify-center gap-1">
        <input
          onChange={handleChange}
          value={enteredCount}
          className="border border-jet outline-0 px-2 py-2"
          placeholder="Enter a value"
          type="number"
        />
        <Button onClick={handleClick}>Set</Button>
      </div>
    </div>
  );
}
