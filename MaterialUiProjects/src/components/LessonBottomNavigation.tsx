import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const LessonBottomNavigation = () => {
  return (
    <BottomNavigation showLabels sx={{width: '100%', position: 'absolute', bottom: 0}}>
        <BottomNavigationAction icon={ <RestoreIcon/> } label='Recents'/>
        <BottomNavigationAction icon={ <FavoriteIcon/> } label='Favorites'/>
        <BottomNavigationAction icon={ <LocationOnIcon/> } label='Nearby'/>
    </BottomNavigation>
  )
}
