import { ButtonGroup, Button, Stack } from '@mui/material';

export const LessonButtonGroup = () => {
  return (
    <>
      <Stack direction='row'>
         <ButtonGroup variant='contained'>
            <Button>Button1</Button>
            <Button>Button2</Button>
            <Button>Button3</Button>
         </ButtonGroup>
         <ButtonGroup variant='outlined'>
            <Button>Button1</Button>
            <Button>Button2</Button>
            <Button>Button3</Button>
         </ButtonGroup>
         <ButtonGroup variant='text'>
            <Button>Button1</Button>
            <Button>Button2</Button>
            <Button>Button3</Button>
         </ButtonGroup>
         <ButtonGroup variant='text' orientation='vertical'>  {/* The orientation definition allows us to position the buttons vertically or horizontally. */}
            <Button>Button1</Button>
            <Button>Button2</Button>
            <Button>Button3</Button>
         </ButtonGroup>
         <ButtonGroup variant='text' orientation='vertical' size='small' color='error'>
            <Button>Button1</Button>
            <Button>Button2</Button>
            <Button>Button3</Button>
         </ButtonGroup>
      </Stack>
    </>
  )
}
