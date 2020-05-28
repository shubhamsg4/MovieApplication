import React from 'react';
//import './App.css';
import {Provider} from 'react-redux';
import {Dashboard} from './components/Layout/Dashboard'
import store from './store';
//import {Movie} from './components/Layout/Movie'


function App() {
   return (
   <Provider store ={store}>
   <Dashboard />
   {/* <Movie /> */}

    </Provider>
   );
}

export default App;
