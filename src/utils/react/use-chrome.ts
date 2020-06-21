import { useCallback, useEffect, useState, useRef } from "react";
import { ChromeListener } from "../../models/chrome.model";

export const useChromeStorage = <T = any>(key: string, { timeout = 5000 }) => {
  const [item, setItem] = useState<T>(null);
  const storage = chrome.storage.sync;

  const unmounted = useRef(false);
  useEffect(() => () => (unmounted.current = true), []);
  useCallback(() => {
    storage.get(
      key,
      (obj) => !unmounted.current && item !== obj[key] && setItem(obj[key])
    );
  }, [item]);

  const setLocalItem = (value: T) =>
    new Promise((res, rej) => {
      const timeoutRef = setTimeout(() => rej, timeout);

      storage.set({ [key]: value }, () => {
        clearTimeout(timeoutRef);
        setItem(value);
        res(value);
      });
    });

  const removeLocalItem = () =>
    new Promise((res, rej) => {
      const timeoutRef = setTimeout(() => rej, timeout);
      
      storage.remove(key, () => {
        clearTimeout(timeoutRef);
        setItem(null);
        res();
      });
    });

  return { item, setItem: setLocalItem, removeItem: removeLocalItem };
};

export const useChromeListener = () => {
  const [chromeListener] = useState(new ChromeListener());

  return chromeListener;
};
