import { useState, useEffect } from "react";
import axios from "axios";
function useFetch(url) {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setDatas(null);
    setError(null);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        res && setDatas(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Awkward..", err);
      });
  }, [url]);

  return { datas, loading, error };
}

export default useFetch;
