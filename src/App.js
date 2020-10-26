import React, { Component } from "react";
import AppBar from "./Landing/Navigation/AppBar";
import AppInfo from "./Landing/Content/AppInfo";
import {
    CssBaseline,
    Container,
    Typography,
    Box,
    createMuiTheme,
    ThemeProvider,
    Grid,
    Button,
    Link
} from "@material-ui/core";

function App() {

    const theme = createMuiTheme({
        palette: {
            type: "dark"
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <AppBar />

            <AppInfo />

        </ThemeProvider>
    );
}

export default App;

