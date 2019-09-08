import React from 'react';
import './css/App.css';
import './css/fonts.css'
import Homepage from './components/Homepage';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { deepPurple, deepOrange } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterTeamForm from './components/RegisterTeamForm';
import EditTeamForm from './components/EditTeamForm';
import DeleteTeamForm from './components/DeleteTeamForm';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepPurple,
    secondary: deepOrange
  }
});

function App() {
  return (
    <Router>
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path='/' exact component={Homepage}/>
            <Route path='/register' component={RegisterTeamForm} />
            <Route path='/edit' component={EditTeamForm} />
            <Route path='/delete' component={DeleteTeamForm} />
          </Switch>

        </MuiThemeProvider>
      </div>
    </Router>
    
  );
}

export default App;
