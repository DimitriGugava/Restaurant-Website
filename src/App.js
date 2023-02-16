import "./App.css";
import Bottom from "./Bottom/Bottom";
import Main from "./MainComp/Main";
import { Routes, Route } from "react-router-dom";
import Book from "./BookATable/book";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
