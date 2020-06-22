import { Switch as SwitchUI } from "@material-ui/core";
import * as React from "react";
import { ACTIONS } from "../../../models/frame-tester";

interface SwitchProps {
  isActive: boolean;
  onChange: (active: boolean) => any;
}

const Switch: React.FC<SwitchProps> = ({ isActive, onChange }) => (
  <SwitchUI
    checked={isActive}
    onChange={() => onChange(!isActive)}
    name={ACTIONS.ACTIVE}
    color='primary'
  />
);

export default Switch;
