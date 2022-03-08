import { useState } from "react";

export const useStateWithStrage = (init: string, key: string): [string, (s: string) => void] => {
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init);
  const setValueWithStrage = (nextValue: string): void => {
    setValue(nextValue);
    localStorage.setItem(key, nextValue);
  };
  return [value, setValueWithStrage];
};
