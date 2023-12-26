import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, Sidebar } from "./components/index";
import { Home, ProductDetails } from "./pages/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="*"
            element={<div className="center">404 Page Not Found</div>}
          ></Route>
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
