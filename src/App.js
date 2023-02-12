import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemLisContainer from './componets/ItemListContainer/ItemListContainer';
import Navbar from './componets/Navbar/Navbar';
import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<ItemLisContainer />} /> 
            <Route path="/category/:categoryId" element={<ItemLisContainer />} /> 
            <Route path="/item/:productsId" element={<ItemDetailContainer />} /> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
