import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Name from "./component/Name";
import Book from "./component/Book";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";

// import NoPage from "./pages/NoPage";
import "./App.css";

function App() {
  const title = "welcome to homepage";
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <h1>{title}</h1>
<Home/>
<Name/>
<Book/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact={<Home />}>
            <Route path="Book" el={<Book />} />
            <Route path="Dashboard" el={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
