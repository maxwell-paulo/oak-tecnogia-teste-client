import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListProducts, CreateProduct } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route path="/add-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
