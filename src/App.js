import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import WarehouseList from "./components/warehouseList/WarehouseList";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app__container">
          <WarehouseList />
        </div>

        <Routes>
          {/* <Route path='' element={}/>
        <Route path='' element={}/> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
