
type Callback<T> = (
  value: T,
  sender: chrome.runtime.MessageSender,
  callback: Function
) => any;

type OnRequest<T> = (
  req: any,
  sender: chrome.runtime.MessageSender,
  cb: Function
) => any;

const onRequest = <T>(action, callback: Callback<T>): OnRequest<T> => (
  { payload: extra, action: reqAction }: any,
  sender: chrome.runtime.MessageSender,
  cb: Function
) => {
  if (action == reqAction && callback) {
    callback(extra, sender, cb);
  }
};

export default class ChromeListener<T = any, A = string> {
  private subscriptions = new Map<A, OnRequest<any>>();

  static isChromeExtension() {
    return !!window.location.href.includes("chrome-extension");
  }

  on<J = T>(action: A, callback: Callback<J>) {
    this.subscriptions.set(action, onRequest(action, callback));
    this.addSubscription(action);

    return {
      remove: () => this.remove(action),
    };
  }

  remove(action: A) {
    this.removeSubscription(action);
  }

  send<J = T>(action: A, payload: J) {
    const request = { action, payload };

    if (ChromeListener.isChromeExtension()) {
      chrome.tabs.query(
        { active: true, windowType: "normal", currentWindow: true },
        (tabArray) => {
          tabArray.forEach((tab) => {
            chrome.tabs.sendMessage(tab.id, request);
          });
        }
      );
    } else {
      chrome.extension.sendRequest(request);
    }
  }

  private addSubscription(action: A) {
    const callback = this.getCallbackByAction(action);
    chrome.extension.onRequest.addListener(callback);
    chrome.runtime.onMessage.addListener(callback);
  }

  private removeSubscription(action: A) {
    const callback = this.getCallbackByAction(action);
    chrome.extension.onRequest.removeListener(callback);
    chrome.runtime.onMessage.removeListener(callback);
    this.subscriptions.delete(action);
  }

  private getCallbackByAction(action: A) {
    return this.subscriptions.get(action);
  }
}
