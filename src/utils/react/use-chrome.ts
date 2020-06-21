import { useCallback, useEffect, useState, useRef } from "react";
import { ChromeListener } from "../../models/chrome.model";

export const useChromeStorage = <T = any>(
  key: string,
  { timeout = 5000 } = { timeout: 5000 }
) => {
  const [item, setItem] = useState<T>(null);
  const [itemLoaded, setItemLoaded] = useState(false);
  const storage = chrome.storage.sync;
  const unmounted = useRef(false);

  useEffect(() => {
    storage.get(key, (obj) => {
      if (!unmounted.current) {
        setItem(obj[key]);
        setItemLoaded(true);
      }
    });
    return () => (unmounted.current = true);
  }, []);

  const setLocalItem = (value: T) =>
    new Promise((res, rej) => {
      const timeoutRef = setTimeout(() => rej, timeout);

      storage.set({ [key]: value }, () => {
        if (unmounted.current) {
          return rej();
        }

        clearTimeout(timeoutRef);
        setItem(value);
        res(value);
      });
    });

  const removeLocalItem = () =>
    new Promise((res, rej) => {
      const timeoutRef = setTimeout(() => rej, timeout);

      storage.remove(key, () => {
        if (unmounted.current) {
          return rej();
        }

        clearTimeout(timeoutRef);
        setItem(null);
        res();
      });
    });

  return {
    item,
    setItem: setLocalItem,
    removeItem: removeLocalItem,
    itemLoaded,
  };
};

export const useChromeListener = () => {
  const [chromeListener] = useState(new ChromeListener());

  return chromeListener;
};
