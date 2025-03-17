import { memo, useState } from "react";
import { twMerge } from "tailwind-merge";

function History({ counter, onClick, selected }) {
  return (
    <li
      className={twMerge(
        "border border-jet/10 font-Switzer",
        selected === counter.id ? "bg-jet/10" : ""
      )}
    >
      <button
        className="cursor-pointer w-full h-full p-1 px-1.5"
        onClick={() => onClick(counter.id)}
      >
        {counter.value}
      </button>
    </li>
  );
}

const CounterHistory = memo(function CounterHistory({ counterList }) {
  const [selected, setSelected] = useState(null);
  function handleClick(id) {
    setSelected(id);
  }

  return (
    <ul className="flex gap-2 items-center justify-center">
      History:
      {counterList.map((counter) => (
        <History
          key={counter.id}
          counter={counter}
          onClick={handleClick}
          selected={selected}
        />
      ))}
    </ul>
  );
});

export default CounterHistory;
