import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './reducers/store';
import showResults from './server/showResults';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './index.css';
import 'font-awesome/css/font-awesome.css';

const rootEl = document.getElementById('root');
const formStyle = { textAlign: 'center', marginLeft: '30vw', border: '5px solid', width: '40vw'};
const textStyle = { color: 'lightblue'};

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div style={{ padding: 10 }}>
      &nbsp; &nbsp;
      <Link to="/">Home</Link>
      &nbsp; &nbsp;
      <Link to="/SignUpForm">Register</Link>
      &nbsp; &nbsp;
      <Link to="/LoginForm">Login</Link>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={ formStyle }>
        <h2 style={ textStyle }>Register Now!</h2>
        <SignUpForm onSubmit={showResults} />
      </div>
    </MuiThemeProvider>
    </div>
  </Router>
  </Provider>,
  rootEl,
);
