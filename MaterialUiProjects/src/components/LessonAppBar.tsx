import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem,} from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';

export const LessonAppBar = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const openControl = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

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
                    <Button sx={{color: 'white'}}  onClick={handleClick}>SALES</Button>
                </Stack>
                <Menu anchorEl={anchorEl} open={openControl}>
                    <MenuItem>Books</MenuItem>
                    <MenuItem>Pencils</MenuItem>
                </Menu>
        </Toolbar>
    </AppBar>
  )
}
