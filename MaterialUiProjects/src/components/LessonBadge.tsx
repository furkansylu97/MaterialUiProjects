import { Badge, Stack } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';

export const LessonBadge = () => {
  return (
    <Stack direction='row' spacing={5}>
        <Badge badgeContent={50} color='secondary'>
            <MailIcon />
        </Badge>
        <Badge max={40} badgeContent={50} color='secondary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={50} color='secondary' anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
            <MailIcon />
        </Badge>
        <Badge badgeContent={50} color='secondary' anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
            <MailIcon />
        </Badge>
    </Stack>
  )
}
