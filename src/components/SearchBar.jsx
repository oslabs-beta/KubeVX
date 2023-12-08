import React from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import { Paper } from '@mui/material';

const SearchBar = ({ searchquery, setsearchquery, options }) => {
  let optionsArray = [];
  if (options) {
    for (let i = 0; i < options.length; i++) {
      optionsArray.push({ label: options[i] });
    }
  }

  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      PaperComponent={({ children }) => (
        <Paper style={{ background: '#5f8ac7' }}>{children}</Paper>
      )}
      options={optionsArray}
      sx={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label='PromQL Query'
          InputProps={{
            ...params.InputProps,
            style: { color: 'white' }, 
          }}
          InputLabelProps={{
            ...params.InputLabelProps,
            style: { color: 'white' },
          }}
        />
      )}
      searchquery={searchquery}
      onInputChange={(e, newInputValue) => {
        e.preventDefault();
        setsearchquery(newInputValue);
      }}
    />
  );
};

export default SearchBar;


