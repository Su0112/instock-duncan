import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/header/Header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
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
