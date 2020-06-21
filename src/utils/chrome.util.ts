import { Chrome } from "../models/chrome.model";

type Callback<T> = (
  value: T,
  sender: chrome.runtime.MessageSender,
  callback: Function
) => any;

type OnRequest<T> = (
  req: Chrome.Request<T>,
  sender: chrome.runtime.MessageSender,
  cb: Function
) => any;

const onRequest = <T>(action, callback: Callback<T>): OnRequest<T> => (
  { payload: extra, action: reqAction }: Chrome.Request<T>,
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
      remove: this.remove.bind(this, action),
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
  }

  private getCallbackByAction(action: A) {
    return this.subscriptions.get(action);
  }
}

// export default class ChromeListener<T = any> {
//   private _callback: Callback<T>;
//   private _value: T;
//   private _listener: (payload: any) => void;
//   private _sendMessage: (action: Chrome.Action, payload: any) => {};

//   public sender: chrome.runtime.MessageSender;

//   constructor(
//     public readonly type: "POPUP" | "CONTENT",
//     private action: Chrome.Action
//   ) {
//     this.initChromeListener(this.action);
//   }

//   private initChromeListener(action: Chrome.Action) {
//     this._listener = (payload) => {
//       this.value = payload;
//     };
//     switch (this.type) {
//       case "POPUP":
//         chrome.extension.onRequest.addListener(
//           onRequest(
//             action,
//             this._listener,
//             this.setSender,
//             this.setSendMessage
//           )
//         );
//         break;

//       case "CONTENT":
//         chrome.runtime.onMessage.addListener(
//           onRequest(
//             action,
//             this._listener,
//             this.setSender,
//             this.setSendMessage
//           )
//         );
//         break;
//     }
//   }

//   private setSender = (sender: chrome.runtime.MessageSender) => {
//     this.sender = sender;
//   };

//   private setSendMessage = (cb: Function) => {
//     this._sendMessage = cb as any;
//   };

//   private setCallback(cb: Callback<T>) {
//     this._callback = cb;
//     if (this._callback) {
//       this._callback(this._value);
//     }
//   }

//   set value(v: T) {
//     this._value = v;
//     if (this._callback) {
//       this._callback(this._value);
//     }
//   }

//   get value() {
//     return this._value;
//   }

//   subscribe(cb: Callback<T>) {
//     this.setCallback(cb);
//     return this;
//   }

//   unsubscribe() {
//     this.setCallback(null);
//   }

//   next(action: Chrome.Action) {
//     this.action = action;
//     chrome.extension.onRequest.removeListener(this._listener);
//     this.initChromeListener(this.action);
//   }

//   sendMessage = <J = T>(payload: J) => {
//     const _req = {
//       action: this.action,
//       payload,
//     };
//     if (this._sendMessage) {
//       this._sendMessage(_req.action, _req.payload);
//     } else {
//       switch (this.type) {
//         case "POPUP":
//           chrome.tabs.query(
//             { active: true, windowType: "normal", currentWindow: true },
//             (tabArray) => {
//               tabArray.forEach((tab) => {
//                 chrome.tabs.sendMessage(tab.id, _req);
//               });
//             }
//           );
//           break;

//         case "CONTENT":
//           chrome.extension.sendRequest(_req);
//           break;
//       }
//     }
//   };
// }
