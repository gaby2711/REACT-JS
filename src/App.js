import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemLisContainer from './componets/ItemListContainer/ItemListContainer';
import Navbar from './componets/Navbar/Navbar';
import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './componets/cartContext/cartContex';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<ItemLisContainer greeting={"Listado de productos"} />}/> 
            <Route path="/category/:categoryId" element={<ItemLisContainer />} /> 
            <Route path="/item/:productId" element={<ItemDetailContainer />} /> 
          </Routes>
        </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
