import React, {useEffect, useState} from "react";
import useMenuController from "./useMenuController";

const Couter = () => {
  const cities = ["Londyn", "Krakow", "Marcowka", "Franfurkt"];
  const {data, loading, error} = useMenuController()
  console.log({"data": data})

  if(data != null){
    console.log(data.name)
  }
  return (
    <div>
      {loading && <div>Ładowanie strony...</div>}
      {error && (<div>{`Error ${error}`}</div>)}
      {data && (<div>{`miasto: ${data.name}, 
      temperatura: ${data.main.temp} C, 
      odczuwalna: ${data.main.feels_like} C`}</div>)}
    </div>
  );
};

export default Couter;
