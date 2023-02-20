import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < React.StrictMode >
    <div className = 'flex flex-col justify-start items-center pt-16 pb-8 min-h-screen bgGradient' >
    <App / >
    </div>    
    </React.StrictMode>
);