// import React from 'react';
import { useState } from 'react';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, FormHelperText } from '@mui/material';

export const LessonRadioGroup = () => {

    const [value, setValue] = useState('')

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    //     setValue(event.target.value)
    // }

  return (
    <>
        <FormControl>
            <FormLabel>Salary Expectation</FormLabel>
            <RadioGroup row name='expected-salary' value={value} onChange= {(e) => setValue(e.target.value)}/*{ {handleChange}}*/> 
                <FormControlLabel label='2000$' value='2000' control={ <Radio/>} />
                <FormControlLabel label='3000$' value='3000' control={ <Radio/>} />
                <FormControlLabel label='4000$' value='4000' control={ <Radio/>} />
            </RadioGroup>
            <FormHelperText>Wrong choice</FormHelperText>
        </FormControl>
    </>
  )
}
