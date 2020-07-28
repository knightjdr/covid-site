import React, { useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [fetching, setFetchingState] = React.useState(true);
  const [response, setResponse] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
      setFetchingState(false);
    };
    fetchData();
  }, []);

  return {
    fetching,
    response,
  };
};

export default useFetch;
