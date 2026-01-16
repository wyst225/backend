import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

export default function App() {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        {user && <Link to="/cart">Cart ({cart.length})</Link>}
      </nav>

      {!user ? (
        <button
          className="auth-button"
          onClick={() => setUser({ name: 'Teszt User' })}
        >
          Belépés
        </button>
      ) : (
        <button
          className="auth-button"
          onClick={() => {
            setUser(null)
            setCart([])
          }}
        >
          Kilépés
        </button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={
          <Products cart={cart} setCart={setCart} user={user} />
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </div>
  )
}
