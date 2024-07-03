import { useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/categoria/:categoryId' element={<ItemListContainer/>} />
      <Route path='/producto/:productId' element={<ItemDetailContainer />}/>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
