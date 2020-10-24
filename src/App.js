import React, { Component } from "react";
import { CssBaseline, Typography, Box, AppBar, createMuiTheme, ThemeProvider, Grid, Link } from "@material-ui/core";

function App() {

    const theme = createMuiTheme({
        palette: {
            background: {
                default: "#000000"
            },
            typography: {
                fontFamily: 'Trispace',
            },
            primary: {
                main: ""
            },
        },
    });
    const appName = "artistify"

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box style={{
                backgroundColor: "#23272a",
                color: "white",
            }}>
                <AppBar>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h5">{appName}</Typography>
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
                </AppBar>
            </Box>
        </ThemeProvider>
    );

}

export default App;

