import "./App.css";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

function App() {
    return (
        <>
            <AppBar>
                <Toolbar sx={{ fontSize: 25 }}>Card Project</Toolbar>
            </AppBar>
            <Container maxWidth="lg">
              <Grid container spacing={2} sx={{marginTop: 10}}>
                  <Grid size={8}>
                      size=8
                  </Grid>
                  <Grid size={4}>
                      size=4
                  </Grid>
                  <Grid size={4}>
                      size=4
                  </Grid>
                  <Grid size={8}>
                      size=8
                  </Grid>
              </Grid>
            </Container>
        </>
    );
}

export default App;
