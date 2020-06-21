import * as React from "react";
import * as styles from "./style.scss";
import { FormControlLabel, Switch as SwitchUI } from "@material-ui/core";
import { observer } from "mobx-react";
import { ACTIONS } from "../../../models/frame-tester";
import { SWITCH } from "./constants";
import CheckIcon from "@material-ui/icons/Check";
import BlockIcon from "@material-ui/icons/Block";

interface SwitchProps {
  isActive: boolean;
  onChange: (active: boolean) => any;
}

const Switch: React.FC<SwitchProps> = ({ isActive, onChange }) => (
  <FormControlLabel
    control={
      <SwitchUI
        checked={isActive}
        onChange={({ target: { checked } }) => onChange(checked)}
        name={ACTIONS.ACTIVE}
        color='primary'
      />
    }
    label={
      <div className={styles.label}>
        {isActive ? (
          <>
            <span>{SWITCH.text.ACTIVE}</span>
            <BlockIcon />
          </>
        ) : (
          <>
            <span>{SWITCH.text.UN_ACTIVE}</span>
            <CheckIcon />
          </>
        )}
      </div>
    }
  />
);

export default observer(Switch);
