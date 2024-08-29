import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile, faArrowLeft, faArrowRight, faEnvelope, faBars, faX} from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faInstagram, faFile, faArrowLeft, faArrowRight, faEnvelope, faBars, faX, faLinkedin)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
