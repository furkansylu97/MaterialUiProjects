import React from 'react';
import { useState } from 'react';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, FormHelperText, Button } from '@mui/material';

export const LessonRadioExample = () => {

    const [value, setValue] = useState('');
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false)

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (value === 'Javascript') {
            setHelperText('Yes, of course, the best front-end programming language is JavaScript.');
            setError(false);
        }
        else if (value === 'Python') {
            setHelperText('No Wrong selection, the best front-end programming language is JavaScript.');
            setError(false);
        }
        else {
            setHelperText('Please make your choice');
            setError(true);
        }
    }

  return (
    <>
     <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>What is the best front-end coding language?</FormLabel>
          <RadioGroup onChange={handleRadioChange}>
            <FormControlLabel value='Javascript' label='Javascript' control={ <Radio/> } />
            <FormControlLabel value='Python' label='Python' control={ <Radio/> } />
          </RadioGroup>
          <FormHelperText>{ helperText }</FormHelperText>
          <Button type='submit' variant='outlined'>Submit</Button>
      </FormControl>
     </form>
    </>
  )
}
