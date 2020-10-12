import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';

const StyledTableCell = withStyles (theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
})) (TableCell);

const StyledTableRow = withStyles (theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
})) (TableRow);

function createData (name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows = [
  createData (1, 't2.micro', '₹89', 'running', 'start'),
  createData (2, 't2.large', '₹89', 'running', 'start'),
  createData ('Eclair', 262, 16.0, 24, 6.0),
  createData ('Cupcake', 305, 3.7, 67, 4.3),
  createData ('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles3 = makeStyles ({
  table: {
    minWidth: 700,
    //   width:"77%",
    //   marginLeft:"156px",
    //   marginBottom:"20px"
  },
});
const AntSwitch = withStyles (theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        //    backgroundColor:"white",
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
})) (Switch);
const useStyles = makeStyles ({
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },
  paper: {
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12,
  },
});

const useStyles1 = makeStyles (theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing (2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper1: {
    padding: theme.spacing (2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  },
}));

export default function Dashboard () {
  const classes = useStyles ();
  const classes1 = useStyles1 ();
  const classes3 = useStyles3 ();
  const [state, setState] = React.useState ({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = event => {
    setState ({...state, [event.target.name]: event.target.checked});
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="title" color="inherit">
            Dashboard
          </Typography>

          <section className={classes.rightToolbar}>
            <Typography variant="title" color="inherit">
              <Button variant="title" color="inherit">logout</Button>
            </Typography>
          </section>
        </Toolbar>
      </AppBar>
      <br />

      <div className={classes1.root}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={9}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Paper className={classes1.paper}>
              <Box component="div" visibility="visible">
                <div className={classes.root}>
                  <Grid container spacing={3}>

                    <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>
                        {' '}
                        $ 30 / hr{' '}
                      </Paper>
                      <Paper className={classes.paper}>
                        <Typography component="span">
                          {/* style={{float: 'right'}}> */}
                          Running instances
                        </Typography>
                        {/* <Typography component="span" >
          Running instances
          </Typography> */}
                      </Paper>

                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>
                        <Typography component="span">
                          $ 30 / hr{' '}
                        </Typography>

                      </Paper>
                      <Paper className={classes.paper}>
                        <Typography component="span">
                          {/* style={{float: 'right'}}> */}
                          Stopped instances
                        </Typography>
                        {/* <Typography component="span" >
          Running instances
          </Typography> */}
                      </Paper>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    >
                      <Paper className={classes.paper}>
                        <Typography component="div">
                          <section className={classes.rightToolbar}>

                            <Grid
                              component="label"
                              container
                              alignItems="center"
                              spacing={1}
                            >
                              <Grid item style={{marginLeft: 'auto'}}>INR</Grid>
                              <Grid item>
                                <Switch
                                  defaultChecked
                                  color="default"
                                  inputProps={{
                                    'aria-label': 'checkbox with default color',
                                  }}
                                />

                              </Grid>
                              <Grid item>USD</Grid>
                            </Grid>
                          </section>
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              </Box>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Paper
              className={classes1.paper1}
              style={{float: 'left', color: 'black'}}
            >
              {' '}Instances{' '}
            </Paper>
            <Paper className={classes1.paper}>
              <Box component="span" display="block">
                <TableContainer component={Paper}>
                  <Table
                    className={classes3.table}
                    aria-label="customized table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>
                          {/* Dessert (100g serving) */}
                          ID
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Instance Name
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Cost Per Hour
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Status
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Action
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map (row => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.calories}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.fat}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.carbs}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.protein}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
