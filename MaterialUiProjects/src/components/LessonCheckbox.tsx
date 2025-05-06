import { useState } from "react";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, TextField } from "@mui/material";

export const LessonCheckbox = () => {

    const [isAccept, setIsAccept] = useState(false);
    // console.log(isAccept);

  return (
    <>
      <Box>
        <FormControl>
            <FormLabel>Education Status</FormLabel>
            <FormGroup row>
                <FormControlLabel disabled control={ <Checkbox/> } label='elementary school' />
                <FormControlLabel control={ <Checkbox defaultChecked/> } label='High school' /> {/* defaultChecked value is automatic selected value*/}
                <FormControlLabel control={ <Checkbox/> } label='University' />
            </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
            <FormLabel>Education Status</FormLabel>
            <FormGroup row>
                <FormControlLabel control={ <Checkbox checked= { isAccept } onChange={(e) => setIsAccept(e.target.checked)}/> } label='I accept the terms of use' />
            </FormGroup>
        </FormControl>
      </Box>
    </>
  )
}
