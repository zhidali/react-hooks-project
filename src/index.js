import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RouterConfig from './router/router';
// import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import './assets/css/reset.less';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterConfig />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
