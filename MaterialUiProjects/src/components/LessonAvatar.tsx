import { Avatar, AvatarGroup, Stack } from "@mui/material"

export const LessonAvatar = () => {
  return (
    <Stack direction='row' spacing={3}>
        <AvatarGroup>
            <Avatar sx={{marginRight: 10 }} src="https://randomuser.me/api/portraits/women/56.jpg" />
            <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
        </AvatarGroup>
        <AvatarGroup>
            <Avatar sx={{marginRight: 10, bgcolor: 'primary.light', width: 50, height: 50 }}>Furkan</Avatar>
            <Avatar variant="square" sx={{marginRight: 10, bgcolor: 'success.light', width: 50, height: 50 }}>Selin</Avatar>
        </AvatarGroup>
        <AvatarGroup>
            <Avatar variant="rounded" sx={{ bgcolor: 'primary.light', width: 50, height: 50 }}>Furkan</Avatar>
            <Avatar variant="rounded" sx={{ bgcolor: 'success.light', width: 50, height: 50 }}>Ömer</Avatar>
            <Avatar variant="rounded" sx={{ bgcolor: 'primary.light', width: 50, height: 50 }}>Furkan</Avatar>
            <Avatar variant="rounded" sx={{ bgcolor: 'success.light', width: 50, height: 50 }}>Mirzat</Avatar>
            <Avatar variant="rounded" sx={{ bgcolor: 'primary.light', width: 50, height: 50 }}>Furkan</Avatar>
            <Avatar variant="rounded" sx={ {bgcolor: 'success.light', width: 50, height: 50 }}>Yahya</Avatar>
            <Avatar variant="rounded" sx={{ bgcolor: 'primary.light', width: 50, height: 50 }}>Furkan</Avatar>
            <Avatar variant="rounded" sx={{ bgcolor: 'success.light', width: 50, height: 50 }}>Mehmet</Avatar>
        </AvatarGroup>
    </Stack>
  )
}
