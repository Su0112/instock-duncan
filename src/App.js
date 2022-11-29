import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import InventoryList from "./components/inventory/InventoryList";
import AddInventoryItem from "./components/addInventoryItem/AddInventoryItem";
import InventoryItemDetails from "./components/inventoryItemDetails/InventoryItemDetails";
import WarehouseList from "./components/warehouseList/WarehouseList";
import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";
import EditWarehouse from "./components/editWarehouse/EditWarehouse";
import EditInventoryItemDetails from "./components/editInventoryItemDetails/EditInventoryItemDetails";

import AddWarehouse from "./components/addWarehouseComponent/AddWarehouse";
import DeleteWarehouse from "./components/deleteWarehouseModal/DeleteWarehouseModal";
import Footer from "./components/footer/Footer";

import "./app.scss";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header />
          <div className="app__container">
            <Routes>
              <Route path="/" element={<WarehouseList />} />
              <Route path="/warehouses" element={<WarehouseList />}>
                <Route
                  path="deleteWarehouse/:warehouseId"
                  element={<DeleteWarehouse />}
                />
              </Route>
              <Route
                path="/warehouses/:warehouseId"
                element={<WarehouseDetails />}
              />
              <Route
                path="/warehouses/editWarehouse"
                element={<EditWarehouse />}
              />

              <Route path="/inventories" element={<InventoryList />} />
              <Route path="/addWarehouse" element={<AddWarehouse />} />
              <Route path="/inventory" element={<InventoryList />} />
              <Route path="/addInventoryItem" element={<AddInventoryItem />} />
              <Route
                path="/inventories/addInventoryItem"
                element={<AddInventoryItem />}
              />
              <Route
                path="/inventories/inventoryDetails/:inventoryId"
                element={<InventoryItemDetails />}
              />
              <Route
                path="/inventories/:inventoryId"
                element={<EditInventoryItemDetails />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
