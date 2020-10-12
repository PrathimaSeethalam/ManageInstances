import React, {Component} from 'react';
import './SignIn.css';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {signInUser} from '../Services/Services';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      username: '',
      password: '',
      message: '',
      open: false,
    };
  }
  //   componentDidMount () {
  //     signInUser ({email: '<email>', password: '<password>'})
  //       .then (res => {
  //         console.log (res, 'res');
  //       })
  //       .catch (err => {
  //         console.log (err, 'error');
  //       });
  //   }
  setUsername = event => {
    this.setState ({
      username: event.target.value,
    });
  };

  setPassword = event => {
    this.setState ({
      password: event.target.value,
    });
  };

  signIn = () => {
    let headers = {
      email: '<email>', password: '<password>'
    };
    signInUser (headers)
      .then((res) => {
        console.log (res, 'res');
      })
      .catch (err => {
        console.log (err, 'error');
      });
    if (this.state.username === 'react' && this.state.password === 'password') {
      this.setState ({
        open: true,
        message: 'You have successfully Logged In!',
      });
    } else {
      this.setState ({
        open: true,
        message: 'Incorrect Username or Password!',
      });
    }
  };

  handleClose = () => {
    this.setState ({
      open: false,
    });
  };

  render () {
    return (
      <div className="App">
        <header className="App-header">

          <div className="Login">
            <h3>Sign In</h3>
            <div>
              {/* <TextField
              variant="standard"
              placeholder="Username"
              margin="normal"
              required
              onChange={this.setUsername}
              value={this.state.username}
            /> */}
              <div style={{marginRight: '160px', marginBottom: '-10px'}}>
                Email
              </div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Email"
                margin="normal"
                required
                onChange={this.setUsername}
                value={this.state.username}
              />
            </div>

            <div>
              {/* <TextField
              variant="standard"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
            /> */}
              <div>{' '}</div>
              <div style={{marginRight: '130px', marginBottom: '-10px'}}>
                Password
              </div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Password"
                margin="normal"
                required
                type="password"
                onChange={this.setPassword}
                value={this.state.password}
              />

            </div>

            <div className="Button" style={{width: '100%'}}>
              <Button
                style={{width: '100%'}}
                variant="contained"
                color="primary"
                onClick={
                  this.signIn
                }
              >
                Log In
              </Button>
            </div>
            <div>Create an account</div>
          </div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.handleClose}
                color="primary"
                style={{width: '65%'}}
              >
                Okay
              </Button>
            </DialogActions>
          </Dialog>
        </header>
      </div>
    );
  }
}

export default App;
