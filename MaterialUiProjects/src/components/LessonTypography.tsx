import { Typography } from '@mui/material';

export const LessonTypography = () => {
  return (
    <div>
        <Typography variant='body1'>Body1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, maxime. Quibusdam harum iste repellendus nulla nisi error nobis accusamus quas, ut omnis nostrum sapiente. Distinctio ullam illum minus harum blanditiis unde esse architecto. Consequatur, rem.</Typography>
        <Typography variant='body2'>Body2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, maxime. Quibusdam harum iste repellendus nulla nisi error nobis accusamus quas, ut omnis nostrum sapiente. Distinctio ullam illum minus harum blanditiis unde esse architecto. Consequatur, rem.</Typography>
        
        <Typography variant='h1'>H1 HELLO</Typography>
        <Typography variant='h2'>H2 HELLO</Typography>
        <Typography variant='h3'>H3 HELLO</Typography>
        <Typography variant='h4'>H4 HELLO</Typography>
        <Typography variant='h5'>H5 HELLO</Typography>
        <Typography variant='h6'>H6 HELLO</Typography>

        <Typography variant='h2' component='h4'>H2 Appearance but with h4 tag</Typography>

        <Typography variant='h2' component='h4' align='left'>text-align= left;</Typography>
        <Typography variant='h2' component='h4' align='right'>text-align= right;</Typography>

        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>

    </div>
  )
}
