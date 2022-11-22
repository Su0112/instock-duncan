import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={}/>
        <Route path='' element={}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
