import './style.css'
import Categories from './components/categories/Categories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoriesProductList from './components/categories/CategoryProductList'
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Checkout/Cart';
import CartProvider from './Context/CartContect';
import ProductList from './components/Products/ProductList';


function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Categories />} />
            <Route exact path='/products' element={<ProductList />} />
            <Route exact path='/category/:categoryId' element={<CategoriesProductList />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>

    </>
  )
}

export default App