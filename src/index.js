import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {IntlProvider} from 'react-intl';

// Determinar el idioma del navegador
let userLanguage = navigator.language || navigator.userLanguage;
// Configurar los mensajes en base al idioma
let messages;

if (userLanguage.includes('en')) {
    messages = require('./locales/en.json');
} else if (userLanguage.includes('es')) {
    messages = require('./locales/es.json');
} else {
    messages = require('./locales/en.json');
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IntlProvider locale={userLanguage} messages={messages}>
      <App />
    </IntlProvider>
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
