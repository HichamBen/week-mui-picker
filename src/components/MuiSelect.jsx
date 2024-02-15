import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

function MuiSelect() {
  const [countries, setCountries] = useState([]);

  const handleChange = event => {
   setCountries(event.target.value);
  };

  return (
    <Box bgcolor="red" p={4} width="100%" position="sticky" zIndex={10} top={30}>
      <TextField
        sx={{width:230, bgcolor:"white"}}
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{
          htmlFor: "select",
        }}
        InputProps={{
          id: "select",
        }}
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Austria</MenuItem>
      </TextField>
    </Box>
  );
}

export default MuiSelect;
