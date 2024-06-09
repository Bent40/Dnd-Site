import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../../../Contexts/userContext";

export default function Navbar() {
  const navigator = useNavigate();
  const { user, setUser } = useContext(userContext);

  const disconnect = () => {
    localStorage.removeItem("user");
    setUser({ username: "", role: 0 });
  };

  return (
    user?.username !== "" && (
      <div
        style={{
          position: "relative",
          height: "3%",
          width: "100%",
          background: "rgba(0,0,0,0.2)",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <label
            style={{
              cursor: "pointer",
              borderLeft: "1px solid black",
              borderRight: "1px solid black",
              padding: "0 5px 0 5px",
              fontSize: "2vmin",
            }}
            onClick={() => navigator("/")}
          >
            Home
          </label>
        </div>
        <button
          style={{ position: "absolute", right: "0" }}
          onClick={disconnect}
        >
          disconnect
        </button>
      </div>
    )
  );
}
