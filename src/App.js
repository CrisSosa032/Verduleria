import React from 'react'
import AppLayout from './pages/layout/AppLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'


const App = () =>
  <div className="App">
    {<Router>
      <Routes>
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </Router>}
  </div>

export default App;

