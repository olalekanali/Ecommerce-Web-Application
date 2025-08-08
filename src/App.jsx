import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Category />} />
          <Route path="/" element={<Category />} />
          <Route path="/" element={<Category />} />
          <Route path="/" element={<Product />}>
            <Route path=":productId"  element={<Product />}/>
          </Route>
          <Route path="/" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}