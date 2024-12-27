import { useState } from "react";
import Button from "./Button.jsx";

export default function Counter() {
    const [count, setCount] = useState(0);
    
    function handleIncr(){
        setCount(count => count+1);
    }
    
    function handleReset(){
        setCount(0);
    }

    function handleDecr(){
        setCount(count => count-1);
    }

  return (
    <div className="flex items-center justify-center flex-col space-y-4">
        <h1 className="font-Stardom font-medium text-6xl">{count}</h1>
        <div className="flex items-center justify-center space-x-2">
            <Button onClick={handleIncr}>+1</Button>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleDecr}>-1</Button>
        </div>
    </div>
  )
}
