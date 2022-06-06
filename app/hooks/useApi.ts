// libs
import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    // console.log("Res:", response);

    setLoading(false);
    setError(!response);
    setData(response);
    return response;
  };
  return { data, error, loading, request };
};
export default useApi;
