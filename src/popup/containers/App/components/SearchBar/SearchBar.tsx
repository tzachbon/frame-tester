import * as React from "react";
import { observer } from "mobx-react";

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

interface SearchBarProps {
    value: string;
    onChange: any;
  }

  
  
  const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (

    <div style={{ width: '200px' }}>
      <TextField
        fullWidth
        onChange={onChange}
        value={value}
        placeholder="start typing"
      />
    </div>
  );
  
  export default observer(SearchBar);