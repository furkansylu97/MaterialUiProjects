import React from 'react'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, TextField } from "@mui/material";

export const LessonCheckbox = () => {
  return (
    <>
      <Box>
        <FormControl>
            <FormLabel>Education Status</FormLabel>
            <FormGroup>
                <FormControlLabel control={ <Checkbox/> } label='elementary school' />
                <FormControlLabel control={ <Checkbox/> } label='High school' />
                <FormControlLabel control={ <Checkbox/> } label='University' />
            </FormGroup>
        </FormControl>
      </Box>
    </>
  )
}
