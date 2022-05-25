import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './Views/Category/Category';
import Products from './Views/Products/Products';
import Home from './Views/Home/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route exact path="/items/:productId" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
