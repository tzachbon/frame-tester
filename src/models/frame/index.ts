import { ComponentType } from "react";
import { IIframe } from "react-iframe/types";
import { ValuesType } from "utility-types";

export const ACTIONS = {
  ACTIVE: "ACTIVE",
  FRAME: "FRAME",
};

export const FRAMES = {
  SAFARI: "Safari",
  FACEBOOK: "Facebook",
};

export interface SetFramePayload {
  url: string;
  frame: Frame;
}

export type Frame = ValuesType<typeof FRAMES>;

export interface FrameProps<T = string> {
  Iframe: ComponentType<Omit<IIframe, "url">>;
  state: T;
  frame: string;
  url: string;
}

export interface FramesMap {
  [key: string]: {
    component: ComponentType<FrameProps>;
    name: string;
    states?: Record<string, string>;
    description?: string;
    icon?: string;
  };
}
