import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Nosotros from "./components/Nosotros/Nosotros";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContect";
import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;