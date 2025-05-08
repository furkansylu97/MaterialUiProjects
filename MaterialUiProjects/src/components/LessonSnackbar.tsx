import { useState } from 'react';
import { Button, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const LessonSnackbar = () => {

    const [openSnackbar, setOpenSnackbar] = useState(false)

    const handleClick = () => {
        setOpenSnackbar(true)
    }

  return (
    <>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar open={openSnackbar} />
    </>
  )
}
