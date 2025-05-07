import { Divider, Stack, Typography } from "@mui/material"

export const LessonStack = () => {
  return (
    <Stack 
        direction={{xs: 'column', sm: 'row'}} 
        spacing={{xs: 3 , md: 2, sm: 1  }} 
        justifyContent='center'
        alignItems='center'
        divider={<Divider orientation="vertical" 
        flexItem />}
    > {/* Default values are display: flex, flex-direction: column; */}
        <Typography>Item 1</Typography>
        <Typography>Item 2</Typography>
        <Typography>Item 3</Typography>
    </Stack>
  )
}
