import React, { useState, useEffect } from "react";
import HomePage from "../pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookie from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Container from "react-bootstrap/esm/Container";

function App() {
  const [login, setLogin] = useState(true);
  useEffect(() => {
    // console.log(Cookie.get('login'))
    // setLogin(Cookie.get('login'));
  }, []);
  return (
    <div>
      <Router>
        {!login ? (
          <Auth />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
