import "./App.css";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Angular from "./assets/images/angular.jpg"
import Bootstrap from "./assets/images/bootstrap5.png"
import CCsharp from "./assets/images/ccsharp.png"
import Allweb from "./assets/images/kompleweb.jpg"
import Course from "./components/Course";

function App() {
    return (
        <>
            <AppBar>
                <Toolbar sx={{ fontSize: 25 }}>Card Project</Toolbar>
            </AppBar>
            <Container maxWidth="lg">
              <Grid container spacing={2} sx={{marginTop: 10}}>
                  <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                      <Course image={Angular} title="Angular" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, reiciendis! Cum, similique modi? Magnam nobis aperiam in dignissimos consequuntur, maxime reprehenderit labore est vel, quod laboriosam temporibus. Rerum, aliquam facere. " />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                      <Course image={Bootstrap} title="Bootstrap" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, reiciendis! Cum, similique modi? Magnam nobis aperiam in dignissimos consequuntur, maxime reprehenderit labore est vel, quod laboriosam temporibus. Rerum, aliquam facere. " />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                      <Course image={CCsharp} title="CCsharp" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, reiciendis! Cum, similique modi? Magnam nobis aperiam in dignissimos consequuntur, maxime reprehenderit labore est vel, quod laboriosam temporibus. Rerum, aliquam facere. " />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                      <Course image={Allweb} title="Allweb" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, reiciendis! Cum, similique modi? Magnam nobis aperiam in dignissimos consequuntur, maxime reprehenderit labore est vel, quod laboriosam temporibus. Rerum, aliquam facere. " />
                  </Grid>
              </Grid>
            </Container>
        </>
    );
}

export default App;
