import React, { useContext } from "react";
import "./MenuBar.css";
import LogoutContext from "../store-context/logout-context";


const MenuBar = () => {
  const ctx  = useContext(LogoutContext)

  return (
    <div className="container">
      <div className="Left">
        <button>Home</button>
        <button>Profile</button>
      </div>

      <div className="Right">
        <button onClick={ctx.onLogOut}>Logout</button>
      </div>
    </div>
  );
};

export default MenuBar;
