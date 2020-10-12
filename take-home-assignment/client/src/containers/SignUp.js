import React, { Component } from 'react';
import Container from "../components/Layouts/Container";
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

class SignUp extends Component {
 
  render() {
   
    const classes = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }));
    return (
     
      <div>
         {/* <Container> */}
         <Box component="div" m={7} style={{margin:"30px", marginLeft:"30px"}}>
  {/* <Button /> */}

         <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12}>
         <div style={{marginLeft:"600px"}}>Sign In</div>
        </Grid>
        <Grid item xs={12}>
          {/* <div style={{marginLeft:"600px"}} */}
       <TextField  style={{marginLeft:"500px", width:"100%"}}
          id="filled-password-input"
          label="Email Id"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
          {/* </div> */}
        
        </Grid>
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
      </div>
      </Box>
         {/* </Container> */}
      
      </div>
    );
  }
}

export default SignUp;