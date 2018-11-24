import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './components/serviceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
serviceWorker.unregister();
