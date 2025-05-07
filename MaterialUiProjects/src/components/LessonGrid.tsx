import { Box, Grid } from "@mui/material"

export const LessonGrid = () => {
  return (
    <Box>
        {/* <Grid container spacing={2}>
            <Grid size={8}>8 unit area in Grid structure</Grid>
            <Grid size={4}>4 unit area in grid structure</Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid size={8}>8 unit area in Grid structure</Grid>
            <Grid size={4}>4 unit area in grid structure</Grid>
        </Grid> */}
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>Responsive 8 unit area in Grid structure</Grid>
            <Grid size={{ xs: 12, md: 4 }}>Responsive 4 unit area in grid structure</Grid>
            <Grid size={{ xs: 12, md: 8 }}>Responsive 8 unit area in Grid structure</Grid>
            <Grid size={{ xs: 12, md: 4 }}>Responsive 4 unit area in grid structure</Grid>
        </Grid>
    </Box>
  )
}
