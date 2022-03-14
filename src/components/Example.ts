import { useState,useEffect } from "react";

const useCouterController = () => {
    const [ count, setCount ] = useState(0);
    
    useEffect(()=>{
        //ComponentDidMount
        console.log('start');
        return () =>{
            //ComponentWillUnmount
            console.log('die');
        }
    },[])

    useEffect(()=>{
        console.log('countHasChanged');
    },[count])
    
    return {count,setCount}
}