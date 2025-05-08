import { CircularProgress, LinearProgress, Stack } from '@mui/material'

export const LessonSpinnerOrProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color='secondary'/>
        <CircularProgress color='success'/>
        <CircularProgress color='error'/>
        <CircularProgress variant='determinate' value={25} color='error'/>
        <CircularProgress variant='determinate' value={55} color='error'/>
        <CircularProgress variant='determinate' value={75} color='error'/>
        <LinearProgress />
        <LinearProgress color='warning' />
        <LinearProgress color='success' variant='determinate' value={50}/>
    </Stack>
  )
}
