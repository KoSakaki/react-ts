import {useState} from 'react'

export const useStateWithStrage = (init:string, key:string): [string, (s:string) => viod] => {

  const [value, setValue] = useState<string>(localStorage.getItem(key) || init);
  const setValueWithStrage = (nextValue:string):viod => {
    setValue(nextValue);
    localStorage.setItem(key, nextValue);
  }
  return [value, setValueWithStrage];
}