import './style.css'
import Categories from './components/categories/Categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/products/ProductList'
import CategoriesProductList from './components/categories/CategoriesProductList'
import Navbar from './components/Navbar'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext'
import UserRegistrationForm from './components/Cart/UserRegistrationForm'

function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Categories />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/detalle-compra" element={<UserRegistrationForm />} />

          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App