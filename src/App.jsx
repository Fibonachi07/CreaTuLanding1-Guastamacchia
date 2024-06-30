import { useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/categoria/:categoryId' element={<ItemListContainer/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
