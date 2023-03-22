import React from "react";
import "./MenuBar.css";


const MenuBar = (props) => {

  return (
    <div className="container">
      <div className="Left">
        <button>Home</button>
        <button>Profile</button>
      </div>

      <div className="Right">
        <button onClick={props.onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default MenuBar;
