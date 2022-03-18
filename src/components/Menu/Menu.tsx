import React from "react";
import useMenuController from "./useMenuController";

const Couter = () => {
  const {data, loading, error} = useMenuController()
  
  console.log({"data": data})

  return (
    <div>
      {loading && <div>Ładowanie strony...</div>}
      {error && (<div>{`Error ${error}`}</div>)}
      {data && (<div>{`miasto: ${data[0].name}, 
      temperatura: ${(data[0].main.temp -273.15).toFixed(1)}  C, 
      odczuwalna: ${(data[0].main.feels_like -273.15).toFixed(1)} C`}</div>)}
    </div>
  );
};

export default Couter;
