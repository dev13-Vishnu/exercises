import React,{useState} from "react";
function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement =() => {
        setCount(count+1);
    }
    const handleReset =() => {
        setCount(0);
    }
    const handleDecrement =() => {
        setCount(count-1);
    }

    return(
        <div className="counter" >
            <p>{count}</p>
            <button
            onClick={handleDecrement}>➖</button>
            <button
            onClick={handleReset}>🔄️</button>
            <button
            onClick={handleIncrement}>➕</button>
        </div>
    )

}

export default Counter;