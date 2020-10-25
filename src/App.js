import React, { Component } from "react";
import {
    CssBaseline,
    Container,
    Typography,
    Box,
    AppBar,
    createMuiTheme,
    ThemeProvider,
    Grid,
    Button,
    Link
}
    from "@material-ui/core";

function App() {

    const theme = createMuiTheme({
        palette: {
            type: "dark"
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Box p={2}>
                    <Grid container>
                        <Grid item>
                            <Typography style={{ fontFamily: "Trispace" }} variant="h5">artistify</Typography>
                        </Grid>
                        <Grid item >
                            <Link>link 1</Link>
                        </Grid>
                        <Grid item >
                            <Link>link 2</Link>
                        </Grid>
                        <Grid item >
                            <Link>link 3</Link>
                        </Grid>
                        <Grid item >
                            <Link>link 4</Link>
                        </Grid>
                    </Grid>
                </Box>
            </AppBar>
            <Container>
                <Box p={6}>

                    <Grid container>
                        <Grid sm={6} item container direction="column" spacing={3}>
                            <Grid item>
                                <Typography style={{ fontFamily: "Trispace" }} variant="h3">
                                    Free Music, for Free
                        </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{ fontFamily: "Trispace" }}>
                                    Less ads, more free music. The way free music should be. Listen to any song available on multiple platforms including Youtube, with less ads, and less bullshit.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ fontFamily: "Trispace" }}
                                    href="https://artistify-2.appspot.com"
                                > Open Artistify in your Browser</Button>
                            </Grid>
                        </Grid>
                        <Grid sm={6} item>
                            <img width="100%" src="sample.png"></img>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );

}

export default App;

