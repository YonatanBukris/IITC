import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product">
        <Route index element={<ProductPage />} />
        <Route path=":productId" element={<ProductDetailsPage />} />
      </Route>  
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
    </>
  );
}

export default App;
