import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
  const isMount = useRef(true);
  useEffect(() => {
    return () => {
      isMount.current = false;
    };
  }, []);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMount.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);
  return state;
};
