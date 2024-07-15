import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import CartContextProvider from './Context/CartContext';

function App() {
  return (
    <>  
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer/>} />
            <Route path='/producto/:productId' element={<ItemDetailContainer />}/>
            <Route path='*' element={<PageNotFound />}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
