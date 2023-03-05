import { Container,Stack } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import { Navbar } from './components/Navbar';
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
