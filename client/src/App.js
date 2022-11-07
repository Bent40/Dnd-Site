import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//Pages
import Login from "./Pages/JS/Login";
import HomePage from "./Pages/JS/Homepage";
import Navbar from "./Admin/Global/Js/Navbar";

function App() {
  const [user, setUser] = useState("" || localStorage.getItem("user"));

  const disconnect = () => {
    localStorage.setItem("user", "");
    setUser("");
  };
  return (
    <div className="App">
      <Router>
        <Navbar user={user} disconnect={disconnect} />
        <Routes>
          {user === "" ? (
            <Route
              path="/"
              element={<Login setUser={(username) => setUser(username)} />}
            />
          ) : (
            <Route path="/" element={<HomePage />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
