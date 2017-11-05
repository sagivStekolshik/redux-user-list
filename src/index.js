import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';

import App from './Components/App';

const store = createStore(reducer);

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'));
