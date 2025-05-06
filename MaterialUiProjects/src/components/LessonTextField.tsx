import { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';

export const LessonTextField = () => {

    const [value, setValue] = useState('')

  return (
    <>
      <Stack spacing={4} style={{ padding: 200 }}>
         <Stack direction='row' spacing={2}>
            <TextField label='name'/>
            <TextField label='name' variant='outlined'/>
            <TextField label='name' variant='filled'/>
            <TextField label='name' variant='standard'/>
            <TextField label='name' variant='outlined' size='small' color='error'/>
            <TextField label='name' variant='outlined' helperText='Please enter your name'/>
            <TextField type='password' label='name' variant='outlined' helperText='Please enter your name'/>
            <TextField disabled type='password' label='name' variant='outlined'/>  {/* The button is pale and We couldn't write anything. (disabled) */}
            <TextField InputProps={{readOnly: true}} type='password' label='name' variant='outlined'/> {/* The button is bright and We couldn't write anything. */}
            <TextField 
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>₺</InputAdornment>
                )
            }} 
            label='Price' 
            variant='outlined'/>

            <TextField 
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>₺</InputAdornment>
                )
            }} 
            label='Price' 
            variant='outlined'/>
         </Stack>

        <Stack>
            <TextField 
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type='password'
            label='Password' 
            variant='outlined'
            helperText={!value ? 'Please enter your password' : 'Please never share your password with anyone'}/>
        </Stack>
      </Stack>
    </>
  )
}
