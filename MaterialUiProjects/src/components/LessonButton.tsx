import { Button, Stack } from '@mui/material';

export const LessonButton = () => {
  return (
    <>
        <Stack spacing={4}>
            <Stack direction='row' spacing={3}> {/*Default value : display flex & flex direction column */}
                <Button variant='text'>Text</Button>
                <Button variant='outlined'>Outlined</Button>
                <Button variant='contained'>Contained</Button>
            </Stack>
            <Stack direction='row' spacing={3}>
                <Button variant='text' color='primary'>Blue</Button>
                <Button variant='text' color='secondary'>Purple</Button>
                <Button variant='text' color='success'>Green</Button>
                <Button variant='text' color='error'>Red</Button>
                <Button variant='text' color='warning'>Orange</Button>
                <Button variant='text' color='info'>Aqua</Button>
            </Stack>
            <Stack direction='row' spacing={3}>
                <Button variant='outlined' color='primary'>Blue</Button>
                <Button variant='outlined' color='secondary'>Purple</Button>
                <Button variant='outlined' color='success'>Green</Button>
                <Button variant='outlined' color='error'>Red</Button>
                <Button variant='outlined' color='warning'>Orange</Button>
                <Button variant='outlined' color='info'>Aqua</Button>
            </Stack>
            <Stack direction='row' spacing={3}>
                <Button variant='contained' color='primary'>Blue</Button>
                <Button variant='contained' color='secondary'>Purple</Button>
                <Button variant='contained' color='success'>Green</Button>
                <Button variant='contained' color='error'>Red</Button>
                <Button variant='contained' color='warning'>Orange</Button>
                <Button variant='contained' color='info'>Aqua</Button>
            </Stack>
            <Stack direction='row' spacing={3} display='block'>
                <Button variant='outlined' size='small'>Small Size</Button>
                <Button variant='outlined' size='medium'>Medium Size</Button>
                <Button variant='outlined' size='large'>Large Size</Button>
            </Stack>
        </Stack>
    </>
  )
}
