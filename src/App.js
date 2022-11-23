import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='' element={}/>
        <Route path='' element={}/> */}
          <Route path="/:warehouseId" element={<WarehouseDetails />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
