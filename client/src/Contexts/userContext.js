import { createContext } from "react";

const userContext = createContext({
  user: { username: "", role: 0 },
  setUser: (u) => {},
});
export default userContext;
