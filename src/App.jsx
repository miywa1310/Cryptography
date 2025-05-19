import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import CezarPage from './pages/ CezarPage';
import VijinerPage from './pages/VijinerPage';
import AffinePage  from './pages/AffinePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>} />
        <Route path="/cezar" element={<CezarPage />} />
        <Route path="/vijiner" element={<VijinerPage />} />
        <Route path="/affine" element={<AffinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App