import { Frame, ACTIONS } from "../../models/frame";

export const setFrame = (frame: Frame, addUrl = true) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    const url = activeTab.url;

    chrome.storage.sync.set({
      [ACTIONS.FRAME]: {
        frame,
        url: addUrl ? url : null,
      },
    });
    chrome.tabs.create({
      url: chrome.runtime.getURL("manager.html"),
    });
  });
};
