import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jewellery from "./pages/Jewellery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Layout from "./pages/Layout";
import ProductDetail from "./pages/Jewellery/ProductDetail";
import Category from "./pages/Jewellery/Category";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(!cartOpen);

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    console.log("Added:", product);
  };

  return (
    <>
      {cartOpen && <Cart cartItems={cartItems} onClose={toggleCart} />}

      <Routes>
        <Route
          element={
            <Layout
              cartItems={cartItems}
              cartOpen={cartOpen}
              toggleCart={toggleCart}
            />
          }
        >
          <Route index element={<Home />} />
          <Route
            path="/jewellery"
            element={<Jewellery addToCart={addToCart} />}
          />
          <Route
            path="/jewellery/:productId"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/jewellery/category/:category"
            element={<Category addToCart={addToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
