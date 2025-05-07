import { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const LessonDrawer = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <IconButton size="large" onClick={() => setIsOpen(true)}>
        <MenuIcon  />
    </IconButton>
    <Drawer open={isOpen}>
        <Box>
            <Typography variant='h6' component='div'>
                Left Panel
            </Typography>
        </Box>
    </Drawer>
    </>
  )
}
