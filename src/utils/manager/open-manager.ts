
export default function openManager() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
    chrome.tabs.create({
      url: chrome.runtime.getURL("manager.html"),
    });

  });
}
