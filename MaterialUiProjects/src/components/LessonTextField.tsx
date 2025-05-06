import { Stack, TextField } from '@mui/material';

export const LessonTextField = () => {
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
         </Stack>
      </Stack>
    </>
  )
}
