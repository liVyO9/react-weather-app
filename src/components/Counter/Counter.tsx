import React from "react";
import useCounterController from "./useCounterController";

const Couter = () =>{
    const {count, setCount} = useCounterController();

    return(
        <div>
            <span>{count}</span><br/>
            <button onClick={() => {
                setCount(count + 1);
            }}>
                Add ONE
            </button>
        </div>
    )
}


export default Couter;