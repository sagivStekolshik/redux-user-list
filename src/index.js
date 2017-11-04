import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './Components/App';

ReactDOM.render((<MuiThemeProvider><App /></MuiThemeProvider>), document.getElementById('root'));
