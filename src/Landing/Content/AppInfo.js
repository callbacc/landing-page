import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Container,
    Typography,
    Box,
    Grid,
    Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    font: {
      fontFamily: "Trispace",
    },
  }));

function App () {
    const classes = useStyles();
    return(
        <Container>
                <Box p={6}>
                    <Grid container>
                        <Grid sm={6} item container direction="column" spacing={3}>
                            <Grid item>
                                <Typography className={classes.font} variant="h3">Free Music, for Free</Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.font}>
                                    Less ads, more free music. The way free music should be. Listen to any song available on multiple platforms including Youtube, with less ads, and less bullshit.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    className={classes.font}
                                    color="primary"
                                    href="https://artistify-2.appspot.com"
                                > Open Artistify in your Browser</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    className={classes.font}
                                    variant="contained"
                                    color="primary"
                                    href="./dist/Artistify.rar"
                                > Download Artistify for Windows</Button>
                            </Grid>
                        </Grid>
                        <Grid sm={6} item>
                            <img width="100%" src="sample.png"></img>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    )
}
export default App;