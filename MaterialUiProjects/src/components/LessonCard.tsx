import { Card, CardActions, CardMedia, Typography, Button } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import Photo from '../assets/img/softwareimg.jpg'

export const LessonCard = () => {
  return (
    <Card sx={{width: 400,}}>
        <CardMedia height='150' component='img'  image={Photo} />
        <CardContent>
            <Typography variant="h5" component='div'>Title</Typography>
            <Typography variant="body2" component='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas illo hic, rem necessitatibus delectus ullam obcaecati quasi in doloribus velit culpa odit nulla mollitia excepturi, ipsa corporis consequatur aperiam voluptatem.</Typography>
        </CardContent>
        <CardActions>
          <Button color="error">Delete</Button>
          <Button>Save</Button>
      </CardActions>
    </Card>
  )
}
