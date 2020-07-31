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

export interface FrameProps {
  Iframe: ComponentType<Omit<IIframe, "url">>;
  state: FramesStates;
  frame: string;
  url: string;
}

export interface FramesStates {
  id: string;
  name?: string;
  description?: string;
}

export interface MappedFrame {
  component: ComponentType<FrameProps>;
  name: string;
  states?: FramesStates[];
  description?: string;
  icon?: string;
}

export interface FramesMap {
  [key: string]: MappedFrame;
}
