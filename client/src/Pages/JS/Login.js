import { useState } from "react";

export default function Login(props) {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [errlbl, setErrLbl] = useState("");

  const changeInput = (target) => {
    let tempIn = { ...inputs };
    inputs[target.id] = target.value;
    setInputs(tempIn);
  };

  const login = async () => {
    await fetch(
      `/api/users/login?username=${inputs.username}&password=${inputs.password}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.ans === "") {
          props.setUser(inputs.username);
        } else setErrLbl(res.ans);
      });
  };

  return (
    <div>
      <input
        id="username"
        onChange={(e) => {
          changeInput(e.target);
        }}
        placeholder="Username..."
      />
      <input
        id="password"
        onChange={(e) => {
          changeInput(e.target);
        }}
        type="password"
        placeholder="password..."
      />
      <button onClick={login}>Login</button>
      <label>{errlbl}</label>
    </div>
  );
}
