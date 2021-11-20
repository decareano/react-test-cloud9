import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Auth0Provider
    domain="dev-dqd-oq6b.us.auth0.com"
    clientId="EC7ypdJS4x1v9q8qRQfibqeZskmPN9SX"
    redirectUri={window.location.pathname}
  >
  <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </Auth0Provider>,
  document.getElementById("root")
);
