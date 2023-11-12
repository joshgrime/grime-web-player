import React, {useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import AuthOkPage from './pages/AuthOkPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/oauth' element={<AuthOkPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
