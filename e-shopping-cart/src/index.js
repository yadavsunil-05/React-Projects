import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ContextStore from "./Context/ContextStore"


ReactDOM.render(
  <React.StrictMode>
    <ContextStore>
      <App />
    </ContextStore>
  </React.StrictMode>,
  document.getElementById('root')
);

