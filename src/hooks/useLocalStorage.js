import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue) {
      return storedValue;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  const handleChange = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(value);
  };
  return [data, handleChange];
};
