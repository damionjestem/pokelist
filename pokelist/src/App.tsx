import { useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 3;
  return (
    <>
      <div className="container">
        <h1>React Typescript Pagination</h1>
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default App;
