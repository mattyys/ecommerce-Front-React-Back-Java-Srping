import { useState } from "react";

export const CounterApp = () =>{

    const [counter, setCounter] = useState(1);

    const counterIncrement =() =>{
        setCounter(counter+1);
        
    };
    
    return <>
        <button onClick={counterIncrement}>ingrementas contador +1</button>
        <h2>Contador en {counter}</h2>
    </>
};