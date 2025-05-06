import { useState } from 'react';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, FormHelperText, Button } from '@mui/material';

export const LessonRadioExample = () => {
  return (
    <>
     <form>
      <FormControl>
        <FormLabel>What is the best front-end coding language?</FormLabel>
          <RadioGroup>
            <FormControlLabel value='Javascript' label='Javascript' control={ <Radio/> } />
            <FormControlLabel value='Python' label='Python' control={ <Radio/> } />
          </RadioGroup>
          <FormHelperText></FormHelperText>
          <Button type='submit' variant='outlined'>Submit</Button>
      </FormControl>
     </form>
    </>
  )
}
