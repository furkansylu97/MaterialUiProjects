import { Box, Drawer, IconButton, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const LessonDrawer = () => {
  return (
    <>
    <IconButton size="large">
        <MenuIcon  />
    </IconButton>
    <Drawer>
        <Box>
            <Typography variant='h6' component='div'>
                Left Panel
            </Typography>
        </Box>
    </Drawer>
    </>
  )
}
