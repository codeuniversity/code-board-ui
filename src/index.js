import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './components/Dashboard/Dashboard';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
