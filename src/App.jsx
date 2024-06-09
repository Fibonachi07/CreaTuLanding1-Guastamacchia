import { useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const [selectedOption, setSelectedOption] = useState('Billeteras');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <NavBar onOptionChange={handleOptionChange} />
      <ItemListContainer title={`Estás viendo nuestras ${selectedOption}`} />
    </>
  );
}

export default App;
