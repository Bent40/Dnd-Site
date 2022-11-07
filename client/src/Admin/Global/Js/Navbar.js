import { Link } from "react-router-dom";

export default function Navbar(props) {
  return props.user !== "" ? (
    <div>
      <Link to={"/Homepage"}>
        <label>Home</label>
      </Link>
      <label onClick={props.disconnect}>disconnect</label>
    </div>
  ) : (
    ""
  );
}
