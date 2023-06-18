import { useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div className="container">
        <h1>React Typescript Pagination</h1>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}

export default App;
