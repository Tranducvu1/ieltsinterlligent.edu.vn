import React from 'react';
import ReactDOM from 'react-dom';
import './components/Home/home.css';
import App from './components/Home/home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
     <React.StrictMode>
    <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();