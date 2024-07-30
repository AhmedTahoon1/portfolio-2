import {useState,useEffect} from 'react';
import axios from 'axios';
import usePrevState from './usePrevState';
const useFetchSearch = (dataInput,url,wait=800,...config) => {
  const data = dataInput;
  const [result, setResult] = useState([]);
  const prevTerm = usePrevState(data);

  useEffect(() => {
    const fetching = async () => {
      const res = await axios.get(url, {
        params: {
          config
        },
      });
      setResult(res.data);
    };

    if (!result.length) {
      if (data) {
        fetching();
      }
    } else if (data !== prevTerm) {
      // to wait 1200ms to call api (prevent a lot of requests that not useful)
      const debounceFetch = setTimeout(() => {
        if (data) {
          fetching();
        }
      }, wait);
      return () => {
        clearTimeout(debounceFetch);
      };
    }
  }, [data, result.length, prevTerm,config,url,wait]);

  return result;
}

export default useFetchSearch;