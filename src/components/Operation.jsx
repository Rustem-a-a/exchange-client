import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function MultipleSelectCheckmarks({currency, val, setVal,children,multiple}) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setVal(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{children}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={multiple}
          value={val}
          onChange={handleChange}
          input={<OutlinedInput label={children} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {currency.map((name) => (
            <MenuItem sx={{backgroundColor:'#f5f4ec'}} key={name[0]} value={name}>
              <Checkbox checked={val.indexOf(name) > -1} />
              <ListItemText primary={name[1]} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
