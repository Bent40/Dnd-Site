import { useContext, useState } from "react";
import userContext from "../../Contexts/userContext";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { setUser } = useContext(userContext);

  const [errlbl, setErrLbl] = useState("");

  const changeInput = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const login = async () => {
    await fetch(
      `/api/users/login?username=${inputs.username}&password=${inputs.password}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.user) {
          localStorage.setItem("user", JSON.stringify(res.user));
          setUser(res.user);
        } else setErrLbl(res.err);
      });
  };

  return (
    <div>
      <input id="username" onChange={changeInput} placeholder="Username..." />
      <input
        id="password"
        onChange={changeInput}
        type="password"
        placeholder="password..."
      />
      <button onClick={login}>Login</button>
      <label>{errlbl}</label>
    </div>
  );
}
