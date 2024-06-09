import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

//Pages
import Login from "./Pages/Login/Login";
import HomePage from "./Pages/Home/Homepage";
import Navbar from "./Admin/Global/Js/Navbar";
import userContext from "./Contexts/userContext";
import Campaign from "./Pages/Campaign/Campaign";
function App() {
  const [user, setUser] = useState(
    (localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user"))) || { username: "", role: 0 }
  );

  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Router>
          <Navbar />
          <div style={{ height: "97%" }}>
            <Routes>
              {user.username === "" ? (
                <Route
                  path="/*"
                  element={<Login setUser={(username) => setUser(username)} />}
                />
              ) : (
                <>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/campaign/:_id" element={<Campaign />} />
                  <Route path="/*" element={<Navigate to="/" />} />
                </>
              )}
            </Routes>
          </div>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
