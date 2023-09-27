import './App.css'
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'
import Navbar from './components/navbar/navbar'
import Categories from './components/categories/Categories'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductList from './components/products/productList'
import CategoriesProductList from './components/categories/categoriesProductList'


function App() {
  const greeting="Bienvenidos a JJE"
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Categories/>} />
        <Route exact path='/products' element={<ProductList/>}/>
        <Route exact path='/categoty/:categoryId' element={<CategoriesProductList/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
