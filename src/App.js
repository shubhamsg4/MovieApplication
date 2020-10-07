import React, { Fragment } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Dashboard from './components/Layout/Dashboard'
import store from './store';


function App() {
   return (
   <Provider store ={store}>
   <Fragment>
   <Dashboard />

</Fragment>
    </Provider>
   );
}

export default App;
