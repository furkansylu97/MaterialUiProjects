import { Link, Box } from "@mui/material"

export const LessonLink = () => {
  return (
    <Box sx={{display: 'flex', flexDirection:'column'}}>
        <Link href='https://www.linkedin.com/in/furkansoylu97/'>Go to My Linkedin Profile</Link>
        <Link href='https://www.linkedin.com/in/furkansoylu97/' color="error">Go to My Linkedin Profile</Link>
        <Link href='https://www.linkedin.com/in/furkansoylu97/' color="error" variant="body2">Go to My Linkedin Profile</Link>
        <Link href='https://www.linkedin.com/in/furkansoylu97/' underline="none">Go to My Linkedin Profile</Link>
        <Link href='https://www.linkedin.com/in/furkansoylu97/' underline="hover">Go to My Linkedin Profile</Link>
        <Link href='https://www.linkedin.com/in/furkansoylu97/' underline="always">Go to My Linkedin Profile</Link>
        <Link component='button' onClick={() => {console.log('Furkan Soylu')}}>Go to My Linkedin Profile</Link>
    </Box>
  )
}
