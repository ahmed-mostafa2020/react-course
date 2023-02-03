import NavbarPage from "./pages/NavbarPage";
import SliderPage from "./pages/SliderPage";
import ProductListPage from "./pages/ProductListPage";
import UsersListPage from "./pages/UsersListPage";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <NavbarPage />

      <Routes>

        <Route path={"/"} element={
          <>
            <SliderPage />
            <ProductListPage />
          </>
        }
        >
        </Route>
        
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/users data" element={<UsersListPage />}></Route>

      </Routes>

    </>
  );
}

export default App;
