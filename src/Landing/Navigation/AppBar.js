import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Typography,
    Box,
    Grid,
    Button,
    Link
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

  function App() {

   
    return (
        <AppBar position="static">
            <Box p={2}>
                <Grid container>
                    <Grid item>
                        <Typography style={{ fontFamily: "Trispace" }} variant="h5">artistify</Typography>
                    </Grid>
                     <Grid item >
                        <Link>hello</Link>
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
    );

}

export default App;