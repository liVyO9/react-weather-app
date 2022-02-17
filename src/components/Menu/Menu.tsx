import React from "react";
import useMenuController from "./useMenuController";

const Couter = () => {
  const { count, setCount } = useMenuController();
  const cities = ["Londyn", "Krakow", "Marcowka", "Franfurkt"];
  const API_KEY = "742ab814811c440089a6b39cb3529a04";

  (async () => {
    try {
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
      );
      console.log({ result });
      const res = await result.json();
      console.log({ res });
    } catch (error) {
      console.error({ error });
    }
  })();

  return (
    <div>
      
    </div>
  );
};

export default Couter;
