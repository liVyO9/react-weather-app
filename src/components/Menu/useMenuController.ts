import { useEffect, useState } from "react";

const CITIES = ["London", "Chicago"];
const API_KEY = "742ab814811c440089a6b39cb3529a04";

const fetchData = async (city: string) => {
  const result = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  if (!result.ok) {
    throw new Error(`Status: ${result.status}`);
  }
  const res = await result.json();
  return res;
};

const useMenuController = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getDataForAllCities = async () => {
    setLoading(true)
    const cityPromises = CITIES.map((city) => {
      return fetchData(city);
    });
    const result = await Promise.all(cityPromises)
    setData(result)
    setLoading(false)
  };

  useEffect(() => {
    getDataForAllCities();
  }, []);

  return { data, setData, loading, setLoading, error, setError };
};

export default useMenuController;
