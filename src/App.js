import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import InventoryList from "./components/inventory/InventoryList";
import AddInventoryItem from "./components/addInventoryItem/AddInventoryItem";
import InventoryItemDetails from "./components/inventoryItemDetails/InventoryItemDetails";
import "./App.scss";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header />
          <div className="app__container">
            <Routes>
              <Route path="/inventory" element={<InventoryList />} />
              <Route path="/addInventoryItem" element={<AddInventoryItem />} />

              {/* add for editInventoryItem */}

              <Route
                path="/inventoryDetails"
                element={<InventoryItemDetails />}
              />

              {/* <Route path='' element={}/>
        <Route path='' element={}/> */}
            </Routes>
          </div>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
