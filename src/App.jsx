import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import EpisodesPage from "./pages/Episodes";
import WatchPage from "./pages/WatchPage";

const App = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Header
          search={search}
          setSearch={setSearch}
          page={page}
          setResults={setResults}
        />

        <Routes>
          <Route
            path="/"
            element={<HomePage results={results} page={page} />}
          />
          <Route
            path="/search/:id"
            element={<HomePage results={results} page={page} />}
          />
          <Route path="/episodes/:id/:page" element={<EpisodesPage />} />
          <Route path="/watch/:id" element={<WatchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
