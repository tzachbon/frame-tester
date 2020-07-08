import { Switch as SwitchUI, Button } from "@material-ui/core";
import * as React from "react";
import { observer } from "mobx-react";

interface SwitchProps {
  isActive: boolean;
  onChange: (active: boolean) => any;
}

const Switch: React.FC<SwitchProps> = ({ isActive, onChange }) => (
  <Button onClick={() => onChange(!isActive)}>
    {isActive ? "Disabled" : "Active"}
  </Button>
);

export default observer(Switch);
