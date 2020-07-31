export const isChromeExtension = (url: string) =>
  url.includes("chrome-extension");

export const getFrameFromStorage = (key: string, callback: Function) => {
  let isCalled = false;
  chrome.storage.sync.get((items) => {
    if (isCalled) return;

    callback(items[key]);
    isCalled = true;
  });
};

export const listenToFrameChange = (key: string, callback: Function) => {
  const func = (items) => callback(items[key]?.newValue);
  chrome.storage.onChanged.addListener(func);

  return {
    unsubscribe: () => chrome.storage.onChanged.removeListener(func),
  };
};
