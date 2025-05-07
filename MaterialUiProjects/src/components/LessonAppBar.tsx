import { AppBar, Toolbar, IconButton, Typography, Stack, Button,} from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';

export const LessonAppBar = () => {
  return (
    <AppBar>
        <Toolbar>
            <IconButton>
                <AppsIcon />
                    </IconButton>    
                <Typography sx={{marginRight: 'auto'}} variant='h6' component='div'>Navbar Example</Typography>
                <Stack direction={'row'}>
                    <Button sx={{color: 'white'}}>HOME</Button>
                    <Button sx={{color: 'white'}}>ABOUT</Button>
                    <Button sx={{color: 'white'}}>PRODUCT</Button>
                    <Button sx={{color: 'white'}}>PRICE</Button>
                </Stack>
        </Toolbar>
    </AppBar>
  )
}
