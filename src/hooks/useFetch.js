import React, { useState } from 'react';
const useFetch = (url) => {
  const [data,setData] = useState(null);
  React.useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error('Fetch error:', error);
      }
    });
  }, [url]);
  return data;
}

export default useFetch;