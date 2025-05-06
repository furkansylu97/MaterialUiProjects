import React from "react";
import { useState } from "react";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, TextField } from "@mui/material";

export const LessonCheckbox = () => {

    const [isAccept, setIsAccept] = useState(false);
    const [language, setLanguage] = useState<string[]>([])
    console.log(language);
    // console.log(isAccept);

    const handleLangugeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const index = language.indexOf(event.target.value); 
        if (index === -1) {
            setLanguage([...language, event.target.value])
        }
        else {
            setLanguage(language.filter((item) => item !== event.target.value))
        }
    }

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
      <Box>
        <FormControl>
            <FormLabel>Which programming languages ​​do you know?</FormLabel>
            <FormGroup row>
                <FormControlLabel value='JS' control={ <Checkbox checked= { language.includes('JS') } onChange={handleLangugeChange}/> } label='Javscript' />
                <FormControlLabel value='Python' control={ <Checkbox checked= { language.includes('Python') } onChange={handleLangugeChange}/> } label='Python' />
                <FormControlLabel value='Arduino' control={ <Checkbox checked= { language.includes('Arduino') } onChange={handleLangugeChange}/> } label='Arduino' />
                <FormControlLabel value='C & C#' control={ <Checkbox checked= { language.includes('C & C#') } onChange={handleLangugeChange}/> } label='C & C#' />
            </FormGroup>
        </FormControl>
      </Box>
    </>
  )
}
