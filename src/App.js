import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import InventoryList from "./components/inventory/InventoryList";
import AddInventoryItem from "./components/addInventoryItem/AddInventoryItem";
import InventoryItemDetails from "./components/inventoryItemDetails/InventoryItemDetails";
<<<<<<< HEAD

import WarehouseList from "./components/warehouseList/WarehouseList";
import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";
=======
import WarehouseList from "./components/warehouseList/WarehouseList";
>>>>>>> 240c35b (added changes to App.js)
import "./App.scss";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header />
          <div className="app__container">
            <Routes>
              <Route path="/" element={<WarehouseList />} />
              <Route path="/inventory" element={<InventoryList />} />
              <Route path="/addInventoryItem" element={<AddInventoryItem />} />
<<<<<<< HEAD
              <Route path="/:warehouseId" element={<WarehouseDetails />} />
=======
>>>>>>> 240c35b (added changes to App.js)
              {/* add for editInventoryItem */}
              <Route
                path="/inventoryDetails"
                element={<InventoryItemDetails />}
              />
            </Routes>
          </div>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
