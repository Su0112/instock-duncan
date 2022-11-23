import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import InventoryList from "./components/inventory/InventoryList";
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
