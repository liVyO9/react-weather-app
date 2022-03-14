import { useEffect, useState } from "react";

const useMenuController = () => {
  const API_KEY = "742ab814811c440089a6b39cb3529a04";

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
      );
      if(!result.ok){
        throw new Error(`Status: ${result.status}`)
      }
      const res = await result.json();
      // console.log({ res });
      setData(res)
    } catch (error) {
        setError(error.message)
    } finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    fetchData()
  },[])

  return {data, setData, loading, setLoading, error, setError}
}

export default useMenuController;