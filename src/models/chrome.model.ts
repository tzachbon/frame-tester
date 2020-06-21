import ChromeListener from '../utils/chrome.util';

export { ChromeListener }

export namespace Chrome {
    export type Action = 'message' | 'scan' | 'showFrame'

    export interface Message<T> extends Request<T> {

    }

    export interface Request<T = any> {
        action: Action;
        payload: T
    }

}